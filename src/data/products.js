import blogg1 from '../assets/Prodotti/Blogg 1.jpg'
import blogg2 from '../assets/Prodotti/Blogg 2.jpg'
import blogg3 from '../assets/Prodotti/Blogg 3.jpg'
import blogg4 from '../assets/Prodotti/Blogg 4.jpg'

import khal1b from '../assets/Prodotti/Scultura Khal 1.jpg'
import khal2 from '../assets/Prodotti/Scultura Khal 2.jpg'
import khal3 from '../assets/Prodotti/Scultura Khal 3.jpg'
import khal4 from '../assets/Prodotti/Scultura Khal 4.jpg'

import elvis1 from '../assets/Prodotti/Elvis 1.jpg'

import carbon1 from '../assets/Prodotti/Coffee table Carbon1.jpg'
import carbon2 from '../assets/Prodotti/Coffee table Carbon2.jpg'
import carbon3 from '../assets/Prodotti/Coffee table Carbon3.jpg'

import dream1 from '../assets/Prodotti/Dream divano 1.jpg'
import dream2 from '../assets/Prodotti/Divano Dream 2.jpg'

import telfs1 from '../assets/Prodotti/Tavolino Telfs.jpg'
import telfs2 from '../assets/Prodotti/Tavolino Telfs 2.jpg'

import oliveBig from '../assets/Prodotti/Vaso Olive big.jpg'
import oliveSmall from '../assets/Prodotti/Vaso Olive small.jpg'

import yat30_1 from '../assets/Prodotti/Vaso YAT  cream Ø30x52 cm.jpg'
import yat30_2 from '../assets/Prodotti/Vaso YAT 2  cream Ø30x52 cm.jpg'

import yat52_1 from '../assets/Prodotti/Vaso YAT cream Ø52x81 cm.jpg'
import yat52_2 from '../assets/Prodotti/Vaso YAT 2 cream Ø52x81 cm.jpg'
import yat52_3 from '../assets/Prodotti/Vaso YAT 3 cream Ø52x81 cm.jpg'

import julia1 from '../assets/Prodotti/Seduta da esterno Julia.jpg'
import julia2 from '../assets/Prodotti/Seduta da esterno Julia 2.jpg'

import perla1 from '../assets/Prodotti/Coffe table Perla.jpg'

import cassel1 from '../assets/Prodotti/Lampada CASSEL.jpg'
import cassel2 from '../assets/Prodotti/Lampada CASSEL 2.jpg'

import poltroncinaDream0 from '../assets/Prodotti/Poltroncina Dream 0.jpg'
import poltroncinaDream1 from '../assets/Prodotti/Poltroncina Dream.jpg'
import poltroncinaDream2 from '../assets/Prodotti/Poltroncina Dream 2.jpg'
import poltroncinaDream3 from '../assets/Prodotti/Poltroncina Dream 3.jpg'

import buffetRetro1 from '../assets/Prodotti/Buffet retro.jpg'

export const products = [
  {
    id: 1,
    category: 'Divano',
    name: 'Divano Blogg',
    description:
      'Divano 3 posti in tessuto Marshmallow, seduta trapuntata, struttura in abete massiccio, piedini in faggio tinti nero. Dimensioni: 220 x H.67 x P.104 cm.',
    price: 4650,
    priceNote: '+ consegna e montaggio',
    images: [blogg1, blogg2, blogg3, blogg4],
    en: {
      category: 'Sofa',
      name: 'Blogg Sofa',
      description:
        '3-seat sofa in Marshmallow fabric, quilted seat, solid fir frame, black-stained beech feet. Dimensions: 220 x H.67 x D.104 cm.',
      priceNote: '+ delivery and assembly',
    },
  },
  {
    id: 2,
    category: 'Decorazione',
    name: 'Scultura Khal',
    description: 'Figura decorativa in finitura cemento nero, design scultoreo. Dimensioni: L34 x P38 x H110 cm.',
    price: 662,
    priceNote: '+ consegna e montaggio',
    images: [khal1b, khal2, khal3, khal4],
    en: {
      category: 'Decor',
      name: 'Khal Sculpture',
      description: 'Decorative figure in black cement finish, sculptural design. Dimensions: W34 x D38 x H110 cm.',
      priceNote: '+ delivery and assembly',
    },
  },
  {
    id: 3,
    category: 'Illuminazione',
    name: 'Lampada Elvis',
    description:
      'Lampada da terra in cartapesta lavorata a mano, ispirazione mediterranea, finitura beige/terracotta/nero. Dimensioni: L70 x P35 x H170 cm.',
    price: 707,
    priceNote: '+ consegna e montaggio',
    images: [elvis1],
    en: {
      category: 'Lighting',
      name: 'Elvis Lamp',
      description:
        'Handcrafted papier-mâché floor lamp, Mediterranean inspiration, beige/terracotta/black finish. Dimensions: W70 x D35 x H170 cm.',
      priceNote: '+ delivery and assembly',
    },
  },
  {
    id: 4,
    category: 'Tavolino',
    name: 'Tavolino Carbon',
    description:
      'Base scultorea ispirata a forme organiche, piano dal design fluido. Dimensioni: 80 x 55 x H35 cm + 38 x 39 cm (coppia di due misure).',
    price: 1280,
    priceNote: 'la coppia + consegna e montaggio',
    images: [carbon1, carbon2, carbon3],
    en: {
      category: 'Side table',
      name: 'Carbon Side Table',
      description: 'Sculptural base inspired by organic forms, fluid-design top. Dimensions: 80 x 55 x H35 cm + 38 x 39 cm (pair of two sizes).',
      priceNote: 'the pair + delivery and assembly',
    },
  },
  {
    id: 5,
    category: 'Divano',
    name: 'Divano Dream',
    description: 'Divano componibile, linee morbide e avvolgenti. Dimensioni: L284 x H65 x P167/103 cm.',
    price: 3470,
    priceNote: '+ consegna e montaggio',
    images: [dream1, dream2],
    en: {
      category: 'Sofa',
      name: 'Dream Sofa',
      description: 'Modular sofa, soft and enveloping lines. Dimensions: W284 x H65 x D167/103 cm.',
      priceNote: '+ delivery and assembly',
    },
  },
  {
    id: 6,
    category: 'Tavolino',
    name: 'Tavolino Telfs',
    description: 'Tavolino basso, forma compatta. Dimensioni: L43 x P43 x H49 cm.',
    price: 405,
    priceNote: '+ consegna e montaggio',
    images: [telfs1, telfs2],
    en: {
      category: 'Side table',
      name: 'Telfs Side Table',
      description: 'Low side table, compact form. Dimensions: W43 x D43 x H49 cm.',
      priceNote: '+ delivery and assembly',
    },
  },
  {
    id: 7,
    category: 'Decorazione',
    name: 'Vaso Olive Big',
    description: 'Vaso decorativo, formato grande. Dimensioni: 50 x 47 x H105 cm.',
    price: 807,
    priceNote: '+ consegna e montaggio',
    images: [oliveBig],
    en: {
      category: 'Decor',
      name: 'Olive Vase Big',
      description: 'Decorative vase, large size. Dimensions: 50 x 47 x H105 cm.',
      priceNote: '+ delivery and assembly',
    },
  },
  {
    id: 8,
    category: 'Decorazione',
    name: 'Vaso Olive Small',
    description: 'Vaso decorativo, formato piccolo. Dimensioni: 50 x 47 x H88 cm.',
    price: 630,
    priceNote: '+ consegna e montaggio',
    images: [oliveSmall],
    en: {
      category: 'Decor',
      name: 'Olive Vase Small',
      description: 'Decorative vase, small size. Dimensions: 50 x 47 x H88 cm.',
      priceNote: '+ delivery and assembly',
    },
  },
  {
    id: 9,
    category: 'Decorazione',
    name: 'Vaso YAT Cream Ø30x52',
    description: 'Vaso in tonalità beige, ideale per fiori o rami artificiali. Dimensioni: Ø30 x H52 cm.',
    price: 224,
    priceNote: '+ consegna',
    images: [yat30_1, yat30_2],
    en: {
      category: 'Decor',
      name: 'YAT Cream Vase Ø30x52',
      description: 'Vase in a beige tone, ideal for flowers or artificial branches. Dimensions: Ø30 x H52 cm.',
      priceNote: '+ delivery',
    },
  },
  {
    id: 10,
    category: 'Decorazione',
    name: 'Vaso YAT Cream Ø52x81',
    description:
      'Vaso in tonalità beige, formato grande, ideale per fiori o rami artificiali. Dimensioni: Ø52 x H81 cm.',
    price: 638,
    priceNote: '+ consegna',
    images: [yat52_1, yat52_2, yat52_3],
    en: {
      category: 'Decor',
      name: 'YAT Cream Vase Ø52x81',
      description:
        'Vase in a beige tone, large size, ideal for flowers or artificial branches. Dimensions: Ø52 x H81 cm.',
      priceNote: '+ delivery',
    },
  },
  {
    id: 11,
    category: 'Poltroncina',
    name: 'Poltroncina Julia',
    description: 'Poltroncina da esterno in corda e acciaio galvanizzato verde. Dimensioni: L109 x P80 x H83 cm.',
    price: 764,
    priceNote: '+ consegna',
    images: [julia1, julia2],
    en: {
      category: 'Armchair',
      name: 'Julia Armchair',
      description: 'Outdoor armchair in rope and green galvanised steel. Dimensions: W109 x D80 x H83 cm.',
      priceNote: '+ delivery',
    },
  },
  {
    id: 12,
    category: 'Tavolino',
    name: 'Tavolino Perla',
    description: 'Tavolino in metallo e marmo. Dimensioni: Ø60 x H40 cm + Ø75 x H47 cm (coppia di due misure).',
    price: 1052,
    priceNote: 'la coppia + consegna e montaggio',
    images: [perla1],
    en: {
      category: 'Side table',
      name: 'Perla Side Table',
      description: 'Metal and marble side table. Dimensions: Ø60 x H40 cm + Ø75 x H47 cm (pair of two sizes).',
      priceNote: 'the pair + delivery and assembly',
    },
  },
  {
    id: 13,
    category: 'Illuminazione',
    name: 'Lampada Cassel',
    description: 'Lampada da tavolo in bronzo anticato, base in metallo. Dimensioni: L30 x P90 x H41 cm.',
    price: 307,
    priceNote: '+ consegna',
    images: [cassel1, cassel2],
    en: {
      category: 'Lighting',
      name: 'Cassel Lamp',
      description: 'Table lamp in antiqued bronze, metal base. Dimensions: W30 x D90 x H41 cm.',
      priceNote: '+ delivery',
    },
  },
  {
    id: 14,
    category: 'Poltroncina',
    name: 'Poltroncina Dream',
    description: 'Poltroncina dal design morbido e accogliente. Dimensioni: L68 x P59 x H74 cm.',
    price: 312,
    priceNote: '+ consegna',
    images: [poltroncinaDream0, poltroncinaDream1, poltroncinaDream2, poltroncinaDream3],
    en: {
      category: 'Armchair',
      name: 'Dream Armchair',
      description: 'Armchair with a soft, welcoming design. Dimensions: W68 x D59 x H74 cm.',
      priceNote: '+ delivery',
    },
  },
  {
    id: 15,
    category: 'Buffet',
    name: 'Buffet Retrò',
    description:
      'Buffet Retrò in legno laccato nero e piano in legno massello. Dimensioni: 160 x 48 x 88 cm.',
    price: 3690,
    priceNote: '+ consegna e montaggio',
    images: [buffetRetro1],
    en: {
      category: 'Sideboard',
      name: 'Retrò Sideboard',
      description:
        'Retrò sideboard in black lacquered wood with a solid wood top. Dimensions: 160 x 48 x 88 cm.',
      priceNote: '+ delivery and assembly',
    },
  },
]
