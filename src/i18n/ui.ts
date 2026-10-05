export const languages = {
  en: { name: 'English', flag: '🇺🇸', code: 'en' },
  es: { name: 'Español', flag: '🇪🇸', code: 'es' },
  fr: { name: 'Français', flag: '🇫🇷', code: 'fr' },
  pt: { name: 'Português', flag: '🇧🇷', code: 'pt' },
  ja: { name: '日本語', flag: '🇯🇵', code: 'ja' },
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    // Header & Meta
    'site.name': 'ProfilePic Resizer',
    'site.title': 'ProfilePic Resizer | Free Online Profile Picture Cropper',
    'site.description': 'Free, private profile picture resizer and avatar cropper for LinkedIn, Instagram, TikTok, and YouTube. 100% client-side HTML5 Canvas with zero server uploads.',
    'nav.support': 'Support Developer',
    'nav.supportShort': 'Support',
    'nav.theme': 'Toggle theme',
    'nav.lang': 'Language',
    
    // Hero
    'hero.badge': '100% Client-Side • Zero Server Uploads • 100% Private',
    'hero.h1': 'Crop, Resize & Perfect Your Profile Picture',
    'hero.h1Highlight': 'In Seconds',
    'hero.subtitle': 'Tailor-made dimensions for LinkedIn, Instagram, YouTube, TikTok, and X. Processed entirely on your device with HTML5 Canvas without data collection.',
    'hero.cta': 'Upload Photo',
    
    // Uploader & Cropper
    'cropper.dropzone.title': 'Drop your photo here',
    'cropper.dropzone.subtitle': 'or click to browse from device',
    'cropper.dropzone.pasteHint': 'Tip: You can also paste directly with Ctrl+V / ⌘V',
    'cropper.dropzone.formats': 'PNG, JPG, WebP, GIF • Up to 25MB • 100% Local',
    'cropper.dropzone.sample': 'Or try with a sample avatar',
    'cropper.changePhoto': 'Change Photo',
    'cropper.zoom': 'Zoom',
    'cropper.rotate': 'Rotate',
    'cropper.flipH': 'Flip H',
    'cropper.flipV': 'Flip V',
    'cropper.maskCircle': 'Circle Mask',
    'cropper.maskSquare': 'Square Mask',
    'cropper.grid': 'Grid',
    'cropper.reset': 'Reset',
    'cropper.center': 'Center',
    
    // Presets
    'presets.title': 'Platform Presets',
    'presets.subtitle': '1-Click verified avatar dimensions',
    'presets.custom': 'Custom Dimensions',
    'presets.width': 'Width (px)',
    'presets.height': 'Height (px)',
    'presets.lockRatio': 'Lock 1:1 Aspect',
    'presets.apply': 'Apply',
    
    // Export
    'export.title': 'Export & Download',
    'export.format': 'File Format',
    'export.quality': 'Quality',
    'export.dimension': 'Target Size:',
    'export.estimatedSize': 'Est. Size:',
    'export.download': 'Download Perfect PFP',
    'export.copy': 'Copy to Clipboard',
    'export.copied': 'Copied to clipboard!',
    'export.copyError': 'Failed to copy to clipboard',
    'export.previewTitle': 'Live Avatar Previews',
    'export.previewCircle': 'Circle (LinkedIn / Instagram / X)',
    'export.previewSquare': 'Square (Discord / Web)',
    'export.success': 'Your avatar is ready!',
    
    // Why Client Side
    'why.title': 'Why 100% Client-Side Privacy Matters',
    'why.subtitle': 'Most image tools upload your personal headshots to cloud servers. We do things differently.',
    'why.f1.title': 'Zero Server Uploads',
    'why.f1.desc': 'Your photos never leave your device. All pixel calculations, rotations, and exports are performed locally inside your browser via HTML5 Canvas.',
    'why.f2.title': 'Platform-Certified Ratios',
    'why.f2.desc': 'Pre-configured dimensions calibrated precisely for LinkedIn (400x400), Instagram (320x320), YouTube (800x800), and TikTok (200x200).',
    'why.f3.title': 'Lossless High-DPI Quality',
    'why.f3.desc': 'Sub-pixel resampling preserves crisp facial details and sharpness on Retina and 4K displays with zero compression artifacts unless desired.',
    'why.f4.title': 'Ultra-Fast & Free Forever',
    'why.f4.desc': 'No registration, no waiting queues, no cloud processing lag, no watermarks, and no advertisements. Instant results anytime.',
    
    // Platform Specs Table
    'specs.title': 'Official Social Media Profile Picture Dimensions (2026)',
    'specs.subtitle': 'Quick reference table for standard avatar resolutions and supported formats',
    'specs.platform': 'Platform',
    'specs.recSize': 'Recommended Size',
    'specs.aspect': 'Aspect Ratio',
    'specs.shape': 'Display Mask',
    'specs.maxSize': 'Max File Size',
    'specs.formats': 'Allowed Formats',
    
    // How It Works
    'how.title': 'How to Resize Your Profile Picture in 3 Simple Steps',
    'how.step1.title': '1. Upload or Paste Your Photo',
    'how.step1.desc': 'Drag & drop any JPG, PNG, or WebP photo into the workspace, click to browse, or paste directly with Ctrl+V.',
    'how.step2.title': '2. Position & Frame with Platform Presets',
    'how.step2.desc': 'Select your target social network preset (LinkedIn, Instagram, TikTok, etc.) or set custom pixels. Use zoom, rotate, and drag to frame your face.',
    'how.step3.title': '3. Download Crisp Profile Picture',
    'how.step3.desc': 'Hit "Download Perfect PFP" or copy directly to your clipboard. Your headshot is exported instantly at full resolution.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Is ProfilePic Resizer really 100% private and zero-server?',
    'faq.a1': 'Yes. We do not maintain any backend image storage or processing servers. The entire crop, resize, and file export pipeline runs strictly in your web browser using client-side HTML5 Canvas and JavaScript. Your images never touch a server.',
    'faq.q2': 'What is the best profile picture size for LinkedIn in 2026?',
    'faq.a2': 'LinkedIn recommends 400 x 400 pixels for personal profile photos, with a 1:1 aspect ratio and a maximum file size of 8MB. ProfilePic Resizer provides a 1-click LinkedIn preset with circular masking to ensure your headshot is centered perfectly.',
    'faq.q3': 'Why do profile pictures get blurry after uploading to Instagram or TikTok?',
    'faq.a3': 'Social networks compress oversized images aggressively. By pre-cropping and resizing to Instagram’s native 320x320 px or TikTok’s 200x200 px at high quality, you prevent server-side compression algorithms from degrading your photo.',
    'faq.q4': 'Should I export as PNG, JPG, or WebP?',
    'faq.a4': 'Choose PNG if you want lossless clarity or need transparent backgrounds (e.g., Discord or Slack avatars). Choose JPG (90-95% quality) for photorealistic headshots with smaller file sizes. WebP provides the best balance of quality and compactness.',
    'faq.q5': 'Can I use this tool on my smartphone or tablet?',
    'faq.a5': 'Yes! ProfilePic Resizer is fully responsive and optimized for mobile devices with touch gestures for panning, zooming, and resizing the cropping frame.',
    
    // Footer
    'footer.privacyNote': 'Built with privacy in mind. Zero analytics, zero image tracking, 100% client-side HTML5 Canvas processing.',
    'footer.supportBtn': 'Buy the developer a coffee',
    'footer.rights': 'All rights reserved. Free and open source tool for creators and professionals.',
  },
  
  es: {
    // Header & Meta
    'site.name': 'ProfilePic Resizer',
    'site.title': 'ProfilePic Resizer | Recortador de Fotos de Perfil 100% Local',
    'site.description': 'Recortador de avatares sin servidores y con privacidad absoluta. Recorta y exporta fotos de perfil para LinkedIn, Instagram, YouTube, TikTok y Discord localmente en tu navegador.',
    'nav.support': 'Apoyar al Desarrollador',
    'nav.supportShort': 'Apoyar',
    'nav.theme': 'Cambiar tema',
    'nav.lang': 'Idioma',
    
    // Hero
    'hero.badge': '100% En Tu Navegador • Cero Subidas a Servidores • Privacidad Total',
    'hero.h1': 'Recorta y Ajusta Tu Foto de Perfil',
    'hero.h1Highlight': 'En Segundos',
    'hero.subtitle': 'Dimensiones exactas para LinkedIn, Instagram, YouTube, TikTok y X. Procesamiento 100% local en tu dispositivo con HTML5 Canvas sin recopilación de datos.',
    'hero.cta': 'Subir Foto',
    
    // Uploader & Cropper
    'cropper.dropzone.title': 'Arrastra tu foto aquí',
    'cropper.dropzone.subtitle': 'o haz clic para explorar tus archivos',
    'cropper.dropzone.pasteHint': 'Consejo: Puedes pegar directamente con Ctrl+V / ⌘V',
    'cropper.dropzone.formats': 'PNG, JPG, WebP, GIF • Hasta 25MB • 100% Local',
    'cropper.dropzone.sample': 'O prueba con un avatar de muestra',
    'cropper.changePhoto': 'Cambiar Foto',
    'cropper.zoom': 'Zoom',
    'cropper.rotate': 'Girar',
    'cropper.flipH': 'Voltear H',
    'cropper.flipV': 'Voltear V',
    'cropper.maskCircle': 'Máscara Circular',
    'cropper.maskSquare': 'Máscara Cuadrada',
    'cropper.grid': 'Cuadrícula',
    'cropper.reset': 'Restablecer',
    'cropper.center': 'Centrar',
    
    // Presets
    'presets.title': 'Plantillas de Plataforma',
    'presets.subtitle': 'Dimensiones estándar en 1 clic',
    'presets.custom': 'Dimensiones Personalizadas',
    'presets.width': 'Ancho (px)',
    'presets.height': 'Alto (px)',
    'presets.lockRatio': 'Bloquear Proporción 1:1',
    'presets.apply': 'Aplicar',
    
    // Export
    'export.title': 'Exportar y Descargar',
    'export.format': 'Formato',
    'export.quality': 'Calidad',
    'export.dimension': 'Tamaño Objetivo:',
    'export.estimatedSize': 'Tamaño Est.:',
    'export.download': 'Descargar Foto Perfecta',
    'export.copy': 'Copiar al Portapapeles',
    'export.copied': '¡Copiado al portapapeles!',
    'export.copyError': 'Error al copiar al portapapeles',
    'export.previewTitle': 'Vista Previa en Vivo',
    'export.previewCircle': 'Circular (LinkedIn / Instagram / X)',
    'export.previewSquare': 'Cuadrado (Discord / Web)',
    'export.success': '¡Tu foto de perfil está lista!',
    
    // Why Client Side
    'why.title': 'Por Qué Importa la Privacidad 100% Local',
    'why.subtitle': 'La mayoría de herramientas suben tus retratos a servidores en la nube. Nosotros lo hacemos diferente.',
    'why.f1.title': 'Cero Subidas a Servidores',
    'why.f1.desc': 'Tus fotos nunca salen de tu dispositivo. Todo el cálculo de píxeles y recorte se ejecuta en tu navegador mediante HTML5 Canvas.',
    'why.f2.title': 'Medidas Oficiales de Redes',
    'why.f2.desc': 'Resoluciones calibradas para LinkedIn (400x400), Instagram (320x320), YouTube (800x800) y TikTok (200x200).',
    'why.f3.title': 'Calidad Nítida Sin Pérdidas',
    'why.f3.desc': 'El muestreo subpíxel preserva los detalles faciales y la nitidez en pantallas Retina y 4K sin artefactos de compresión indeseados.',
    'why.f4.title': 'Súper Rápido y Gratis Siempre',
    'why.f4.desc': 'Sin registros, sin colas de espera, sin marcas de agua y sin publicidad invasiva. Resultados inmediatos.',
    
    // Platform Specs Table
    'specs.title': 'Dimensiones Oficiales para Fotos de Perfil (2026)',
    'specs.subtitle': 'Tabla de referencia rápida para resoluciones y formatos permitidos',
    'specs.platform': 'Plataforma',
    'specs.recSize': 'Tamaño Recomendado',
    'specs.aspect': 'Proporción',
    'specs.shape': 'Máscara',
    'specs.maxSize': 'Peso Máximo',
    'specs.formats': 'Formatos Permitidos',
    
    // How It Works
    'how.title': 'Cómo Redimensionar Tu Foto de Perfil en 3 Pasos',
    'how.step1.title': '1. Sube o Pega Tu Foto',
    'how.step1.desc': 'Arrastra cualquier imagen JPG, PNG o WebP, haz clic para buscarla o pégala con Ctrl+V.',
    'how.step2.title': '2. Encuadra con las Plantillas',
    'how.step2.desc': 'Elige tu red social favorita (LinkedIn, Instagram, TikTok) o ajusta los píxeles a tu gusto con zoom y rotación.',
    'how.step3.title': '3. Descarga Tu Foto Nítida',
    'how.step3.desc': 'Haz clic en "Descargar Foto Perfecta" o cópiala al portapapeles para subirla directamente.',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿ProfilePic Resizer es realmente 100% privado y sin servidores?',
    'faq.a1': 'Sí. No tenemos ningún servidor de procesamiento ni almacenamiento de imágenes. Todo el procesamiento se realiza en tu navegador web.',
    'faq.q2': '¿Cuál es el tamaño ideal para una foto de perfil en LinkedIn?',
    'faq.a2': 'LinkedIn recomienda 400 x 400 píxeles con una relación de aspecto 1:1. Nuestra plantilla preconfigurada asegura un encuadre circular perfecto.',
    'faq.q3': '¿Por qué se ven borrosas las fotos al subirlas a Instagram o TikTok?',
    'faq.a3': 'Las redes sociales comprimen drásticamente las imágenes muy grandes. Al ajustarlas previamente a la resolución nativa evitas la pérdida de calidad.',
    'faq.q4': '¿Debería exportar en PNG, JPG o WebP?',
    'faq.a4': 'Elige PNG para máxima nitidez o fondos transparentes. JPG es ideal para retratos fotográficos livianos y WebP combina lo mejor de ambos.',
    'faq.q5': '¿Funciona en teléfonos móviles o tabletas?',
    'faq.a5': '¡Sí! ProfilePic Resizer está completamente optimizado para pantallas táctiles con soporte para gestos táctiles de arrastre y zoom.',
    
    // Footer
    'footer.privacyNote': 'Creado con privacidad como prioridad. Cero analíticas, cero rastreo, 100% procesamiento local en HTML5 Canvas.',
    'footer.supportBtn': 'Invita un café al desarrollador',
    'footer.rights': 'Todos los derechos reservados. Herramienta libre y de código abierto para creadores y profesionales.',
  },

  fr: {
    // Header & Meta
    'site.name': 'ProfilePic Resizer',
    'site.title': 'ProfilePic Resizer | Recadrez Votre Photo de Profil 100% Localement',
    'site.description': 'Outil de redimensionnement de photo de profil axé sur la confidentialité et sans serveur. Recadrez et exportez vos avatars pour LinkedIn, Instagram, YouTube, TikTok et Discord directement dans votre navigateur.',
    'nav.support': 'Soutenir le Développeur',
    'nav.supportShort': 'Soutenir',
    'nav.theme': 'Changer le thème',
    'nav.lang': 'Langue',
    
    // Hero
    'hero.badge': '100% Côté Client • Zéro Téléchargement Serveur • Confidentialité Totale',
    'hero.h1': 'Recadrez et Perfectionnez Votre Photo de Profil',
    'hero.h1Highlight': 'En Quelques Secondes',
    'hero.subtitle': 'Dimensions sur mesure pour LinkedIn, Instagram, YouTube, TikTok et X. Traitement intégralement local sur votre appareil via HTML5 Canvas.',
    'hero.cta': 'Importer une Photo',
    
    // Uploader & Cropper
    'cropper.dropzone.title': 'Glissez-déposez votre photo ici',
    'cropper.dropzone.subtitle': 'ou cliquez pour parcourir vos fichiers',
    'cropper.dropzone.pasteHint': 'Astuce : Collez directement avec Ctrl+V / ⌘V',
    'cropper.dropzone.formats': 'PNG, JPG, WebP, GIF • Jusqu’à 25 Mo • 100% Local',
    'cropper.dropzone.sample': 'Ou essayez avec un avatar exemple',
    'cropper.changePhoto': 'Changer de Photo',
    'cropper.zoom': 'Zoom',
    'cropper.rotate': 'Pivoter',
    'cropper.flipH': 'Miroir H',
    'cropper.flipV': 'Miroir V',
    'cropper.maskCircle': 'Masque Circulaire',
    'cropper.maskSquare': 'Masque Carré',
    'cropper.grid': 'Grille',
    'cropper.reset': 'Réinitialiser',
    'cropper.center': 'Centrer',
    
    // Presets
    'presets.title': 'Préréglages Réseaux',
    'presets.subtitle': 'Dimensions vérifiées en 1 clic',
    'presets.custom': 'Dimensions Personnalisées',
    'presets.width': 'Largeur (px)',
    'presets.height': 'Hauteur (px)',
    'presets.lockRatio': 'Verrouiller Ratio 1:1',
    'presets.apply': 'Appliquer',
    
    // Export
    'export.title': 'Exporter & Télécharger',
    'export.format': 'Format',
    'export.quality': 'Qualité',
    'export.dimension': 'Résolution Cible :',
    'export.estimatedSize': 'Taille Est. :',
    'export.download': 'Télécharger la Photo Parfaite',
    'export.copy': 'Copier dans le Presse-papiers',
    'export.copied': 'Copié dans le presse-papiers !',
    'export.copyError': 'Échec de la copie',
    'export.previewTitle': 'Aperçu en Direct',
    'export.previewCircle': 'Rond (LinkedIn / Instagram / X)',
    'export.previewSquare': 'Carré (Discord / Web)',
    'export.success': 'Votre avatar est prêt !',
    
    // Why Client Side
    'why.title': 'Pourquoi la Confidentialité 100% Locale Compte',
    'why.subtitle': 'La majorité des services en ligne envoient vos photos sur des serveurs distants. Nous refusons cette approche.',
    'why.f1.title': 'Zéro Envoi vers un Serveur',
    'why.f1.desc': 'Vos photos ne quittent jamais votre ordinateur ou téléphone. Tout est calculé dans votre navigateur avec HTML5 Canvas.',
    'why.f2.title': 'Formats Précis Réseaux Sociaux',
    'why.f2.desc': 'Dimensions configurées pour LinkedIn (400x400), Instagram (320x320), YouTube (800x800) et TikTok (200x200).',
    'why.f3.title': 'Haute Résolution Haute Précision',
    'why.f3.desc': 'Rendu sous-pixel pour une clarté optimale sur écrans Retina et 4K, sans artefacts de recompression indésirables.',
    'why.f4.title': 'Instantané et Gratuit à Vie',
    'why.f4.desc': 'Sans compte, sans file d’attente, sans filigrane et sans publicité intrusive. Toujours accessible et rapide.',
    
    // Platform Specs Table
    'specs.title': 'Dimensions Officielles des Photos de Profil (2026)',
    'specs.subtitle': 'Guide récapitulatif des dimensions recommandées et des formats acceptés',
    'specs.platform': 'Plateforme',
    'specs.recSize': 'Taille Recommandée',
    'specs.aspect': 'Proportion',
    'specs.shape': 'Forme d’Affichage',
    'specs.maxSize': 'Poids Max',
    'specs.formats': 'Formats Autorisés',
    
    // How It Works
    'how.title': 'Comment Redimensionner Votre Photo en 3 Étapes',
    'how.step1.title': '1. Importez ou Collez Votre Photo',
    'how.step1.desc': 'Glissez-déposez votre image, choisissez un fichier ou appuyez simplement sur Ctrl+V.',
    'how.step2.title': '2. Ajustez le Cadrage selon le Réseau',
    'how.step2.desc': 'Sélectionnez le préréglage adapté (LinkedIn, Instagram, TikTok) et ajustez le zoom et l’angle.',
    'how.step3.title': '3. Téléchargez Votre Avatar Prêt',
    'how.step3.desc': 'Cliquez sur "Télécharger la Photo Parfaite" ou copiez-la directement dans le presse-papiers.',
    
    // FAQ
    'faq.title': 'Foire Aux Questions',
    'faq.q1': 'ProfilePic Resizer est-il vraiment 100% privé et sans serveur ?',
    'faq.a1': 'Oui, absolument. Nous ne possédons aucun serveur de traitement ou de stockage d’images. Tout est exécuté directement par votre navigateur.',
    'faq.q2': 'Quelle est la dimension idéale pour une photo LinkedIn ?',
    'faq.a2': 'LinkedIn conseille une image carrée de 400 x 400 pixels (ratio 1:1). Notre outil applique un masque circulaire pour prévisualiser le rendu exact.',
    'faq.q3': 'Pourquoi ma photo devient-elle floue après importation sur Instagram ?',
    'faq.a3': 'Instagram compresse fortement les images trop grandes. Le fait de redimensionner préalablement à la taille native (320x320 px) préserve la netteté.',
    'faq.q4': 'Faut-il choisir PNG, JPG ou WebP ?',
    'faq.a4': 'Le format PNG est parfait pour une netteté maximale et la transparence. JPG est léger pour les portraits, et WebP offre un excellent compromis.',
    'faq.q5': 'L’outil fonctionne-t-il sur mobile et tablette ?',
    'faq.a5': 'Oui, le recadreur est totalement adapté aux écrans tactiles avec prise en charge du zoom et du déplacement tactile.',
    
    // Footer
    'footer.privacyNote': 'Conçu avec le respect de la vie privée. Aucune analyse, aucun suivi, traitement 100% local avec HTML5 Canvas.',
    'footer.supportBtn': 'Offrir un café au développeur',
    'footer.rights': 'Tous droits réservés. Outil libre et gratuit pour les créateurs et professionnels.',
  },

  pt: {
    // Header & Meta
    'site.name': 'ProfilePic Resizer',
    'site.title': 'ProfilePic Resizer | Cortador de Foto de Perfil 100% Local',
    'site.description': 'Cortador de fotos de perfil com privacidade absoluta e sem servidores. Corte e exporte avatares para LinkedIn, Instagram, YouTube, TikTok e Discord direto no navegador.',
    'nav.support': 'Apoiar o Desenvolvedor',
    'nav.supportShort': 'Apoiar',
    'nav.theme': 'Alternar tema',
    'nav.lang': 'Idioma',
    
    // Hero
    'hero.badge': '100% No Navegador • Zero Uploads para Servidores • Privacidade Real',
    'hero.h1': 'Corte, Redimensione e Aperfeiçoe Sua Foto de Perfil',
    'hero.h1Highlight': 'Em Segundos',
    'hero.subtitle': 'Dimensões sob medida para LinkedIn, Instagram, YouTube, TikTok e X. Processamento local via HTML5 Canvas sem coleta de dados.',
    'hero.cta': 'Enviar Foto',
    
    // Uploader & Cropper
    'cropper.dropzone.title': 'Arraste sua foto aqui',
    'cropper.dropzone.subtitle': 'ou clique para navegar pelos arquivos',
    'cropper.dropzone.pasteHint': 'Dica: Você também pode colar com Ctrl+V / ⌘V',
    'cropper.dropzone.formats': 'PNG, JPG, WebP, GIF • Até 25MB • 100% Local',
    'cropper.dropzone.sample': 'Ou teste com um avatar de exemplo',
    'cropper.changePhoto': 'Trocar Foto',
    'cropper.zoom': 'Zoom',
    'cropper.rotate': 'Girar',
    'cropper.flipH': 'Espelhar H',
    'cropper.flipV': 'Espelhar V',
    'cropper.maskCircle': 'Máscara Circular',
    'cropper.maskSquare': 'Máscara Quadrada',
    'cropper.grid': 'Grade',
    'cropper.reset': 'Redefinir',
    'cropper.center': 'Centralizar',
    
    // Presets
    'presets.title': 'Predefinições de Redes',
    'presets.subtitle': 'Tamanhos oficiais em 1 clique',
    'presets.custom': 'Dimensões Personalizadas',
    'presets.width': 'Largura (px)',
    'presets.height': 'Altura (px)',
    'presets.lockRatio': 'Bloquear Proporção 1:1',
    'presets.apply': 'Aplicar',
    
    // Export
    'export.title': 'Exportar e Baixar',
    'export.format': 'Formato',
    'export.quality': 'Qualidade',
    'export.dimension': 'Tamanho Final:',
    'export.estimatedSize': 'Tam. Estimado:',
    'export.download': 'Baixar Foto de Perfil Perfeita',
    'export.copy': 'Copiar para Área de Transferência',
    'export.copied': 'Copiado para a área de transferência!',
    'export.copyError': 'Falha ao copiar imagem',
    'export.previewTitle': 'Pré-visualização em Tempo Real',
    'export.previewCircle': 'Circular (LinkedIn / Instagram / X)',
    'export.previewSquare': 'Quadrado (Discord / Web)',
    'export.success': 'Sua foto de perfil está pronta!',
    
    // Why Client Side
    'why.title': 'Por Que a Privacidade 100% Local Faz Diferença',
    'why.subtitle': 'A maioria dos sites envia suas fotos para servidores remotos. Nós mantemos tudo no seu dispositivo.',
    'why.f1.title': 'Zero Envio para Servidores',
    'why.f1.desc': 'Suas imagens nunca saem do seu computador ou smartphone. Todo o recorte e processamento ocorre no navegador com HTML5 Canvas.',
    'why.f2.title': 'Medidas Oficiais Atualizadas',
    'why.f2.desc': 'Modelos calibrados para LinkedIn (400x400), Instagram (320x320), YouTube (800x800) e TikTok (200x200).',
    'why.f3.title': 'Qualidade Nítida em Alta Resolução',
    'why.f3.desc': 'A renderização subpixel preserva a nitidez facial em telas Retina e 4K, sem perdas de qualidade indesejadas.',
    'why.f4.title': 'Instantâneo e 100% Gratuito',
    'why.f4.desc': 'Sem cadastro, sem filas de espera, sem marcas d’água e sem anúncios invasivos. Uso livre e ilimitado.',
    
    // Platform Specs Table
    'specs.title': 'Dimensões Oficiais para Fotos de Perfil (2026)',
    'specs.subtitle': 'Tabela de consulta rápida com medidas recomendadas e formatos suportados',
    'specs.platform': 'Rede Social',
    'specs.recSize': 'Tamanho Recomendado',
    'specs.aspect': 'Proporção',
    'specs.shape': 'Máscara',
    'specs.maxSize': 'Tamanho Máx.',
    'specs.formats': 'Formatos Permitidos',
    
    // How It Works
    'how.title': 'Como Redimensionar Sua Foto em 3 Passos Simples',
    'how.step1.title': '1. Envie ou Cole Sua Foto',
    'how.step1.desc': 'Arraste sua imagem JPG, PNG ou WebP, clique para selecionar ou simplesmente cole com Ctrl+V.',
    'how.step2.title': '2. Ajuste o Enquadramento na Rede Desejada',
    'how.step2.desc': 'Escolha a predefinição (LinkedIn, Instagram, TikTok) e faça ajustes de zoom e rotação.',
    'how.step3.title': '3. Baixe a Foto com Qualidade Máxima',
    'how.step3.desc': 'Clique em "Baixar Foto de Perfil Perfeita" ou copie diretamente para colar onde quiser.',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.q1': 'O ProfilePic Resizer é realmente 100% privado e sem servidores?',
    'faq.a1': 'Sim, com certeza. Não possuímos nenhum servidor que receba ou guarde suas fotos. Todo o corte e exportação ocorrem localmente no seu navegador.',
    'faq.q2': 'Qual o tamanho ideal para foto de perfil no LinkedIn?',
    'faq.a2': 'O LinkedIn recomenda 400 x 400 pixels (proporção 1:1). Nossa ferramenta oferece um recorte circular com pré-visualização em tempo real.',
    'faq.q3': 'Por que fotos de perfil ficam borradas no Instagram ou TikTok?',
    'faq.a3': 'As redes sociais comprimem fotos gigantescas. Ao ajustar previamente para 320x320 px (Instagram) ou 200x200 px (TikTok), você mantém a foto nítida.',
    'faq.q4': 'Qual formato escolher: PNG, JPG ou WebP?',
    'faq.a4': 'PNG é ideal para nitidez máxima e fundos transparentes. JPG é ótimo para fotos leves, e WebP une compressão moderna com alta fidelidade.',
    'faq.q5': 'Funciona no celular ou tablet?',
    'faq.a5': 'Sim! O ProfilePic Resizer é 100% responsivo e suporta gestos de toque para arrastar e aplicar zoom com facilidade.',
    
    // Footer
    'footer.privacyNote': 'Criado com foco em privacidade. Sem rastreadores, sem envio de imagens, processamento 100% local com HTML5 Canvas.',
    'footer.supportBtn': 'Comprar um café para o desenvolvedor',
    'footer.rights': 'Todos os direitos reservados. Utilitário gratuito e aberto para criadores e profissionais.',
  },

  ja: {
    // Header & Meta
    'site.name': 'ProfilePic Resizer',
    'site.title': 'ProfilePic Resizer | 完全ブラウザ完結型アイコン・プロフィール画像リサイズ',
    'site.description': 'サーバー送信ゼロ・プライバシー完全保護のプロフィール画像切り抜きツール。LinkedIn、Instagram、YouTube、TikTok、X、Discord用のアイコンをブラウザ内で瞬時に作成・保存。',
    'nav.support': '開発者をサポート',
    'nav.supportShort': '応援',
    'nav.theme': 'テーマ切り替え',
    'nav.lang': '言語',
    
    // Hero
    'hero.badge': '完全ブラウザ内処理 • サーバー送信ゼロ • プライバシー保護',
    'hero.h1': 'プロフィール画像を瞬時にトリミング＆最適化',
    'hero.h1Highlight': '数秒で完成',
    'hero.subtitle': 'LinkedIn、Instagram、YouTube、TikTok、X専用の公式推奨サイズに対応。HTML5 Canvasにより画像データは端末外へ一切送信されません。',
    'hero.cta': '写真をアップロード',
    
    // Uploader & Cropper
    'cropper.dropzone.title': 'ここに写真をドラッグ＆ドロップ',
    'cropper.dropzone.subtitle': 'またはクリックしてファイルを選択',
    'cropper.dropzone.pasteHint': 'ヒント: Ctrl+V / ⌘V でクリップボードから直接貼り付け可能',
    'cropper.dropzone.formats': 'PNG, JPG, WebP, GIF • 最大25MB • 完全ローカル処理',
    'cropper.dropzone.sample': 'サンプルアバターを試す',
    'cropper.changePhoto': '写真を変更',
    'cropper.zoom': '拡大・縮小',
    'cropper.rotate': '回転',
    'cropper.flipH': '左右反転',
    'cropper.flipV': '上下反転',
    'cropper.maskCircle': '円形マスク',
    'cropper.maskSquare': '正方形マスク',
    'cropper.grid': 'グリッド線',
    'cropper.reset': 'リセット',
    'cropper.center': '中央揃え',
    
    // Presets
    'presets.title': 'SNS別プリセット',
    'presets.subtitle': '1クリックで公式推奨サイズに設定',
    'presets.custom': 'カスタムサイズ設定',
    'presets.width': '幅 (px)',
    'presets.height': '高さ (px)',
    'presets.lockRatio': '1:1比率固定',
    'presets.apply': '適用',
    
    // Export
    'export.title': '書き出し＆保存',
    'export.format': '保存形式',
    'export.quality': '品質',
    'export.dimension': '出力解像度:',
    'export.estimatedSize': '推定容量:',
    'export.download': '完璧なアイコンをダウンロード',
    'export.copy': 'クリップボードにコピー',
    'export.copied': 'クリップボードにコピーしました！',
    'export.copyError': 'コピーに失敗しました',
    'export.previewTitle': 'リアルタイムプレビュー',
    'export.previewCircle': '円形表示 (LinkedIn / Instagram / X)',
    'export.previewSquare': '正方形表示 (Discord / Web)',
    'export.success': 'アイコン画像の準備が整いました！',
    
    // Why Client Side
    'why.title': 'なぜ完全ブラウザ完結（ゼロサーバー）なのか？',
    'why.subtitle': '多くの画像変換ツールはユーザーの顔写真をクラウドサーバーにアップロードしています。当ツールは一切送信しません。',
    'why.f1.title': 'サーバー送信は一切なし',
    'why.f1.desc': '写真が端末から外部に出ることはありません。すべてのトリミング・拡大縮小・書き出しはHTML5 Canvasでローカル実行されます。',
    'why.f2.title': '主要SNSの公式サイズに完全対応',
    'why.f2.desc': 'LinkedIn (400x400)、Instagram (320x320)、YouTube (800x800)、TikTok (200x200) などにワンクリックで最適化。',
    'why.f3.title': '高精細Retinaディスプレイ対応',
    'why.f3.desc': 'サブピクセル描画により、Retinaや4Kモニターでも顔の輪郭や表情がぼやけず、最高画質を維持します。',
    'why.f4.title': '完全無料＆無制限',
    'why.f4.desc': '会員登録不要、待ち時間なし、透かしロゴ（ウォーターマーク）なし、広告なしでいつでも自由に使えます。',
    
    // Platform Specs Table
    'specs.title': '主要SNSプロフィール画像 推奨サイズ一覧 (2026年最新)',
    'specs.subtitle': '各プラットフォームの推奨ピクセルサイズと対応ファイル形式の早見表',
    'specs.platform': 'プラットフォーム',
    'specs.recSize': '推奨サイズ',
    'specs.aspect': 'アスペクト比',
    'specs.shape': '表示枠',
    'specs.maxSize': '最大容量',
    'specs.formats': '対応フォーマット',
    
    // How It Works
    'how.title': '3ステップで簡単リサイズ',
    'how.step1.title': '1. 写真をアップロードまたは貼り付け',
    'how.step1.desc': 'ドラッグ＆ドロップ、クリックでのファイル選択、またはCtrl+Vでクリップボードから貼り付けます。',
    'how.step2.title': '2. SNSプリセットを選んで位置調整',
    'how.step2.desc': '投稿先（LinkedIn、Instagram等）を選び、ズームや回転を使ってベストな表情にフレーミングします。',
    'how.step3.title': '3. 高画質ダウンロード',
    'how.step3.desc': '「完璧なアイコンをダウンロード」を押すか、直接クリップボードにコピーして各SNSに設定します。',
    
    // FAQ
    'faq.title': 'よくあるご質問 (FAQ)',
    'faq.q1': 'アップロードした写真はサーバーに保存されますか？',
    'faq.a1': 'いいえ、一切保存されません。すべての画像処理はお使いのブラウザ内（HTML5 Canvas）でローカルに完了し、外部サーバーへの通信は発生しません。',
    'faq.q2': 'LinkedInのプロフィール写真に最適なサイズは何ですか？',
    'faq.a2': 'LinkedIn公式推奨は400 x 400ピクセル（正方形1:1）です。丸型アイコンとして表示されるため、顔が中央に収まるプリセットを用意しています。',
    'faq.q3': 'InstagramやTikTokに投稿するとアイコンがぼやけるのはなぜですか？',
    'faq.a3': 'サイズが大きすぎる画像をアップロードするとSNS側の自動圧縮で画質が劣化します。あらかじめ推奨サイズに整えておくことで綺麗に表示されます。',
    'faq.q4': 'PNG、JPG、WebPのどれを選ぶべきですか？',
    'faq.a4': '最高画質や背景透過が必要な場合はPNG、ファイルサイズを抑えたい一般的な顔写真はJPG、両者の利点を併せ持つWebPがおすすめです。',
    'faq.q5': 'スマートフォンやタブレットでも使えますか？',
    'faq.a5': 'はい！スマートフォンやタブレットのタッチ操作（ピンチズームやドラッグ）に完全対応しています。',
    
    // Footer
    'footer.privacyNote': 'プライバシー最優先設計。アクセス解析なし、トラッキングなし、HTML5 Canvasによる完全ローカル画像処理。',
    'footer.supportBtn': '開発者にコーヒーをおごる',
    'footer.rights': 'All rights reserved. クリエイターとビジネスパーソンのための無料オープンソースツール。',
  },
} as const;
