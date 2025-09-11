import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "G-Shock Model 001",
    slug: "g-shock-model-001",
    description: "Shock-resistant men's sports watch",
    longDescription: "G-Shock 001 combines rugged durability with a stylish design. Perfect for outdoor adventures.",
    price: 199.99,
    brand: "Casio",
    gender: "Men",
    mechanismType: "Quartz",
    strapMaterial: "Resin",
    waterResistance: true,
    category: "Sport",
    tags: ["shockproof", "digital", "durable"],
    createdAt: "2025-08-01",
    variants: [
      {
        sku: "GSH-001-BLK",
        colorName: "Black",
        colorCode: "#000000",
        image: "https://placehold.co/400x400?text=G-Shock+Black",
        gallery: [
          "https://placehold.co/400x400?text=G-Shock+Black+A",
          "https://placehold.co/400x400?text=G-Shock+Black+B"
        ],
        stock: 10
      },
      {
        sku: "GSH-001-RED",
        colorName: "Red",
        colorCode: "#FF0000",
        image: "https://placehold.co/400x400?text=G-Shock+Red",
        gallery: [
          "https://placehold.co/400x400?text=G-Shock+Red+A",
          "https://placehold.co/400x400?text=G-Shock+Red+B"
        ],
        stock: 8
      }
    ]
  },
  {
    id: 2,
    name: "Michael Kors Model 002",
    slug: "michael-kors-model-002",
    description: "Elegant ladies wristwatch",
    longDescription: "This Michael Kors watch adds a touch of sophistication to your look with its rose gold tones.",
    price: 249.99,
    brand: "Michael Kors",
    gender: "Women",
    mechanismType: "Quartz",
    strapMaterial: "Metal",
    waterResistance: false,
    category: "Fashion",
    tags: ["elegant", "fashion", "womens"],
    createdAt: "2025-08-02",
    variants: [
      {
        sku: "MK-002-RG",
        colorName: "Rose Gold",
        colorCode: "#B76E79",
        image: "https://placehold.co/400x400?text=Michael+Kors+Rose+Gold",
        gallery: [
          "https://placehold.co/400x400?text=Michael+Kors+RG+A",
          "https://placehold.co/400x400?text=Michael+Kors+RG+B"
        ],
        stock: 6
      },
      {
        sku: "MK-002-SLV",
        colorName: "Silver",
        colorCode: "#C0C0C0",
        image: "https://placehold.co/400x400?text=Michael+Kors+Silver",
        gallery: [
          "https://placehold.co/400x400?text=Michael+Kors+Silver+A",
          "https://placehold.co/400x400?text=Michael+Kors+Silver+B"
        ],
        stock: 5
      }
    ]
  },
  {
    id: 3,
    name: "Omega Seamaster 300",
    slug: "omega-seamaster-300",
    description: "Luxury diving watch",
    longDescription: "The Seamaster 300 is a symbol of diving excellence and Swiss precision.",
    price: 4999.99,
    brand: "Omega",
    gender: "Men",
    mechanismType: "Automatic",
    strapMaterial: "Stainless Steel",
    waterResistance: true,
    category: "Diving",
    tags: ["diving", "luxury", "automatic"],
    createdAt: "2025-08-03",
    variants: [
      {
        sku: "OME-300-BLK",
        colorName: "Black",
        colorCode: "#000000",
        image: "https://placehold.co/400x400?text=Omega+Black",
        gallery: [
          "https://placehold.co/400x400?text=Omega+Black+A",
          "https://placehold.co/400x400?text=Omega+Black+B"
        ],
        stock: 3
      },
      {
        sku: "OME-300-BLU",
        colorName: "Blue",
        colorCode: "#0000FF",
        image: "https://placehold.co/400x400?text=Omega+Blue",
        gallery: [
          "https://placehold.co/400x400?text=Omega+Blue+A",
          "https://placehold.co/400x400?text=Omega+Blue+B"
        ],
        stock: 2
      }
    ]
  },
  {
    id: 4,
    name: "Rolex Datejust 36",
    slug: "rolex-datejust-36",
    description: "Timeless luxury watch",
    longDescription: "Rolex Datejust 36 is the embodiment of classic style and enduring craftsmanship.",
    price: 6999.99,
    brand: "Rolex",
    gender: "Unisex",
    mechanismType: "Automatic",
    strapMaterial: "Gold",
    waterResistance: true,
    category: "Luxury",
    tags: ["rolex", "luxury", "classic"],
    createdAt: "2025-08-04",
    variants: [
      {
        sku: "RLX-DJ36-GOLD",
        colorName: "Gold",
        colorCode: "#FFD700",
        image: "https://placehold.co/400x400?text=Rolex+Gold",
        gallery: [
          "https://placehold.co/400x400?text=Rolex+Gold+A",
          "https://placehold.co/400x400?text=Rolex+Gold+B"
        ],
        stock: 2
      },
      {
        sku: "RLX-DJ36-SLV",
        colorName: "Silver",
        colorCode: "#C0C0C0",
        image: "https://placehold.co/400x400?text=Rolex+Silver",
        gallery: [
          "https://placehold.co/400x400?text=Rolex+Silver+A",
          "https://placehold.co/400x400?text=Rolex+Silver+B"
        ],
        stock: 1
      }
    ]
  },
  {
    id: 5,
    name: "Fossil Chronograph",
    slug: "fossil-chronograph",
    description: "Everyday chronograph watch",
    longDescription: "Stylish and functional, this Fossil chronograph is perfect for daily wear.",
    price: 179.99,
    brand: "Fossil",
    gender: "Men",
    mechanismType: "Quartz",
    strapMaterial: "Leather",
    waterResistance: false,
    category: "Casual",
    tags: ["chronograph", "leather", "fossil"],
    createdAt: "2025-08-05",
    variants: [
      {
        sku: "FOS-CHRONO-BLK",
        colorName: "Black",
        colorCode: "#000000",
        image: "https://placehold.co/400x400?text=Fossil+Black",
        gallery: [
          "https://placehold.co/400x400?text=Fossil+Black+A",
          "https://placehold.co/400x400?text=Fossil+Black+B"
        ],
        stock: 7
      },
      {
        sku: "FOS-CHRONO-BRN",
        colorName: "Brown",
        colorCode: "#8B4513",
        image: "https://placehold.co/400x400?text=Fossil+Brown",
        gallery: [
          "https://placehold.co/400x400?text=Fossil+Brown+A",
          "https://placehold.co/400x400?text=Fossil+Brown+B"
        ],
        stock: 5
      }
    ]
  }
];

export default products;
