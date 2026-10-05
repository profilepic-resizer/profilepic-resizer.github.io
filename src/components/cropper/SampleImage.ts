// An attractive, SVG-based high-resolution sample avatar data URL
export const SAMPLE_AVATAR_SVG = `data:image/svg+xml;utf8,` + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#287A74"/>
      <stop offset="50%" stop-color="#55A9A0"/>
      <stop offset="100%" stop-color="#AEEED3"/>
    </linearGradient>
    <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFD1B3"/>
      <stop offset="100%" stop-color="#F2BA99"/>
    </linearGradient>
    <linearGradient id="hair" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2C3437"/>
      <stop offset="100%" stop-color="#1A2022"/>
    </linearGradient>
    <linearGradient id="suit" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="800" fill="url(#bg)"/>
  <circle cx="400" cy="400" r="340" fill="#FFF8B0" opacity="0.25"/>

  <!-- Body / Suit -->
  <path d="M 230 680 C 230 560 300 520 400 520 C 500 520 570 560 570 680 L 620 800 L 180 800 Z" fill="url(#suit)"/>
  <!-- Shirt collar -->
  <path d="M 360 520 L 400 590 L 440 520 Z" fill="#FFFFFF"/>
  <path d="M 390 530 L 400 640 L 410 530 Z" fill="#287A74"/>

  <!-- Neck -->
  <rect x="370" y="440" width="60" height="90" rx="10" fill="url(#skin)"/>
  
  <!-- Head & Ears -->
  <ellipse cx="320" cy="360" rx="16" ry="24" fill="url(#skin)"/>
  <ellipse cx="480" cy="360" rx="16" ry="24" fill="url(#skin)"/>
  <ellipse cx="400" cy="350" rx="90" ry="115" fill="url(#skin)"/>

  <!-- Hair Back/Top -->
  <path d="M 300 340 C 300 240 340 220 400 220 C 460 220 500 240 500 340 C 480 270 450 250 400 250 C 350 250 320 270 300 340 Z" fill="url(#hair)"/>

  <!-- Eyes -->
  <ellipse cx="365" cy="345" rx="9" ry="11" fill="#1E293B"/>
  <ellipse cx="435" cy="345" rx="9" ry="11" fill="#1E293B"/>
  <circle cx="367" cy="342" r="3" fill="#FFFFFF"/>
  <circle cx="437" cy="342" r="3" fill="#FFFFFF"/>

  <!-- Eyebrows -->
  <path d="M 350 325 Q 365 320 380 325" stroke="#1E293B" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M 420 325 Q 435 320 450 325" stroke="#1E293B" stroke-width="4" stroke-linecap="round" fill="none"/>

  <!-- Nose -->
  <path d="M 396 345 L 396 375 Q 400 380 406 377" stroke="#DCA283" stroke-width="4" stroke-linecap="round" fill="none"/>

  <!-- Smile -->
  <path d="M 375 400 Q 400 420 425 400" stroke="#B86D5A" stroke-width="5" stroke-linecap="round" fill="none"/>
  
  <!-- Modern Stylish Glasses -->
  <rect x="340" y="330" width="50" height="34" rx="8" fill="none" stroke="#287A74" stroke-width="4"/>
  <rect x="410" y="330" width="50" height="34" rx="8" fill="none" stroke="#287A74" stroke-width="4"/>
  <line x1="390" y1="344" x2="410" y2="344" stroke="#287A74" stroke-width="4"/>
</svg>
`);
