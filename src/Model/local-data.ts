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
    name: "Angklung",
    type: "Alat musik",
    description:
      "Angklung adalah alat musik tradisional Sunda yang terbuat dari bambu. Alat musik ini dimainkan dengan cara digoyangkan sehingga menghasilkan bunyi yang bergetar.",
    coordinates: [-6.9175, 107.6191],
    imageUrl:
      "https://www.rukita.co/stories/wp-content/uploads/2022/11/Shutterstock.jpg",
    article:
      "Angklung adalah alat musik tradisional yang berasal dari daerah Jawa Barat, Indonesia. Alat musik ini terbuat dari bambu yang disusun sedemikian rupa sehingga menghasilkan bunyi yang indah saat digoyangkan. Setiap bambu memiliki ukuran dan nada yang berbeda, sehingga saat angklung digoyangkan, akan menghasilkan serangkaian melodi yang harmonis. Asal-usul angklung dapat ditelusuri kembali ke zaman kuno di Indonesia, namun sejarahnya yang pasti tidak selalu jelas. Konon, angklung sudah digunakan oleh masyarakat Sunda sejak masa kerajaan, digunakan dalam berbagai upacara adat, pertunjukan seni, dan kegiatan keagamaan. Namun, alat musik ini mulai mendapatkan perhatian yang lebih luas pada abad ke-20 ketika digunakan dalam konteks pendidikan dan hiburan. Angklung tidak hanya dianggap sebagai alat musik, tetapi juga sebagai simbol budaya dan identitas bangsa Indonesia. Pada tahun 2010, UNESCO mengakui angklung sebagai Warisan Budaya Tak Benda dari Indonesia. Pengakuan ini membantu meningkatkan kesadaran akan pentingnya melestarikan dan mempromosikan angklung di tingkat nasional maupun internasional. Dalam pertunjukan angklung, biasanya sekelompok orang akan memegang beberapa angklung yang telah disusun sedemikian rupa, lalu mereka akan menggerakkan angklung tersebut dengan cara digoyangkan. Melalui koordinasi yang baik, mereka dapat menghasilkan lagu-lagu yang indah dan menghibur. Saat ini, angklung tidak hanya dipertunjukkan dalam acara-acara tradisional, tetapi juga dalam konser musik, festival budaya, dan kegiatan seni lainnya di berbagai belahan dunia.",
  },
  {
    id: "cult-2",
    name: "Suling Sunda",
    type: "Alat musik",
    description:
      "Suling adalah alat musik tiup yang terbuat dari bambu. Alat musik ini memiliki lubang-lubang yang menghasilkan nada ketika ditiup.",
    coordinates: [-6.934, 107.605],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Suling.jpg",
    article:
      "Suling Sunda adalah alat musik tiup tradisional yang berasal dari Sunda, Jawa Barat, Indonesia. Alat musik ini terbuat dari bambu dengan lubang yang disusun sedemikian rupa untuk menghasilkan nada-nada yang indah. Suling Sunda sering digunakan dalam berbagai pertunjukan seni tradisional dan musik rakyat di Jawa Barat. Teknik memainkan suling ini melibatkan cara menutup dan membuka lubang-lubang pada suling dengan jari-jari tangan, sehingga menghasilkan serangkaian melodi yang khas. Suling Sunda biasanya digunakan sebagai instrumen solis atau pengiring dalam berbagai komposisi musik tradisional Sunda, seperti degung, kacapi suling, atau wayang golek. Selain itu, suling ini juga sering digunakan dalam berbagai upacara adat atau ritual keagamaan di masyarakat Sunda. Dengan keindahan suaranya dan kemampuannya untuk menciptakan berbagai nuansa musikal, Suling Sunda menjadi salah satu warisan budaya yang patut dilestarikan dan dipromosikan di Indonesia.",
  },
  {
    id: "cult-3",
    name: "Kacapi",
    type: "Alat musik",
    description:
      "Kacapi adalah alat musik petik tradisional Sunda yang dimainkan dengan cara memetik senarnya. Alat musik ini sering digunakan dalam musik tradisional Sunda.",
    coordinates: [-6.912, 107.608],
    imageUrl:
      "https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/87913/original/alat_musik_kecapi_5_.jpeg",
    article:
      "Kacapi adalah alat musik petik tradisional yang berasal dari Jawa Barat, Indonesia. Alat musik ini terbuat dari kayu dan memiliki bentuk yang mirip dengan kotak persegi panjang. Kacapi memiliki dawai yang disetel dengan berbagai nada, dan dimainkan dengan cara dipetik dengan jari-jari tangan. Alat musik ini sering digunakan dalam berbagai pertunjukan seni tradisional Sunda, seperti wayang golek, tari tradisional, dan acara-acara adat. Suara yang dihasilkan oleh kacapi sangat khas dan indah, menciptakan suasana yang tenang dan memikat bagi pendengarnya. Kacapi juga sering digunakan sebagai pengiring dalam paduan suara atau ensemble musik tradisional Sunda. Meskipun telah ada modernisasi dalam dunia musik, kacapi tetap dihargai dan dilestarikan sebagai bagian penting dari warisan budaya Jawa Barat.",
  },
  {
    id: "cult-4",
    name: "Calung",
    type: "Alat musik",
    description:
      "Calung adalah alat musik tradisional Sunda yang mirip dengan angklung, tetapi dimainkan dengan cara dipukul menggunakan alat pemukul khusus.",
    coordinates: [-6.915, 107.619],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoyr05kPLa-i9xsq4iNrHwY85STiVmh-tHA&s",
    article:
      "Calung adalah salah satu alat musik tradisional Sunda yang memiliki karakteristik unik dalam bunyinya. Mirip dengan angklung, calung terbuat dari bambu, namun dimainkan dengan cara dipukul menggunakan alat pemukul khusus. Alat musik ini sering kali digunakan dalam berbagai pertunjukan seni tradisional di daerah Sunda, menciptakan suasana yang khas dan memikat. Calung sering menjadi bagian penting dalam upacara adat, festival budaya, dan pertunjukan musik rakyat. Dengan ciri khasnya yang khas dan suara yang indah, calung menjadi salah satu warisan budaya yang patut dilestarikan di Indonesia.",
  },
  {
    id: "cult-5",
    name: "Tarawangsa",
    type: "Alat musik",
    description:
      "Tarawangsa adalah alat musik gesek tradisional Sunda yang mirip dengan rebab. Alat musik ini digunakan dalam berbagai upacara adat.",
    coordinates: [-6.917, 107.62],
    imageUrl:
      "https://cdn.antaranews.com/cache/730x487/2021/03/13/Alat-Musik-Tarawangsa-Nyaris-Punah-130321-ADB-1_1.jpg",
    article:
      "Tarawangsa merupakan salah satu alat musik gesek tradisional yang berasal dari Sunda. Alat musik ini mirip dengan rebab dan sering digunakan dalam berbagai upacara adat di Jawa Barat. Tarawangsa dimainkan dengan cara digesek menggunakan busur, menghasilkan suara yang khas dan merdu. Biasanya, tarawangsa digunakan sebagai pengiring dalam pertunjukan seni tradisional, seperti tari-tarian atau wayang golek. Namun, penggunaan tarawangsa tidak terbatas hanya pada pertunjukan seni, melainkan juga dalam berbagai ritual keagamaan atau perayaan budaya di masyarakat Sunda. Meskipun tidak sepopuler beberapa alat musik tradisional lainnya, tarawangsa tetap menjadi bagian tak terpisahkan dari warisan budaya Sunda dan menjadi simbol kekayaan budaya Indonesia.",
  },
  {
    id: "cult-6",
    name: "Celempung",
    type: "Alat musik",
    description:
      "Celempung adalah alat musik petik tradisional Sunda yang terbuat dari bambu dan dimainkan dengan cara dipetik.",
    coordinates: [-6.92, 107.623],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Celempung_Tunggal.jpg",
    article:
      "Celempung adalah salah satu alat musik petik tradisional yang berasal dari Jawa Barat, Indonesia. Alat musik ini biasanya terbuat dari bahan kayu atau bambu dengan dawai yang disetel dengan berbagai nada. Cara memainkan celempung adalah dengan cara dipetik menggunakan jari-jari tangan atau alat petik khusus. Suara yang dihasilkan oleh celempung sangat khas dan indah, menciptakan suasana yang tenang dan memikat bagi pendengarnya. Celempung sering digunakan dalam berbagai pertunjukan seni tradisional di Jawa Barat, seperti wayang golek, tari tradisional, dan acara-acara adat. Dengan karakteristiknya yang unik dan suara yang merdu, celempung menjadi salah satu warisan budaya yang patut dilestarikan di Indonesia.",
  },
  {
    id: "cult-7",
    name: "Gong",
    type: "Alat musik",
    description:
      "Gong adalah alat musik perkusi tradisional yang terbuat dari logam dan dimainkan dengan cara dipukul. Gong biasanya digunakan dalam musik gamelan.",
    coordinates: [-6.928, 107.635],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Traditional_indonesian_instruments04.jpg/800px-Traditional_indonesian_instruments04.jpg",
    article:
      "Gong adalah salah satu alat musik perkusi tradisional yang sangat populer di Asia Tenggara, termasuk Indonesia. Gong terbuat dari logam dan memiliki bentuk cembung dengan hiasan yang indah. Cara memainkan gong adalah dengan cara dipukul menggunakan pemukul khusus, menghasilkan suara bergetar yang dalam dan merdu. Gong memiliki peran yang sangat penting dalam berbagai upacara adat, pertunjukan seni tradisional, dan musik rakyat di Indonesia. Suara gong sering digunakan untuk memulai atau mengakhiri acara, serta sebagai pengiring dalam musik gamelan dan berbagai ensambel musik tradisional. Dengan karakteristiknya yang khas dan perannya yang penting dalam kehidupan masyarakat Indonesia, gong menjadi salah satu simbol kekayaan budaya dan warisan tradisional yang patut dijaga dan dilestarikan.",
  },
  {
    id: "cult-8",
    name: "Jaipongan",
    type: "Tarian tradisional",
    description:
      "Jaipongan adalah tarian tradisional Sunda yang energik dan dinamis, yang dikembangkan oleh Gugum Gumbira pada tahun 1974. Tarian ini menggabungkan gerakan pencak silat dan tari rakyat.",
    coordinates: [-6.9175, 107.6191],
    imageUrl:
      "https://asset.kompas.com/crops/VpXXfXOFR6F9T70pJ08HZZUjPOk=/0x0:0x0/750x500/data/photo/buku/63072e6009aaa.jpg",
    article:
      "Jaipongan adalah salah satu tarian tradisional yang paling populer di Jawa Barat, Indonesia. Tarian ini diciptakan oleh seniman terkenal, Gugum Gumbira, pada tahun 1976. Jaipongan menggabungkan elemen-elemen tari tradisional Sunda dengan musik modern, menciptakan gaya yang unik dan enerjik. Gerakan dalam jaipongan cenderung lincah dan sensual, sering kali menggambarkan keseimbangan antara kekuatan dan kelembutan. Musik dalam jaipongan biasanya menggunakan alat musik tradisional Sunda, seperti kendang, suling, dan angklung, yang dikombinasikan dengan instrumen modern seperti gitar listrik dan keyboard. Jaipongan sering dipentaskan dalam berbagai acara budaya, festival, dan perayaan di Jawa Barat, serta menjadi bagian dari upaya untuk melestarikan dan mempromosikan budaya Sunda. Dengan gaya yang enerjik dan dinamis, jaipongan terus menjadi daya tarik yang besar bagi penonton di seluruh Indonesia.",
  },
  {
    id: "cult-9",
    name: "Topeng Cirebon",
    type: "Tarian tradisional",
    description:
      "Topeng Cirebon adalah tarian tradisional dari Cirebon yang menggunakan topeng sebagai bagian dari kostum penarinya. Tarian ini menggambarkan cerita-cerita rakyat dan legenda setempat.",
    coordinates: [-6.7063, 108.557],
    imageUrl:
      "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/24/2021/06/tari-topeng-2-tribun.jpg?width=450&quality=90",
    article:
      "Topeng Cirebon adalah salah satu tarian tradisional yang berasal dari Kabupaten Cirebon, Jawa Barat, Indonesia. Tarian ini ditampilkan dengan menggunakan topeng khas yang melambangkan berbagai tokoh atau karakter, seperti dewa, raja, atau binatang. Topeng Cirebon sering kali dipentaskan dalam berbagai upacara adat, pertunjukan seni, dan festival budaya di Jawa Barat. Setiap topeng memiliki karakteristik yang unik, baik dari segi desain maupun makna simbolisnya. Penari topeng Cirebon sering kali menggunakan gerakan yang lincah dan ekspresif, menciptakan suasana yang dramatis dan menghibur. Musik pengiring dalam pertunjukan topeng Cirebon biasanya menggunakan alat musik tradisional Sunda, seperti kendang, suling, dan gamelan. Dengan keindahan kostum dan gerakan yang dramatis, topeng Cirebon terus menjadi bagian penting dari warisan budaya dan seni pertunjukan di Jawa Barat, serta menjadi salah satu daya tarik wisata budaya di Indonesia.",
  },
  {
    id: "cult-10",
    name: "Merak",
    type: "Tarian tradisional",
    description:
      "Tari Merak adalah tarian yang menggambarkan keindahan burung merak. Penari mengenakan kostum berwarna-warni yang menyerupai bulu merak, dan gerakannya meniru tarian burung tersebut.",
    coordinates: [-6.9147, 107.6098],
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/DSC_0624_yuri.jpg/1200px-DSC_0624_yuri.jpg",
    article:
      "Tari Merak adalah salah satu tarian tradisional yang berasal dari Provinsi Jawa Barat, Indonesia. Tarian ini terinspirasi oleh gerakan burung merak yang anggun dan indah. Gerakan dalam Tari Merak menirukan gerakan burung merak, dengan gerakan yang anggun dan elegan. Kostum penari Tari Merak sering kali dihias dengan motif-motif yang menyerupai bulu burung merak, menciptakan kesan yang cantik dan memukau. Tari Merak sering dipentaskan dalam berbagai upacara adat, pertunjukan seni, dan festival budaya sebagai bagian dari warisan budaya Indonesia. Musik pengiring dalam Tari Merak biasanya menggunakan alat musik tradisional Sunda, seperti gamelan, suling, dan kendang. Dengan keindahan gerakan dan kostum, Tari Merak terus menjadi bagian penting dari seni pertunjukan dan budaya Jawa Barat, serta menjadi salah satu daya tarik wisata budaya di Indonesia.",
  },
  {
    id: "cult-11",
    name: "Ketuk Tilu",
    type: "Tarian tradisional",
    description:
      "Ketuk Tilu adalah tarian tradisional Sunda yang biasanya dilakukan dalam acara-acara perayaan dan upacara adat. Tarian ini diiringi oleh alat musik tradisional seperti kendang, rebab, dan gong.",
    coordinates: [-6.912, 107.608],
    imageUrl:
      "https://sultantv.co/wp-content/uploads/2023/06/tari-ketuk-tilu-3.jpg",
    article:
      "Ketuk Tilu adalah salah satu tarian tradisional yang berasal dari daerah Sunda, Jawa Barat, Indonesia. Tarian ini menggabungkan gerakan tari yang enerjik dengan musik yang menggembirakan. Ketuk Tilu sering dipentaskan dalam berbagai acara adat, festival budaya, dan pertunjukan seni di Jawa Barat. Gerakan dalam Ketuk Tilu cenderung lincah dan ekspresif, sering kali menggambarkan kehidupan sehari-hari atau kegiatan pertanian masyarakat Sunda. Musik pengiring dalam Ketuk Tilu biasanya menggunakan alat musik tradisional Sunda, seperti kendang, suling, dan gamelan. Tarian ini sering menjadi bagian yang tak terpisahkan dari acara-acara rakyat di Jawa Barat, menciptakan suasana yang meriah dan menghibur. Dengan keceriaan gerakan dan musiknya, Ketuk Tilu terus menjadi salah satu warisan budaya yang patut dilestarikan dan dipromosikan di Indonesia.",
  },
  {
    id: "cult-12",
    name: "Sampiung",
    type: "Tarian tradisional",
    description:
      "Tari Sampiung adalah tarian tradisional yang berasal dari daerah Sunda, Jawa Barat. Tarian ini menggambarkan kegiatan sehari-hari masyarakat Sunda.",
    coordinates: [-6.9175, 107.6191],
    imageUrl:
      "https://kudjang.wordpress.com/wp-content/uploads/2018/02/tari-sampiung-300x195.jpg?w=640",
    article:
      "Sampiung adalah salah satu tarian tradisional yang berasal dari Jawa Barat, Indonesia. Tarian ini menggambarkan kegiatan masyarakat pedesaan dalam mengolah padi. Gerakan dalam tarian Sampiung cenderung menggambarkan proses pertanian, seperti menanam, menyiangi, dan menuai padi. Musik pengiring dalam tarian ini biasanya menggunakan alat musik tradisional Sunda, seperti kendang, suling, dan gamelan. Tarian Sampiung sering dipentaskan dalam berbagai acara adat, festival budaya, dan pertunjukan seni di Jawa Barat, sebagai bentuk apresiasi terhadap kehidupan petani dan kekayaan alam Indonesia. Dengan makna dan nilai budaya yang terkandung dalam setiap gerakannya, Sampiung menjadi salah satu bagian penting dari warisan budaya Jawa Barat yang patut dilestarikan dan dipromosikan.",
  },
  {
    id: "cult-13",
    name: "Bajidor Kahot",
    type: "Tarian tradisional",
    description:
      "Bajidor Kahot adalah tarian kreasi baru yang berasal dari daerah Subang, Jawa Barat. Tarian ini menggabungkan gerakan tari jaipong dengan musik dangdut.",
    coordinates: [-6.575, 107.7606],
    imageUrl:
      "https://pdbifiles.nos.jkt-1.neo.id/files/2014/08/24/baidowi_bajidorkahot.jpg",
    article:
      "Bajidor Kahot adalah salah satu tarian tradisional yang berasal dari daerah Sunda, Jawa Barat, Indonesia. Tarian ini biasanya ditampilkan dalam upacara adat, festival budaya, dan perayaan rakyat di Jawa Barat. Bajidor Kahot menggambarkan kegembiraan dan semangat hidup masyarakat Sunda, dengan gerakan yang lincah dan musik yang meriah. Penari Bajidor Kahot sering mengenakan kostum yang cerah dan berwarna-warni, menciptakan suasana yang riang dan menghibur bagi penontonnya. Musik pengiring dalam tarian ini biasanya menggunakan alat musik tradisional Sunda, seperti kendang, suling, dan gamelan. Dengan kegembiraan dan semangatnya, Bajidor Kahot menjadi salah satu bentuk ekspresi seni yang penting dalam kehidupan masyarakat Sunda, serta menjadi bagian tak terpisahkan dari warisan budaya Jawa Barat yang patut dilestarikan dan dipromosikan.",
  },
  {
    id: "cult-14",
    name: "Wayang Golek",
    type: "Seni pertunjukan",
    description:
      "Wayang Golek adalah seni pertunjukan boneka tradisional Sunda yang menggunakan boneka kayu untuk menceritakan berbagai kisah, terutama cerita epik Ramayana dan Mahabharata.",
    coordinates: [-6.9175, 107.6191],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09Vi0eLl26pX_COUPDgm85ftM1jXSfhcMfg&s",
    article:
      "Wayang Golek adalah seni pertunjukan tradisional yang berasal dari Sunda, Jawa Barat, Indonesia. Pertunjukan ini menggunakan boneka kayu yang disebut 'golek' yang diatur di atas panggung dan dimainkan oleh dalang. Wayang Golek mengisahkan berbagai cerita epik dan mitologis, sering kali berdasarkan pada kitab Ramayana atau Mahabharata. Setiap tokoh dalam pertunjukan Wayang Golek memiliki karakteristik yang unik, baik dari segi penampilan maupun kepribadiannya. Dalang, atau pemain wayang, tidak hanya bertugas memainkan boneka-boneka tersebut, tetapi juga memberi suara dan dialog kepada setiap karakter, serta mengatur alur cerita dan menambahkan humor. Musik pengiring dalam pertunjukan ini menggunakan alat musik tradisional Sunda, seperti kendang, suling, dan gamelan. Wayang Golek sering dipentaskan dalam berbagai upacara adat, festival budaya, dan acara rakyat di Jawa Barat, sebagai bentuk hiburan dan penyaluran nilai-nilai budaya. Dengan kekayaan cerita dan keindahan pertunjukannya, Wayang Golek menjadi salah satu warisan budaya yang patut dilestarikan dan dipromosikan di Indonesia.",
  },
  {
    id: "cult-15",
    name: "Kebaya Sunda",
    type: "Baju Adat",
    description:
      "Kebaya Sunda adalah baju adat wanita yang biasa dipakai dalam upacara pernikahan atau acara adat lainnya. Kebaya ini biasanya dihiasi dengan brokat dan renda, serta dipadukan dengan kain batik atau songket.",
    coordinates: [-6.9175, 107.6191],
    imageUrl: "https://kagama.id/wp-content/uploads/2023/02/001.jpg",
    article:
      "Kebaya Sunda adalah busana tradisional yang berasal dari Sunda, Jawa Barat, Indonesia. Kebaya Sunda terdiri dari atasan yang terbuat dari kain tipis dan transparan dengan hiasan bordir yang indah, serta bawahan berupa kain panjang yang disebut 'kain batik' atau 'kain sarung'. Busana ini sering dipakai dalam berbagai acara adat, upacara pernikahan, dan festival budaya di Jawa Barat. Kebaya Sunda memiliki berbagai varian desain, mulai dari yang sederhana hingga yang sangat mewah dan dihiasi dengan payet atau manik-manik. Wanita yang mengenakan kebaya Sunda sering kali memadukannya dengan aksesoris tradisional, seperti anting-anting, gelang, atau kalung, untuk menambah kesan anggun dan elegan. Dengan keindahan desain dan keberagaman motifnya, Kebaya Sunda menjadi salah satu simbol kebanggaan dan kekayaan budaya Indonesia yang patut dilestarikan dan dipromosikan.",
  },
  {
    id: "cult-16",
    name: "Beskap Sunda",
    type: "Baju Adat",
    description:
      "Beskap Sunda adalah pakaian adat pria yang sering digunakan dalam upacara adat atau pernikahan. Beskap ini biasanya dilengkapi dengan blangkon dan kain batik atau songket.",
    coordinates: [-6.9147, 107.6098],
    imageUrl: "https://gadingkostum.com/assets/upload/images/LAA0028REV22.jpg",
    article:
      "Beskap Sunda adalah busana tradisional pria yang berasal dari Sunda, Jawa Barat, Indonesia. Beskap Sunda terdiri dari atasan berupa jaket atau jubah pendek yang terbuat dari kain dengan hiasan bordir yang indah, serta celana panjang yang serasi. Busana ini sering dipakai dalam berbagai acara adat, upacara pernikahan, dan festival budaya di Jawa Barat. Beskap Sunda biasanya dipadukan dengan kain batik atau sarung sebagai bawahan, serta peci atau sorban sebagai penutup kepala. Pria yang mengenakan beskap Sunda sering kali menambahkan aksesoris tradisional, seperti keris atau ikat pinggang dari kain songket, untuk menambah kesan gagah dan berkelas. Dengan keindahan desain dan keberagaman motifnya, Beskap Sunda menjadi salah satu simbol kebanggaan dan kekayaan budaya Indonesia yang patut dilestarikan dan dipromosikan.",
  },
  {
    id: "cult-17",
    name: "Baju Pangsi",
    type: "Baju Adat",
    description:
      "Baju Pangsi adalah pakaian adat pria Sunda yang biasanya dipakai dalam kehidupan sehari-hari atau acara adat. Baju ini terdiri dari atasan longgar dan celana panjang yang juga longgar.",
    coordinates: [-6.917, 107.62],
    imageUrl:
      "https://awsimages.detik.net.id/community/media/visual/2022/04/20/pakaian-adat-jawa-barat-5_43.jpeg?w=1200",
    article:
      "Baju Pangsi adalah busana tradisional yang berasal dari Sunda, Jawa Barat, Indonesia. Baju Pangsi terdiri dari atasan berupa kemeja atau baju panjang dengan hiasan bordir yang indah, serta kain panjang yang digunakan sebagai celana. Busana ini sering dipakai dalam acara-acara adat, upacara pernikahan, dan festival budaya di Jawa Barat. Baju Pangsi biasanya dipadukan dengan sarung atau kain batik sebagai bawahan, serta peci atau sorban sebagai penutup kepala. Pria yang mengenakan Baju Pangsi sering kali menambahkan aksesoris tradisional, seperti ikat pinggang dari kain songket atau keris, untuk menambah kesan gagah dan berkelas. Wanita juga kadang-kadang memakai versi Baju Pangsi dengan hiasan yang lebih feminin dan lekuk tubuh yang terlihat. Dengan keindahan desain dan keberagaman motifnya, Baju Pangsi menjadi salah satu simbol kebanggaan dan kekayaan budaya Indonesia yang patut dilestarikan dan dipromosikan.",
  },
  {
    id: "cult-18",
    name: "Blangkon Sunda",
    type: "Baju Adat",
    description:
      "Blangkon Sunda adalah tutup kepala tradisional pria Sunda yang biasanya digunakan bersama beskap. Blangkon ini memiliki bentuk yang khas dan motif yang unik.",
    coordinates: [-6.915, 107.619],
    imageUrl:
      "https://visitciamis.com/wp-content/uploads/2023/02/iket-sunda-png-23-900x500.jpeg",
    article:
      "Blangkon Sunda adalah tutup kepala tradisional yang berasal dari Sunda, Jawa Barat, Indonesia. Blangkon Sunda terbuat dari kain dengan bentuk yang khas, biasanya berwarna hitam atau merah dengan hiasan motif geometris. Blangkon Sunda sering dipakai dalam acara-acara adat, upacara pernikahan, dan festival budaya di Jawa Barat. Blangkon Sunda merupakan salah satu simbol kebudayaan Sunda yang sangat dihargai dan diidentifikasi dengan kebanggaan etnis Sunda. Blangkon ini juga dipakai dalam berbagai kesempatan, baik formal maupun informal, untuk menampilkan identitas budaya dan nasionalisme.",
  },
];

export const DataPeta = {
  getDataMarker() {
    const dataPeta = culturalLocations;
    return Promise.resolve(dataPeta);
  },

  getDetail(id: string){
    const dataPeta = culturalLocations;
    const detail = dataPeta.find((item) => item.id === id);
    return Promise.resolve(detail);
  }
};
