import React, { useState } from 'react';
import { PLATFORM_PRESETS, type PlatformPreset } from './presetsData';
import { Lock, Unlock, Sparkles, Check, SlidersHorizontal } from 'lucide-react';

interface PlatformPresetsProps {
  selectedPresetId: string;
  customWidth: number;
  customHeight: number;
  onSelectPreset: (preset: PlatformPreset) => void;
  onCustomDimensionsChange: (width: number, height: number) => void;
  labels: {
    title: string;
    subtitle: string;
    custom: string;
    width: string;
    height: string;
    lockRatio: string;
    apply: string;
  };
}

export const PlatformPresets: React.FC<PlatformPresetsProps> = ({
  selectedPresetId,
  customWidth,
  customHeight,
  onSelectPreset,
  onCustomDimensionsChange,
  labels,
}) => {
  const [isCustomMode, setIsCustomMode] = useState(selectedPresetId === 'custom');
  const [tempWidth, setTempWidth] = useState(customWidth);
  const [tempHeight, setTempHeight] = useState(customHeight);
  const [lockRatio, setLockRatio] = useState(true);

  const handleWidthChange = (val: number) => {
    setTempWidth(val);
    if (lockRatio) {
      setTempHeight(val);
    }
  };

  const handleHeightChange = (val: number) => {
    setTempHeight(val);
    if (lockRatio) {
      setTempWidth(val);
    }
  };

  const handleApplyCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const clampedW = Math.max(32, Math.min(4096, tempWidth || 400));
    const clampedH = Math.max(32, Math.min(4096, tempHeight || 400));
    setIsCustomMode(true);
    onCustomDimensionsChange(clampedW, clampedH);
  };

  return (
    <div className="bg-white dark:bg-[#162322] border border-[#55A9A0]/25 dark:border-[#233735] rounded-2xl p-4 shadow-soft space-y-4">
      {/* Header */}
      <div>
        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-deep-teal dark:text-mint-green" />
          {labels.title}
        </h3>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          {labels.subtitle}
        </p>
      </div>

      {/* Preset Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {PLATFORM_PRESETS.map((p) => {
          const isSelected = !isCustomMode && selectedPresetId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setIsCustomMode(false);
                onSelectPreset(p);
              }}
              className={`group relative flex flex-col items-start p-2.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-[#AEEED3]/25 border-deep-teal ring-2 ring-[#AEEED3] shadow-sm'
                  : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-[#233735] hover:border-muted-teal hover:bg-white dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: p.badgeColor }}
                  />
                  {p.name}
                </span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-deep-teal dark:text-mint-green" />
                )}
              </div>
              <span className="font-mono text-[10px] text-muted-teal dark:text-slate-400 font-medium">
                {p.width} × {p.height}
              </span>
            </button>
          );
        })}
      </div>

      {/* Custom Dimension Collapsible / Mode */}
      <div className="pt-2 border-t border-slate-100 dark:border-[#233735]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-muted-teal" />
            {labels.custom}
          </span>
          <button
            type="button"
            onClick={() => setLockRatio(!lockRatio)}
            className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-deep-teal dark:text-slate-400 dark:hover:text-mint-green transition-colors"
            title="Lock 1:1 Aspect Ratio"
          >
            {lockRatio ? (
              <>
                <Lock className="w-3 h-3 text-deep-teal dark:text-mint-green" />
                <span>{labels.lockRatio}</span>
              </>
            ) : (
              <>
                <Unlock className="w-3 h-3 text-slate-400" />
                <span>Free Ratio</span>
              </>
            )}
          </button>
        </div>

        <form onSubmit={handleApplyCustom} className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 mb-1">
                {labels.width}
              </label>
              <input
                type="number"
                min="32"
                max="4096"
                value={tempWidth}
                onChange={(e) => handleWidthChange(parseInt(e.target.value, 10) || 0)}
                className="w-full px-2.5 py-1.5 text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-[#233735] rounded-lg focus:outline-none focus:ring-1 focus:ring-deep-teal focus:border-deep-teal"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 mb-1">
                {labels.height}
              </label>
              <input
                type="number"
                min="32"
                max="4096"
                value={tempHeight}
                onChange={(e) => handleHeightChange(parseInt(e.target.value, 10) || 0)}
                className="w-full px-2.5 py-1.5 text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-[#233735] rounded-lg focus:outline-none focus:ring-1 focus:ring-deep-teal focus:border-deep-teal"
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 pt-1">
            <button
              type="submit"
              className="flex-1 py-1.5 px-3 bg-slate-100 hover:bg-[#AEEED3]/40 dark:bg-slate-800 dark:hover:bg-slate-700 text-deep-teal dark:text-mint-green font-semibold text-xs rounded-lg border border-slate-200 dark:border-[#233735] transition-colors"
            >
              {labels.apply} ({tempWidth} × {tempHeight})
            </button>
            <div className="flex gap-1">
              {[256, 512, 1024].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setTempWidth(size);
                    setTempHeight(size);
                    setIsCustomMode(true);
                    onCustomDimensionsChange(size, size);
                  }}
                  className="px-2 py-1.5 text-[10px] font-mono bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-[#233735] hover:border-muted-teal"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
