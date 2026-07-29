export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
};

export const gallery: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=1000&fit=crop",
    alt: "Veterinary exam room",
    span: "tall",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
    alt: "Happy dog with owner",
    span: "wide",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=800&fit=crop",
    alt: "Veterinarian with cat",
    span: "normal",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop",
    alt: "Dog and cat together",
    span: "normal",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=900&fit=crop",
    alt: "Dog running outdoors",
    span: "tall",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=600&fit=crop",
    alt: "Clinic waiting area",
    span: "wide",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=800&fit=crop",
    alt: "Golden retriever portrait",
    span: "normal",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1601758228041-f3b837223df2?w=800&h=600&fit=crop",
    alt: "Vet examining pet",
    span: "normal",
  },
];
