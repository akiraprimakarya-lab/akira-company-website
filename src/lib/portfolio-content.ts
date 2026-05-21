export type PortfolioFilterCategory = "Neon Box" | "Letter Timbul" | "Akrilik" | "Signage" | "Display";

export type PortfolioFolder =
  | "neon-box"
  | "letter-timbul"
  | "display-akrilik"
  | "rak-kulkas"
  | "signage"
  | "custom-acrylic";

export type PortfolioItem = {
  title: string;
  category: PortfolioFilterCategory;
  description: string;
  tags: string[];
  folder: PortfolioFolder;
  images: string[];
};

export type PortfolioItemSeed = Omit<PortfolioItem, "images">;

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Neon Box Custom untuk Outlet F&B",
    category: "Neon Box",
    folder: "neon-box",
    description:
      "Produksi neon box custom untuk fasad outlet makanan dan minuman dengan pencahayaan merata, visual brand yang tegas, dan tampilan yang tetap menarik saat malam hari.",
    tags: ["Akrilik Susu", "LED Module", "Outdoor Signage"],
    images: [
      "/images/portofolio/neon-box/neon-box-01.jpg",
      "/images/portofolio/neon-box/neon-box-02.jpg",
      "/images/portofolio/neon-box/neon-box-03.jpg",
      "/images/portofolio/neon-box/neon-box-04.jpg",
      "/images/portofolio/neon-box/neon-box-05.jpg",
      "/images/portofolio/neon-box/neon-box-06.jpg"
    ]
  },
  {
    title: "Letter Timbul untuk Area Kantor",
    category: "Letter Timbul",
    folder: "letter-timbul",
    description:
      "Pemasangan letter timbul untuk area resepsionis dan lobby kantor dengan finishing rapi agar identitas perusahaan terlihat lebih profesional sejak titik pertama kunjungan.",
    tags: ["Akrilik", "Stainless Accent", "Lobby Branding"],
    images: [
      "/images/portofolio/letter-timbul/letter-timbul-01.jpg",
      "/images/portofolio/letter-timbul/letter-timbul-02.jpg",
      "/images/portofolio/letter-timbul/letter-timbul-03.jpg",
      "/images/portofolio/letter-timbul/letter-timbul-04.jpg",
      "/images/portofolio/letter-timbul/letter-timbul-05.jpg",
      "/images/portofolio/letter-timbul/letter-timbul-06.jpg"
    ]
  },
  {
    title: "Display Akrilik Produk Retail",
    category: "Display",
    folder: "display-akrilik",
    description:
      "Display akrilik untuk kebutuhan promosi produk retail di area counter dan gondola dengan ukuran yang disesuaikan serta visual yang mudah dibaca pelanggan.",
    tags: ["Display Akrilik", "Product Holder", "Retail Visual"],
    images: [
      "/images/portofolio/display-akrilik/display-akrilik-01.jpg",
      "/images/portofolio/display-akrilik/display-akrilik-02.jpg",
      "/images/portofolio/display-akrilik/display-akrilik-03.jpg",
      "/images/portofolio/display-akrilik/display-akrilik-04.jpg",
      "/images/portofolio/display-akrilik/display-akrilik-05.jpg",
      "/images/portofolio/display-akrilik/display-akrilik-06.jpg"
    ]
  },
  {
    title: "Rak Kulkas Akrilik Custom",
    category: "Akrilik",
    folder: "rak-kulkas",
    description:
      "Fabrikasi rak kulkas akrilik custom untuk showcase cooler agar susunan produk lebih tertata, efisien, dan mendukung tampilan display yang bersih.",
    tags: ["Rak Kulkas", "Akrilik Bening", "Custom Fabrication"],
    images: ["/images/portofolio/rak-kulkas/rak-kulkas-01.jpg"]
  },
  {
    title: "Signage / Papan Tanda",
    category: "Signage",
    folder: "signage",
    description:
      "Pengerjaan signage dan papan tanda untuk kebutuhan identitas visual, informasi, dan branding area komersial dengan hasil rapi, kuat, dan mudah terlihat.",
    tags: ["Papan Tanda", "Sign Panel", "Brand Visibility"],
    images: [
      "/images/portofolio/signage/signage-01.jpg",
      "/images/portofolio/signage/signage-02.jpg",
      "/images/portofolio/signage/signage-03.jpg",
      "/images/portofolio/signage/signage-04.jpg",
      "/images/portofolio/signage/signage-05.jpg",
      "/images/portofolio/signage/signage-06.jpg"
    ]
  },
  {
    title: "Custom Acrylic Fabrication",
    category: "Akrilik",
    folder: "custom-acrylic",
    description:
      "Pengerjaan custom acrylic fabrication untuk kebutuhan display, branding, merchandise, plakat, dan elemen visual custom sesuai kebutuhan proyek.",
    tags: ["Custom Acrylic", "Display", "Fabrication"],
    images: [
      "/images/portofolio/custom-acrylic/custom-acrylic-01.jpg",
      "/images/portofolio/custom-acrylic/custom-acrylic-02.jpg",
      "/images/portofolio/custom-acrylic/custom-acrylic-03.jpg",
      "/images/portofolio/custom-acrylic/custom-acrylic-04.jpg",
      "/images/portofolio/custom-acrylic/custom-acrylic-05.jpg",
      "/images/portofolio/custom-acrylic/custom-acrylic-06.jpg"
    ]
  }
];
