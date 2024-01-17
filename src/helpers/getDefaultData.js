export const getDefaultData = (type) => {
  const defaultProductData = {
    "id": 3,
    "article": "16954744381",
    "name": "Туалетный столик с зеркалом и ящиком в спальню для девочки Кео",
    "price": 3755,
    "characteristics": [
      [
        "Тип",
        "Туалетный столик"
      ],
      [
        "Ширина, см",
        "67.5"
      ],
      [
        "Глубина, см",
        "34.2"
      ],
      [
        "Высота, см",
        "125.4"
      ],
      [
        "Бренд",
        "Кео"
      ]
    ],
    "images": [
      "img//1hb1fmh32ce97gog.jpg",
      "img//1hb1fmh3rq5mf9i1.jpg",
      "img//1hb1fmh3hjsf61q3.jpg",
      "img//1hb1fmh3ktkh5l85.jpg"
    ],
    "category": "Столы"
  };

  if (type === "product") {
    return defaultProductData;
  }

  return console.log("❗ Ошибка: таких данных нет в базе.");
};
