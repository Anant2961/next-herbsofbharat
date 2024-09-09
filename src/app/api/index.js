const cat = {
  CordycepsShilajit: "Cordyceps ShilaJit",
  CordySterone: "CordySterone",
  CordyTesto: "CordyTesto",
  CordyShila: "CordyShila",
  CordyLivoFuel: "LivoFuel",
};
export const categories = [
  {
    _id: 1001,
    name: "Livo Fuel",
    image: "https://i.ibb.co/RPrY0pP/111ce078-fa1f-4a4d-97aa-bdacf6b7b06d.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "LivoFuel",
  },
  {
    _id: 1002,
    name: "Cordycep Shilajit",
    image: "https://i.ibb.co/X2vFZWg/cordytesto-shilajit-testorone.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "CordycepsShilajit",
  },
  {
    _id: 1003,
    name: "Cordy Testo",
    image: "https://i.ibb.co/RSJbNwL/cordyshala-60ml.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "CordyTesto",
  },
  {
    _id: 1004,
    name: "Cordy Sterone",
    image: "https://i.ibb.co/99cXbCT/cordy-testorone-legend.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "CordySterone",
  },
  {
    _id: 1005,
    name: "Cordy Shila",
    image: "https://i.ibb.co/KxdL6By/cordytesto.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "CordyShila",
  },
  {
    _id: 1006,
    name: "Livo Fuel",
    image: "https://i.ibb.co/RPrY0pP/111ce078-fa1f-4a4d-97aa-bdacf6b7b06d.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "LivoFuel",
  },
];

export const products = [
  {
    _id: 2001,
    name: "Cordy Shila",
    images: [
      "https://i.ibb.co/3YDjmgn/cordyshala-shilajit.jpg",
      "https://i.ibb.co/0fB0YyM/another-advertisement.jpg",
      "https://i.ibb.co/jTfchWz/cordyshila-II.jpg",
      "https://i.ibb.co/YWVQXsv/cordyshala-60ml.jpg",
      "https://i.ibb.co/zbnG0bS/cordyshila.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 1500,
    discountedPrice: 1280,
    quantity: 1,
    rating: 4.5,
    reviews: 50,
    category: "Cordy Shila",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Cordycep",
    isStock: true,
    overView: "Cordy Shila",
    isNew: true,
    _base: cat?.CordyShila,
  },
  {
    _id: 2002,
    name: "Cordy Testo",
    images: [
      "https://i.ibb.co/NFgH631/cordytesto.jpg",
      "https://i.ibb.co/X2vFZWg/cordytesto-shilajit-testorone.jpg",
      "https://i.ibb.co/V3MwcPp/pankaj-mohte.jpg",
      "https://i.ibb.co/bRDsVy1/cordyceps-word.jpg",
      "https://i.ibb.co/X52rHVq/athelet-testorone.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 1500,
    discountedPrice: 1330,
    quantity: 1,
    rating: 4.5,
    reviews: 50,
    category: "Cordy Testo",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "CordyCeps",
    isStock: true,
    overView: "Cordy Testo",
    isNew: true,
    _base: cat?.CordyTesto,
  },
  {
    _id: 2003,
    name: "Cordy Sterone",
    images: [
      "https://i.ibb.co/99cXbCT/cordy-testorone-legend.jpg",
      "https://i.ibb.co/gMqzk5Z/cordy-sterone-main.jpg",
      "https://i.ibb.co/RP2SVDd/fa11bbf3-3423-48b2-907e-5ca4b387a93a.jpg",
      "https://i.ibb.co/f82cQB1/motivation-quote.jpg",
      "https://i.ibb.co/pZJCDMM/fbd691b3-f91b-4c57-a3eb-b1d5096ebe4e.jpg",
      "https://i.ibb.co/synDFzp/cordysterone.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 2000,
    discountedPrice: 1700,
    quantity: 1,
    rating: 4.5,
    reviews: 50,
    category: "Cordy Sterone",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "CordySterone",
    isStock: true,
    overView: "Cordy Testo",
    isNew: true,
    _base: cat?.CordySterone,
  },
  {
    _id: 2004,
    name: "Cordy Livo Fuel",
    images: [
      "https://i.ibb.co/RPrY0pP/111ce078-fa1f-4a4d-97aa-bdacf6b7b06d.jpg",
      "https://i.ibb.co/LRdkB0L/87c78ada-2670-48f2-af08-769b27856c02.jpg",
      "https://i.ibb.co/KzXPcvx/e66482c9-0af4-469a-ac45-5a4c7de2139d.jpg",
      "https://i.ibb.co/MBjKqKS/3a162bc9-2a47-4531-89f9-95b70e00b41e.jpg",
      "https://i.ibb.co/VjhbMxJ/6dc4ef2a-a8a6-49aa-b30b-0c9d3c72b98b.jpg",
      "https://i.ibb.co/tKdRKMk/f6031821-9a14-4c2e-adbe-eb5e68fa60f3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 800,
    discountedPrice: 699,
    quantity: 1,
    rating: 4.5,
    reviews: 50,
    category: "Livo Fuel",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "CordyCeps",
    isStock: true,
    overView: "Livo Fuel",
    isNew: true,
    _base: cat?.CordyLivoFuel,
  },
];

const data = {
  products,
  categories,
};

export default data;
