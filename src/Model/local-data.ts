export type CulturalLocation = {
  id: string;
  name: string;
  type: string;
  description: string;
  coordinates: [number, number];
  imageUrl: string;
  article: string;
};

const culturalLocations: CulturalLocation[] = [
  {
    id: "cult-1",
    name: "Jaipong",
    type: "Tari",
    description:
      "Jaipong adalah tarian tradisional khas Jawa Barat yang enerjik dan dinamis.",
    coordinates: [-6.9259, 107.7189],
    imageUrl:
      "https://media.sukabumiupdate.com/media/2023/02/01/1675229488_63d9f9308b491_rYqDTbucBz28Baot4hmY.jpeg",
    article: "",
  },
  {
    id: "cult-2",
    name: "Keroncong",
    type: "Musik",
    description:
      "Keroncong adalah genre musik yang berasal dari perpaduan budaya Portugis dan Indonesia.",
    coordinates: [-6.9835, 107.6186],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-3",
    name: "Angklung",
    type: "Musik",
    description:
      "Angklung adalah alat musik tradisional yang terbuat dari bambu dan dimainkan dengan cara digoyangkan.",
    coordinates: [-6.8965, 107.6547],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-4",
    name: "Wayang Golek",
    type: "Teater",
    description:
      "Wayang Golek adalah pertunjukan boneka tradisional khas Sunda.",
    coordinates: [-6.9147, 107.6098],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-5",
    name: "Sisingaan",
    type: "Tari",
    description:
      "Sisingaan adalah tarian tradisional yang melibatkan tandu berbentuk singa.",
    coordinates: [-6.7113, 107.6131],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-6",
    name: "Debus",
    type: "Pertunjukan",
    description:
      "Debus adalah pertunjukan seni bela diri tradisional yang menampilkan kekebalan tubuh terhadap senjata tajam.",
    coordinates: [-6.2826, 106.8573],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-7",
    name: "Tari Topeng",
    type: "Tari",
    description:
      "Tari Topeng adalah tarian tradisional dengan menggunakan topeng yang menggambarkan berbagai karakter.",
    coordinates: [-6.5847, 106.806],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-8",
    name: "Kuda Lumping",
    type: "Tari",
    description:
      "Kuda Lumping adalah tarian yang menampilkan para penari menaiki kuda tiruan dari anyaman bambu.",
    coordinates: [-6.978, 107.6388],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-9",
    name: "Gamelan",
    type: "Musik",
    description:
      "Gamelan adalah ansambel musik tradisional Jawa dan Sunda yang terdiri dari berbagai jenis alat musik perkusi.",
    coordinates: [-6.9194, 107.6006],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-10",
    name: "Wayang Kulit",
    type: "Teater",
    description:
      "Wayang Kulit adalah pertunjukan bayangan tradisional menggunakan boneka kulit.",
    coordinates: [-7.0015, 107.6186],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-11",
    name: "Tari Merak",
    type: "Tari",
    description:
      "Tari Merak adalah tarian tradisional yang menggambarkan keindahan burung merak.",
    coordinates: [-6.9147, 107.6098],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-12",
    name: "Tari Ketuk Tilu",
    type: "Tari",
    description:
      "Tari Ketuk Tilu adalah tarian tradisional yang diiringi oleh musik gamelan.",
    coordinates: [-6.9086, 107.6104],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-13",
    name: "Tari Ronggeng",
    type: "Tari",
    description:
      "Tari Ronggeng adalah tarian tradisional yang biasanya dibawakan oleh penari wanita dengan gerakan yang lemah gemulai.",
    coordinates: [-6.9321, 107.6344],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-14",
    name: "Pencak Silat",
    type: "Bela Diri",
    description:
      "Pencak Silat adalah seni bela diri tradisional yang menggabungkan gerakan pertahanan dan serangan.",
    coordinates: [-6.9235, 107.6186],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-15",
    name: "Tari Jaipongan",
    type: "Tari",
    description:
      "Tari Jaipongan adalah tarian yang energik dan dinamis, seringkali menggambarkan kehidupan sehari-hari masyarakat Sunda.",
    coordinates: [-6.9055, 107.6139],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-16",
    name: "Gendang Penca",
    type: "Musik",
    description:
      "Gendang Penca adalah alat musik tradisional yang digunakan untuk mengiringi pencak silat.",
    coordinates: [-6.9205, 107.6098],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-17",
    name: "Batik",
    type: "Kerajinan",
    description:
      "Batik adalah kain tradisional yang dihiasi dengan pola-pola khas yang dibuat dengan teknik menuliskan lilin pada kain.",
    coordinates: [-6.9218, 107.6078],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-18",
    name: "Wayang Orang",
    type: "Teater",
    description:
      "Wayang Orang adalah pertunjukan teater yang menampilkan cerita-cerita wayang dengan aktor manusia.",
    coordinates: [-6.9178, 107.6066],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-19",
    name: "Tari Saman",
    type: "Tari",
    description:
      "Tari Saman adalah tarian tradisional yang berasal dari Aceh dan terkenal dengan gerakan tangan yang cepat.",
    coordinates: [-6.9274, 107.6098],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-20",
    name: "Wayang Orang Bharata",
    type: "Teater",
    description:
      "Wayang Orang Bharata adalah kelompok teater yang mempertunjukkan seni wayang orang dengan cerita-cerita Mahabharata dan Ramayana.",
    coordinates: [-6.9303, 107.6222],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-21",
    name: "Tari Piring",
    type: "Tari",
    description:
      "Tari Piring adalah tarian tradisional Minangkabau yang menggunakan piring sebagai properti tarian.",
    coordinates: [-6.934, 107.6121],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-22",
    name: "Wayang Kulit Purwa",
    type: "Teater",
    description:
      "Wayang Kulit Purwa adalah salah satu bentuk wayang kulit yang menceritakan kisah-kisah epik dari Mahabharata dan Ramayana.",
    coordinates: [-6.9175, 107.6195],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-23",
    name: "Gamelan Degung",
    type: "Musik",
    description:
      "Gamelan Degung adalah ansambel musik tradisional Sunda yang terdiri dari gong, bonang, saron, dan kendang.",
    coordinates: [-6.9215, 107.6101],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-24",
    name: "Tari Kuda Kepang",
    type: "Tari",
    description:
      "Tari Kuda Kepang adalah tarian yang menampilkan penari yang menunggang kuda buatan dari anyaman bambu.",
    coordinates: [-6.9308, 107.6118],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-25",
    name: "Batik Mega Mendung",
    type: "Kerajinan",
    description:
      "Batik Mega Mendung adalah motif batik khas Cirebon yang menggambarkan awan mendung dengan warna-warna cerah.",
    coordinates: [-6.7063, 108.5582],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-26",
    name: "Wayang Wong",
    type: "Teater",
    description:
      "Wayang Wong adalah teater tradisional yang menampilkan cerita wayang dengan aktor yang memakai kostum dan topeng.",
    coordinates: [-6.9158, 107.6181],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-27",
    name: "Calung",
    type: "Musik",
    description:
      "Calung adalah alat musik tradisional Sunda yang dimainkan dengan cara dipukul.",
    coordinates: [-6.9253, 107.6344],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-28",
    name: "Reog",
    type: "Tari",
    description:
      "Reog adalah tarian tradisional yang berasal dari Ponorogo, Jawa Timur, dan sering ditampilkan dalam upacara adat.",
    coordinates: [-6.9297, 107.6068],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-29",
    name: "Rampak Gendang",
    type: "Musik",
    description:
      "Rampak Gendang adalah pertunjukan musik tradisional yang menggunakan banyak gendang yang dimainkan secara serentak.",
    coordinates: [-6.9311, 107.6079],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-30",
    name: "Sulap",
    type: "Pertunjukan",
    description:
      "Sulap adalah seni pertunjukan yang menggunakan trik dan ilusi untuk menghibur penonton.",
    coordinates: [-6.9153, 107.6193],
    imageUrl: "",
    article: "",
  },
  {
    id: "cult-31",
    name: "Karinding",
    type: "Musik",
    description:
      "Karinding adalah alat musik tradisional Sunda yang terbuat dari bambu atau pelepah aren dan dimainkan dengan cara ditiup atau dipetik.",
    coordinates: [-6.9212, 107.6098],
    imageUrl: "",
    article: "",
  },
];

export const DataPeta = {
  getDataMarker() {
    const dataPeta = culturalLocations;
    return Promise.resolve(dataPeta);
  },
};
