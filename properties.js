// data/properties.js - 房源数据模块

const commonFeatures = {
  zh: ["大开间", "带独立卫生间", "独立阳台", "精装修", "采光充足", "电梯", "空调", "冰箱", "洗衣机"],
  en: ["Spacious Room", "Private Bathroom", "Private Balcony", "Fully Furnished", "Good Natural Light", "Elevator", "Air Conditioning", "Refrigerator", "Washing Machine"],
  th: ["ห้องกว้าง", "ห้องน้ำส่วนตัว", "ระเบียงส่วนตัว", "ตกแต่งเรียบร้อย", "แสงธรรมชาติดี", "ลิฟต์", "เครื่องปรับอากาศ", "ตู้เย็น", "เครื่องซักผ้า"]
}

const floorDescription = {
  zh: "该房型可选楼层共 17 层，不同楼层价格略有不同。",
  en: "This room type is available on 17 floors, with slight price differences across different floors.",
  th: "ประเภทห้องนี้มีให้เลือก 17 ชั้น ราคาแตกต่างกันเล็กน้อยในแต่ละชั้น"
}

module.exports = [
  {
    id: "A22",
    type: "studio",
    name: "大单间 A22",
    name_en: "Studio A22",
    name_th: "สตูดิโอ A22",
    area: 35,
    floor: 8,
    price: 2650,
    currency: "¥",
    deposit_policy: "押二付一",
    images: [
      "/images/properties/A22/1712 (1).jpg",
      "/images/properties/A22/1712 (2).jpg",
      "/images/properties/A22/1712 (3).jpg",
      "/images/properties/A22/1712 (4).jpg",
      "/images/properties/A22/1712 (5).jpg",
      "/images/properties/A22/1712 (6).jpg",
      "/images/properties/A22/1712 (7).jpg",
      "/images/properties/A22/1712 (8).jpg"
    ],
    description_zh: floorDescription.zh,
    description_en: floorDescription.en,
    description_th: floorDescription.th,
    features_zh: commonFeatures.zh,
    features_en: commonFeatures.en,
    features_th: commonFeatures.th
  },
  {
    id: "A02",
    type: "studio",
    name: "大单间 A02",
    name_en: "Studio A02",
    name_th: "สตูดิโอ A02",
    area: 40,
    floor: 12,
    price: 2700,
    currency: "¥",
    deposit_policy: "押二付一",
    images: [
      "/images/properties/A02/1712 (1).jpg",
      "/images/properties/A02/1712 (2).jpg",
      "/images/properties/A02/1712 (3).jpg",
      "/images/properties/A02/1712 (4).jpg",
      "/images/properties/A02/1712 (5).jpg",
      "/images/properties/A02/1712 (6).jpg",
      "/images/properties/A02/1712 (7).jpg",
      "/images/properties/A02/1712 (8).jpg"
    ],
    description_zh: floorDescription.zh,
    description_en: floorDescription.en,
    description_th: floorDescription.th,
    features_zh: commonFeatures.zh,
    features_en: commonFeatures.en,
    features_th: commonFeatures.th
  },
  {
    id: "A05",
    type: "studio",
    name: "大单间 A05",
    name_en: "Studio A05",
    name_th: "สตูดิโอ A05",
    area: 55,
    floor: 15,
    price: 2850,
    currency: "¥",
    deposit_policy: "押二付一",
    images: [
      "/images/properties/A05/1712 (1).jpg",
      "/images/properties/A05/1712 (2).jpg",
      "/images/properties/A05/1712 (3).jpg",
      "/images/properties/A05/1712 (4).jpg",
      "/images/properties/A05/1712 (5).jpg",
      "/images/properties/A05/1712 (6).jpg",
      "/images/properties/A05/1712 (7).jpg",
      "/images/properties/A05/1712 (8).jpg"
    ],
    description_zh: floorDescription.zh,
    description_en: floorDescription.en,
    description_th: floorDescription.th,
    features_zh: commonFeatures.zh,
    features_en: commonFeatures.en,
    features_th: commonFeatures.th
  },
  {
    id: "A19",
    type: "studio",
    name: "大单间 A19",
    name_en: "Studio A19",
    name_th: "สตูดิโอ A19",
    area: 60,
    floor: 18,
    price: 3100,
    currency: "¥",
    deposit_policy: "押二付一",
    images: [
      "/images/properties/A19/1712 (1).jpg",
      "/images/properties/A19/1712 (2).jpg",
      "/images/properties/A19/1712 (3).jpg",
      "/images/properties/A19/1712 (4).jpg",
      "/images/properties/A19/1712 (5).jpg",
      "/images/properties/A19/1712 (6).jpg",
      "/images/properties/A19/1712 (7).jpg",
      "/images/properties/A19/1712 (8).jpg"
    ],
    description_zh: floorDescription.zh,
    description_en: floorDescription.en,
    description_th: floorDescription.th,
    features_zh: commonFeatures.zh,
    features_en: commonFeatures.en,
    features_th: commonFeatures.th
  },
  {
    id: "A12",
    type: "studio",
    name: "大单间 A12",
    name_en: "Studio A12",
    name_th: "สตูดิโอ A12",
    area: 85,
    floor: 20,
    price: 3200,
    currency: "¥",
    deposit_policy: "押二付一",
    images: [
      "/images/properties/A12/1712 (1).jpg",
      "/images/properties/A12/1712 (2).jpg",
      "/images/properties/A12/1712 (3).jpg",
      "/images/properties/A12/1712 (4).jpg",
      "/images/properties/A12/1712 (5).jpg",
      "/images/properties/A12/1712 (6).jpg",
      "/images/properties/A12/1712 (7).jpg",
      "/images/properties/A12/1712 (8).jpg"
    ],
    description_zh: floorDescription.zh,
    description_en: floorDescription.en,
    description_th: floorDescription.th,
    features_zh: commonFeatures.zh,
    features_en: commonFeatures.en,
    features_th: commonFeatures.th
  }
]
