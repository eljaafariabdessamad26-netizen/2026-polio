import { Category, Project, ExperienceItem, EducationItem, SkillItem, SoftwareTool } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'logo-design',
    number: '01',
    titleEn: 'LOGO DESIGN',
    titleFr: 'LOGO DESIGN',
    descEn: 'Visual identities, symbols and memorable marks.',
    descFr: 'Identités visuelles, symboles et logos mémorables.',
    taglineEn: 'Geometry, semiotics and timeless marks',
    taglineFr: 'Géométrie, sémiotique et marques intemporelles',
    iconName: 'Compass',
    projectCount: 4,
    highlightStat: '40+ Marks'
  },
  {
    id: 'social-media',
    number: '02',
    titleEn: 'SOCIAL MEDIA',
    titleFr: 'SOCIAL MEDIA',
    descEn: 'High-impact visual narratives and digital campaigns.',
    descFr: 'Récits visuels percutants et campagnes numériques.',
    taglineEn: 'Engagement through rhythm and contrast',
    taglineFr: 'Engagement par le rythme et le contraste',
    iconName: 'Share2',
    projectCount: 3,
    highlightStat: '1.2M Reach'
  },
  {
    id: 'branding',
    number: '03',
    titleEn: 'BRANDING',
    titleFr: 'BRANDING',
    descEn: 'Comprehensive brand ecosystems and visual guidelines.',
    descFr: 'Écosystèmes de marque complets et chartes graphiques.',
    taglineEn: 'Holistic design systems and brand books',
    taglineFr: 'Systèmes de design holistiques et brand books',
    iconName: 'Layers',
    projectCount: 4,
    highlightStat: '18 Systems'
  },
  {
    id: 'infographics',
    number: '04',
    titleEn: 'INFOGRAPHICS',
    titleFr: 'INFOGRAPHIE',
    descEn: 'Synthesized complex data into intuitive visual architectures.',
    descFr: 'Données complexes synthétisées en architectures visuelles intuitives.',
    taglineEn: 'Cognitive clarity through data visualization',
    taglineFr: 'Clarté cognitive par la visualisation de données',
    iconName: 'BarChart3',
    projectCount: 5,
    highlightStat: '99.4% Clarity'
  },
  {
    id: 'posters',
    number: '05',
    titleEn: 'POSTERS',
    titleFr: 'AFFICHES',
    descEn: 'Large-scale typographic prints and cultural manifestos.',
    descFr: 'Tirages typographiques grand format et manifestes culturels.',
    taglineEn: 'Expressive hierarchy and bold scale',
    taglineFr: 'Hiérarchie expressive et échelle audacieuse',
    iconName: 'Maximize2',
    projectCount: 3,
    highlightStat: '24 Editions'
  },
  {
    id: 'print-design',
    number: '06',
    titleEn: 'PRINT DESIGN',
    titleFr: 'DESIGN IMPRIMÉ',
    descEn: 'Tangible tactile stationery, packaging and luxury papercraft.',
    descFr: 'Papeterie tactile, packaging et finitions d’exception.',
    taglineEn: 'Foil stamping, embossing and texture',
    taglineFr: 'Dorure à chaud, gaufrage et textures',
    iconName: 'FileText',
    projectCount: 3,
    highlightStat: '300+ GSM'
  },
  {
    id: 'editorial-design',
    number: '07',
    titleEn: 'EDITORIAL DESIGN',
    titleFr: 'DESIGN ÉDITORIAL',
    descEn: 'Annual reports, monographs, books and curated magazines.',
    descFr: 'Rapports annuels, monographies, livres et revues.',
    taglineEn: 'Grid systems, micro-typography and layout harmony',
    taglineFr: 'Grilles modulaires, micro-typographie et harmonie',
    iconName: 'BookOpen',
    projectCount: 4,
    highlightStat: '280 Pages'
  },
  {
    id: 'ui-digital',
    number: '08',
    titleEn: 'UI / DIGITAL',
    titleFr: 'UI / DIGITAL',
    descEn: 'Design systems, dashboards and data-dense interactive web interfaces.',
    descFr: 'Design systems, tableaux de bord et interfaces web denses.',
    taglineEn: 'Precision micro-interactions and atomic layouts',
    taglineFr: 'Micro-interactions de précision et agencements atomiques',
    iconName: 'LayoutGrid',
    projectCount: 3,
    highlightStat: 'Pixel Perfect'
  },
  {
    id: 'presentations',
    number: '09',
    titleEn: 'PRESENTATIONS',
    titleFr: 'PRÉSENTATIONS',
    descEn: 'Keynotes, pitch decks and executive data narratives.',
    descFr: 'Keynotes, pitch decks et narrations visuelles exécutives.',
    taglineEn: 'Storytelling engineered to convince and inspire',
    taglineFr: 'Storytelling conçu pour convaincre et inspirer',
    iconName: 'MonitorPlay',
    projectCount: 3,
    highlightStat: '€14M Raised'
  },
  {
    id: 'motion-design',
    number: '10',
    titleEn: 'MOTION DESIGN',
    titleFr: 'MOTION DESIGN',
    descEn: 'Animated data loops, kinetic typography and kinetic identity.',
    descFr: 'Boucles de données animées, typographie cinétique et identité en mouvement.',
    taglineEn: 'Choreographed time-based visual communication',
    taglineFr: 'Communication visuelle chorégraphiée dans le temps',
    iconName: 'Film',
    projectCount: 3,
    highlightStat: '60 FPS'
  }
];

export const PROJECTS: Project[] = [
  // 01 LOGO DESIGN
  {
    id: 'kassir-architects',
    categoryId: 'logo-design',
    title: 'Kassir & Associés',
    year: '2026',
    typeEn: 'Architectural Monogram & Geometric Identity',
    typeFr: 'Monogramme architectural & identité géométrique',
    summaryEn: 'A minimalist monogram constructed upon an isometric 30-degree matrix, reflecting tectonic precision and brutalist heritage.',
    summaryFr: 'Un monogramme minimaliste construit sur une matrice isométrique à 30 degrés, reflétant la précision tectonique et l’héritage brutaliste.',
    client: 'Kassir Architecture Studio (Casablanca / Paris)',
    roleEn: 'Lead Identity Designer & Typographer',
    roleFr: 'Designer d’identité principal & typographe',
    tools: ['Adobe Illustrator', 'Glyphs 3', 'Cinema 4D'],
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Develop an enduring mark for an avant-garde architectural firm merging North African geometric patterns with European rationalism.',
    briefFr: 'Concevoir une marque intemporelle pour un cabinet d’architecture avant-gardiste mêlant géométrie nord-africaine et rationalisme européen.',
    conceptEn: 'We derived the mark from the intersection of structural load-bearing beams and the golden ratio spiral, creating a monogram that breathes with spatial volume.',
    conceptFr: 'Le symbole découle de l’intersection des poutres porteuses et de la spirale du nombre d’or, instaurant un monogramme qui respire le volume spatial.',
    processEn: 'Iterated through 60+ hand sketches exploring line weights, spatial voids, and high-contrast optical corrections to guarantee legibility at 8px as well as 8 meters.',
    processFr: 'Plus de 60 esquisses manuelles ont exploré les graisses de trait, les pleins et déliés, et les corrections optiques pour garantir une lisibilité parfaite de 8px à 8 mètres.',
    resultEn: 'A landmark corporate emblem deployed across high-end signage, blueprints, blind-debossed stationeries, and digital platforms.',
    resultFr: 'Un emblème remarquable déployé sur la signalétique haut de gamme, les plans d’architecte, les papeteries gaufrées et le site web.',
    infographicMetrics: [
      { labelEn: 'Optical Grid Ratio', labelFr: 'Ratio de grille optique', value: '1 : 1.618' },
      { labelEn: 'Angle Incline', labelFr: 'Inclinaison des axes', value: '30.0°' },
      { labelEn: 'Minimum Reduction', labelFr: 'Réduction minimale', value: '12 mm' }
    ]
  },
  {
    id: 'oryx-quantum',
    categoryId: 'logo-design',
    title: 'Oryx Quantum Labs',
    year: '2025',
    typeEn: 'DeepTech Identity & Semiotic Mark',
    typeFr: 'Identité DeepTech & marque sémiotique',
    summaryEn: 'A fluid algorithmic symbol representing wave-particle duality and high-frequency cryptographic signals.',
    summaryFr: 'Un symbole algorithmique fluide illustrant la dualité onde-corpuscule et les signaux cryptographiques haute fréquence.',
    client: 'Oryx Technologies',
    roleEn: 'Art Direction & Generative Mark',
    roleFr: 'Direction artistique & marque générative',
    tools: ['Processing', 'Illustrator', 'Figma'],
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Create a distinctive insignia for a quantum computing research laboratory based between Dubai and Geneva.',
    briefFr: 'Créer un insigne distinctif pour un laboratoire de recherche en informatique quantique situé entre Dubaï et Genève.',
    conceptEn: 'A Möbius-strip inspired manifold calculated through mathematical functions, balancing high-tech intelligence with human organic curvature.',
    conceptFr: 'Une variété inspirée du ruban de Möbius calculée par fonctions mathématiques, conciliant intelligence technologique et courbure organique.',
    processEn: 'Parametric vector scripts generated over 200 variations before selecting the single most balanced harmonic node.',
    processFr: 'Des scripts vectoriels paramétriques ont généré plus de 200 déclinaisons avant d’isoler le nœud harmonique le plus équilibré.',
    resultEn: 'Adopted worldwide by scientists and investors as an iconic hallmark of European quantum innovation.',
    resultFr: 'Adopté internationalement par les scientifiques et investisseurs comme signature de l’innovation quantique.',
    infographicMetrics: [
      { labelEn: 'Formula Curves', labelFr: 'Courbes de fonction', value: 'Bezier 4°' },
      { labelEn: 'Contrast Ratio', labelFr: 'Ratio de contraste', value: '14.8 : 1' }
    ]
  },

  // 04 INFOGRAPHICS (Crucial hero category!)
  {
    id: 'global-hydrology-atlas',
    categoryId: 'infographics',
    title: 'Hydrosphere 2030: The Water Geopolitics Atlas',
    year: '2026',
    typeEn: 'Comprehensive Data Cartography & Analytical Poster',
    typeFr: 'Cartographie de données complexe & affiche analytique',
    summaryEn: 'An exhaustive statistical synthesis visualizing 40 years of transboundary river basin depletion across 14 arid eco-regions.',
    summaryFr: 'Une synthèse statistique exhaustive visualisant 40 ans d’épuisement des bassins fluviaux transfrontaliers à travers 14 éco-régions arides.',
    client: 'Mediterranean Water Institute / UNESCO NGO Partner',
    roleEn: 'Data Visualizer & Infographic Architect',
    roleFr: 'Visualiseur de données & architecte de l’information',
    tools: ['QGIS', 'D3.js', 'Adobe Illustrator', 'R Studio'],
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Transform raw multi-gigabyte satellite telemetry and demographic datasets into an intelligible, beautiful editorial atlas for policymakers and the public.',
    briefFr: 'Transformer des gigaoctets de télémétrie satellitaire et de données démographiques en un atlas éditorial intelligible et percutant pour décideurs et citoyens.',
    conceptEn: 'Combining radial Sankey flow diagrams with topographic choropleth mapping, using the dark burgundy to warm cream spectrum to communicate thermal stress and scarcity.',
    conceptFr: 'Associer des diagrammes de Sankey radiaux à une cartographie choroplèthe topographique, en utilisant le nuancier bordeaux/crème pour signifier le stress hydrique.',
    processEn: 'Data cleaning in R, spatial projection in QGIS, and hand-tuned typographic hierarchy in Illustrator with custom micro-legends and precision coordinate axes.',
    processFr: 'Nettoyage des séries de données sur R, projection cartographique sous QGIS, puis hiérarchie typographique ciselée dans Illustrator avec légendes micro-détaillées.',
    resultEn: 'Featured at international climate conventions; praised by ministers for cutting comprehension time by 78%.',
    resultFr: 'Présenté lors des sommets climatiques internationaux ; salué par les experts pour une réduction de 78% du temps d’assimilation des données.',
    infographicMetrics: [
      { labelEn: 'Data Points Mapped', labelFr: 'Points de données tracés', value: '420,000+' },
      { labelEn: 'Reading Comprehension Lift', labelFr: 'Gain de compréhension', value: '+78%' },
      { labelEn: 'Color Scarcity Scale', labelFr: 'Échelle chromatique', value: '5 Tones' }
    ]
  },
  {
    id: 'moroccan-energy-transition',
    categoryId: 'infographics',
    title: 'Solar & Wind Megawatts: Morocco 2026',
    year: '2026',
    typeEn: 'Infographic Dashboard & Strategic Foldout',
    typeFr: 'Tableau de bord infographique & dépliant stratégique',
    summaryEn: 'An intricate technical breakdown of the Noor Ouarzazate thermal solar complex and green hydrogen production corridors.',
    summaryFr: 'Une décomposition technique du complexe solaire Noor Ouarzazate et des corridors d’hydrogène vert au Maroc.',
    client: 'Renewable Energy Council (MASEN)',
    roleEn: 'Lead Infographic Designer',
    roleFr: 'Designer infographiste principal',
    tools: ['Adobe Illustrator', 'Figma', 'Tableau'],
    coverImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Illustrate the thermodynamic cycle of parabolic mirrors and salt-storage facilities alongside national energy grid balancing curves.',
    briefFr: 'Illustrer le cycle thermodynamique des miroirs paraboliques et du stockage par sels fondus, en parallèle de l’équilibrage du réseau électrique national.',
    conceptEn: 'Exploded isometric cutaway diagrams cross-referenced with chronological production curves and regional interconnection nodes.',
    conceptFr: 'Vues isométriques éclatées en écorché reliées à des courbes chronologiques de production et aux nœuds d’interconnexion régionaux.',
    processEn: 'Collaborated with electrical engineers to formulate accurate schematic representations without sacrificing artistic refinement and editorial rhythm.',
    processFr: 'Immersion avec les ingénieurs pour garantir l’exactitude des schémas sans jamais sacrifier le raffinement artistique et le rythme éditorial.',
    resultEn: 'Distributed as the flagship briefing document during the 2026 Euro-African Energy Forum in Tangier.',
    resultFr: 'Diffusé comme document de référence lors du Forum Énergétique Euro-Africain 2026 à Tanger.',
    infographicMetrics: [
      { labelEn: 'Capacity Visualized', labelFr: 'Capacité visualisée', value: '5,800 MW' },
      { labelEn: 'Diagrammatic Layers', labelFr: 'Calques schématiques', value: '12 Calques' }
    ]
  },
  {
    id: 'ai-chips-microarchitecture',
    categoryId: 'infographics',
    title: 'Silicon Synapses: Inside the 2nm Tensor Die',
    year: '2025',
    typeEn: 'Semiconductor Micro-Infographic',
    typeFr: 'Micro-infographie des semi-conducteurs',
    summaryEn: 'A nano-scale architectural blueprint explaining transformer matrix multiplications within next-generation neural accelerators.',
    summaryFr: 'Un plan nanométrique détaillant les multiplications matricielles des transformeurs au cœur des accélérateurs neuronaux 2nm.',
    client: 'Semiconductor Review Monthly',
    roleEn: 'Technical Illustrator & Art Director',
    roleFr: 'Illustrateur technique & directeur artistique',
    tools: ['Adobe Illustrator', 'Rhino 3D', 'Photoshop'],
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Demystify High Bandwidth Memory (HBM3e) interconnects and floating-point computation paths for senior tech leadership.',
    briefFr: 'Démystifier les interconnexions HBM3e et les chemins de calcul en virgule flottante pour les dirigeants du secteur technologique.',
    conceptEn: 'Micro-circuit blueprints rendered in deep burgundy copper-foil tones atop subtle sage gridlines, evocative of precision lithography.',
    conceptFr: 'Tracés de micro-circuits déclinés en tons cuivre/bordeaux sombre sur quadrillage sauge subtil, rappelant la lithographie de pointe.',
    processEn: 'Extracted raw hardware schematics and synthesized 14 modular functional blocks into a unified cognitive narrative.',
    processFr: 'Extraction des schémas d’architecture bruts et réagencement en 14 blocs modulaires pour un récit cognitif fluide.',
    resultEn: 'Won the 2025 European Information Design Silver Medal for Technological Clarification.',
    resultFr: 'Médaille d’argent 2025 de l’European Information Design pour la clarification technologique.',
    infographicMetrics: [
      { labelEn: 'Transistor Scale', labelFr: 'Échelle gravure', value: '2 nm' },
      { labelEn: 'Throughput', labelFr: 'Débit modélisé', value: '3.2 TB/s' }
    ]
  },

  // 03 BRANDING
  {
    id: 'maison-tazi',
    categoryId: 'branding',
    title: 'Maison Tazi — Haute Maroquinerie',
    year: '2026',
    typeEn: 'Luxury Heritage Rebranding & Brand Guidelines',
    typeFr: 'Rebranding luxe d’héritage & guide de style',
    summaryEn: 'An artisanal luxury leather house founded in Fez in 1932, revitalized through bespoke serif typography and warm cream tactile papercraft.',
    summaryFr: 'Maison de maroquinerie d’art fondée à Fès en 1932, revitalisée à travers une typographie avec empattements sur-mesure et des papiers texturés crème.',
    client: 'Maison Tazi International',
    roleEn: 'Complete Brand Identity & Art Direction',
    roleFr: 'Identité de marque complète & direction artistique',
    tools: ['InDesign', 'Illustrator', 'Lightroom'],
    coverImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Reframe a historic leather dynasty for high-net-worth connoisseurs in Paris, Milan, and New York while celebrating handcrafted mastery.',
    briefFr: 'Repositionner une dynastie de maroquiniers pour une clientèle cosmopolite à Paris, Milan et New York tout en sublimant le geste artisanal.',
    conceptEn: 'Honoring the subtle stitching lines and brass stamps with a color system of deep burgundy, sage thread, and warm raw vellum.',
    conceptFr: 'Célébrer le point sellier et les poinçons laiton avec une palette bordeaux profond, fil de lin sauge et vélin crème naturel.',
    processEn: 'Created a 160-page hardcover Brand Bible documenting typographic rules, packaging proportions, blind-embossing depths, and store architecture.',
    processFr: 'Rédaction d’un Brand Book relié de 160 pages dictant les règles de composition, calibres de packaging, gaufrage et scénographie de boutique.',
    resultEn: 'Helped the brand expand into 8 international flagships with a 42% surge in average customer transaction value.',
    resultFr: 'Accompagnement de l’ouverture de 8 flagships avec une hausse de 42% du panier moyen.',
    infographicMetrics: [
      { labelEn: 'Brand Bible Pages', labelFr: 'Pages du Brand Book', value: '160 pp' },
      { labelEn: 'Packaging SKUs', labelFr: 'Références packaging', value: '45 SKUs' }
    ]
  },

  // 07 EDITORIAL DESIGN
  {
    id: 'chronicles-of-architecture',
    categoryId: 'editorial-design',
    title: 'Atlas du Modernisme Méditerranéen',
    year: '2026',
    typeEn: 'Editorial Book Design & Typography Grid',
    typeFr: 'Édition d’art & système de grille typographique',
    summaryEn: 'A 340-page cloth-bound monograph detailing mid-century modernist concrete villas from Casablanca to Beirut.',
    summaryFr: 'Une monographie de 340 pages reliée toile retraçant les villas modernistes en béton de Casablanca à Beyrouth.',
    client: 'Éditions d’Art & du Patrimoine',
    roleEn: 'Editorial Director & Book Typographer',
    roleFr: 'Directeur éditorial & typographe d’édition',
    tools: ['Adobe InDesign', 'Glyphs', 'Photoshop'],
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Format extensive architectural plans, archival black-and-white photography, and academic essays into an exquisite collector’s volume.',
    briefFr: 'Mettre en page plans d’architecte d’époque, photographies argentiques et essais théoriques dans un volume de collection d’exception.',
    conceptEn: 'An asymmetric 12-column Swiss typographic grid combined with wide margin annotations and gold foil blocked spine.',
    conceptFr: 'Une grille suisse asymétrique à 12 colonnes, de généreuses marges de notes critiques et un fer à dorer bordeaux en tranche.',
    processEn: 'Calibrated every line-height and baseline snap, manually balancing over 800 pull-quotes, footnotes, and photo captions.',
    processFr: 'Calibrage au quart de point de chaque interligne et alignement sur la grille de base pour plus de 800 légendes et citations.',
    resultEn: 'Awarded the Grand Prix du Livre d’Art 2026; first print run of 5,000 copies sold out in six weeks.',
    resultFr: 'Lauréat du Grand Prix du Livre d’Art 2026 ; premier tirage de 5 000 exemplaires épuisé en six semaines.',
    infographicMetrics: [
      { labelEn: 'Volume Extent', labelFr: 'Pagination totale', value: '340 Pages' },
      { labelEn: 'Grid Columns', labelFr: 'Colonnes de grille', value: '12 Columns' }
    ]
  },

  // 05 POSTERS
  {
    id: 'typographic-biennale-marrakech',
    categoryId: 'posters',
    title: 'Biennale de la Typographie & de l’Image',
    year: '2025',
    typeEn: 'Exhibition Poster Series & Screenprints',
    typeFr: 'Série d’affiches d’exposition & sérigraphies',
    summaryEn: 'A high-contrast visual manifesto juxtaposing deconstructed Kufic and Latin typography on heavy 320gsm Fedrigoni paper.',
    summaryFr: 'Un manifeste visuel percutant confrontant typographies coufiques déstructurées et caractères latins sur papier Fedrigoni 320g.',
    client: 'Fondation des Arts Visuels de Marrakech',
    roleEn: 'Poster Artist & Typographic Choreographer',
    roleFr: 'Artiste affichiste & chorégraphe typographique',
    tools: ['Screenprint', 'Illustrator', 'Hand Inking'],
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Design a bold, non-conformist poster series celebrating the dialogue between Arabic calligraphic traditions and contemporary European type design.',
    briefFr: 'Concevoir une série d’affiches provocantes et sublimes célébrant le dialogue entre calligraphie arabe et typographie contemporaine.',
    conceptEn: 'Controlled tension between immense letterforms and microscopically precise metadata labels, printed in two passes: deep burgundy and metallic sage.',
    conceptFr: 'Tension maîtrisée entre lettres monumentales et métadonnées micro-typographiques, imprimées en deux passages : bordeaux profond et sauge métallisé.',
    processEn: 'Hand-pulled test prints in a traditional studio to refine ink opacity and micro-texture before full silkscreen production.',
    processFr: 'Tirages d’essai manuels en atelier pour calibrer l’opacité de l’encre et la texture avant la sérigraphie finale.',
    resultEn: 'Acquired for the permanent graphic design collection of the Musée des Arts Décoratifs.',
    resultFr: 'Acquis pour le fonds permanent de design graphique du Musée des Arts Décoratifs.',
    infographicMetrics: [
      { labelEn: 'Print Run', labelFr: 'Tirage limité', value: '250 Ex.' },
      { labelEn: 'Screen Passes', labelFr: 'Passes sérigraphiques', value: '3 Couleurs' }
    ]
  },

  // 08 UI / DIGITAL
  {
    id: 'clarity-data-os',
    categoryId: 'ui-digital',
    title: 'Clarity Data OS — Executive Observatory',
    year: '2026',
    typeEn: 'Financial Observatory UI & Design System',
    typeFr: 'Observatoire financier UI & design system',
    summaryEn: 'An ultra-dense, low-latency financial dashboard created for quantitative asset managers tracking macroeconomic indicators.',
    summaryFr: 'Un tableau de bord financier haute densité et basse latence conçu pour les gestionnaires d’actifs quantitatifs.',
    client: 'Sovereign Alpha Capital',
    roleEn: 'Principal Product Designer & Information Architect',
    roleFr: 'Lead designer produit & architecte de l’information',
    tools: ['Figma', 'React', 'Tailwind', 'Canvas 2D'],
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Reduce cognitive fatigue in traders monitoring up to 30 continuous real-time market metrics by reforming information architecture and typography.',
    briefFr: 'Réduire la fatigue cognitive des analystes surveillant jusqu’à 30 flux de marché en réinventant l’architecture d’affichage et la hiérarchie.',
    conceptEn: 'Monochrome warm cream and burgundy contrast states that eliminate eye strain while spotlighting statistically significant volatility.',
    conceptFr: 'Nuances crème et bordeaux qui éliminent la fatigue oculaire tout en mettant en lumière les anomalies statistiques.',
    processEn: 'Conducted eye-tracking experiments to refine spatial hierarchy, keyboard shortcuts, and chart aspect ratios.',
    processFr: 'Expérimentations par oculométrie (eye-tracking) pour optimiser les temps de fixation et les ratios visuels des graphiques.',
    resultEn: 'Time to pinpoint portfolio risk factors reduced from 4.2 minutes to 18 seconds.',
    resultFr: 'Temps de détection des facteurs de risque réduit de 4,2 minutes à 18 secondes.',
    infographicMetrics: [
      { labelEn: 'Decision Velocity', labelFr: 'Gain de réactivité', value: '14x Faster' },
      { labelEn: 'Figma Components', labelFr: 'Composants du DS', value: '380 Atoms' }
    ]
  },

  // 06 PRINT DESIGN
  {
    id: 'fevrier-perfumes',
    categoryId: 'print-design',
    title: 'Parfums d’Ocre — Tactile Packaging',
    year: '2025',
    typeEn: 'Luxury Niche Fragrance Packaging & Emboss',
    typeFr: 'Packaging de parfumerie de niche & gaufrage',
    summaryEn: 'Sensory boxes crafted from dyed cotton pulp paper, hot-stamped with burgundy copper foils and blind-embossed topographic contour maps.',
    summaryFr: 'Coffrets sensoriels en papier de coton teinté dans la masse, marqués à chaud d’un cuivre bordeaux et gaufrés de courbes topographiques.',
    client: 'Maison Parfums d’Ocre (Grasse / Marrakech)',
    roleEn: 'Packaging Engineer & Graphic Stylist',
    roleFr: 'Ingénieur packaging & styliste graphique',
    tools: ['CAD Packaging', 'Illustrator', '3D Staging'],
    coverImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Invent an unboxing ritual evoking the red clay hills and cedar forests of the Atlas mountains through touch and sight.',
    briefFr: 'Imaginer un rituel d’unboxing rappelant la terre d’ocre et les forêts de cèdres de l’Atlas par le toucher et la vue.',
    conceptEn: 'Folded origami structures without glue, where opening the outer slipcase reveals an unfolding map of fragrance notes.',
    conceptFr: 'Structure pliée sans colle inspirée de l’origami, dont l’ouverture déploie la cartographie poétique des notes olfactives.',
    processEn: 'Prototyped 18 die-cut blanks with Italian paper mill artisans to achieve crisp corner folds that do not crack with age.',
    processFr: 'Prototypage de 18 formes de découpe avec des artisans papetiers pour des arêtes nettes qui résistent dans le temps.',
    resultEn: 'Shortlisted for the Pentawards Luxury Design Category 2025.',
    resultFr: 'Finaliste des prestigieux Pentawards 2025 dans la catégorie Luxury Packaging.',
    infographicMetrics: [
      { labelEn: 'Paper Weight', labelFr: 'Grammage papier', value: '450 gsm' },
      { labelEn: 'Zero Plastic', labelFr: 'Recyclabilité', value: '100% Bio' }
    ]
  },

  // 09 PRESENTATIONS
  {
    id: 'terranova-climate-deck',
    categoryId: 'presentations',
    title: 'TerraNova — Series B Climate Capital Pitch Deck',
    year: '2026',
    typeEn: 'Strategic Keynote & Investor Infographics',
    typeFr: 'Keynote stratégique & infographies investisseurs',
    summaryEn: 'A cinematic 36-slide narrative detailing industrial carbon-capture thermodynamics and unit economics.',
    summaryFr: 'Une présentation cinématographique de 36 diapositives vulgarisant la thermodynamique de capture carbone et les unit economics.',
    client: 'TerraNova Decarb Technologies',
    roleEn: 'Executive Presentation Architect',
    roleFr: 'Architecte de présentations exécutives',
    tools: ['Keynote', 'Illustrator', 'After Effects'],
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Transform dry technical engineering whitepapers into an electrifying pitch that captivates tier-one Silicon Valley and London venture partners.',
    briefFr: 'Transformer des livres blancs d’ingénierie austères en un récit captivant pour les plus grands fonds de la Silicon Valley et de Londres.',
    conceptEn: 'One idea per slide, reinforced by razor-sharp infographic charts showing exponential scale-up curves rather than bulleted lists.',
    conceptFr: 'Une seule idée forte par slide, appuyée par des diagrammes infographiques percutants plutôt que de fades listes à puces.',
    processEn: 'Coached the founders on speaker delivery while adjusting typography cadence and animation cues down to the tenth of a second.',
    processFr: 'Coaching des fondateurs sur le rythme oratoire synchronisé avec des transitions au dixième de seconde.',
    resultEn: 'Secured an oversubscribed $28M Series B round led by European decarbonization funds.',
    resultFr: 'Levée de fonds Série B bouclée à 28M$ sursouscrite auprès de fonds européens majeurs.',
    infographicMetrics: [
      { labelEn: 'Capital Secured', labelFr: 'Montant levé', value: '$28 Million' },
      { labelEn: 'Slide Deck Length', labelFr: 'Diapositives', value: '36 Slides' }
    ]
  },

  // 10 MOTION DESIGN
  {
    id: 'kinetic-typography-manifesto',
    categoryId: 'motion-design',
    title: 'The Semiotics of Space: Kinetic Manifesto',
    year: '2026',
    typeEn: 'Algorithmic Motion Typography & Sound Sync',
    typeFr: 'Typographie cinétique algorithmique & synchronisation son',
    summaryEn: 'A hypnotic 90-second audiovisual exploration of spatial typography, data waves, and structural tension.',
    summaryFr: 'Une exploration audiovisuelle hypnotique de 90 secondes sur la typographie spatiale, les ondes de données et la tension structurelle.',
    client: 'Design Biennial & Cultural Channel',
    roleEn: 'Motion Director & Sound Designer',
    roleFr: 'Réalisateur motion & designer sonore',
    tools: ['Adobe After Effects', 'Cinema 4D', 'Ableton Live'],
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Create a conceptual opening title sequence exploring how letters occupy architectural space in the digital era.',
    briefFr: 'Réaliser un générique conceptuel explorant la façon dont la lettre habite l’espace architectural à l’ère numérique.',
    conceptEn: 'Letters fragment along mathematical vectors in deep burgundy, reforming according to sonic transients.',
    conceptFr: 'Les glyphes se fragmentent selon des vecteurs mathématiques bordeaux avant de se recomposer sur les impulsions sonores.',
    processEn: 'Programmed custom expression rigs in After Effects driving bezier curve displacement using MIDI velocity triggers.',
    processFr: 'Programmation d’expressions vectorielles dans After Effects couplées aux déclencheurs MIDI pour une réactivité organique.',
    resultEn: 'Screened in motion design festivals across Berlin, Tokyo, and Montreal with over 500k views online.',
    resultFr: 'Projeté dans des festivals de motion design à Berlin, Tokyo et Montréal avec plus de 500k vues en ligne.',
    infographicMetrics: [
      { labelEn: 'Frame Rate', labelFr: 'Fréquence d’images', value: '60 FPS' },
      { labelEn: 'Render Resolution', labelFr: 'Résolution', value: '4K DCI' }
    ]
  },

  // 02 SOCIAL MEDIA
  {
    id: 'minimal-editorial-social',
    categoryId: 'social-media',
    title: 'Curated Journal: 365 Days of Architecture',
    year: '2025',
    typeEn: 'Editorial Social Storytelling & Grid Curation',
    typeFr: 'Récits éditoriaux sur réseaux & curation de grille',
    summaryEn: 'A museum-quality social media layout series blending architectural blueprints, minimalist photography, and micro-essays.',
    summaryFr: 'Une série de publications pour réseaux sociaux de qualité muséale mariant plans d’architecte, photographies et micro-essais.',
    client: 'Méditerranée Arch Review',
    roleEn: 'Social Art Director & Content Designer',
    roleFr: 'Directeur artistique social media & designer de contenu',
    tools: ['Photoshop', 'Figma', 'Lightroom'],
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80'
    ],
    briefEn: 'Break through social media algorithm noise by crafting an un-rushed, editorial gallery aesthetic that commands quiet attention.',
    briefFr: 'Sortir du bruit algorithmique des réseaux en créant une esthétique de galerie d’art invitant à la contemplation.',
    conceptEn: 'Treating the 3x3 Instagram profile grid as an ongoing architectural canvas with seamless continuous margins.',
    conceptFr: 'Penser la grille 3x3 d’Instagram comme une fresque architecturale continue aux marges millimétrées.',
    processEn: 'Developed modular template grids in Figma with strict typography pairings and automated export presets.',
    processFr: 'Développement de gabarits modulaires sous Figma avec typographie rigoureuse et préconfigurations d’export.',
    resultEn: 'Organic audience surged from 12k to 148k engaged design professionals in 10 months.',
    resultFr: 'Croissance organique de 12k à 148k professionnels du design passionnés en 10 mois.',
    infographicMetrics: [
      { labelEn: 'Engagement Rate', labelFr: 'Taux d’engagement', value: '9.4%' },
      { labelEn: 'Follower Growth', labelFr: 'Croissance abonnés', value: '+136k' }
    ]
  }
];

export const CV_DATA = {
  profile: {
    name: 'Abdessamad El Jaafari',
    titleEn: 'Professional Infographic Designer & Editorial Art Director',
    titleFr: 'Designer Infographiste Professionnel & Directeur Artistique Éditorial',
    bioEn: 'Senior infographic designer with over 9 years of expertise transforming complex data systems, brand identities, and technical narratives into timeless visual compositions. Merging Moroccan artisanal geometric sensitivity with Swiss editorial rigor.',
    bioFr: 'Designer infographiste senior cumulant plus de 9 ans d’expérience dans la transformation de systèmes de données complexes, d’identités de marque et de récits techniques en compositions visuelles intemporelles. Alliance de la sensibilité géométrique artisanale et de la rigueur éditoriale suisse.',
    location: 'Casablanca & Paris — Global Remotely',
    email: 'contact@portfolio2026-design.com',
    phone: '+212 (0) 6 22 45 88 19',
    languages: [
      { nameEn: 'French', nameFr: 'Français', levelEn: 'Native / Bilingual', levelFr: 'Langue maternelle' },
      { nameEn: 'Arabic', nameFr: 'Arabe', levelEn: 'Native / Classical', levelFr: 'Langue maternelle' },
      { nameEn: 'English', nameFr: 'Anglais', levelEn: 'Fluent / Professional', levelFr: 'Courant professionnel' }
    ]
  },
  experiences: [
    {
      period: '2023 — 2026',
      roleEn: 'Lead Infographic Designer & Information Architect',
      roleFr: 'Lead Designer Infographiste & Architecte de l’Information',
      company: 'Studio Kufi & Trames (Casablanca / Paris)',
      location: 'Casablanca & Remote',
      descEn: 'Directing visual journalism, data synthesis, and complex brand identities for multinational NGOs, sovereign wealth funds, and cultural institutions.',
      descFr: 'Direction du journalisme visuel, de la synthèse de données et des identités de marque complexes pour des ONG internationales, fonds souverains et institutions culturelles.',
      achievementsEn: [
        'Orchestrated data visualization systems for 14 major international environmental and energy summits.',
        'Established custom design systems, reducing editorial production cycle times by 40%.',
        'Mentored a cross-functional team of 6 graphic designers, cartographers, and 3D illustrators.'
      ],
      achievementsFr: [
        'Orchestration des systèmes de visualisation de données pour 14 sommets internationaux sur l’énergie et le climat.',
        'Mise en place de design systems sur mesure, réduisant les temps de production éditoriale de 40%.',
        'Encadrement d’une équipe pluridisciplinaire de 6 graphistes, cartographes et illustrateurs 3D.'
      ]
    },
    {
      period: '2020 — 2023',
      roleEn: 'Senior Editorial & Brand Designer',
      roleFr: 'Designer Éditorial & Identité Senior',
      company: 'Atelier Méridien — Agence de Création',
      location: 'Paris, France',
      descEn: 'Crafted luxury brand books, annual economic reports, and high-impact keynotes for European luxury houses and FinTech innovators.',
      descFr: 'Conception de brand books de luxe, de rapports économiques annuels et de keynotes stratégiques pour de grandes maisons européennes et fintechs.',
      achievementsEn: [
        'Designed 22 award-winning monographs and corporate annual publications.',
        'Structured the visual identity guidelines for Maison Tazi across 8 international boutiques.',
        'Created animated infographic modules used in Series A/B fundraising decks raising over €45M.'
      ],
      achievementsFr: [
        'Conception de 22 monographies et publications annuelles primées.',
        'Élaboration de la charte d’identité visuelle de Maison Tazi déployée sur 8 boutiques internationales.',
        'Création de modules infographiques animés pour des levées de fonds Série A/B cumulant plus de 45M€.'
      ]
    },
    {
      period: '2017 — 2020',
      roleEn: 'Graphic & Information Designer',
      roleFr: 'Graphiste & Designer de l’Information',
      company: 'Nouvelles Données Médias',
      location: 'Casablanca, Morocco',
      descEn: 'Developed daily news graphics, analytical charts, interactive press features, and social media visual narratives.',
      descFr: 'Réalisation des infographies de presse quotidiennes, diagrammes d’analyse, dossiers interactifs et récits visuels pour réseaux sociaux.',
      achievementsEn: [
        'Produced over 500 published data charts and thematic cartographies.',
        'Pioneered the publication’s transition to responsive digital storytelling formats.'
      ],
      achievementsFr: [
        'Production de plus de 500 infographies et cartographies thématiques publiées.',
        'Pionnier de la transition du titre de presse vers les formats de storytelling digital responsive.'
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      period: '2015 — 2017',
      degreeEn: 'Master of Arts in Editorial Design & Information Graphics',
      degreeFr: 'Master en Design Éditorial & Graphisme d’Information',
      institution: 'École Supérieure des Arts Visuels (ÉSA)',
      location: 'Marrakech, Morocco',
      honorsEn: 'Graduated Summa Cum Laude / Thesis on Cognitive Data Cartography',
      honorsFr: 'Félicitations du Jury / Mémoire sur la Cartographie Cognitive des Données'
    },
    {
      period: '2012 — 2015',
      degreeEn: 'Bachelor of Fine Arts & Visual Communication',
      degreeFr: 'Licence en Arts Plastiques & Communication Visuelle',
      institution: 'Institut National des Beaux-Arts',
      location: 'Tétouan, Morocco',
      honorsEn: 'Specialization in Typography & Serigraphy',
      honorsFr: 'Spécialisation en Typographie & Sérigraphie'
    }
  ] as EducationItem[],
  skills: [
    { nameEn: 'Infographics & Data Viz', nameFr: 'Infographie & Data Visualisation', level: 98, category: 'core', descriptorEn: 'Cognitive visual systems, complex diagrams & cartography', descriptorFr: 'Systèmes visuels cognitifs, schémas complexes & cartographie' },
    { nameEn: 'Visual Identity & Logos', nameFr: 'Identité Visuelle & Logos', level: 96, category: 'core', descriptorEn: 'Geometric precision, semiotics and enduring marks', descriptorFr: 'Précision géométrique, sémiotique et marques intemporelles' },
    { nameEn: 'Editorial & Book Design', nameFr: 'Design Éditorial & Livres', level: 94, category: 'core', descriptorEn: 'Swiss grids, micro-typography & publication flow', descriptorFr: 'Grilles suisses, micro-typographie & rythme d’édition' },
    { nameEn: 'Art Direction & Concepts', nameFr: 'Direction Artistique & Concepts', level: 92, category: 'strategic', descriptorEn: 'Narrative storytelling, curation & luxury feel', descriptorFr: 'Storytelling narratif, curation & exigence du luxe' },
    { nameEn: 'UI / Digital Design Systems', nameFr: 'UI / Design Systems Digitaux', level: 88, category: 'technical', descriptorEn: 'Figma tokens, atomic structures & responsive layouts', descriptorFr: 'Tokens Figma, structures atomiques & maquettes adaptatives' },
    { nameEn: 'Print Production & Papercraft', nameFr: 'Impression & Finitions Papetières', level: 95, category: 'technical', descriptorEn: 'Foil stamping, blind embossing, CMYK+Pantone mastery', descriptorFr: 'Dorure à chaud, gaufrage, maîtrise CMJN & tons directs' },
    { nameEn: 'Motion Graphics & Keynotes', nameFr: 'Motion Design & Présentations', level: 86, category: 'technical', descriptorEn: 'Kinetic typography, animated charts & pitch decks', descriptorFr: 'Typographie cinétique, courbes animées & pitch decks' },
    { nameEn: 'Visual Communication Strategy', nameFr: 'Stratégie de Communication Visuelle', level: 91, category: 'strategic', descriptorEn: 'High-level synthesis for C-suite and public policy', descriptorFr: 'Synthèse à fort impact pour directions générales et décideurs' }
  ] as SkillItem[],
  software: [
    { name: 'Adobe Illustrator', category: 'Vector & Precision Infographics', proficiency: 99 },
    { name: 'Adobe InDesign', category: 'Editorial Layouts & Multi-page Books', proficiency: 98 },
    { name: 'Figma', category: 'Digital Design & Collaborative Systems', proficiency: 94 },
    { name: 'Adobe Photoshop', category: 'Image Retouching & Textures', proficiency: 92 },
    { name: 'Adobe After Effects', category: 'Kinetic Data & Motion Typography', proficiency: 88 },
    { name: 'QGIS / Cartography', category: 'Geographic & Topographic Data', proficiency: 85 },
    { name: 'Keynote & Presentation', category: 'Executive Pitches & Storytelling', proficiency: 96 },
    { name: 'Glyphs 3', category: 'Type Design & Monogram Vectoring', proficiency: 82 }
  ] as SoftwareTool[]
};

export const TRANSLATIONS = {
  nav: {
    home: { FR: 'ACCUEIL', EN: 'HOME' },
    about: { FR: 'À PROPOS', EN: 'ABOUT ME' },
    cv: { FR: 'CURRICULUM VITAE', EN: 'CV' },
    portfolio: { FR: 'PORTFOLIO', EN: 'PORTFOLIO' },
    contact: { FR: 'CONTACT', EN: 'CONTACT' }
  },
  home: {
    bannerTitle: 'PORTFOLIO 2026',
    bannerSubtitle: { FR: 'DESIGNER INFOGRAPHISTE', EN: 'INFOGRAPHIC DESIGNER' },
    bannerTag: { FR: 'ARCHITECTURE DE L’INFORMATION & DIRECTION ARTISTIQUE', EN: 'INFORMATION ARCHITECTURE & ART DIRECTION' },
    heroIntro: {
      FR: 'Je transforme les informations complexes en expériences visuelles claires, élégantes et mémorables.',
      EN: 'I transform complex information into clear, elegant and memorable visual experiences.'
    },
    heroDetail: {
      FR: 'Spécialiste de la visualisation de données, de l’identité de marque éditoriale et de la clarté cognitive. Chaque création est pensée selon une géométrie rigoureuse et une direction artistique contemporaine.',
      EN: 'Specialized in data visualization, editorial brand identity, and cognitive clarity. Every creation is conceived through rigorous geometry and contemporary art direction.'
    },
    ctaPortfolio: { FR: 'Découvrir mon portfolio', EN: 'Explore my portfolio' },
    ctaContact: { FR: 'Démarrer un projet', EN: 'Start a project' },
    heroBadge: { FR: 'DISPONIBLE POUR PROJETS SÉLECTIONNÉS — 2026', EN: 'AVAILABLE FOR SELECT COMMISSIONS — 2026' },
    featuredProjects: { FR: 'PROJETS SÉLECTIONNÉS', EN: 'SELECTED WORKS' },
    viewAllFolders: { FR: 'Voir tous les dossiers', EN: 'View all folders' }
  },
  about: {
    title: { FR: 'À PROPOS DE MOI', EN: 'ABOUT ME' },
    subtitle: {
      FR: 'La rigueur des données mariée à l’élégance de la forme.',
      EN: 'The rigor of data married to the elegance of form.'
    },
    leadBio: {
      FR: 'Je suis designer infographiste spécialisé dans la création d’identités visuelles, de contenus digitaux et de compositions graphiques pensées pour transmettre une idée avec clarté et impact.',
      EN: 'I am a graphic and infographic designer specialized in visual identities, digital content and graphic compositions designed to communicate ideas with clarity and impact.'
    },
    bodyBio: {
      FR: 'Né au confluent des traditions ornementales géométriques et du modernisme graphique européen, mon travail s’articule autour d’un principe fondamental : la complexité ne doit jamais être simpliste, elle doit devenir évidente. Par le choix méticuleux des grilles, des contrastes de tons bordeaux et crème et de la typographie de caractère, je donne forme à des récits visuels qui marquent durablement les esprits.',
      EN: 'Born at the intersection of geometric decorative traditions and European graphic modernism, my work is articulated around a single tenet: complexity should never be dumbed down; it should become evident. Through meticulous grid systems, controlled burgundy-cream contrasts, and distinctive typography, I sculpt visual narratives that leave a lasting impression.'
    },
    philosophyTitle: { FR: 'PHILOSOPHIE DE CONCEPTION', EN: 'DESIGN PHILOSOPHY' },
    philosophyPoints: [
      {
        number: '01',
        titleEn: 'Cognitive Architecture',
        titleFr: 'Architecture Cognitive',
        descEn: 'Information is never mere decoration. Visual hierarchy guides the human eye effortlessly through multiple tiers of understanding.',
        descFr: 'L’information n’est jamais un simple ornement. La hiérarchie visuelle guide le regard à travers plusieurs strates de compréhension.'
      },
      {
        number: '02',
        titleEn: 'Mathematical Harmony',
        titleFr: 'Harmonie Mathématique',
        descEn: 'From golden-ratio modules to 12-column Swiss matrices, every line and node exists for a geometric purpose.',
        descFr: 'Du nombre d’or aux matrices suisses à 12 colonnes, chaque trait et chaque interstice répond à une logique mathématique.'
      },
      {
        number: '03',
        titleEn: 'Tactile Timelessness',
        titleFr: 'Pérennité Sensorielle',
        descEn: 'Whether on 350gsm hot-pressed paper or an ultra-dense OLED display, aesthetic nobility outlasts ephemeral design trends.',
        descFr: 'Qu’il s’agisse d’un papier d’art 350g ou d’un écran OLED haute densité, la noblesse esthétique transcende les modes passagères.'
      }
    ],
    skillsTitle: { FR: 'CHAMPS D’EXPERTISE', EN: 'AREAS OF EXPERTISE' },
    toolsTitle: { FR: 'ENVIRONNEMENT & LOGICIELS', EN: 'TOOLS & ECOSYSTEM' }
  },
  cv: {
    title: 'CURRICULUM VITAE',
    subtitle: {
      FR: 'Parcours professionnel, publications & distinction en design.',
      EN: 'Professional trajectory, publications & design distinctions.'
    },
    downloadBtn: { FR: 'Télécharger le CV (PDF)', EN: 'Download CV (PDF)' },
    profileSection: { FR: 'PROFIL DU DESIGNER', EN: 'DESIGNER PROFILE' },
    experienceSection: { FR: 'EXPÉRIENCES PROFESSIONNELLES', EN: 'PROFESSIONAL EXPERIENCE' },
    educationSection: { FR: 'FORMATION & DIPLÔMES', EN: 'EDUCATION & DEGREES' },
    skillsSection: { FR: 'COMPÉTENCES CLÉS', EN: 'CORE CAPABILITIES' },
    softwareSection: { FR: 'OUTILS & TECHNOLOGIES', EN: 'SOFTWARE & TOOLS' },
    languagesSection: { FR: 'LANGUES MAÎTRISÉES', EN: 'LANGUAGES' }
  },
  portfolio: {
    title: 'PORTFOLIO',
    subtitle: {
      FR: 'Explorer mes projets par catégorie.',
      EN: 'Explore my projects by category.'
    },
    folderCount: { FR: 'dossiers créatifs', EN: 'creative folders' },
    clickToOpen: { FR: 'Cliquer pour ouvrir le dossier', EN: 'Click to open folder' },
    backToFolders: { FR: '← Tous les dossiers', EN: '← All Folders' },
    viewProject: { FR: 'Consulter l’étude de cas', EN: 'View Case Study' },
    closeModal: { FR: 'Fermer', EN: 'Close' },
    nextProject: { FR: 'Projet suivant →', EN: 'Next Project →' },
    projectOverview: { FR: 'Vue d’ensemble du projet', EN: 'Project Overview' },
    theBrief: { FR: 'Le Brief', EN: 'The Brief' },
    theConcept: { FR: 'Concept Créatif', EN: 'Creative Concept' },
    theProcess: { FR: 'Développement & Processus', EN: 'Design Process' },
    theResult: { FR: 'Résultat & Impact', EN: 'Final Result' },
    projectDetails: { FR: 'Fiche Technique', EN: 'Technical Specifications' },
    client: { FR: 'Commanditaire', EN: 'Client' },
    year: { FR: 'Année', EN: 'Year' },
    discipline: { FR: 'Discipline', EN: 'Discipline' },
    role: { FR: 'Rôle', EN: 'Role' },
    metricsTitle: { FR: 'Indicateurs d’Impact Infographique', EN: 'Infographic Impact Metrics' }
  },
  contact: {
    title: { FR: 'TRAVAILLONS ENSEMBLE', EN: 'LET’S WORK TOGETHER' },
    subtitle: {
      FR: 'Vous avez un projet, une idée ou simplement envie d’échanger ?',
      EN: 'Have a project, an idea, or simply want to talk?'
    },
    intro: {
      FR: 'Disponible pour des missions de direction artistique, de création d’identités visuelles, d’infographies complexes et d’éditions de prestige.',
      EN: 'Available for art direction commissions, visual identity systems, complex infographics, and prestigious editorial works.'
    },
    form: {
      name: { FR: 'Votre Nom ou Entreprise', EN: 'Your Name or Organization' },
      email: { FR: 'Adresse Email', EN: 'Email Address' },
      subject: { FR: 'Objet du Projet', EN: 'Project Subject' },
      message: { FR: 'Détails du projet, calendrier & attentes...', EN: 'Project details, timeline & objectives...' },
      send: { FR: 'Envoyer le Message', EN: 'Send Message' },
      sending: { FR: 'Transmission en cours...', EN: 'Sending transmission...' },
      success: {
        FR: 'Votre message a été transmis avec succès. Une réponse vous parviendra sous 24 à 48 heures.',
        EN: 'Your message has been successfully transmitted. You will receive a response within 24 to 48 hours.'
      }
    },
    channels: {
      email: 'contact@portfolio2026-design.com',
      phone: '+212 6 22 45 88 19',
      location: 'Casablanca & Paris — Global Remotely',
      socialsTitle: { FR: 'RÉSEAUX & GALERIES', EN: 'CHANNELS & PORTFOLIOS' }
    }
  },
  footer: {
    title: 'PORTFOLIO 2026',
    subtitle: { FR: 'DESIGNER INFOGRAPHISTE', EN: 'INFOGRAPHIC DESIGNER' },
    copyright: '© 2026 — All Rights Reserved',
    rights: { FR: 'Tous droits réservés. Conception graphique et typographique originale.', EN: 'All rights reserved. Original graphic and typographic design.' }
  }
};
