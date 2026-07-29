export type Doctor = {
  id: string;
  name: string;
  image: string;
  specialtyKey: string;
  years: number;
  tags: string[];
};

export const doctors: Doctor[] = [
  {
    id: "farshid",
    name: "Dr. Fərşid Rəhimi",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop",
    specialtyKey: "leadSurgeon",
    years: 15,
    tags: ["Cərrahiyyə", "Ortopediya", "Travma"],
  },
  {
    id: "aytac",
    name: "Dr. Aytac Əzizli",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop",
    specialtyKey: "internal",
    years: 10,
    tags: ["Terapiya", "Dermatologiya", "Endokrinologiya"],
  },
  {
    id: "suada",
    name: "Dr. Suada Nəcəfova",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=800&fit=crop",
    specialtyKey: "diagnostics",
    years: 8,
    tags: ["USM", "Rentgen", "Təcili yardım"],
  },
  {
    id: "elvin",
    name: "Dr. Elvin Məmmədov",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop",
    specialtyKey: "general",
    years: 7,
    tags: ["Vaksinasiya", "Müayinə", "Pasport"],
  },
];

export const doctorSpecialty: Record<
  string,
  { az: string; en: string; ru: string }
> = {
  leadSurgeon: {
    az: "Baş cərrah",
    en: "Lead surgeon",
    ru: "Главный хирург",
  },
  internal: {
    az: "Daxili xəstəliklər · Dermatologiya",
    en: "Internal medicine · Dermatology",
    ru: "Терапия · Дерматология",
  },
  diagnostics: {
    az: "Diaqnostika · Radiologiya",
    en: "Diagnostics · Radiology",
    ru: "Диагностика · Радиология",
  },
  general: {
    az: "Ümumi praktika",
    en: "General practice",
    ru: "Общая практика",
  },
};
