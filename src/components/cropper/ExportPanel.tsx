import React, { useState } from 'react';
import { Download, Copy, Check, Sparkles, FileImage, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export type ExportFormat = 'png' | 'jpeg' | 'webp';

interface ExportPanelProps {
  previewUrl: string | null;
  targetWidth: number;
  targetHeight: number;
  format: ExportFormat;
  onFormatChange: (fmt: ExportFormat) => void;
  quality: number;
  onQualityChange: (q: number) => void;
  transparentCircle: boolean;
  onTransparentCircleChange: (val: boolean) => void;
  onDownload: () => void;
  onCopyToClipboard: () => Promise<boolean>;
  labels: {
    title: string;
    format: string;
    quality: string;
    dimension: string;
    download: string;
    copy: string;
    copied: string;
    copyError: string;
    previewTitle: string;
    previewCircle: string;
    previewSquare: string;
  };
}

export const ExportPanel: React.FC<ExportPanelProps> = ({
  previewUrl,
  targetWidth,
  targetHeight,
  format,
  onFormatChange,
  quality,
  onQualityChange,
  transparentCircle,
  onTransparentCircleChange,
  onDownload,
  onCopyToClipboard,
  labels,
}) => {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = () => {
    setIsExporting(true);
    onDownload();
    
    // Confetti celebration
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#287A74', '#55A9A0', '#AEEED3', '#FFF8B0'],
      });
    } catch {
      // ignore
    }

    setTimeout(() => setIsExporting(false), 500);
  };

  const handleCopy = async () => {
    try {
      const ok = await onCopyToClipboard();
      if (ok) {
        setCopyState('copied');
        setTimeout(() => setCopyState('idle'), 2500);
      } else {
        setCopyState('error');
        setTimeout(() => setCopyState('idle'), 2500);
      }
    } catch {
      setCopyState('error');
      setTimeout(() => setCopyState('idle'), 2500);
    }
  };

  return (
    <div className="bg-white dark:bg-[#162322] border border-[#55A9A0]/25 dark:border-[#233735] rounded-2xl p-4 shadow-soft space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
          <Download className="w-4 h-4 text-deep-teal dark:text-mint-green" />
          {labels.title}
        </h3>
        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-full bg-pale-yellow text-slate-900">
          {targetWidth} × {targetHeight} px
        </span>
      </div>

      {/* Live Preview section */}
      <div>
        <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2">
          {labels.previewTitle}
        </span>
        <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-[#233735]">
          {/* Circular preview */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-deep-teal dark:border-mint-green shadow-sm bg-slate-100 dark:bg-slate-800">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Circular avatar preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300">
                  <FileImage className="w-6 h-6" />
                </div>
              )}
              {/* Online status indicator */}
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium text-center">
              Circle Mask
            </span>
          </div>

          {/* Square preview */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-[#233735] shadow-sm bg-slate-100 dark:bg-slate-800">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Square avatar preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300">
                  <FileImage className="w-6 h-6" />
                </div>
              )}
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium text-center">
              Square Frame
            </span>
          </div>
        </div>
      </div>

      {/* Format & Quality Selector */}
      <div className="space-y-3 pt-1">
        {/* Format Selector */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
            {labels.format}
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['png', 'jpeg', 'webp'] as const).map((fmt) => (
              <button
                key={fmt}
                type="button"
                onClick={() => onFormatChange(fmt)}
                className={`py-1.5 text-xs font-semibold uppercase rounded-lg border transition-all ${
                  format === fmt
                    ? 'bg-deep-teal text-white border-deep-teal shadow-sm dark:bg-deep-teal dark:text-white'
                    : 'border-slate-200 dark:border-[#233735] text-slate-600 dark:text-slate-300 hover:border-muted-teal'
                }`}
              >
                {fmt === 'jpeg' ? 'JPG' : fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Quality Slider (JPG / WebP) */}
        {format !== 'png' && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span>{labels.quality}</span>
              <span className="font-mono text-muted-teal">{Math.round(quality * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="1"
              step="0.01"
              value={quality}
              onChange={(e) => onQualityChange(parseFloat(e.target.value))}
              className="w-full accent-deep-teal dark:accent-mint-green h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>
        )}

        {/* Transparent Circular Cutout toggle for PNG */}
        {format === 'png' && (
          <label className="flex items-center gap-2 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={transparentCircle}
              onChange={(e) => onTransparentCircleChange(e.target.checked)}
              className="w-3.5 h-3.5 rounded border-slate-300 text-deep-teal focus:ring-deep-teal"
            />
            <span className="text-xs text-slate-600 dark:text-slate-300">
              Transparent background outside circle
            </span>
          </label>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#233735]">
        {/* Instant Download Button */}
        <button
          type="button"
          onClick={handleDownload}
          disabled={isExporting}
          className="w-full py-3 px-4 bg-deep-teal hover:bg-[#20635e] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 focus:ring-4 focus:ring-[#AEEED3]/50"
        >
          <Download className="w-4 h-4" />
          <span>{labels.download}</span>
        </button>

        {/* Copy to Clipboard Button */}
        <button
          type="button"
          onClick={handleCopy}
          className={`w-full py-2 px-3 text-xs font-semibold rounded-xl border transition-all flex items-center justify-center gap-1.5 ${
            copyState === 'copied'
              ? 'bg-[#AEEED3] border-[#287A74] text-slate-900'
              : copyState === 'error'
              ? 'bg-rose-50 border-rose-300 text-rose-700'
              : 'border-slate-200 dark:border-[#233735] text-slate-700 dark:text-slate-300 hover:border-muted-teal hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          {copyState === 'copied' ? (
            <>
              <Check className="w-3.5 h-3.5 text-deep-teal" />
              <span>{labels.copied}</span>
            </>
          ) : copyState === 'error' ? (
            <span>{labels.copyError}</span>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-muted-teal" />
              <span>{labels.copy}</span>
            </>
          )}
        </button>
      </div>

      {/* Privacy guarantee note */}
      <div className="flex items-center gap-1.5 text-[11px] text-muted-teal dark:text-slate-400 justify-center pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-deep-teal dark:text-mint-green flex-shrink-0" />
        <span>100% Client-Side • Zero Server Uploads</span>
      </div>
    </div>
  );
};
