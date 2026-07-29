export type Testimonial = {
  id: string;
  name: string;
  role: { az: string; en: string; ru: string };
  avatar: string;
  petImage: string;
  rating: number;
  quote: { az: string; en: string; ru: string };
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nərmin A.",
    role: {
      az: "Pişik sahibi · Nərimanov",
      en: "Cat owner · Narimanov",
      ru: "Владелица кошки · Нариманов",
    },
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
    petImage:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
    rating: 5,
    quote: {
      az: "Pişiyimdə digər klinikaların görmədiyi ürək problemi aşkarlandı. Həkimlər həqiqətən peşəkardır — həyatımızı bir dəfədən çox xilas ediblər.",
      en: "My cat was diagnosed with a cardiac issue no other clinic had caught. The doctors are true professionals — they've saved our lives more than once.",
      ru: "У кошки нашли сердечную проблему, которую другие клиники пропускали. Врачи настоящие профессионалы — они не раз спасали нам жизнь.",
    },
  },
  {
    id: "2",
    name: "Elnur M.",
    role: {
      az: "İt sahibi · Yasamal",
      en: "Dog owner · Yasamal",
      ru: "Владелец собаки · Ясамал",
    },
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
    petImage:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    rating: 5,
    quote: {
      az: "İtim zəhərlənmişdi — dərhal cavab verdilər və klinikada bizi gözləyirdilər. Bakıda belə sürətli peşəkar reaksiya nadirdir.",
      en: "My dog was poisoned — they answered immediately and were waiting for us at the clinic. This kind of fast, professional response is rare in Baku.",
      ru: "Собаку отравили — ответили сразу и ждали нас в клинике. Такая быстрая профессиональная реакция в Баку редкость.",
    },
  },
  {
    id: "3",
    name: "Səbinə R.",
    role: {
      az: "İt sahibi · Xətai",
      en: "Dog owner · Khatai",
      ru: "Владелица собаки · Хатаи",
    },
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop",
    petImage:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop",
    rating: 5,
    quote: {
      az: "Qiymətlər şəffaf idi, həkim hər şeyi izah etdi. Avropaya köçmək üçün pasport və quduzluq testi problemsiz həll olundu.",
      en: "Prices were transparent, the doctor explained everything. They handled our pet passport and rabies test for our move to Europe without any hassle.",
      ru: "Цены прозрачные, врач всё объяснил. Паспорт и анализ на бешенство для переезда в Европу оформили без проблем.",
    },
  },
];
