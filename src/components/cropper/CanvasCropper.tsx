import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Upload, 
  Sparkles, 
  ShieldCheck,
} from 'lucide-react';
import { PLATFORM_PRESETS, type PlatformPreset } from './presetsData';
import { CropperControls } from './CropperControls';
import { PlatformPresets } from './PlatformPresets';
import { ExportPanel, type ExportFormat } from './ExportPanel';
import { SAMPLE_AVATAR_SVG } from './SampleImage';

interface CanvasCropperProps {
  initialLocale?: string;
  labels: {
    dropzoneTitle: string;
    dropzoneSubtitle: string;
    dropzonePasteHint: string;
    dropzoneFormats: string;
    dropzoneSample: string;
    changePhoto: string;
    zoom: string;
    rotate: string;
    flipH: string;
    flipV: string;
    maskCircle: string;
    maskSquare: string;
    grid: string;
    reset: string;
    center: string;
    presetsTitle: string;
    presetsSubtitle: string;
    presetsCustom: string;
    presetsWidth: string;
    presetsHeight: string;
    presetsLockRatio: string;
    presetsApply: string;
    exportTitle: string;
    exportFormat: string;
    exportQuality: string;
    exportDimension: string;
    exportEstimatedSize: string;
    exportDownload: string;
    exportCopy: string;
    exportCopied: string;
    exportCopyError: string;
    exportPreviewTitle: string;
    exportPreviewCircle: string;
    exportPreviewSquare: string;
    exportSuccess: string;
  };
}

export const CanvasCropper: React.FC<CanvasCropperProps> = ({ labels }) => {
  // Image state
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageFileName, setImageFileName] = useState<string>('profile');
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);

  // Cropper transform state
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  const [maskType, setMaskType] = useState<'circle' | 'square'>('circle');
  const [showGrid, setShowGrid] = useState<boolean>(false);

  // Platform & Export state
  const [selectedPreset, setSelectedPreset] = useState<PlatformPreset>(PLATFORM_PRESETS[0]);
  const [customDimensions, setCustomDimensions] = useState<{ width: number; height: number }>({
    width: 400,
    height: 400,
  });
  const [exportFormat, setExportFormat] = useState<ExportFormat>('png');
  const [exportQuality, setExportQuality] = useState<number>(0.92);
  const [transparentCircle, setTransparentCircle] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Canvas refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isPointerDownRef = useRef<boolean>(false);
  const lastPointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const touchDistanceRef = useRef<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load sample image by default or on click
  const loadFromDataUrl = useCallback((dataUrl: string, name: string = 'sample-avatar') => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImage(img);
      setImageSrc(dataUrl);
      setImageFileName(name.replace(/\.[^/.]+$/, ''));
      // Reset transforms
      setZoom(1);
      setPan({ x: 0, y: 0 });
      setRotation(0);
      setFlipH(false);
      setFlipV(false);
    };
    img.src = dataUrl;
  }, []);

  // Process File upload
  const processFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        loadFromDataUrl(e.target.result, file.name);
      }
    };
    reader.readAsDataURL(file);
  }, [loadFromDataUrl]);

  // Clipboard paste support
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            processFile(file);
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [processFile]);

  // Load sample on mount if no image
  useEffect(() => {
    loadFromDataUrl(SAMPLE_AVATAR_SVG, 'sample-avatar');
  }, [loadFromDataUrl]);

  // Interactive workspace canvas size
  const CANVAS_SIZE = 520;

  // Render workspace canvas
  const drawWorkspaceCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    if (canvas.width !== CANVAS_SIZE * dpr || canvas.height !== CANVAS_SIZE * dpr) {
      canvas.width = CANVAS_SIZE * dpr;
      canvas.height = CANVAS_SIZE * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    const centerX = CANVAS_SIZE / 2;
    const centerY = CANVAS_SIZE / 2;
    // Crop frame size
    const cropSize = CANVAS_SIZE * 0.76;
    const cropRadius = cropSize / 2;
    const cropX = centerX - cropRadius;
    const cropY = centerY - cropRadius;

    // 1. Draw Image with transforms
    ctx.save();
    ctx.translate(centerX + pan.x, centerY + pan.y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);

    // Calculate base fit size (cover crop frame)
    const baseScale = Math.max(cropSize / image.naturalWidth, cropSize / image.naturalHeight);
    const finalScale = baseScale * zoom;
    const drawW = image.naturalWidth * finalScale;
    const drawH = image.naturalHeight * finalScale;

    ctx.drawImage(image, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();

    // 2. Draw Darkened Overlay outside crop area
    ctx.save();
    ctx.fillStyle = 'rgba(15, 23, 22, 0.65)';
    ctx.beginPath();
    // Full canvas rectangle
    ctx.rect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    if (maskType === 'circle') {
      // Cut circular hole
      ctx.arc(centerX, centerY, cropRadius, 0, Math.PI * 2, true);
    } else {
      // Cut square hole
      ctx.rect(cropX + cropSize, cropY, -cropSize, cropSize);
    }
    ctx.fill('evenodd');
    ctx.restore();

    // 3. Draw Crop Outline
    ctx.save();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#287A74';
    ctx.shadowColor = 'rgba(174, 238, 211, 0.8)';
    ctx.shadowBlur = 6;

    if (maskType === 'circle') {
      ctx.beginPath();
      ctx.arc(centerX, centerY, cropRadius, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.strokeRect(cropX, cropY, cropSize, cropSize);
    }
    ctx.restore();

    // 4. Rule of thirds grid
    if (showGrid) {
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.setLineDash([4, 4]);

      // Clip to crop boundary
      ctx.beginPath();
      if (maskType === 'circle') {
        ctx.arc(centerX, centerY, cropRadius, 0, Math.PI * 2);
      } else {
        ctx.rect(cropX, cropY, cropSize, cropSize);
      }
      ctx.clip();

      const step = cropSize / 3;
      // Verticals
      ctx.beginPath();
      ctx.moveTo(cropX + step, cropY);
      ctx.lineTo(cropX + step, cropY + cropSize);
      ctx.moveTo(cropX + step * 2, cropY);
      ctx.lineTo(cropX + step * 2, cropY + cropSize);
      // Horizontals
      ctx.moveTo(cropX, cropY + step);
      ctx.lineTo(cropX + cropSize, cropY + step);
      ctx.moveTo(cropX, cropY + step * 2);
      ctx.lineTo(cropX + cropSize, cropY + step * 2);
      ctx.stroke();

      ctx.restore();
    }

    ctx.restore();
  }, [image, zoom, pan, rotation, flipH, flipV, maskType, showGrid]);

  // Update preview URL for live avatars in export panel
  const updateLivePreview = useCallback(() => {
    if (!image) {
      setPreviewUrl(null);
      return;
    }
    const offscreen = document.createElement('canvas');
    const PREVIEW_PX = 200;
    offscreen.width = PREVIEW_PX;
    offscreen.height = PREVIEW_PX;
    const ctx = offscreen.getContext('2d');
    if (!ctx) return;

    const cropSize = CANVAS_SIZE * 0.76;
    const scaleFactor = PREVIEW_PX / cropSize;

    ctx.save();
    ctx.translate(PREVIEW_PX / 2 + pan.x * scaleFactor, PREVIEW_PX / 2 + pan.y * scaleFactor);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);

    const baseScale = Math.max(cropSize / image.naturalWidth, cropSize / image.naturalHeight);
    const finalScale = baseScale * zoom * scaleFactor;
    const drawW = image.naturalWidth * finalScale;
    const drawH = image.naturalHeight * finalScale;

    ctx.drawImage(image, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();

    setPreviewUrl(offscreen.toDataURL('image/png'));
  }, [image, zoom, pan, rotation, flipH, flipV]);

  // Redraw when transform or image changes
  useEffect(() => {
    drawWorkspaceCanvas();
    updateLivePreview();
  }, [drawWorkspaceCanvas, updateLivePreview]);

  // Mouse / Pointer handlers for pan
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(e.pointerId);
    isPointerDownRef.current = true;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isPointerDownRef.current) return;
    const deltaX = e.clientX - lastPointerRef.current.x;
    const deltaY = e.clientY - lastPointerRef.current.y;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    setPan((prev) => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas && canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
    isPointerDownRef.current = false;
  };

  // Wheel zoom handler
  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.0015;
    setZoom((prev) => {
      const next = Math.max(0.2, Math.min(3.5, prev + delta));
      return Number(next.toFixed(2));
    });
  };

  // Touch pinch-to-zoom
  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      if (touchDistanceRef.current !== null) {
        const delta = (dist - touchDistanceRef.current) * 0.005;
        setZoom((prev) => Math.max(0.2, Math.min(3.5, Number((prev + delta).toFixed(2)))));
      }
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchEnd = () => {
    touchDistanceRef.current = null;
  };

  // Reset & Center
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setMaskType(selectedPreset.defaultMask);
  };

  const handleCenter = () => {
    setPan({ x: 0, y: 0 });
  };

  // Platform selection
  const handleSelectPreset = (preset: PlatformPreset) => {
    setSelectedPreset(preset);
    setMaskType(preset.defaultMask);
    setCustomDimensions({ width: preset.width, height: preset.height });
  };

  const handleCustomDimensionsChange = (width: number, height: number) => {
    setCustomDimensions({ width, height });
    setSelectedPreset({
      id: 'custom',
      name: 'Custom',
      width,
      height,
      aspectRatio: width / height,
      defaultMask: maskType,
      badgeColor: '#287A74',
      maxFileSize: 'N/A',
      recommendedFormats: ['PNG', 'JPG', 'WebP'],
      description: `${width} × ${height} px Custom Dimensions`,
    });
  };

  // Export to Blob generator
  const generateExportBlob = useCallback(async (): Promise<{ blob: Blob; mime: string } | null> => {
    if (!image) return null;

    const outWidth = selectedPreset.id === 'custom' ? customDimensions.width : selectedPreset.width;
    const outHeight = selectedPreset.id === 'custom' ? customDimensions.height : selectedPreset.height;

    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = outWidth;
    exportCanvas.height = outHeight;
    const ctx = exportCanvas.getContext('2d');
    if (!ctx) return null;

    // Enable high quality image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const cropSize = CANVAS_SIZE * 0.76;
    // Map cropSize -> outWidth
    const scaleFactor = outWidth / cropSize;

    // If transparent circle requested on PNG
    if (exportFormat === 'png' && transparentCircle && maskType === 'circle') {
      ctx.save();
      ctx.beginPath();
      ctx.arc(outWidth / 2, outHeight / 2, outWidth / 2, 0, Math.PI * 2);
      ctx.clip();
    }

    ctx.save();
    ctx.translate(outWidth / 2 + pan.x * scaleFactor, outHeight / 2 + pan.y * scaleFactor);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);

    const baseScale = Math.max(cropSize / image.naturalWidth, cropSize / image.naturalHeight);
    const finalScale = baseScale * zoom * scaleFactor;
    const drawW = image.naturalWidth * finalScale;
    const drawH = image.naturalHeight * finalScale;

    ctx.drawImage(image, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();

    if (exportFormat === 'png' && transparentCircle && maskType === 'circle') {
      ctx.restore();
    }

    const mime = exportFormat === 'jpeg' ? 'image/jpeg' : exportFormat === 'webp' ? 'image/webp' : 'image/png';
    const quality = exportFormat === 'png' ? undefined : exportQuality;

    return new Promise((resolve) => {
      exportCanvas.toBlob(
        (blob) => {
          if (blob) {
            resolve({ blob, mime });
          } else {
            resolve(null);
          }
        },
        mime,
        quality
      );
    });
  }, [image, selectedPreset, customDimensions, exportFormat, exportQuality, transparentCircle, maskType, pan, zoom, rotation, flipH, flipV]);

  // Instant Download Action
  const handleDownload = async () => {
    const result = await generateExportBlob();
    if (!result) return;
    const { blob } = result;

    const outWidth = selectedPreset.id === 'custom' ? customDimensions.width : selectedPreset.width;
    const outHeight = selectedPreset.id === 'custom' ? customDimensions.height : selectedPreset.height;
    const ext = exportFormat === 'jpeg' ? 'jpg' : exportFormat;
    const filename = `${imageFileName}-${selectedPreset.id}-${outWidth}x${outHeight}.${ext}`;

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  // Copy to Clipboard Action
  const handleCopyToClipboard = async (): Promise<boolean> => {
    try {
      if (!navigator.clipboard || !window.ClipboardItem) {
        return false;
      }
      // Clipboard standard mandates image/png
      const prevFormat = exportFormat;
      setExportFormat('png');
      const result = await generateExportBlob();
      setExportFormat(prevFormat);

      if (!result) return false;
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': result.blob,
        }),
      ]);
      return true;
    } catch (err) {
      console.error('Clipboard copy error:', err);
      return false;
    }
  };

  const targetWidth = selectedPreset.id === 'custom' ? customDimensions.width : selectedPreset.width;
  const targetHeight = selectedPreset.id === 'custom' ? customDimensions.height : selectedPreset.height;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Top Banner / Privacy Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-gradient-to-r from-pale-yellow/60 via-mint-green/30 to-pale-yellow/40 dark:from-[#1b2b2a] dark:to-[#162322] border border-[#AEEED3]/70 dark:border-[#233735] rounded-2xl shadow-soft">
        <div className="flex items-center gap-2.5">
          <span className="p-1.5 rounded-xl bg-deep-teal text-white shadow-sm">
            <ShieldCheck className="w-4 h-4" />
          </span>
          <div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
              <span>Zero-Server Privacy Guarantee</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">
              100% Client-Side. Your photos never leave this computer or mobile browser.
            </p>
          </div>
        </div>

        {/* Change / Upload Button in bar */}
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/webp, image/gif"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                processFile(e.target.files[0]);
              }
            }}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-deep-teal hover:bg-[#20635e] text-white text-xs font-semibold rounded-xl shadow-sm transition-all"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>{labels.changePhoto}</span>
          </button>
          <button
            type="button"
            onClick={() => loadFromDataUrl(SAMPLE_AVATAR_SVG, 'sample-avatar')}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-deep-teal dark:text-mint-green border border-slate-200 dark:border-[#233735] text-xs font-semibold rounded-xl transition-all"
            title="Reload sample avatar"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sample</span>
          </button>
        </div>
      </div>

      {/* Main 3-Column / Responsive Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Platform Presets (4 cols on lg) */}
        <div className="lg:col-span-4 order-2 lg:order-1 space-y-4">
          <PlatformPresets
            selectedPresetId={selectedPreset.id}
            customWidth={customDimensions.width}
            customHeight={customDimensions.height}
            onSelectPreset={handleSelectPreset}
            onCustomDimensionsChange={handleCustomDimensionsChange}
            labels={{
              title: labels.presetsTitle,
              subtitle: labels.presetsSubtitle,
              custom: labels.presetsCustom,
              width: labels.presetsWidth,
              height: labels.presetsHeight,
              lockRatio: labels.presetsLockRatio,
              apply: labels.presetsApply,
            }}
          />

          <CropperControls
            zoom={zoom}
            onZoomChange={setZoom}
            rotation={rotation}
            onRotationChange={setRotation}
            flipH={flipH}
            onFlipHChange={setFlipH}
            flipV={flipV}
            onFlipVChange={setFlipV}
            maskType={maskType}
            onMaskTypeChange={setMaskType}
            showGrid={showGrid}
            onShowGridChange={setShowGrid}
            onReset={handleReset}
            onCenter={handleCenter}
            labels={{
              zoom: labels.zoom,
              rotate: labels.rotate,
              flipH: labels.flipH,
              flipV: labels.flipV,
              maskCircle: labels.maskCircle,
              maskSquare: labels.maskSquare,
              grid: labels.grid,
              reset: labels.reset,
              center: labels.center,
            }}
          />
        </div>

        {/* Center Column: The Interactive Canvas Cropping Zone (5 cols on lg) */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center">
          <div
            className={`relative w-full aspect-square max-w-[520px] rounded-3xl overflow-hidden border-2 transition-all shadow-xl select-none ${
              isDraggingOver
                ? 'border-deep-teal ring-4 ring-[#AEEED3]'
                : 'border-slate-200 dark:border-[#233735] bg-slate-900'
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDraggingOver(true);
            }}
            onDragLeave={() => setIsDraggingOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDraggingOver(false);
              if (e.dataTransfer.files?.[0]) {
                processFile(e.dataTransfer.files[0]);
              }
            }}
          >
            {/* Checkerboard background */}
            <div className="absolute inset-0 checkerboard-pattern opacity-30" />

            {/* Interactive Workspace Canvas */}
            <canvas
              ref={canvasRef}
              style={{ width: '100%', height: '100%' }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onWheel={handleWheel}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onDoubleClick={handleCenter}
              className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing touch-none"
            />

            {/* Subtle Overlay Instruction Pill */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-[11px] text-white/90 flex items-center gap-1.5 shadow-lg">
              <span>Drag to Pan</span>
              <span className="text-white/40">•</span>
              <span>Scroll / Pinch to Zoom</span>
            </div>
          </div>

          {/* Quick format details */}
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedPreset.badgeColor }} />
              <strong>{selectedPreset.name}</strong> ({targetWidth} × {targetHeight} px)
            </span>
            <span>•</span>
            <span>Double-click to center</span>
          </div>
        </div>

        {/* Right Column: Export, Preview & Download (3 cols on lg) */}
        <div className="lg:col-span-3 order-3 space-y-4">
          <ExportPanel
            previewUrl={previewUrl}
            targetWidth={targetWidth}
            targetHeight={targetHeight}
            format={exportFormat}
            onFormatChange={setExportFormat}
            quality={exportQuality}
            onQualityChange={setExportQuality}
            transparentCircle={transparentCircle}
            onTransparentCircleChange={setTransparentCircle}
            onDownload={handleDownload}
            onCopyToClipboard={handleCopyToClipboard}
            labels={{
              title: labels.exportTitle,
              format: labels.exportFormat,
              quality: labels.exportQuality,
              dimension: labels.exportDimension,
              download: labels.exportDownload,
              copy: labels.exportCopy,
              copied: labels.exportCopied,
              copyError: labels.exportCopyError,
              previewTitle: labels.exportPreviewTitle,
              previewCircle: labels.exportPreviewCircle,
              previewSquare: labels.exportPreviewSquare,
            }}
          />
        </div>
      </div>
    </div>
  );
};
