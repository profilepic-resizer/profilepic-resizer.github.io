export interface PlatformPreset {
  id: string;
  name: string;
  width: number;
  height: number;
  aspectRatio: number; // width / height
  defaultMask: 'circle' | 'square';
  badgeColor: string;
  maxFileSize: string;
  recommendedFormats: string[];
  description: string;
  popular?: boolean;
}

export const PLATFORM_PRESETS: PlatformPreset[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    width: 400,
    height: 400,
    aspectRatio: 1,
    defaultMask: 'circle',
    badgeColor: '#0A66C2',
    maxFileSize: '8 MB',
    recommendedFormats: ['JPG', 'PNG'],
    description: '400 × 400 px • Official Personal Profile Avatar',
    popular: true,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    width: 320,
    height: 320,
    aspectRatio: 1,
    defaultMask: 'circle',
    badgeColor: '#E1306C',
    maxFileSize: '10 MB',
    recommendedFormats: ['JPG', 'PNG'],
    description: '320 × 320 px • Circular Profile Avatar',
    popular: true,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    width: 800,
    height: 800,
    aspectRatio: 1,
    defaultMask: 'circle',
    badgeColor: '#FF0000',
    maxFileSize: '4 MB',
    recommendedFormats: ['PNG', 'JPG'],
    description: '800 × 800 px • Channel Profile Icon (High-DPI)',
    popular: true,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    width: 200,
    height: 200,
    aspectRatio: 1,
    defaultMask: 'circle',
    badgeColor: '#000000',
    maxFileSize: '20 MB',
    recommendedFormats: ['JPG', 'PNG'],
    description: '200 × 200 px • Video Profile Avatar',
    popular: true,
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    width: 400,
    height: 400,
    aspectRatio: 1,
    defaultMask: 'circle',
    badgeColor: '#1DA1F2',
    maxFileSize: '2 MB',
    recommendedFormats: ['PNG', 'JPG'],
    description: '400 × 400 px • Standard Profile Photo',
    popular: true,
  },
  {
    id: 'discord',
    name: 'Discord',
    width: 128,
    height: 128,
    aspectRatio: 1,
    defaultMask: 'circle',
    badgeColor: '#5865F2',
    maxFileSize: '10 MB',
    recommendedFormats: ['PNG', 'JPG', 'WebP'],
    description: '128 × 128 px • Server & User Avatar',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    width: 500,
    height: 500,
    aspectRatio: 1,
    defaultMask: 'circle',
    badgeColor: '#25D366',
    maxFileSize: '5 MB',
    recommendedFormats: ['JPG', 'PNG'],
    description: '500 × 500 px • Contact Profile Photo',
  },
  {
    id: 'github',
    name: 'GitHub',
    width: 460,
    height: 460,
    aspectRatio: 1,
    defaultMask: 'circle',
    badgeColor: '#24292F',
    maxFileSize: '1 MB',
    recommendedFormats: ['PNG', 'JPG'],
    description: '460 × 460 px • Developer Profile Avatar',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    width: 170,
    height: 170,
    aspectRatio: 1,
    defaultMask: 'circle',
    badgeColor: '#1877F2',
    maxFileSize: '4 MB',
    recommendedFormats: ['PNG', 'JPG'],
    description: '170 × 170 px (Desktop) / 128px (Mobile)',
  },
];
