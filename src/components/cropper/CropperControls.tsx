import React from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  RotateCcw, 
  FlipHorizontal, 
  FlipVertical, 
  Circle, 
  Square, 
  Grid, 
  RefreshCw,
  Move
} from 'lucide-react';

interface CropperControlsProps {
  zoom: number;
  onZoomChange: (val: number) => void;
  rotation: number;
  onRotationChange: (val: number) => void;
  flipH: boolean;
  onFlipHChange: (val: boolean) => void;
  flipV: boolean;
  onFlipVChange: (val: boolean) => void;
  maskType: 'circle' | 'square';
  onMaskTypeChange: (val: 'circle' | 'square') => void;
  showGrid: boolean;
  onShowGridChange: (val: boolean) => void;
  onReset: () => void;
  onCenter: () => void;
  labels: {
    zoom: string;
    rotate: string;
    flipH: string;
    flipV: string;
    maskCircle: string;
    maskSquare: string;
    grid: string;
    reset: string;
    center: string;
  };
}

export const CropperControls: React.FC<CropperControlsProps> = ({
  zoom,
  onZoomChange,
  rotation,
  onRotationChange,
  flipH,
  onFlipHChange,
  flipV,
  onFlipVChange,
  maskType,
  onMaskTypeChange,
  showGrid,
  onShowGridChange,
  onReset,
  onCenter,
  labels,
}) => {
  const handleRotateStep = (delta: number) => {
    const next = (rotation + delta + 360) % 360;
    onRotationChange(next);
  };

  return (
    <div className="bg-white dark:bg-[#162322] border border-[#55A9A0]/25 dark:border-[#233735] rounded-2xl p-4 shadow-soft space-y-4">
      {/* Zoom Control */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200">
          <span className="flex items-center gap-1.5 text-deep-teal dark:text-mint-green">
            <ZoomIn className="w-3.5 h-3.5" />
            {labels.zoom}
          </span>
          <span className="font-mono text-[11px] text-muted-teal dark:text-slate-400">
            {Math.round(zoom * 100)}%
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onZoomChange(Math.max(0.2, Number((zoom - 0.1).toFixed(2))))}
            className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-deep-teal dark:hover:text-mint-green hover:bg-[#AEEED3]/20 rounded-lg transition-colors"
            title="Zoom out"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <input
            type="range"
            min="0.2"
            max="3.5"
            step="0.02"
            value={zoom}
            onChange={(e) => onZoomChange(parseFloat(e.target.value))}
            className="w-full accent-deep-teal dark:accent-mint-green h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
            aria-label={labels.zoom}
          />
          <button
            type="button"
            onClick={() => onZoomChange(Math.min(3.5, Number((zoom + 0.1).toFixed(2))))}
            className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-deep-teal dark:hover:text-mint-green hover:bg-[#AEEED3]/20 rounded-lg transition-colors"
            title="Zoom in"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Rotation Control */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200">
          <span className="flex items-center gap-1.5 text-deep-teal dark:text-mint-green">
            <RotateCw className="w-3.5 h-3.5" />
            {labels.rotate}
          </span>
          <span className="font-mono text-[11px] text-muted-teal dark:text-slate-400">
            {Math.round(rotation)}°
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleRotateStep(-90)}
            className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-deep-teal dark:hover:text-mint-green hover:bg-[#AEEED3]/20 rounded-lg transition-colors"
            title="-90°"
            aria-label="Rotate 90 degrees counter-clockwise"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={rotation}
            onChange={(e) => onRotationChange(parseInt(e.target.value, 10))}
            className="w-full accent-deep-teal dark:accent-mint-green h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
            aria-label={labels.rotate}
          />
          <button
            type="button"
            onClick={() => handleRotateStep(90)}
            className="p-1.5 text-slate-600 dark:text-slate-300 hover:text-deep-teal dark:hover:text-mint-green hover:bg-[#AEEED3]/20 rounded-lg transition-colors"
            title="+90°"
            aria-label="Rotate 90 degrees clockwise"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 border-t border-slate-100 dark:border-[#233735]">
        {/* Flip Horizontal */}
        <button
          type="button"
          onClick={() => onFlipHChange(!flipH)}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-xl border transition-all ${
            flipH
              ? 'bg-[#AEEED3] border-[#287A74] text-slate-900 font-semibold'
              : 'border-slate-200 dark:border-[#233735] text-slate-600 dark:text-slate-300 hover:border-muted-teal hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
          title="Flip horizontally"
        >
          <FlipHorizontal className="w-3.5 h-3.5" />
          <span>{labels.flipH}</span>
        </button>

        {/* Flip Vertical */}
        <button
          type="button"
          onClick={() => onFlipVChange(!flipV)}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-xl border transition-all ${
            flipV
              ? 'bg-[#AEEED3] border-[#287A74] text-slate-900 font-semibold'
              : 'border-slate-200 dark:border-[#233735] text-slate-600 dark:text-slate-300 hover:border-muted-teal hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
          title="Flip vertically"
        >
          <FlipVertical className="w-3.5 h-3.5" />
          <span>{labels.flipV}</span>
        </button>

        {/* Mask Toggle */}
        <button
          type="button"
          onClick={() => onMaskTypeChange(maskType === 'circle' ? 'square' : 'circle')}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-xl border transition-all ${
            maskType === 'circle'
              ? 'bg-pale-yellow text-deep-teal border-[#287A74]/40 font-semibold'
              : 'border-slate-200 dark:border-[#233735] text-slate-600 dark:text-slate-300 hover:border-muted-teal hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
          title="Toggle Circle or Square Mask"
        >
          {maskType === 'circle' ? <Circle className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
          <span>{maskType === 'circle' ? labels.maskCircle : labels.maskSquare}</span>
        </button>

        {/* Grid Overlay Toggle */}
        <button
          type="button"
          onClick={() => onShowGridChange(!showGrid)}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-xl border transition-all ${
            showGrid
              ? 'bg-[#AEEED3]/40 border-deep-teal text-deep-teal font-semibold'
              : 'border-slate-200 dark:border-[#233735] text-slate-600 dark:text-slate-300 hover:border-muted-teal hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
          title="Toggle Rule of Thirds Grid"
        >
          <Grid className="w-3.5 h-3.5" />
          <span>{labels.grid}</span>
        </button>
      </div>

      {/* Center & Reset Buttons */}
      <div className="flex items-center justify-between pt-1 text-xs">
        <button
          type="button"
          onClick={onCenter}
          className="flex items-center gap-1 text-slate-500 hover:text-deep-teal dark:text-slate-400 dark:hover:text-mint-green transition-colors px-2 py-1 rounded"
        >
          <Move className="w-3.5 h-3.5" />
          <span>{labels.center}</span>
        </button>
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition-colors px-2 py-1 rounded"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>{labels.reset}</span>
        </button>
      </div>
    </div>
  );
};
