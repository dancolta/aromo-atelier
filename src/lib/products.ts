export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  notes: string;
  price: number;
  description: string;
  ingredients: string[];
  image: string;
}

export const products: Product[] = [
  {
    slug: "fleur-sauvage",
    name: "Fleur Sauvage",
    subtitle: "Wild Iris · Violet Leaf · Musk",
    notes: "Delicate, earthy, free-spirited",
    price: 520,
    description:
      "Wildflowers gathered at dawn, still heavy with dew. Iris petals unfold into a bed of violet leaves and clean musk. An ode to untamed beauty.",
    ingredients: ["Wild Iris", "Violet Leaf", "White Musk", "Green Stem Accord", "Ambrette"],
    image: "/products/product-2.png",
  },
  {
    slug: "noir-de-chisinau",
    name: "Noir de Chișinău",
    subtitle: "Oud · Amber · Tobacco Leaf",
    notes: "Deep, smoky, contemplative",
    price: 680,
    description:
      "A midnight walk through the old quarter. Dark oud meets sun-dried tobacco, softened by a warm amber embrace. For those who carry mystery like a second skin.",
    ingredients: ["Oud", "Amber", "Tobacco Leaf", "Benzoin", "Black Pepper"],
    image: "/products/product-1.png",
  },
  {
    slug: "lumiere-doree",
    name: "Lumière Dorée",
    subtitle: "Saffron · Honey · Sandalwood",
    notes: "Warm, golden, enveloping",
    price: 750,
    description:
      "Golden hour, captured. Precious saffron threads dissolve into wild honey, resting on a foundation of creamy sandalwood. Light made tangible.",
    ingredients: ["Saffron", "Wild Honey", "Sandalwood", "Vanilla Absolute", "Cardamom"],
    image: "/products/product-2.png",
  },
  {
    slug: "pierre-et-mousse",
    name: "Pierre et Mousse",
    subtitle: "Vetiver · Oakmoss · Wet Stone",
    notes: "Mineral, grounding, meditative",
    price: 590,
    description:
      "Rain on ancient stone. Vetiver roots grip the earth while oakmoss softens every edge. A perfume that smells like stillness itself.",
    ingredients: ["Vetiver", "Oakmoss", "Mineral Accord", "Cedar", "Bergamot"],
    image: "/products/product-1.png",
  },
  {
    slug: "jardin-secret",
    name: "Jardin Secret",
    subtitle: "Rose · Fig Leaf · Black Tea",
    notes: "Intimate, lush, literary",
    price: 620,
    description:
      "A walled garden no one else knows about. Damask rose entwined with fig leaves, a cup of black tea cooling on the stone bench. Private beauty.",
    ingredients: ["Damask Rose", "Fig Leaf", "Black Tea", "Peony", "Cashmere Wood"],
    image: "/products/product-2.png",
  },
  {
    slug: "brume-de-mer",
    name: "Brume de Mer",
    subtitle: "Sea Salt · Driftwood · Neroli",
    notes: "Airy, coastal, serene",
    price: 480,
    description:
      "Mediterranean mist at first light. Sea salt crystals on sun-bleached driftwood, neroli blossoms carried by the breeze. Freedom in a bottle.",
    ingredients: ["Sea Salt Accord", "Driftwood", "Neroli", "White Tea", "Ambergris"],
    image: "/products/product-1.png",
  },
  {
    slug: "ambre-eternel",
    name: "Ambre Éternel",
    subtitle: "Amber · Labdanum · Vanilla",
    notes: "Rich, resinous, timeless",
    price: 820,
    description:
      "Ancient resins warmed by skin. Pure amber and labdanum swirl into Madagascar vanilla, creating a scent that feels like it has always existed.",
    ingredients: ["Amber", "Labdanum", "Madagascar Vanilla", "Myrrh", "Tonka Bean"],
    image: "/products/product-2.png",
  },
  {
    slug: "feuille-verte",
    name: "Feuille Verte",
    subtitle: "Basil · Galbanum · Lemon Verbena",
    notes: "Fresh, herbaceous, luminous",
    price: 450,
    description:
      "An herb garden in late spring. Crushed basil and sharp galbanum cut through with sparkling lemon verbena. Clean energy, bottled.",
    ingredients: ["Sweet Basil", "Galbanum", "Lemon Verbena", "Green Tea", "White Cedar"],
    image: "/products/product-1.png",
  },
];
