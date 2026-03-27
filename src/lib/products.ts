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
    image: "/products/clear-bottle.png",
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
    image: "/products/blue-candle.png",
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
    image: "/products/blue-bottle.png",
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
    image: "/products/pink-candle.png",
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
    image: "/products/green-bottle.png",
  },
];
