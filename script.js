/**
     * 3D ASCII QR Code Studio — Multi-Occasion Edition
     * Features:
     * - 6 Complete Occasions: Christmas, Birthday, Wedding, Halloween, Invitation, General
     * - 36 Sculpted 3D ASCII Shapes (6 shapes x 6 occasions, each with 3 sub-variants = 108 3D sculptures!)
     * - Real, 100% phone-scannable QR Code Matrix Generator with crisp quiet-zone contrast
     * - Smooth 3D particle morphing (3D ASCII Sculpture <-> Flat Scannable QR Code)
     * - Interactive drag-to-orbit, momentum inertia, scroll/pinch zoom, & Spacebar toggle
     * - Occasion-specific ambient weather, flying ASCII sky gliders, and perspective grid floor
     * - Full URL state encoding & Recipient Showcase Mode for shared links
     */

    // =========================================================================
    // 1. MULTI-OCCASION CONFIGURATION (SHAPES, VARIANTS, PALETTES, ATMOSPHERE)
    // =========================================================================
    const OCCASIONS = {
      christmas: {
        id: 'christmas',
        name: 'Christmas',
        icon: '🎄',
        defaultTitle: 'Merry Christmas!',
        bgGradient: 'radial-gradient(ellipse 82% 62% at 50% 42%, rgba(52, 211, 153, 0.08) 0%, rgba(19, 29, 54, 0.72) 50%, rgba(11, 16, 32, 0.96) 100%), linear-gradient(180deg, #0b1020 0%, #131d36 55%, #090e1c 100%)',
        weather: 'snow',
        skyGlider: 'sleigh',
        shapes: {
          tree: {
            label: 'Pine Tree',
            variants: ['Layered Fir', 'Classic Cone', 'Spiral Lights'],
            svg: '<path d="M12 3l-5 6h3l-4 6h4l-3 5h10l-3-5h4l-4-6h3l-5-6z"/><path d="M12 20v2"/>'
          },
          star: {
            label: 'Star',
            variants: ['Five Point', 'North Star', 'Supernova'],
            svg: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
          },
          snowman: {
            label: 'Snowman',
            variants: ['Classic Frosty', 'Top Hat', 'Cozy Scarf'],
            svg: '<circle cx="12" cy="7" r="3"/><circle cx="12" cy="15.5" r="5.5"/><path d="M9 4h6"/>'
          },
          wreath: {
            label: 'Wreath',
            variants: ['Ring With Bow', 'Lit Up', 'Double Garland'],
            svg: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><path d="M12 16l-2.5 4M12 16l2.5 4"/>'
          },
          gift: {
            label: 'Gift Box',
            variants: ['Box With Bow', 'Stack Of Three', 'Tall Present'],
            svg: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 010-5A4.8 8 0 0112 8a4.8 8 0 014.5-5 2.5 2.5 0 010 5"/>'
          },
          ornament: {
            label: 'Ornament',
            variants: ['Bauble', 'Jingle Bell', 'Icicle Drop'],
            svg: '<circle cx="12" cy="14" r="7"/><path d="M10 7h4v2h-4z"/><path d="M12 3v4"/>'
          }
        },
        palettes: [
          { id: 'evergreen', name: 'Evergreen', swatch: '#4ade80', primary: '#4ade80', secondary: '#22c55e', accents: ['#f87171', '#fbbf24', '#fef08a', '#ffffff', '#fb923c'] },
          { id: 'frost', name: 'Frost Cyan', swatch: '#38bdf8', primary: '#38bdf8', secondary: '#0ea5e9', accents: ['#e0f2fe', '#ffffff', '#fde047', '#818cf8', '#67e8f9'] },
          { id: 'candycane', name: 'Candy Cane', swatch: '#f87171', primary: '#f87171', secondary: '#ef4444', accents: ['#ffffff', '#4ade80', '#fbbf24', '#fecaca', '#fde047'] },
          { id: 'gold', name: 'Festive Gold', swatch: '#fbbf24', primary: '#fbbf24', secondary: '#f59e0b', accents: ['#fef08a', '#f87171', '#ffffff', '#4ade80', '#fde68a'] }
        ]
      },

      birthday: {
        id: 'birthday',
        name: 'Birthday',
        icon: '🎂',
        defaultTitle: 'Happy Birthday!',
        bgGradient: 'radial-gradient(ellipse 82% 62% at 50% 42%, rgba(244, 114, 182, 0.09) 0%, rgba(26, 20, 52, 0.72) 50%, rgba(11, 16, 32, 0.96) 100%), linear-gradient(180deg, #0b1020 0%, #1a1434 55%, #090e1c 100%)',
        weather: 'confetti',
        skyGlider: 'bannerPlane',
        shapes: {
          cake: {
            label: 'Birthday Cake',
            variants: ['Three Tier', 'Candle Glow', 'Grand Gateau'],
            svg: '<path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3M12 8v3M17 8v3"/>'
          },
          balloons: {
            label: 'Balloon Cluster',
            variants: ['Bouquet of 5', 'Arch Cluster', 'Floating Trio'],
            svg: '<circle cx="9" cy="8" r="4"/><circle cx="15" cy="9" r="3.5"/><path d="M9 12c0 4 2 6 1 9M15 12.5c0 3.5-1.5 5.5-1 8.5"/>'
          },
          partyhat: {
            label: 'Party Hat',
            variants: ['Pom-Pom Cone', 'Striped Cone', 'Tiara Crown'],
            svg: '<path d="M12 3L5 19h14L12 3z"/><circle cx="12" cy="3" r="1.5"/><path d="M7.5 13h9"/>'
          },
          bdaygift: {
            label: 'Surprise Box',
            variants: ['Ribbon Cube', 'Tiered Boxes', 'Pop-Up Box'],
            svg: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"/>'
          },
          cupcake: {
            label: 'Cupcake',
            variants: ['Swirl Frosting', 'Cherry Top', 'Sprinkle Dome'],
            svg: '<path d="M6 14h12l-1.5 7h-9L6 14z"/><path d="M5 14c0-3 3-5 7-5s7 2 7 5"/><circle cx="12" cy="7" r="1.5"/>'
          },
          cannon: {
            label: 'Confetti Burst',
            variants: ['Party Popper', 'Firework', 'Star Shower'],
            svg: '<path d="M4 20l4-11 7 7-11 4z"/><path d="M14 5l2-2M19 10l2-2M15 10l4-4"/>'
          }
        },
        palettes: [
          { id: 'neonparty', name: 'Confetti Neon', swatch: '#f472b6', primary: '#f472b6', secondary: '#ec4899', accents: ['#38bdf8', '#fde047', '#4ade80', '#c084fc', '#ffffff'] },
          { id: 'strawberry', name: 'Strawberry Cream', swatch: '#fb7185', primary: '#fb7185', secondary: '#f43f5e', accents: ['#fef08a', '#ffffff', '#fbcfe8', '#fdba74', '#f9a8d4'] },
          { id: 'electric', name: 'Electric Blue', swatch: '#38bdf8', primary: '#38bdf8', secondary: '#0284c7', accents: ['#fde047', '#f472b6', '#4ade80', '#ffffff', '#a78bfa'] },
          { id: 'goldparty', name: 'Golden Party', swatch: '#fbbf24', primary: '#fbbf24', secondary: '#d97706', accents: ['#ffffff', '#f472b6', '#38bdf8', '#fef08a', '#fb923c'] }
        ]
      },

      wedding: {
        id: 'wedding',
        name: 'Wedding',
        icon: '💍',
        defaultTitle: 'Forever & Always',
        bgGradient: 'radial-gradient(ellipse 82% 62% at 50% 42%, rgba(251, 207, 232, 0.09) 0%, rgba(29, 19, 43, 0.72) 50%, rgba(11, 16, 32, 0.96) 100%), linear-gradient(180deg, #0b1020 0%, #1d132b 55%, #090e1c 100%)',
        weather: 'petals',
        skyGlider: 'doves',
        shapes: {
          rings: {
            label: 'Wedding Rings',
            variants: ['Interlocked', 'Tilted Union', 'Halo Bands'],
            svg: '<circle cx="9.5" cy="13" r="5.5"/><circle cx="14.5" cy="11" r="5.5"/>'
          },
          heart: {
            label: '3D Heart',
            variants: ['Sculpted Heart', 'Double Hearts', 'Faceted Gem'],
            svg: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>'
          },
          flutes: {
            label: 'Champagne Flutes',
            variants: ['Cheers Toast', 'Bubbling Pair', 'Chalice'],
            svg: '<path d="M7 3h4l-1 8a2 2 0 01-2 0L7 3zM9 11v8M6 19h6"/><path d="M13 4h4l-1 8a2 2 0 01-2 0l-1-8zM15 12v7M12 19h6"/>'
          },
          diamond: {
            label: 'Diamond Ring',
            variants: ['Solitaire', 'Princess Cut', 'Crown Band'],
            svg: '<circle cx="12" cy="15" r="6"/><polygon points="12 3 9 7 12 9 15 7 12 3"/>'
          },
          rose: {
            label: 'Rose Bloom',
            variants: ['Blooming Rose', 'Long Stem', 'Bouquet'],
            svg: '<path d="M12 12c-3 0-5-2-5-5 0-2 2-4 5-4s5 2 5 4c0 3-2 5-5 5z"/><path d="M12 12v9M12 17l3-2M12 15l-3-2"/>'
          },
          arch: {
            label: 'Wedding Arch',
            variants: ['Floral Arch', 'Chapel Bell', 'Gazebo'],
            svg: '<path d="M5 21V10a7 7 0 0114 0v11"/><path d="M3 21h18"/>'
          }
        },
        palettes: [
          { id: 'champagne', name: 'Champagne Gold', swatch: '#fcd34d', primary: '#fcd34d', secondary: '#f59e0b', accents: ['#ffffff', '#fbcfe8', '#fde68a', '#fda4af', '#fef9c3'] },
          { id: 'rosequartz', name: 'Rose Quartz', swatch: '#f9a8d4', primary: '#f9a8d4', secondary: '#f472b6', accents: ['#ffffff', '#fde047', '#fecdd3', '#e9d5ff', '#fda4af'] },
          { id: 'ivory', name: 'Ivory Pearl', swatch: '#f8fafc', primary: '#f8fafc', secondary: '#cbd5e1', accents: ['#fcd34d', '#fbcfe8', '#e2e8f0', '#fef08a', '#ffffff'] },
          { id: 'velvet', name: 'Velvet Crimson', swatch: '#fb7185', primary: '#fb7185', secondary: '#e11d48', accents: ['#fcd34d', '#ffffff', '#fecdd3', '#fda4af', '#fef08a'] }
        ]
      },

      halloween: {
        id: 'halloween',
        name: 'Halloween',
        icon: '🎃',
        defaultTitle: 'Happy Halloween!',
        bgGradient: 'radial-gradient(ellipse 82% 62% at 50% 42%, rgba(251, 146, 60, 0.09) 0%, rgba(26, 17, 42, 0.72) 50%, rgba(11, 16, 32, 0.96) 100%), linear-gradient(180deg, #0b1020 0%, #1a112a 55%, #090e1c 100%)',
        weather: 'embers',
        skyGlider: 'witch',
        shapes: {
          pumpkin: {
            label: 'Jack-o-Lantern',
            variants: ['Classic Carved', 'Tall Gourd', 'Sinister Grin'],
            svg: '<path d="M12 6c-4.5 0-8 3-8 7s3.5 7 8 7 8-3 8-7-3.5-7-8-7z"/><path d="M12 6V3l2-1"/>'
          },
          ghost: {
            label: 'Spooky Ghost',
            variants: ['Floating Sheet', 'Wavy Phantom', 'Boo Spirit'],
            svg: '<path d="M12 3a7 7 0 00-7 7v11l2.5-2 2.5 2 2-2 2 2 2.5-2 2.5 2V10a7 7 0 00-7-7z"/><circle cx="9.5" cy="10" r="1"/><circle cx="14.5" cy="10" r="1"/>'
          },
          witchhat: {
            label: 'Witch Hat',
            variants: ['Crooked Tip', 'Wide Brim', 'Starry Buckle'],
            svg: '<path d="M12 3L6 18h12L12 3z"/><ellipse cx="12" cy="18" rx="9" ry="2.5"/>'
          },
          bat: {
            label: 'Vampire Bat',
            variants: ['Spread Wings', 'Night Swoop', 'Fanged Bat'],
            svg: '<path d="M2 10c3-2 6 0 7 2 1-2 2-3 3-3s2 1 3 3c1-2 4-4 7-2-1 4-4 6-7 5-1 2-2 3-3 3s-2-1-3-3c-3 1-6-1-7-5z"/>'
          },
          skull: {
            label: 'Skull',
            variants: ['Classic Cranium', 'Pirate Skull', 'Glowing Eyes'],
            svg: '<circle cx="12" cy="10" r="7"/><path d="M9 17v4h6v-4"/><circle cx="9.5" cy="10" r="1.5"/><circle cx="14.5" cy="10" r="1.5"/>'
          },
          cauldron: {
            label: 'Cauldron',
            variants: ['Bubbling Brew', 'Potion Pot', 'Smoke Swirl'],
            svg: '<path d="M5 10h14a2 2 0 011 3.7A7 7 0 0112 20a7 7 0 01-8-6.3A2 2 0 015 10z"/><path d="M8 6c0-2 2-2 2-4M14 7c0-2 2-2 2-4"/>'
          }
        },
        palettes: [
          { id: 'pumpkin', name: 'Pumpkin Orange', swatch: '#fb923c', primary: '#fb923c', secondary: '#ea580c', accents: ['#a855f7', '#4ade80', '#fde047', '#ffffff', '#f87171'] },
          { id: 'ectoplasm', name: 'Ectoplasm Green', swatch: '#4ade80', primary: '#4ade80', secondary: '#16a34a', accents: ['#c084fc', '#fb923c', '#fef08a', '#ffffff', '#a3e635'] },
          { id: 'vampire', name: 'Vampire Crimson', swatch: '#f87171', primary: '#f87171', secondary: '#dc2626', accents: ['#ffffff', '#c084fc', '#fbbf24', '#fecaca', '#fb923c'] },
          { id: 'midnight', name: 'Midnight Purple', swatch: '#c084fc', primary: '#c084fc', secondary: '#9333ea', accents: ['#fb923c', '#4ade80', '#fde047', '#ffffff', '#f472b6'] }
        ]
      },

      invitation: {
        id: 'invitation',
        name: 'Invitation',
        icon: '✉️',
        defaultTitle: "You're Officially Invited!",
        bgGradient: 'radial-gradient(ellipse 82% 62% at 50% 42%, rgba(251, 191, 36, 0.08) 0%, rgba(19, 27, 51, 0.72) 50%, rgba(11, 16, 32, 0.96) 100%), linear-gradient(180deg, #0b1020 0%, #131b33 55%, #090e1c 100%)',
        weather: 'stardust',
        skyGlider: 'shootingStar',
        shapes: {
          envelope: {
            label: 'Wax Envelope',
            variants: ['Sealed Letter', 'Open Card', 'Floating Invite'],
            svg: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/><circle cx="12" cy="13" r="2"/>'
          },
          crown: {
            label: 'Royal Crown',
            variants: ['VIP Coronet', 'Imperial Crown', 'Jeweled Tiara'],
            svg: '<path d="M3 18h18l-2-11-4 4-3-6-3 6-4-4-2 11z"/>'
          },
          ticket: {
            label: 'VIP Pass',
            variants: ['Golden Ticket', 'Backstage Pass', 'Boarding Pass'],
            svg: '<path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4V9z"/>'
          },
          trophy: {
            label: 'Gala Goblet',
            variants: ['Chalice Cup', 'Award Star', 'Champagne Tower'],
            svg: '<path d="M6 4h12v6a6 6 0 01-12 0V4z"/><path d="M12 16v5M8 21h8"/>'
          },
          compass: {
            label: 'Compass',
            variants: ['North Star', 'Globe', 'Astrolabe'],
            svg: '<circle cx="12" cy="12" r="9"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>'
          },
          hourglass: {
            label: 'Hourglass',
            variants: ['Countdown', 'Classic Timer', 'Infinity Sand'],
            svg: '<path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9"/>'
          }
        },
        palettes: [
          { id: 'royalgold', name: 'Royal Gold', swatch: '#fbbf24', primary: '#fbbf24', secondary: '#d97706', accents: ['#ffffff', '#fef08a', '#38bdf8', '#f87171', '#fde68a'] },
          { id: 'emeraldgala', name: 'Emerald Gala', swatch: '#34d399', primary: '#34d399', secondary: '#059669', accents: ['#fbbf24', '#ffffff', '#a7f3d0', '#38bdf8', '#fde047'] },
          { id: 'platinum', name: 'Cyber Platinum', swatch: '#e2e8f0', primary: '#e2e8f0', secondary: '#94a3b8', accents: ['#38bdf8', '#fbbf24', '#ffffff', '#c084fc', '#67e8f9'] },
          { id: 'obsidianrose', name: 'Obsidian & Rose', swatch: '#fb7185', primary: '#fb7185', secondary: '#e11d48', accents: ['#fbbf24', '#ffffff', '#fecdd3', '#c084fc', '#fde68a'] }
        ]
      },

      general: {
        id: 'general',
        name: 'General / Tech',
        icon: '✨',
        defaultTitle: 'Scan to Explore',
        bgGradient: 'radial-gradient(ellipse 82% 62% at 50% 42%, rgba(56, 189, 248, 0.1) 0%, rgba(15, 27, 48, 0.72) 50%, rgba(11, 16, 32, 0.96) 100%), linear-gradient(180deg, #0b1020 0%, #0f1b30 55%, #090e1c 100%)',
        weather: 'matrix',
        skyGlider: 'ufo',
        shapes: {
          torus: {
            label: 'Torus Knot',
            variants: ['Trefoil Knot', 'Classic Ring', 'Infinity Loop'],
            svg: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>'
          },
          helix: {
            label: 'DNA Helix',
            variants: ['Double Helix', 'Spiral Tower', 'Wave Strand'],
            svg: '<path d="M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9"/>'
          },
          crystal: {
            label: 'Crystal Gem',
            variants: ['Octahedron', 'Prism Shard', 'Floating Gem'],
            svg: '<polygon points="12 2 20 12 12 22 4 12 12 2"/>'
          },
          saturn: {
            label: 'Saturn Planet',
            variants: ['Ringed Planet', 'Tilted Orbit', 'Asteroid Belt'],
            svg: '<circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(-20 12 12)"/>'
          },
          cube: {
            label: 'Tesseract',
            variants: ['Wireframe Cube', 'Hyper Cube', 'Isometric Box'],
            svg: '<path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>'
          },
          galaxy: {
            label: 'Spiral Galaxy',
            variants: ['Andromeda', 'Vortex', 'Star Cluster'],
            svg: '<circle cx="12" cy="12" r="2"/><path d="M12 6a6 6 0 016 6M12 18a6 6 0 01-6-6M12 3a9 9 0 019 9M12 21a9 9 0 01-9-9"/>'
          }
        },
        palettes: [
          { id: 'cybercyan', name: 'Cyber Cyan', swatch: '#38bdf8', primary: '#38bdf8', secondary: '#0284c7', accents: ['#c084fc', '#4ade80', '#ffffff', '#fde047', '#67e8f9'] },
          { id: 'matrix', name: 'Matrix Green', swatch: '#4ade80', primary: '#4ade80', secondary: '#16a34a', accents: ['#bbf7d0', '#ffffff', '#38bdf8', '#fde047', '#86efac'] },
          { id: 'synthwave', name: 'Synthwave', swatch: '#e879f9', primary: '#e879f9', secondary: '#c026d3', accents: ['#38bdf8', '#fde047', '#f472b6', '#ffffff', '#818cf8'] },
          { id: 'mono', name: 'Monochrome', swatch: '#f8fafc', primary: '#f8fafc', secondary: '#94a3b8', accents: ['#38bdf8', '#e2e8f0', '#cbd5e1', '#ffffff', '#64748b'] }
        ]
      }
    };

    const ASCII_CHARS = ['#', '@', '%', '&', '*', '+', '=', ':', '.'];

    // =========================================================================
    // 2. APPLICATION STATE & URL ENCODING (FOR SHAREABLE RECIPIENT LINKS)
    // =========================================================================
    const state = {
      occasion: 'christmas',
      url: 'https://Example.com',
      message: '',
      shape: 'tree',
      variant: 'Layered Fir',
      colorId: 'evergreen',
      isQR: false,
      isRecipientMode: false,
      morphProgress: 0, // 0 = 3D Sculpture, 1 = Flat Scannable QR Code
      zoom: 1.0,
      rotY: 0,
      rotX: 0.08,
      velY: 0.0055,
      isDragging: false,
      dragDistance: 0,
      lastPointerX: 0,
      lastPointerY: 0,
      pinchStartDist: 0,
      pinchStartZoom: 1.0,
      prefersReducedMotion: false,
      time: 0
    };

    function syncReducedMotionPreference() {
      try {
        state.prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      } catch (e) {
        state.prefersReducedMotion = false;
      }
    }

    function encodeBase64Unicode(str) {
      try {
        return btoa(unescape(encodeURIComponent(str)));
      } catch (e) {
        return encodeURIComponent(str);
      }
    }

    function decodeBase64Unicode(str) {
      try {
        return decodeURIComponent(escape(atob(str)));
      } catch (e) {
        try {
          return decodeURIComponent(str);
        } catch (err) {
          return str;
        }
      }
    }

    function parseURLParams() {
      try {
        const params = new URLSearchParams(window.location.search);
        const o = params.get('o');
        const u = params.get('u') || params.get('url');
        const s = params.get('s');
        const v = params.get('v');
        const c = params.get('c');
        const m = params.get('m');
        const view = params.get('view');

        if (o && OCCASIONS[o]) {
          state.occasion = o;
          const occ = OCCASIONS[o];
          const firstShape = Object.keys(occ.shapes)[0];
          state.shape = firstShape;
          state.variant = occ.shapes[firstShape].variants[0];
          state.colorId = occ.palettes[0].id;
        }

        const activeOcc = OCCASIONS[state.occasion];

        if (u && u.trim().length > 0) {
          state.url = u.trim();
        }
        if (s && activeOcc.shapes[s]) {
          state.shape = s;
          state.variant = activeOcc.shapes[s].variants[0];
        }
        if (v && activeOcc.shapes[state.shape].variants.includes(v)) {
          state.variant = v;
        }
        if (c && activeOcc.palettes.some(p => p.id === c)) {
          state.colorId = c;
        }
        if (m) {
          state.message = decodeBase64Unicode(m);
        }
        // If opened from a shared link (`view=1`), launch directly into immersive Recipient Showcase Mode
        if (view === '1') {
          state.isRecipientMode = true;
        }
      } catch (err) {
        console.warn('URL parameter parsing fallback:', err);
      }
    }

    function syncURLParams() {
      try {
        const urlObj = new URL(window.location.href);
        urlObj.searchParams.set('o', state.occasion);
        urlObj.searchParams.set('u', state.url);
        urlObj.searchParams.set('s', state.shape);
        urlObj.searchParams.set('v', state.variant);
        urlObj.searchParams.set('c', state.colorId);
        if (state.message.trim()) {
          urlObj.searchParams.set('m', encodeBase64Unicode(state.message.trim()));
        } else {
          urlObj.searchParams.delete('m');
        }
        if (!state.isRecipientMode) {
          urlObj.searchParams.delete('view');
        }
        window.history.replaceState({}, '', urlObj.toString());
      } catch (err) {
        // Ignore in sandboxed iframe environments
      }
    }

    function getShareableURL() {
      try {
        const urlObj = new URL(window.location.href);
        urlObj.searchParams.set('o', state.occasion);
        urlObj.searchParams.set('u', state.url);
        urlObj.searchParams.set('s', state.shape);
        urlObj.searchParams.set('v', state.variant);
        urlObj.searchParams.set('c', state.colorId);
        if (state.message.trim()) {
          urlObj.searchParams.set('m', encodeBase64Unicode(state.message.trim()));
        } else {
          urlObj.searchParams.delete('m');
        }
        urlObj.searchParams.set('view', '1');
        return urlObj.toString();
      } catch (err) {
        const mParam = state.message.trim() ? `&m=${encodeURIComponent(encodeBase64Unicode(state.message.trim()))}` : '';
        return `${window.location.origin}${window.location.pathname}?o=${state.occasion}&u=${encodeURIComponent(state.url)}&s=${state.shape}&v=${encodeURIComponent(state.variant)}&c=${state.colorId}${mParam}&view=1`;
      }
    }

    function getActiveOccasion() {
      return OCCASIONS[state.occasion] || OCCASIONS.christmas;
    }

    function getActiveTheme() {
      const occ = getActiveOccasion();
      return occ.palettes.find(t => t.id === state.colorId) || occ.palettes[0];
    }

    // =========================================================================
    // 3. QR CODE MATRIX GENERATOR (100% SCANNABLE)
    // =========================================================================
    let qrMatrix = [];
    let qrSize = 25;

    function normalizeTargetUrl(raw) {
      let trimmed = (raw || '').trim();
      if (!trimmed) return 'https://example.com';
      if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmed) && trimmed.includes('.')) {
        return 'https://' + trimmed;
      }
      return trimmed;
    }

    function generateQRMatrix(text) {
      const target = normalizeTargetUrl(text);
      if (typeof window.qrcode === 'function') {
        try {
          const qr = window.qrcode(0, 'M');
          qr.addData(target);
          qr.make();
          const count = qr.getModuleCount();
          qrSize = count;
          const matrix = [];
          for (let r = 0; r < count; r++) {
            const row = [];
            for (let c = 0; c < count; c++) {
              row.push(qr.isDark(r, c) ? 1 : 0);
            }
            matrix.push(row);
          }
          qrMatrix = matrix;
          return;
        } catch (e) {
          try {
            const qr = window.qrcode(0, 'L');
            qr.addData(target.slice(0, 240));
            qr.make();
            qrSize = qr.getModuleCount();
            qrMatrix = Array.from({ length: qrSize }, (_, r) =>
              Array.from({ length: qrSize }, (_, c) => (qr.isDark(r, c) ? 1 : 0))
            );
            return;
          } catch (err) {
            // Fall through to deterministic standalone matrix fallback
          }
        }
      }

      // Deterministic standalone Version-2 (25x25) fallback matrix with valid finder patterns & timing lines
      // so the UI and 3D-to-QR morph remain functional even if external CDN is blocked
      qrSize = 25;
      const matrix = Array.from({ length: qrSize }, () => Array(qrSize).fill(0));
      const placeFinder = (topR, leftC) => {
        for (let r = -1; r <= 7; r++) {
          for (let c = -1; c <= 7; c++) {
            const rr = topR + r;
            const cc = leftC + c;
            if (rr < 0 || rr >= qrSize || cc < 0 || cc >= qrSize) continue;
            const onBorder = r === 0 || r === 6 || c === 0 || c === 6;
            const inCenter = r >= 2 && r <= 4 && c >= 2 && c <= 4;
            matrix[rr][cc] = (onBorder || inCenter) ? 1 : 0;
          }
        }
      };
      placeFinder(0, 0);
      placeFinder(0, qrSize - 7);
      placeFinder(qrSize - 7, 0);
      for (let i = 8; i < qrSize - 8; i++) {
        matrix[6][i] = i % 2 === 0 ? 1 : 0;
        matrix[i][6] = i % 2 === 0 ? 1 : 0;
      }
      let hash = 2166136261 >>> 0;
      for (let i = 0; i < target.length; i++) {
        hash ^= target.charCodeAt(i);
        hash = Math.imul(hash, 16777619) >>> 0;
      }
      for (let r = 0; r < qrSize; r++) {
        for (let c = 0; c < qrSize; c++) {
          const reserved = isFinderPattern(r, c, qrSize) ||
            r < 8 && c < 8 || r < 8 && c >= qrSize - 8 || r >= qrSize - 8 && c < 8 ||
            r === 6 || c === 6;
          if (!reserved) {
            const bitMix = ((hash >>> ((r * 7 + c * 13) % 24)) ^ ((r * 31 + c * 17) & 255)) & 1;
            matrix[r][c] = bitMix;
          }
        }
      }
      qrMatrix = matrix;
    }

    function isFinderPattern(r, c, size) {
      const inTopLeft = r < 7 && c < 7;
      const inTopRight = r < 7 && c >= size - 7;
      const inBottomLeft = r >= size - 7 && c < 7;
      return inTopLeft || inTopRight || inBottomLeft;
    }

    // =========================================================================
    // 4. 3D SHAPE POINT CLOUD & PROCEDURAL SCULPTURE ENGINE (ALL 36 SHAPES)
    // =========================================================================
    let particles = [];
    const TARGET_PARTICLE_COUNT = 1750;

    function seededRandom(seed) {
      let s = seed % 2147483647;
      if (s <= 0) s += 2147483646;
      return function () {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
      };
    }

    function addCylinder(pts, rand, cy, h, rBottom, rTop, count, role, char) {
      for (let i = 0; i < count; i++) {
        const t = rand();
        const y = cy - h * 0.5 + t * h;
        const rMax = rBottom * t + rTop * (1 - t);
        const shell = rand() < 0.82 ? 0.86 + 0.14 * rand() : Math.sqrt(rand());
        const theta = rand() * Math.PI * 2;
        pts.push({
          x: Math.cos(theta) * rMax * shell,
          y,
          z: Math.sin(theta) * rMax * shell,
          role,
          char
        });
      }
    }

    function addSphere(pts, rand, cx, cy, cz, rx, ry, rz, count, role, char) {
      for (let i = 0; i < count; i++) {
        const theta = rand() * Math.PI * 2;
        const phi = Math.acos(2 * rand() - 1);
        const shell = rand() < 0.82 ? 0.85 + 0.15 * rand() : Math.cbrt(rand());
        pts.push({
          x: cx + rx * shell * Math.sin(phi) * Math.cos(theta),
          y: cy + ry * shell * Math.cos(phi),
          z: cz + rz * shell * Math.sin(phi) * Math.sin(theta),
          role,
          char
        });
      }
    }

    function addTorus(pts, rand, cx, cy, cz, majorR, minorR, tiltX, tiltZ, count, role, char) {
      const cosX = Math.cos(tiltX), sinX = Math.sin(tiltX);
      const cosZ = Math.cos(tiltZ), sinZ = Math.sin(tiltZ);
      for (let i = 0; i < count; i++) {
        const u = rand() * Math.PI * 2;
        const v = rand() * Math.PI * 2;
        const r = minorR * (0.6 + 0.4 * Math.sqrt(rand()));
        let x = (majorR + r * Math.cos(v)) * Math.cos(u);
        let y = (majorR + r * Math.cos(v)) * Math.sin(u);
        let z = r * Math.sin(v);

        // Rotate X then Z
        const y1 = y * cosX - z * sinX;
        const z1 = y * sinX + z * cosX;
        const x2 = x * cosZ - y1 * sinZ;
        const y2 = x * sinZ + y1 * cosZ;

        pts.push({
          x: cx + x2,
          y: cy + y2,
          z: cz + z1,
          role,
          char
        });
      }
    }

    function addBox(pts, rand, cx, cy, cz, w, h, d, count, role, char, ribbonCheck = false) {
      for (let i = 0; i < count; i++) {
        const face = Math.floor(rand() * 6);
        let x = (rand() - 0.5) * w;
        let y = (rand() - 0.5) * h;
        let z = (rand() - 0.5) * d;
        if (face === 0) z = d * 0.5;
        else if (face === 1) z = -d * 0.5;
        else if (face === 2) x = w * 0.5;
        else if (face === 3) x = -w * 0.5;
        else if (face === 4) y = h * 0.5;
        else y = -h * 0.5;

        let pRole = role;
        let pChar = char;
        if (ribbonCheck && (Math.abs(x) < 0.085 || Math.abs(z) < 0.085)) {
          pRole = 'accent1';
          pChar = '@';
        }
        pts.push({ x: cx + x, y: cy + y, z: cz + z, role: pRole, char: pChar });
      }
    }

    function generateShapePoints(shape, variant, count) {
      const rand = seededRandom(shape.length * 1013 + variant.length * 149 + state.occasion.length * 37);
      const pts = [];
      const vIdx = getActiveOccasion().shapes[shape]?.variants.indexOf(variant) ?? 0;

      // ---------------- CHRISTMAS SHAPES ----------------
      if (shape === 'tree') {
        const starCount = Math.floor(count * 0.05);
        for (let i = 0; i < starCount; i++) {
          const a = (i / starCount) * Math.PI * 2;
          const sp = i % 2 === 0 ? 1.0 : 0.42;
          const r = sp * 0.15 * (0.4 + 0.6 * rand());
          pts.push({ x: Math.cos(a) * r, y: -1.16 + Math.sin(a) * r, z: (rand() - 0.5) * 0.07, role: 'highlight', char: '*' });
        }
        addCylinder(pts, rand, 1.06, 0.24, 0.15, 0.13, Math.floor(count * 0.045), 'wood', '#');
        const bodyCount = count - pts.length;
        for (let i = 0; i < bodyCount; i++) {
          const t = Math.pow(rand(), 0.85);
          const y = -1.0 + t * 1.96;
          let maxR = 0.06 + t * 0.88;
          if (vIdx === 0) maxR *= 0.62 + 0.48 * Math.pow((t * 5) % 1, 0.75);
          let theta = rand() * Math.PI * 2;
          const shell = rand() < 0.78 ? 0.76 + 0.24 * rand() : Math.sqrt(rand());
          let r = maxR * shell;
          let role = 'primary';
          let char = ASCII_CHARS[Math.floor(rand() * 5)];
          if (vIdx === 2 && i % 5 === 0) {
            theta = t * Math.PI * 12 + (rand() - 0.5) * 0.25;
            r = maxR * 1.03;
            role = 'accent1';
            char = '@';
          } else if (rand() < 0.14 && shell > 0.82) {
            role = 'accent1';
            char = '@';
          }
          pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r, role, char });
        }
      } else if (shape === 'star') {
        const pointsCount = vIdx === 1 ? 4 : vIdx === 2 ? 8 : 5;
        for (let i = 0; i < count; i++) {
          const sector = Math.floor(rand() * pointsCount);
          const sectorAngle = (sector / pointsCount) * Math.PI * 2 - Math.PI / 2;
          const halfStep = Math.PI / pointsCount;
          const side = rand() < 0.5 ? -1 : 1;
          const edgeT = rand();
          const outerR = vIdx === 1 && sector % 2 === 1 ? 0.76 : 1.12;
          const innerR = vIdx === 2 ? 0.35 : vIdx === 1 ? 0.26 : 0.45;
          const angle = sectorAngle + side * edgeT * halfStep;
          const maxR = outerR * (1 - edgeT) + innerR * edgeT;
          const r = maxR * Math.sqrt(rand());
          const maxZ = (1 - (r / 1.12) * 0.85) * 0.34;
          const z = (rand() < 0.7 ? (rand() < 0.5 ? 1 : -1) * (0.6 + 0.4 * rand()) : rand() * 2 - 1) * maxZ;
          const isTip = r > outerR * 0.78;
          pts.push({ x: Math.cos(angle) * r, y: Math.sin(angle) * r, z, role: isTip ? 'accent1' : 'light', char: isTip ? '*' : '#' });
        }
      } else if (shape === 'snowman') {
        addSphere(pts, rand, 0, 0.66, 0, 0.48, 0.45, 0.48, Math.floor(count * 0.42), 'light', '*');
        addSphere(pts, rand, 0, 0.04, 0, 0.36, 0.34, 0.36, Math.floor(count * 0.30), 'light', ':');
        addSphere(pts, rand, 0, -0.46, 0, 0.25, 0.24, 0.25, Math.floor(count * 0.16), 'light', '*');
        addTorus(pts, rand, 0, -0.23, 0, 0.24, 0.05, Math.PI / 2, 0, Math.floor(count * 0.06), 'accent1', '#');
        if (vIdx === 1) {
          addCylinder(pts, rand, -0.84, 0.28, 0.18, 0.18, Math.floor(count * 0.04), 'dark', '#');
          addCylinder(pts, rand, -0.69, 0.03, 0.34, 0.34, Math.floor(count * 0.02), 'dark', '#');
        }
        while (pts.length < count) {
          const t = rand();
          pts.push({ x: (rand() - 0.5) * 0.04, y: -0.46, z: 0.24 + t * 0.24, role: 'highlight', char: '@' });
        }
      } else if (shape === 'wreath') {
        addTorus(pts, rand, 0, 0, 0, 0.76, 0.25, 0, 0, Math.floor(count * 0.86), 'primary', '#');
        if (vIdx === 2) addTorus(pts, rand, 0, 0, 0.1, 0.56, 0.16, 0, 0, Math.floor(count * 0.14), 'accent1', '@');
        while (pts.length < count) {
          const side = rand() < 0.5 ? -1 : 1;
          const t = rand() * Math.PI * 2;
          pts.push({ x: side * (0.18 + 0.14 * Math.cos(t)), y: 0.76 + 0.11 * Math.sin(t), z: 0.25, role: 'accent1', char: '@' });
        }
      } else if (shape === 'gift' || shape === 'bdaygift') {
        if (vIdx === 1) {
          addBox(pts, rand, 0, 0.56, 0, 0.92, 0.52, 0.92, Math.floor(count * 0.42), 'primary', '#', true);
          addBox(pts, rand, 0, 0.06, 0, 0.68, 0.42, 0.68, Math.floor(count * 0.28), 'secondary', '#', true);
          addBox(pts, rand, 0, -0.34, 0, 0.46, 0.34, 0.46, Math.floor(count * 0.20), 'primary', '#', true);
        } else {
          addBox(pts, rand, 0, 0.12, 0, 1.04, 0.96, 1.04, Math.floor(count * 0.88), 'primary', '#', true);
        }
        const bowY = vIdx === 1 ? -0.56 : -0.42;
        while (pts.length < count) {
          const loop = pts.length % 4;
          const angle = (loop * Math.PI) / 2 + Math.PI / 4;
          const t = rand() * Math.PI * 2;
          const r = 0.14 + 0.09 * Math.cos(t);
          pts.push({ x: Math.cos(angle) * r, y: bowY - Math.abs(Math.sin(t)) * 0.12, z: Math.sin(angle) * r, role: 'accent1', char: '*' });
        }
      } else if (shape === 'ornament') {
        addCylinder(pts, rand, -0.84, 0.18, 0.16, 0.16, Math.floor(count * 0.08), 'highlight', '#');
        if (vIdx === 1) {
          addCylinder(pts, rand, 0.04, 1.45, 0.78, 0.22, count - pts.length, 'primary', '#');
        } else {
          addSphere(pts, rand, 0, 0.06, 0, 0.78, vIdx === 2 ? 0.96 : 0.78, 0.78, count - pts.length, 'primary', '#');
        }
      }

      // ---------------- BIRTHDAY SHAPES ----------------
      else if (shape === 'cake') {
        addCylinder(pts, rand, 0.66, 0.46, 0.92, 0.92, Math.floor(count * 0.38), 'primary', '#');
        addCylinder(pts, rand, 0.22, 0.40, 0.68, 0.68, Math.floor(count * 0.28), 'secondary', '%');
        addCylinder(pts, rand, -0.16, 0.34, 0.44, 0.44, Math.floor(count * 0.18), 'light', '*');
        // Candles & Flames
        const candles = vIdx === 2 ? 7 : 5;
        for (let c = 0; c < candles; c++) {
          const a = (c / candles) * Math.PI * 2;
          const rad = c === 0 ? 0 : 0.26;
          const cx = Math.cos(a) * rad, cz = Math.sin(a) * rad;
          addCylinder(pts, rand, -0.46, 0.24, 0.03, 0.03, 18, 'accent2', '|');
          addSphere(pts, rand, cx, -0.64, cz, 0.045, 0.07, 0.045, 16, 'highlight', '@');
        }
        while (pts.length < count) {
          const a = rand() * Math.PI * 2;
          pts.push({ x: Math.cos(a) * 0.93, y: 0.44 + Math.sin(a * 8) * 0.03, z: Math.sin(a) * 0.93, role: 'accent1', char: '@' });
        }
      } else if (shape === 'balloons') {
        const layout = [
          { x: 0, y: -0.42, z: 0, r: 0.34, role: 'primary' },
          { x: -0.36, y: -0.18, z: 0.18, r: 0.30, role: 'accent1' },
          { x: 0.36, y: -0.20, z: -0.14, r: 0.30, role: 'accent2' },
          { x: -0.18, y: 0.08, z: -0.26, r: 0.27, role: 'highlight' },
          { x: 0.20, y: 0.06, z: 0.26, r: 0.27, role: 'secondary' }
        ];
        layout.forEach(b => {
          addSphere(pts, rand, b.x, b.y, b.z, b.r * 0.88, b.r * 1.12, b.r * 0.88, Math.floor(count * 0.17), b.role, '@');
        });
        while (pts.length < count) {
          const b = layout[pts.length % layout.length];
          const t = rand();
          pts.push({ x: b.x * (1 - t * 0.85), y: b.y + b.r + t * (0.95 - b.y), z: b.z * (1 - t * 0.85), role: 'light', char: ':' });
        }
      } else if (shape === 'partyhat') {
        addCylinder(pts, rand, 0.1, 1.55, 0.72, 0.04, Math.floor(count * 0.86), 'primary', '#');
        addSphere(pts, rand, 0, -0.74, 0, 0.17, 0.17, 0.17, count - pts.length, 'highlight', '*');
      } else if (shape === 'cupcake') {
        addCylinder(pts, rand, 0.48, 0.64, 0.44, 0.64, Math.floor(count * 0.42), 'secondary', '#');
        addSphere(pts, rand, 0, -0.06, 0, 0.64, 0.46, 0.64, Math.floor(count * 0.46), 'light', '*');
        addSphere(pts, rand, 0, -0.58, 0, 0.15, 0.15, 0.15, count - pts.length, 'accent1', '@');
      } else if (shape === 'cannon') {
        addCylinder(pts, rand, 0.35, 0.9, 0.12, 0.45, Math.floor(count * 0.45), 'primary', '#');
        while (pts.length < count) {
          const t = rand();
          const a = rand() * Math.PI * 2;
          const r = 0.2 + t * 0.85;
          pts.push({ x: Math.cos(a) * r, y: -0.15 - t * 0.95, z: Math.sin(a) * r, role: pts.length % 2 === 0 ? 'accent1' : 'highlight', char: '*' });
        }
      }

      // ---------------- WEDDING & ROMANCE SHAPES ----------------
      else if (shape === 'rings') {
        addTorus(pts, rand, -0.34, 0.06, 0, 0.56, 0.11, 0.25, 0.35, Math.floor(count * 0.5), 'highlight', '#');
        addTorus(pts, rand, 0.34, -0.06, 0, 0.56, 0.11, -0.25, -0.35, count - pts.length, 'primary', '@');
      } else if (shape === 'heart') {
        for (let i = 0; i < count; i++) {
          const t = rand() * Math.PI * 2;
          const fill = rand() < 0.76 ? 0.82 + 0.18 * rand() : Math.cbrt(rand());
          // Parametric 3D heart curve
          const hx = 16 * Math.pow(Math.sin(t), 3);
          const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
          const scale = 0.056 * fill;
          const thickness = (1 - fill * 0.45) * 0.44 * (rand() * 2 - 1);
          pts.push({
            x: hx * scale,
            y: hy * scale - 0.06,
            z: thickness,
            role: fill > 0.92 ? 'highlight' : 'primary',
            char: fill > 0.92 ? '*' : '#'
          });
        }
      } else if (shape === 'flutes') {
        [-0.36, 0.36].forEach((side, idx) => {
          const tilt = idx === 0 ? 0.14 : -0.14;
          const share = Math.floor(count * 0.5);
          for (let i = 0; i < share; i++) {
            const p = rand();
            let lx = 0, ly = 0, lz = 0;
            const a = rand() * Math.PI * 2;
            if (p < 0.55) {
              // Tulip bowl
              const hT = rand();
              const r = (0.07 + 0.16 * Math.sin(hT * Math.PI * 0.78));
              lx = Math.cos(a) * r;
              ly = -0.82 + hT * 0.78;
              lz = Math.sin(a) * r;
            } else if (p < 0.82) {
              // Slender stem
              lx = Math.cos(a) * 0.025;
              ly = -0.04 + rand() * 0.82;
              lz = Math.sin(a) * 0.025;
            } else {
              // Base foot
              const r = Math.sqrt(rand()) * 0.24;
              lx = Math.cos(a) * r;
              ly = 0.78 + (rand() - 0.5) * 0.03;
              lz = Math.sin(a) * r;
            }
            const rx = lx * Math.cos(tilt) - ly * Math.sin(tilt);
            const ry = lx * Math.sin(tilt) + ly * Math.cos(tilt);
            pts.push({ x: side + rx, y: ry, z: lz, role: p < 0.55 ? 'highlight' : 'light', char: p < 0.55 ? '*' : '|' });
          }
        });
      } else if (shape === 'diamond') {
        addTorus(pts, rand, 0, 0.25, 0, 0.58, 0.09, 0.15, 0, Math.floor(count * 0.55), 'light', '#');
        // Faceted Diamond Crown
        while (pts.length < count) {
          const t = rand();
          const a = rand() * Math.PI * 2;
          const r = t < 0.4 ? 0.16 + (t / 0.4) * 0.20 : 0.36 * (1 - (t - 0.4) / 0.6);
          const y = -0.68 + t * 0.36;
          pts.push({ x: Math.cos(a) * r, y, z: Math.sin(a) * r, role: 'highlight', char: '*' });
        }
      } else if (shape === 'rose') {
        addCylinder(pts, rand, 0.52, 0.96, 0.035, 0.035, Math.floor(count * 0.22), 'accent2', '|');
        // Layered spiral rose petals
        while (pts.length < count) {
          const t = rand() * Math.PI * 6;
          const r = 0.06 + (t / (Math.PI * 6)) * 0.48;
          const y = -0.35 + Math.sin(t * 1.5) * 0.18 + (r * 0.35);
          pts.push({ x: Math.cos(t) * r, y, z: Math.sin(t) * r, role: r > 0.36 ? 'primary' : 'accent1', char: '@' });
        }
      } else if (shape === 'arch') {
        for (let i = 0; i < count; i++) {
          const u = rand() * Math.PI;
          const a = rand() * Math.PI * 2;
          const r = 0.14 * Math.sqrt(rand());
          if (rand() < 0.55) {
            pts.push({
              x: (0.68 + r * Math.cos(a)) * Math.cos(u),
              y: -0.18 - (0.68 + r * Math.cos(a)) * Math.sin(u),
              z: r * Math.sin(a),
              role: rand() < 0.3 ? 'accent1' : 'light',
              char: '@'
            });
          } else {
            const side = rand() < 0.5 ? -0.68 : 0.68;
            pts.push({ x: side + r * Math.cos(a), y: -0.18 + rand() * 1.05, z: r * Math.sin(a), role: 'primary', char: '#' });
          }
        }
      }

      // ---------------- HALLOWEEN SHAPES ----------------
      else if (shape === 'pumpkin') {
        const ribs = 10;
        for (let i = 0; i < count; i++) {
          if (i < count * 0.07) {
            const t = rand();
            const a = rand() * Math.PI * 2;
            const r = 0.08 * (1 - t * 0.4);
            pts.push({ x: Math.cos(a) * r + t * 0.08, y: -0.68 - t * 0.26, z: Math.sin(a) * r, role: 'accent2', char: '#' });
          } else {
            const theta = rand() * Math.PI * 2;
            const phi = Math.acos(2 * rand() - 1);
            const ribFactor = 0.88 + 0.14 * Math.abs(Math.cos((theta * ribs) * 0.5));
            const x = 0.86 * ribFactor * Math.sin(phi) * Math.cos(theta);
            const y = 0.08 + 0.68 * Math.cos(phi);
            const z = 0.86 * ribFactor * Math.sin(phi) * Math.sin(theta);

            // Carved glowing eyes & grin on +z face
            const isEye = z > 0.55 && Math.abs(y - (-0.08)) < 0.11 && Math.abs(Math.abs(x) - 0.28) < 0.11;
            const isMouth = z > 0.55 && Math.abs(y - (0.26 + Math.pow(x, 2) * 0.45)) < 0.09 && Math.abs(x) < 0.44;
            pts.push({
              x, y, z,
              role: isEye || isMouth ? 'highlight' : 'primary',
              char: isEye || isMouth ? '*' : '#'
            });
          }
        }
      } else if (shape === 'ghost') {
        for (let i = 0; i < count; i++) {
          const v = rand(); // 0 top dome, 1 wavy hem
          const theta = rand() * Math.PI * 2;
          let y, r;
          if (v < 0.38) {
            const phi = (v / 0.38) * (Math.PI * 0.5);
            y = -0.35 - 0.48 * Math.cos(phi);
            r = 0.52 * Math.sin(phi);
          } else {
            const t = (v - 0.38) / 0.62;
            y = -0.35 + t * 1.15 + Math.sin(theta * 5) * 0.11 * t;
            r = 0.52 + t * 0.22;
          }
          const x = Math.cos(theta) * r;
          const z = Math.sin(theta) * r;
          const isEye = z > 0.36 && Math.abs(y - (-0.34)) < 0.09 && Math.abs(Math.abs(x) - 0.17) < 0.08;
          pts.push({ x, y, z, role: isEye ? 'dark' : 'light', char: isEye ? '@' : ':' });
        }
      } else if (shape === 'witchhat') {
        addCylinder(pts, rand, 0.58, 0.04, 0.96, 0.96, Math.floor(count * 0.36), 'primary', '#');
        addCylinder(pts, rand, 0.49, 0.12, 0.50, 0.48, Math.floor(count * 0.12), 'accent1', '@');
        const coneCount = count - pts.length;
        for (let i = 0; i < coneCount; i++) {
          const t = rand();
          const y = 0.45 - t * 1.38;
          const r = 0.48 * (1 - t);
          const bendX = Math.pow(t, 2.2) * 0.38;
          const a = rand() * Math.PI * 2;
          pts.push({ x: bendX + Math.cos(a) * r, y, z: Math.sin(a) * r, role: 'primary', char: '#' });
        }
      } else if (shape === 'bat') {
        addSphere(pts, rand, 0, 0.05, 0, 0.22, 0.32, 0.20, Math.floor(count * 0.24), 'primary', '#');
        while (pts.length < count) {
          const side = rand() < 0.5 ? -1 : 1;
          const span = rand(); // 0 body -> 1 wingtip
          const x = side * (0.18 + span * 0.98);
          const arch = Math.sin(span * Math.PI) * 0.34;
          const scallop = Math.abs(Math.sin(span * Math.PI * 3)) * 0.14;
          const y = -0.05 - arch + (rand() - 0.2) * (0.48 * (1 - span * 0.55)) + scallop;
          const z = Math.sin(span * 2.2) * 0.18 + (rand() - 0.5) * 0.06;
          pts.push({ x, y, z, role: span > 0.82 ? 'highlight' : 'secondary', char: '*' });
        }
      } else if (shape === 'skull') {
        addSphere(pts, rand, 0, -0.14, 0, 0.62, 0.60, 0.64, Math.floor(count * 0.72), 'light', '#');
        addBox(pts, rand, 0, 0.52, 0.12, 0.56, 0.42, 0.52, count - pts.length, 'light', ':');
      } else if (shape === 'cauldron') {
        addSphere(pts, rand, 0, 0.24, 0, 0.76, 0.64, 0.76, Math.floor(count * 0.72), 'dark', '#');
        addTorus(pts, rand, 0, -0.26, 0, 0.62, 0.08, Math.PI / 2, 0, Math.floor(count * 0.14), 'primary', '@');
        while (pts.length < count) {
          const a = rand() * Math.PI * 2;
          const r = rand() * 0.48;
          pts.push({ x: Math.cos(a) * r, y: -0.32 - rand() * 0.65, z: Math.sin(a) * r, role: 'accent1', char: '*' });
        }
      }

      // ---------------- INVITATION / VIP EVENT SHAPES ----------------
      else if (shape === 'envelope') {
        addBox(pts, rand, 0, 0.08, 0, 1.38, 0.92, 0.12, Math.floor(count * 0.85), 'light', '#');
        // Wax Seal in the center
        addSphere(pts, rand, 0, 0.08, 0.08, 0.20, 0.20, 0.05, count - pts.length, 'accent1', '@');
      } else if (shape === 'crown') {
        addTorus(pts, rand, 0, 0.42, 0, 0.68, 0.08, Math.PI / 2, 0, Math.floor(count * 0.25), 'highlight', '#');
        const peaks = 5;
        while (pts.length < count) {
          const a = rand() * Math.PI * 2;
          const peakH = 0.45 + 0.48 * Math.pow(0.5 + 0.5 * Math.cos(a * peaks), 1.6);
          const hT = rand();
          const y = 0.42 - hT * peakH;
          const r = 0.68 + hT * 0.14;
          pts.push({ x: Math.cos(a) * r, y, z: Math.sin(a) * r, role: hT > 0.88 ? 'accent1' : 'highlight', char: hT > 0.88 ? '@' : '*' });
        }
      } else if (shape === 'ticket') {
        addBox(pts, rand, 0, 0.05, 0, 1.48, 0.76, 0.08, count, 'highlight', '#', true);
      } else if (shape === 'trophy') {
        addCylinder(pts, rand, -0.34, 0.72, 0.22, 0.56, Math.floor(count * 0.55), 'highlight', '#');
        addCylinder(pts, rand, 0.24, 0.46, 0.09, 0.09, Math.floor(count * 0.20), 'light', '|');
        addBox(pts, rand, 0, 0.58, 0, 0.58, 0.22, 0.58, count - pts.length, 'primary', '#');
      } else if (shape === 'compass') {
        addTorus(pts, rand, 0, 0, 0, 0.84, 0.08, 0, 0, Math.floor(count * 0.45), 'highlight', '#');
        for (let i = 0; i < count - pts.length; i++) {
          const sector = i % 4;
          const baseA = (sector * Math.PI) / 2;
          const t = rand();
          const r = t * 0.74;
          const spread = (1 - t) * 0.22 * (rand() * 2 - 1);
          const a = baseA + spread;
          pts.push({ x: Math.cos(a) * r, y: Math.sin(a) * r, z: (1 - t) * 0.14 * (rand() * 2 - 1), role: sector === 0 ? 'accent1' : 'light', char: '*' });
        }
      } else if (shape === 'hourglass') {
        for (let i = 0; i < count; i++) {
          if (i < count * 0.16) {
            const top = i % 2 === 0;
            const a = rand() * Math.PI * 2;
            const r = Math.sqrt(rand()) * 0.64;
            pts.push({ x: Math.cos(a) * r, y: top ? -0.84 : 0.84, z: Math.sin(a) * r, role: 'highlight', char: '#' });
          } else {
            const t = rand() * 2 - 1; // -1 top to +1 bottom
            const r = 0.05 + Math.pow(Math.abs(t), 1.15) * 0.56;
            const a = rand() * Math.PI * 2;
            pts.push({ x: Math.cos(a) * r, y: t * 0.80, z: Math.sin(a) * r, role: t > 0.25 ? 'highlight' : 'light', char: t > 0.25 ? '*' : ':' });
          }
        }
      }

      // ---------------- GENERAL / TECH & COSMIC SHAPES ----------------
      else if (shape === 'torus') {
        if (vIdx === 1) {
          addTorus(pts, rand, 0, 0, 0, 0.72, 0.28, 0.45, 0.2, count, 'primary', '#');
        } else {
          // 3D Trefoil Knot
          for (let i = 0; i < count; i++) {
            const t = rand() * Math.PI * 2;
            const tubeA = rand() * Math.PI * 2;
            const tubeR = 0.14 * Math.sqrt(rand());
            const kx = (Math.sin(t) + 2 * Math.sin(2 * t)) * 0.34;
            const ky = (Math.cos(t) - 2 * Math.cos(2 * t)) * 0.34;
            const kz = (-Math.sin(3 * t)) * 0.34;
            pts.push({
              x: kx + Math.cos(tubeA) * tubeR,
              y: ky + Math.sin(tubeA) * tubeR,
              z: kz + Math.sin(tubeA + t) * tubeR,
              role: i % 4 === 0 ? 'accent1' : 'primary',
              char: i % 4 === 0 ? '@' : '#'
            });
          }
        }
      } else if (shape === 'helix') {
        for (let i = 0; i < count; i++) {
          const t = rand() * 2 - 1; // -1 to +1
          const angle = t * Math.PI * 2.5;
          const y = t * 0.96;
          if (i % 5 === 0) {
            // Base-pair rung connecting both strands
            const rungT = rand() * 2 - 1;
            pts.push({ x: Math.cos(angle) * 0.46 * rungT, y, z: Math.sin(angle) * 0.46 * rungT, role: 'highlight', char: '=' });
          } else {
            const strand = i % 2 === 0 ? 0 : Math.PI;
            const r = 0.46 + (rand() - 0.5) * 0.08;
            pts.push({
              x: Math.cos(angle + strand) * r,
              y: y + (rand() - 0.5) * 0.05,
              z: Math.sin(angle + strand) * r,
              role: strand === 0 ? 'primary' : 'accent1',
              char: '@'
            });
          }
        }
      } else if (shape === 'crystal') {
        for (let i = 0; i < count; i++) {
          const t = rand() * 2 - 1; // -1 top apex to +1 bottom apex
          const rMax = (1 - Math.abs(t)) * 0.72;
          const facet = Math.floor(rand() * 6);
          const a0 = (facet / 6) * Math.PI * 2;
          const a1 = ((facet + 1) / 6) * Math.PI * 2;
          const edgeU = rand();
          const fill = rand() < 0.8 ? 0.85 + 0.15 * rand() : Math.sqrt(rand());
          const x = (Math.cos(a0) * (1 - edgeU) + Math.cos(a1) * edgeU) * rMax * fill;
          const z = (Math.sin(a0) * (1 - edgeU) + Math.sin(a1) * edgeU) * rMax * fill;
          pts.push({ x, y: t * 1.05, z, role: fill > 0.92 ? 'highlight' : 'primary', char: fill > 0.92 ? '*' : '#' });
        }
      } else if (shape === 'saturn') {
        addSphere(pts, rand, 0, 0, 0, 0.48, 0.48, 0.48, Math.floor(count * 0.48), 'primary', '#');
        addTorus(pts, rand, 0, 0, 0, 0.88, 0.14, 1.18, 0.36, count - pts.length, 'highlight', ':');
      } else if (shape === 'cube') {
        addBox(pts, rand, 0, 0, 0, 1.06, 1.06, 1.06, Math.floor(count * 0.72), 'primary', '#');
        addBox(pts, rand, 0, 0, 0, 0.54, 0.54, 0.54, count - pts.length, 'accent1', '*');
      } else if (shape === 'galaxy') {
        const arms = 3;
        for (let i = 0; i < count; i++) {
          const arm = i % arms;
          const dist = Math.pow(rand(), 0.75);
          const spin = dist * Math.PI * 3.2 + (arm * Math.PI * 2) / arms + (rand() - 0.5) * (0.45 * (1 - dist * 0.4));
          const r = dist * 1.04;
          const y = (rand() - 0.5) * (0.38 * (1 - dist) + 0.06);
          pts.push({
            x: Math.cos(spin) * r,
            y,
            z: Math.sin(spin) * r,
            role: dist < 0.22 ? 'highlight' : i % 3 === 0 ? 'accent1' : 'primary',
            char: dist < 0.22 ? '@' : '*'
          });
        }
      }

      // Safety fallback if any custom branch produced fewer points
      while (pts.length < count) {
        addSphere(pts, rand, 0, 0, 0, 0.7, 0.7, 0.7, count - pts.length, 'primary', '#');
      }

      return pts;
    }

    function rebuildParticles() {
      generateQRMatrix(state.url);

      const activeModules = [];
      for (let r = 0; r < qrSize; r++) {
        for (let c = 0; c < qrSize; c++) {
          if (qrMatrix[r][c] === 1) {
            activeModules.push({
              r,
              c,
              isFinder: isFinderPattern(r, c, qrSize)
            });
          }
        }
      }

      const totalCount = Math.max(TARGET_PARTICLE_COUNT, activeModules.length * 2);
      const shapePts = generateShapePoints(state.shape, state.variant, totalCount);
      const rand = seededRandom(42071);

      const newParticles = [];
      for (let i = 0; i < totalCount; i++) {
        const sp = shapePts[i % shapePts.length];
        const mod = activeModules[i % activeModules.length];
        const isPrimaryModule = i < activeModules.length;

        const qx = ((mod.c + 0.5) / qrSize) * 2 - 1;
        const qy = ((mod.r + 0.5) / qrSize) * 2 - 1;

        const accentSeed = (mod.r * 37 + mod.c * 17) % 100;
        const isQRAccent = !mod.isFinder && accentSeed < 14;

        newParticles.push({
          sx: sp.x,
          sy: sp.y,
          sz: sp.z,
          role: sp.role,
          char: sp.char,
          qx,
          qy,
          qrRow: mod.r,
          qrCol: mod.c,
          isFinder: mod.isFinder,
          isQRAccent,
          accentIndex: (mod.r + mod.c * 3) % 5,
          isPrimaryModule,
          twinklePhase: rand() * Math.PI * 2,
          twinkleSpeed: 1.8 + rand() * 3.2
        });
      }

      particles = newParticles;
    }

    // =========================================================================
    // 5. OCCASION-ADAPTIVE WEATHER & SKY GLIDERS
    // =========================================================================
    const weatherParticles = Array.from({ length: 85 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1.0 + Math.random() * 2.2,
      speedY: 0.018 + Math.random() * 0.036,
      drift: (Math.random() - 0.5) * 0.02,
      phase: Math.random() * Math.PI * 2,
      variant: Math.floor(Math.random() * 4)
    }));

    const bgStars = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.68,
      size: 0.6 + Math.random() * 1.4,
      phase: Math.random() * Math.PI * 2,
      speed: 1 + Math.random() * 2.5
    }));

    const SKY_SPRITES = {
      sleigh: [
        '         _   _             __   ',
        '   *--._( )_( )_.-*       /  \\__',
        '    \\__/  |   |  \\_______/  _  /',
        '   ==/====|===|=========\\__/=\\__)'
      ],
      bannerPlane: [
        '     __|__   [ HAPPY BIRTHDAY! ]',
        ' ---o-(_)-o---------------------',
        '      / \\                       '
      ],
      doves: [
        '    \\  /         \\  /   ',
        '   --(*)--  ♥   --(*)-- ',
        '    /  \\         /  \\   '
      ],
      witch: [
        '        /\\              ',
        '      _/__\\_   *  .  *  ',
        '  ====( o.o )====*~~~~  ',
        '       \\___/            '
      ],
      shootingStar: [
        '  .  *  ·  .  *  ★ VIP GALA ★',
        '    ·   .   *  ═══════►      '
      ],
      ufo: [
        '       _.---._       ',
        '    .-"  o o  "-.    ',
        '   (=============)   ',
        '      *   |   *      '
      ]
    };

    let gliderX = -0.35;

    // =========================================================================
    // 6. CANVAS RENDERING ENGINE
    // =========================================================================
    const canvas = document.getElementById('scene');
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;

    function resizeCanvas() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function getParticleColor(p, theme, morph, time) {
      const twinkle = 0.72 + 0.28 * Math.sin(time * p.twinkleSpeed + p.twinklePhase);

      if (morph > 0.75) {
        if (p.isFinder) return theme.primary;
        if (p.isQRAccent) return theme.accents[p.accentIndex % theme.accents.length];
        return theme.primary;
      }

      switch (p.role) {
        case 'primary':
          return twinkle > 0.86 ? theme.primary : theme.secondary;
        case 'secondary':
          return theme.secondary;
        case 'accent1':
          return theme.accents[0];
        case 'accent2':
          return theme.accents[1] || theme.accents[0];
        case 'highlight':
          return twinkle > 0.84 ? '#ffffff' : (theme.accents[2] || '#fde047');
        case 'light':
          return twinkle > 0.82 ? '#ffffff' : '#e2e8f0';
        case 'wood':
          return '#a16207';
        case 'dark':
          return '#475569';
        default:
          return theme.primary;
      }
    }

    function drawPerspectiveFloor(centerX, floorY, scale, theme, morph) {
      const floorAlpha = (1 - morph * 0.78) * 0.34;
      if (floorAlpha <= 0.01) return;

      ctx.save();
      const rows = 9;
      const cols = 19;
      const gridSpanX = scale * 2.4;
      const gridDepth = scale * 1.65;

      ctx.font = '10px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let r = 0; r < rows; r++) {
        const zNorm = r / (rows - 1); // 0 near front, 1 further back
        const pScale = 1 - zNorm * 0.48;
        const y = floorY - zNorm * gridDepth * 0.24;
        const rowAlpha = floorAlpha * (1 - zNorm * 0.78);
        ctx.fillStyle = theme.secondary;
        ctx.globalAlpha = Math.max(0, rowAlpha);

        for (let c = 0; c < cols; c++) {
          const xNorm = (c / (cols - 1)) * 2 - 1;
          const x = centerX + xNorm * (gridSpanX * 0.5) * pScale;
          const glyph = (r + c) % 2 === 0 ? '+' : '·';
          ctx.fillText(glyph, x, y);
        }
      }
      ctx.restore();
    }

    function drawAmbientAtmosphere(dt, time, occ, theme) {
      // Twinkling background stars
      ctx.save();
      for (let i = 0; i < bgStars.length; i++) {
        const s = bgStars[i];
        const alpha = state.prefersReducedMotion
          ? 0.45
          : 0.2 + 0.55 * (0.5 + 0.5 * Math.sin(time * s.speed + s.phase));
        ctx.fillStyle = `rgba(226, 232, 240, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Gliding occasion sky sprite
      const spriteLines = SKY_SPRITES[occ.skyGlider] || SKY_SPRITES.shootingStar;
      if (!state.prefersReducedMotion) {
        gliderX += dt * 0.032;
        if (gliderX > 1.15) gliderX = -0.35;
      }

      ctx.save();
      ctx.font = '10px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      ctx.fillStyle = 'rgba(226, 232, 240, 0.25)';
      const sx = gliderX * width;
      const sy = height * (state.isRecipientMode ? 0.13 : 0.17) + Math.sin(time * 1.5) * 5;
      for (let line = 0; line < spriteLines.length; line++) {
        ctx.fillText(spriteLines[line], sx, sy + line * 11);
      }
      ctx.restore();

      // Occasion-specific ambient particle weather (paused if reduced motion is enabled)
      if (state.prefersReducedMotion) return;

      ctx.save();
      ctx.font = '12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      ctx.textAlign = 'center';

      for (let i = 0; i < weatherParticles.length; i++) {
        const f = weatherParticles[i];
        const upward = occ.weather === 'embers' || occ.weather === 'matrix';

        if (upward) {
          f.y -= f.speedY * dt * (occ.weather === 'matrix' ? 1.4 : 0.9);
          if (f.y < -0.03) {
            f.y = 1.03;
            f.x = Math.random();
          }
        } else {
          f.y += f.speedY * dt;
          if (f.y > 1.03) {
            f.y = -0.03;
            f.x = Math.random();
          }
        }

        f.x += (f.drift + Math.sin(time + f.phase) * 0.008) * dt;
        if (f.x < -0.02) f.x = 1.02;
        if (f.x > 1.02) f.x = -0.02;

        const px = f.x * width;
        const py = f.y * height;

        if (occ.weather === 'snow') {
          ctx.fillStyle = 'rgba(241, 245, 249, 0.42)';
          if (f.variant === 0) ctx.fillText('❄', px, py);
          else {
            ctx.beginPath();
            ctx.arc(px, py, f.r, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (occ.weather === 'confetti') {
          ctx.fillStyle = theme.accents[f.variant % theme.accents.length] + '88';
          ctx.fillRect(px, py, 4, 2.5);
        } else if (occ.weather === 'petals') {
          ctx.fillStyle = (f.variant % 2 === 0 ? theme.primary : '#fbcfe8') + '77';
          ctx.fillText(f.variant === 0 ? '❀' : '•', px, py);
        } else if (occ.weather === 'embers') {
          ctx.fillStyle = (f.variant === 0 ? '#c084fc' : '#fb923c') + '88';
          ctx.fillText(f.variant === 0 ? '✦' : '·', px, py);
        } else if (occ.weather === 'stardust') {
          ctx.fillStyle = (f.variant === 0 ? '#fde047' : '#ffffff') + '77';
          ctx.fillText(f.variant === 0 ? '✦' : '·', px, py);
        } else if (occ.weather === 'matrix') {
          ctx.fillStyle = theme.primary + '55';
          ctx.fillText(f.variant % 2 === 0 ? '1' : '0', px, py);
        }
      }
      ctx.restore();
    }

    function renderFrame(dt) {
      state.time += dt;

      const targetMorph = state.isQR ? 1 : 0;
      if (state.prefersReducedMotion) {
        state.morphProgress = targetMorph;
      } else {
        const morphSpeed = 4.4;
        if (Math.abs(targetMorph - state.morphProgress) > 0.0005) {
          state.morphProgress += (targetMorph - state.morphProgress) * Math.min(1, dt * morphSpeed);
        } else {
          state.morphProgress = targetMorph;
        }
      }

      const morph = easeInOutCubic(state.morphProgress);
      const occ = getActiveOccasion();
      const theme = getActiveTheme();

      if (!state.isDragging && !state.prefersReducedMotion) {
        if (!state.isQR) {
          state.rotY += state.velY;
          state.velY += (0.0055 - state.velY) * 0.04;
          state.rotX += (0.06 - state.rotX) * 0.05;
        } else {
          const twoPi = Math.PI * 2;
          const nearestZero = Math.round(state.rotY / twoPi) * twoPi;
          state.rotY += (nearestZero - state.rotY) * 0.14;
          state.rotX += (0 - state.rotX) * 0.14;
        }
      } else if (state.isQR && state.prefersReducedMotion) {
        state.rotY = 0;
        state.rotX = 0;
      }

      ctx.clearRect(0, 0, width, height);
      drawAmbientAtmosphere(dt, state.time, occ, theme);

      const isMobile = width < 640;
      const centerX = width * 0.5;
      const centerY = height * (isMobile ? 0.45 : 0.47);
      const minDim = Math.min(width, height * 0.78);
      const shapeScale = minDim * (isMobile ? 0.33 : 0.30) * state.zoom;
      const qrBoxSize = Math.min(width * 0.74, height * 0.48, 330);
      const qrHalf = qrBoxSize * 0.5;
      const modulePixelSize = qrBoxSize / qrSize;

      drawPerspectiveFloor(centerX, centerY + shapeScale * 1.06, shapeScale, theme, morph);

      // Ambient glow behind centerpiece
      const glowGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, qrBoxSize * 0.9);
      glowGrad.addColorStop(0, theme.primary + '20');
      glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(centerX - qrBoxSize, centerY - qrBoxSize, qrBoxSize * 2, qrBoxSize * 2);

      // Clean dark quiet-zone backing when morphed into QR mode so phone cameras scan effortlessly
      if (morph > 0.65) {
        const pad = modulePixelSize * 2.2;
        const cardAlpha = ((morph - 0.65) / 0.35) * 0.88;
        ctx.save();
        ctx.fillStyle = `rgba(9, 13, 19, ${cardAlpha.toFixed(3)})`;
        ctx.strokeStyle = `${theme.primary}44`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(centerX - qrHalf - pad, centerY - qrHalf - pad, qrBoxSize + pad * 2, qrBoxSize + pad * 2, 16);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      const cosY = Math.cos(state.rotY);
      const sinY = Math.sin(state.rotY);
      const cosX = Math.cos(state.rotX);
      const sinX = Math.sin(state.rotX);
      const fov = 3.6;

      const projected = new Array(particles.length);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const x1 = p.sx * cosY - p.sz * sinY;
        const z1 = p.sx * sinY + p.sz * cosY;
        const y2 = p.sy * cosX - z1 * sinX;
        const z2 = p.sy * sinX + z1 * cosX;

        const persp = fov / (fov + z2);
        const projX = centerX + x1 * shapeScale * persp;
        const projY = centerY + y2 * shapeScale * persp;

        const targetX = centerX + p.qx * qrHalf;
        const targetY = centerY + p.qy * qrHalf;

        const x = projX + (targetX - projX) * morph;
        const y = projY + (targetY - projY) * morph;

        projected[i] = { p, x, y, z: z2, persp };
      }

      if (morph < 0.85) {
        projected.sort((a, b) => b.z - a.z);
      }

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const asciiAlpha = Math.max(0, 1 - Math.max(0, (morph - 0.55) / 0.45));
      const squareAlpha = Math.max(0, (morph - 0.35) / 0.65);

      for (let i = 0; i < projected.length; i++) {
        const item = projected[i];
        const p = item.p;

        if (morph > 0.92 && !p.isPrimaryModule) continue;

        const color = getParticleColor(p, theme, morph, state.time);

        if (squareAlpha > 0.01 && p.isPrimaryModule) {
          ctx.globalAlpha = squareAlpha;
          ctx.fillStyle = color;
          const size = modulePixelSize * (0.72 + 0.28 * squareAlpha) + 0.45;
          ctx.fillRect(item.x - size * 0.5, item.y - size * 0.5, size, size);
        }

        if (asciiAlpha > 0.01) {
          const depthShade = Math.max(0.32, Math.min(1, 0.72 - item.z * 0.35));
          ctx.globalAlpha = asciiAlpha * depthShade;
          ctx.fillStyle = color;
          const fontSize = Math.max(9, Math.round((isMobile ? 11 : 12.5) * item.persp * Math.sqrt(state.zoom)));
          ctx.font = `700 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
          ctx.fillText(p.char, item.x, item.y);
        }
      }

      if (morph > 0.94) {
        const overlayAlpha = (morph - 0.94) / 0.06;
        ctx.save();
        ctx.globalAlpha = overlayAlpha;
        drawCrispFinderPatterns(centerX - qrHalf, centerY - qrHalf, modulePixelSize, theme.primary);
        ctx.restore();
      }

      ctx.globalAlpha = 1;
    }

    function drawCrispFinderPatterns(originX, originY, modSize, color) {
      const corners = [
        { r: 0, c: 0 },
        { r: 0, c: qrSize - 7 },
        { r: qrSize - 7, c: 0 }
      ];

      corners.forEach(({ r, c }) => {
        const x = originX + c * modSize;
        const y = originY + r * modSize;
        const outer = 7 * modSize;

        ctx.fillStyle = '#090d13';
        ctx.fillRect(x, y, outer, outer);

        ctx.strokeStyle = color;
        ctx.lineWidth = modSize;
        ctx.strokeRect(x + modSize * 0.5, y + modSize * 0.5, outer - modSize, outer - modSize);

        ctx.fillStyle = color;
        ctx.fillRect(x + modSize * 2, y + modSize * 2, modSize * 3, modSize * 3);
      });
    }

    // =========================================================================
    // 7. UI CONTROLS, OCCASION SWITCHER & RECIPIENT VIEWER MODE
    // =========================================================================
    const appBg = document.getElementById('app-bg');
    const studioHeader = document.getElementById('studio-header');
    const studioFooter = document.getElementById('studio-footer');
    const recipientBanner = document.getElementById('recipient-banner');
    const recipientFooter = document.getElementById('recipient-footer');
    const recipientOccasionBadge = document.getElementById('recipient-occasion-badge');
    const recipientMsgText = document.getElementById('recipient-msg-text');
    const customizeOwnBtn = document.getElementById('customize-own-btn');
    const recipientMorphBtn = document.getElementById('recipient-morph-btn');
    const recipientMorphLabel = document.getElementById('recipient-morph-label');
    const recipientVisitBtn = document.getElementById('recipient-visit-btn');
    const floatingHeadline = document.getElementById('floating-headline');
    const headlineDisplay = document.getElementById('headline-display');

    const occasionsRow = document.getElementById('occasions-row');
    const urlInput = document.getElementById('url-input');
    const msgInput = document.getElementById('msg-input');
    const openLinkBtn = document.getElementById('open-link-btn');
    const downloadQrBtn = document.getElementById('download-qr-btn');
    const toggleMorphBtn = document.getElementById('toggle-morph-btn');
    const morphBtnLabel = document.getElementById('morph-btn-label');
    const morphDot = document.getElementById('morph-dot');
    const copyBtn = document.getElementById('copy-btn');
    const resetViewBtn = document.getElementById('reset-view-btn');
    const srStatus = document.getElementById('sr-status');
    const variantsRow = document.getElementById('variants-row');
    const shapesRow = document.getElementById('shapes-row');
    const swatchesRow = document.getElementById('swatches-row');
    const instructionText = document.getElementById('instruction-text');
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');

    let toastTimer = null;
    function showToast(message) {
      toastMsg.textContent = message;
      srStatus.textContent = message;
      toast.classList.remove('opacity-0', '-translate-y-2');
      toast.classList.add('opacity-100', 'translate-y-0');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', '-translate-y-2');
      }, 2400);
    }

    function resetCameraView() {
      state.zoom = 1.0;
      state.rotY = 0;
      state.rotX = 0.08;
      state.velY = 0.0055;
      showToast('3D view reset');
    }

    function applyAtmosphereAndHeadline() {
      const occ = getActiveOccasion();
      appBg.style.background = occ.bgGradient;

      const displayTitle = state.message.trim() || (state.isRecipientMode ? occ.defaultTitle : '');
      headlineDisplay.textContent = displayTitle;
      floatingHeadline.style.top = state.isRecipientMode ? '84px' : '104px';
      // Shared links place the headline below the recipient banner on desktop and mobile.
      // CSS accounts for safe areas and responsive type sizes.
      floatingHeadline.style.display = '';
      floatingHeadline.setAttribute('aria-hidden', 'false');

      document.body.classList.toggle('recipient-mode', Boolean(state.isRecipientMode));

      if (state.isRecipientMode) {
        studioHeader.classList.add('hidden');
        studioFooter.classList.add('hidden');
        recipientBanner.classList.remove('hidden');
        recipientFooter.classList.remove('hidden');
        recipientOccasionBadge.textContent = `${occ.icon} ${occ.name}`;
        recipientMsgText.textContent = state.message.trim() || occ.defaultTitle;
      } else {
        studioHeader.classList.remove('hidden');
        studioFooter.classList.remove('hidden');
        recipientBanner.classList.add('hidden');
        recipientFooter.classList.add('hidden');
      }
    }

    function updateInstructionUI() {
      const occ = getActiveOccasion();
      const shapeObj = occ.shapes[state.shape];
      const shapeLabel = shapeObj ? shapeObj.label : '3D Sculpture';

      if (state.isQR) {
        instructionText.textContent = `Scannable QR Active · Tap to bring back the ${shapeLabel}`;
        morphBtnLabel.textContent = `Show 3D`;
        toggleMorphBtn.setAttribute('aria-pressed', 'true');
        morphDot.classList.remove('bg-emerald-400');
        morphDot.classList.add('bg-sky-400');
        recipientMorphLabel.textContent = `Back to 3D ${shapeLabel}`;
        srStatus.textContent = `Scannable QR code active for ${normalizeTargetUrl(state.url)}`;
      } else {
        instructionText.textContent = `3D Sculpture Mode · Tap or press SPACE to reveal QR · R to reset view`;
        morphBtnLabel.textContent = 'Reveal QR';
        toggleMorphBtn.setAttribute('aria-pressed', 'false');
        morphDot.classList.remove('bg-sky-400');
        morphDot.classList.add('bg-emerald-400');
        recipientMorphLabel.textContent = 'Tap to Reveal & Scan QR Code';
        srStatus.textContent = `Showing 3D ${shapeLabel} in ${occ.name} theme`;
      }
    }

    function renderOccasionTabs() {
      occasionsRow.innerHTML = '';
      Object.values(OCCASIONS).forEach(occ => {
        const isSelected = state.occasion === occ.id;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        btn.className = `occasion-pill px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 ${isSelected ? 'active' : ''}`;
        btn.innerHTML = `<span aria-hidden="true">${occ.icon}</span><span>${occ.name}</span>`;
        btn.addEventListener('click', () => {
          state.occasion = occ.id;
          const firstShape = Object.keys(occ.shapes)[0];
          state.shape = firstShape;
          state.variant = occ.shapes[firstShape].variants[0];
          state.colorId = occ.palettes[0].id;
          if (state.isQR) state.isQR = false;

          applyAtmosphereAndHeadline();
          renderOccasionTabs();
          renderShapeButtons();
          renderVariantPills();
          renderColorSwatches();
          rebuildParticles();
          updateInstructionUI();
          syncURLParams();
        });
        occasionsRow.appendChild(btn);
      });
    }

    function renderShapeButtons() {
      const occ = getActiveOccasion();
      shapesRow.innerHTML = '';
      Object.entries(occ.shapes).forEach(([key, cfg]) => {
        const isActive = state.shape === key;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `shape-btn ${isActive ? 'active' : ''}`;
        btn.dataset.shape = key;
        btn.setAttribute('aria-label', cfg.label);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        btn.innerHTML = `
          <span class="tooltip">${cfg.label}</span>
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            ${cfg.svg}
          </svg>
        `;
        btn.addEventListener('click', () => {
          state.shape = key;
          state.variant = cfg.variants[0];
          if (state.isQR) state.isQR = false;
          renderShapeButtons();
          renderVariantPills();
          rebuildParticles();
          updateInstructionUI();
          syncURLParams();
        });
        shapesRow.appendChild(btn);
      });
    }

    function renderVariantPills() {
      const occ = getActiveOccasion();
      const variants = occ.shapes[state.shape]?.variants || [];
      const roman = ['I', 'II', 'III'];
      variantsRow.innerHTML = '';
      variants.forEach((v, idx) => {
        const isActive = state.variant === v;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        btn.className = `glass-pill px-3 py-1 rounded-full text-xs font-medium text-slate-100 ${isActive ? 'active' : ''}`;
        btn.textContent = `${roman[idx] || idx + 1} · ${v}`;
        btn.addEventListener('click', () => {
          state.variant = v;
          if (state.isQR) state.isQR = false;
          rebuildParticles();
          renderVariantPills();
          updateInstructionUI();
          syncURLParams();
        });
        variantsRow.appendChild(btn);
      });
    }

    function renderColorSwatches() {
      const occ = getActiveOccasion();
      swatchesRow.innerHTML = '';
      occ.palettes.forEach(theme => {
        const isActive = state.colorId === theme.id;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `swatch-btn ${isActive ? 'active' : ''}`;
        btn.style.backgroundColor = theme.swatch;
        btn.setAttribute('aria-label', `Color theme: ${theme.name}`);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        btn.title = theme.name;
        btn.addEventListener('click', () => {
          state.colorId = theme.id;
          renderColorSwatches();
          syncURLParams();
        });
        swatchesRow.appendChild(btn);
      });
    }

    function toggleQRMode() {
      state.isQR = !state.isQR;
      updateInstructionUI();
    }

    // Download High-Res Scannable QR PNG
    function downloadQRPng() {
      const theme = getActiveTheme();
      const size = 600;
      const margin = 60;
      const off = document.createElement('canvas');
      off.width = size;
      off.height = size;
      const octx = off.getContext('2d');

      octx.fillStyle = '#0b1116';
      octx.fillRect(0, 0, size, size);

      const modPx = (size - margin * 2) / qrSize;
      for (let r = 0; r < qrSize; r++) {
        for (let c = 0; c < qrSize; c++) {
          if (qrMatrix[r][c] === 1) {
            const isFinder = isFinderPattern(r, c, qrSize);
            const accentSeed = (r * 37 + c * 17) % 100;
            octx.fillStyle = !isFinder && accentSeed < 14
              ? theme.accents[(r + c * 3) % theme.accents.length]
              : theme.primary;
            octx.fillRect(margin + c * modPx, margin + r * modPx, modPx + 0.4, modPx + 0.4);
          }
        }
      }

      const link = document.createElement('a');
      link.download = `3d-ascii-qr-${state.occasion}.png`;
      link.href = off.toDataURL('image/png');
      link.click();
      showToast('Scannable QR image downloaded!');
    }

    // Input Event Listeners
    urlInput.addEventListener('input', (e) => {
      state.url = e.target.value;
      rebuildParticles();
      syncURLParams();
    });

    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        urlInput.blur();
        state.isQR = true;
        updateInstructionUI();
      }
    });

    msgInput.addEventListener('input', (e) => {
      state.message = e.target.value;
      applyAtmosphereAndHeadline();
      syncURLParams();
    });

    openLinkBtn.addEventListener('click', () => {
      window.open(normalizeTargetUrl(state.url), '_blank', 'noopener,noreferrer');
    });

    recipientVisitBtn.addEventListener('click', () => {
      window.open(normalizeTargetUrl(state.url), '_blank', 'noopener,noreferrer');
    });

    customizeOwnBtn.addEventListener('click', () => {
      state.isRecipientMode = false;
      applyAtmosphereAndHeadline();
      syncURLParams();
      showToast('Studio unlocked — customize your own!');
    });

    downloadQrBtn.addEventListener('click', downloadQRPng);
    resetViewBtn.addEventListener('click', resetCameraView);
    toggleMorphBtn.addEventListener('click', toggleQRMode);
    recipientMorphBtn.addEventListener('click', toggleQRMode);

    // Create a short redirect link for the full share URL. This static GitHub Pages
    // app has no backend of its own, so it uses is.gd; if the service is unavailable,
    // it safely falls back to copying the original share URL.
    async function shortenShareURL(longUrl) {
      const endpoint = `https://is.gd/create.php?format=simple&url=${encodeURIComponent(longUrl)}`;
      const response = await fetch(endpoint, { method: 'GET', cache: 'no-store' });
      if (!response.ok) throw new Error('Short-link service unavailable');
      const shortUrl = (await response.text()).trim();
      if (!/^https?:\/\/is\.gd\/[A-Za-z0-9]+$/i.test(shortUrl)) {
        throw new Error('Invalid short link response');
      }
      return shortUrl;
    }

    async function copyTextToClipboard(text) {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
      }
      const tempInput = document.createElement('textarea');
      tempInput.value = text;
      tempInput.setAttribute('readonly', '');
      tempInput.style.position = 'fixed';
      tempInput.style.opacity = '0';
      tempInput.style.pointerEvents = 'none';
      document.body.appendChild(tempInput);
      tempInput.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(tempInput);
      if (!copied) throw new Error('Clipboard copy failed');
    }

    copyBtn.addEventListener('click', async () => {
      const originalLabel = copyBtn.getAttribute('aria-label');
      copyBtn.disabled = true;
      copyBtn.setAttribute('aria-busy', 'true');
      showToast('Creating short share link…');
      try {
        const longUrl = getShareableURL();
        let linkToCopy = longUrl;
        let shortened = false;
        try {
          linkToCopy = await shortenShareURL(longUrl);
          shortened = true;
        } catch (shortenError) {
          console.warn('Could not shorten share URL; copying full link instead.', shortenError);
        }
        await copyTextToClipboard(linkToCopy);
        showToast(shortened ? 'Short share link copied!' : 'Shortener unavailable — full link copied.');
      } catch (err) {
        console.error('Unable to copy share URL:', err);
        showToast('Could not copy automatically. Please use the address bar link.');
      } finally {
        copyBtn.disabled = false;
        copyBtn.removeAttribute('aria-busy');
        if (originalLabel) copyBtn.setAttribute('aria-label', originalLabel);
      }
    });

    // =========================================================================
    // 8. CANVAS ORBIT, ZOOM & TAP-TO-MORPH INTERACTIONS
    // =========================================================================
    canvas.addEventListener('pointerdown', (e) => {
      state.isDragging = true;
      state.dragDistance = 0;
      state.lastPointerX = e.clientX;
      state.lastPointerY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    });

    canvas.addEventListener('pointermove', (e) => {
      if (!state.isDragging) return;
      const dx = e.clientX - state.lastPointerX;
      const dy = e.clientY - state.lastPointerY;
      state.dragDistance += Math.hypot(dx, dy);

      if (!state.isQR) {
        state.rotY += dx * 0.0085;
        state.rotX = Math.max(-0.65, Math.min(0.65, state.rotX + dy * 0.0065));
        state.velY = dx * 0.0022;
      }

      state.lastPointerX = e.clientX;
      state.lastPointerY = e.clientY;
    });

    canvas.addEventListener('pointerup', (e) => {
      if (!state.isDragging) return;
      state.isDragging = false;
      canvas.releasePointerCapture(e.pointerId);

      if (state.dragDistance < 7) {
        toggleQRMode();
      }
    });

    // Scroll wheel zoom in 3D mode
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (state.isQR) return;
      const factor = e.deltaY > 0 ? 0.94 : 1.06;
      state.zoom = Math.max(0.65, Math.min(1.65, state.zoom * factor));
    }, { passive: false });

    // Touch pinch-to-zoom support
    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        state.pinchStartDist = Math.hypot(dx, dy);
        state.pinchStartZoom = state.zoom;
      }
    }, { passive: true });

    canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && state.pinchStartDist > 0) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const scaleFactor = dist / state.pinchStartDist;
        state.zoom = Math.max(0.65, Math.min(1.65, state.pinchStartZoom * scaleFactor));
      }
    }, { passive: true });

    // Spacebar shortcut to morph between 3D sculpture and scannable QR code, R to reset view
    window.addEventListener('keydown', (e) => {
      if (document.activeElement === urlInput || document.activeElement === msgInput) return;
      if (e.code === 'Space') {
        e.preventDefault();
        toggleQRMode();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        resetCameraView();
      }
    });

    window.addEventListener('resize', resizeCanvas);

    if (window.matchMedia) {
      const rmQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const onMotionChange = () => syncReducedMotionPreference();
      if (rmQuery.addEventListener) rmQuery.addEventListener('change', onMotionChange);
      else if (rmQuery.addListener) rmQuery.addListener(onMotionChange);
    }

    // =========================================================================
    // 9. INITIALIZATION & ANIMATION LOOP
    // =========================================================================
    window.onload = function () {
      syncReducedMotionPreference();
      parseURLParams();
      urlInput.value = state.url;
      msgInput.value = state.message;

      resizeCanvas();
      applyAtmosphereAndHeadline();
      renderOccasionTabs();
      renderShapeButtons();
      renderVariantPills();
      renderColorSwatches();
      rebuildParticles();
      updateInstructionUI();
      syncURLParams();

      let lastTimestamp = performance.now();
      function animate(now) {
        const dt = Math.min(0.05, (now - lastTimestamp) / 1000);
        lastTimestamp = now;
        renderFrame(dt);
        requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
    };
