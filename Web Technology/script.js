const districts = [
  {
    name: "Ariyalur",
    region: "Central Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Gangaikondacholapuram_temple02.jpg/800px-Gangaikondacholapuram_temple02.jpg",
    temples: [
      { name: "Gangaikondacholapuram Temple", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Gangaikondacholapuram_temple02.jpg/400px-Gangaikondacholapuram_temple02.jpg", desc: "A magnificent 11th century Chola masterpiece built by Rajendra Chola I, rivalling Thanjavur in grandeur with its unique curved vimana and stunning sculptures." },
      { name: "Thirumudhu Kundram Temple", img: "", desc: "Ancient Shiva temple known for its intricate stone carvings dating back to the Pallava period, nestled in scenic rural surroundings." },
      { name: "Sendurai Kailasanathar Temple", img: "", desc: "A revered Shiva temple with rock-cut sanctum, reflecting early Dravidian architectural styles with exquisite bas-relief carvings." }
    ],
    detail: "Ariyalur district holds immense historical significance as part of the ancient Chola heartland. The district's temples reflect the zenith of Chola temple architecture, featuring ornate mandapams, towering vimanas, and detailed sculptures narrating Puranic stories."
  },
  {
    name: "Chengalpattu",
    region: "Northern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Vedanthangal_Bird_Sanctuary.jpg/800px-Vedanthangal_Bird_Sanctuary.jpg",
    temples: [
      { name: "Sthalasayana Perumal Temple, Mahabalipuram", img: "", desc: "An ancient Vishnu temple in the UNESCO World Heritage town of Mahabalipuram, combining spiritual significance with stunning Shore Temple surroundings." },
      { name: "Vedal Murugan Temple", img: "", desc: "Popular hilltop Murugan shrine attracting thousands of pilgrims, especially during Thaipusam, offering panoramic views of the Coromandel Coast." },
      { name: "Thirukalukundram Vedagiri Temple", img: "", desc: "Famous for the mythological Neophron eagles (Shadurangam birds) that were said to receive food offerings daily for centuries, dedicated to Lord Shiva." }
    ],
    detail: "Chengalpattu bridges ancient heritage and modern Chennai. The district encompasses the famous Shore Temple of Mahabalipuram (UNESCO World Heritage), Pallava rock-cut monuments, and numerous Vaishnava divya desams."
  },
  {
    name: "Chennai",
    region: "Capital District",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Parthasarathy_temple_2.jpg/800px-Parthasarathy_temple_2.jpg",
    temples: [
      { name: "Parthasarathy Temple, Triplicane", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Parthasarathy_temple_2.jpg/400px-Parthasarathy_temple_2.jpg", desc: "One of the oldest Divya Desams, dedicated to Lord Vishnu as Parthasarathy (Krishna as Arjuna's charioteer), built by the Pallavas in the 8th century CE." },
      { name: "Kapaleeswarar Temple, Mylapore", img: "", desc: "The iconic Shiva temple of Chennai with its towering 37-metre rainbow-hued gopuram, a spiritual and cultural heart of the ancient Mylapore neighbourhood." },
      { name: "Ashtalakshmi Temple, Besant Nagar", img: "", desc: "A unique modern temple on the sea shore dedicated to eight forms of Goddess Lakshmi, architecturally spectacular against the Bay of Bengal backdrop." }
    ],
    detail: "Chennai, the cultural capital, houses temples spanning centuries. From Pallava-era Parthasarathy to the Dravidian grandeur of Kapaleeswarar, the city weaves spirituality into its cosmopolitan fabric."
  },
  {
    name: "Coimbatore",
    region: "Western Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Patanjali_Statue_Adiyogi.jpg/800px-Patanjali_Statue_Adiyogi.jpg",
    temples: [
      { name: "Adiyogi Shiva Statue & Isha Yoga Centre", img: "", desc: "The world's largest Shiva bust at 34 metres tall, a modern spiritual landmark in the foothills of Velliangiri Mountains, a pilgrimage for millions annually." },
      { name: "Arulmigu Perur Pateeswarar Temple", img: "", desc: "An ancient Shiva temple with stunning sculptures, mentioned in Thevaram hymns by the Nayanmars, surrounded by the lush Noyyal river valley." },
      { name: "Marudhamalai Murugan Temple", img: "", desc: "A hilltop Murugan shrine at 500 feet altitude in the Western Ghats, renowned for its golden chariot festival and breathtaking mountain scenery." }
    ],
    detail: "Coimbatore, the 'Manchester of South India', surprises visitors with its deep spiritual landscape. Nestled against the Western Ghats, it is home to ancient Shaiva temples, the iconic Adiyogi Shiva, and the sacred Velliangiri Hills."
  },
  {
    name: "Cuddalore",
    region: "Eastern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Nataraja_Temple%2C_Chidambaram.jpg/800px-Nataraja_Temple%2C_Chidambaram.jpg",
    temples: [
      { name: "Nataraja Temple, Chidambaram", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Nataraja_Temple%2C_Chidambaram.jpg/400px-Nataraja_Temple%2C_Chidambaram.jpg", desc: "One of the Pancha Bhuta Stalas (Space/Akasha), this cosmic temple of Nataraja is the legendary stage of Shiva's dance (Tandava), supreme in Tamil Shaivism." },
      { name: "Thillai Natarajar Temple, Chidambaram", img: "", desc: "The sanctum's golden roof and the Chidambara Rahasyam (secret of Chidambaram) make this one of the most philosophically profound temples in India." },
      { name: "Bhuvanagiri Shiva Temple", img: "", desc: "Ancient hilltop Shiva temple with panoramic coastal views, featuring rare Pallava inscriptions and a sacred tank used for ritual bathing by pilgrims." }
    ],
    detail: "Cuddalore district is home to the legendary Chidambaram, the cosmic centre of Tamil Shaivism. The Nataraja Temple represents Akasha (space/ether) among the Pancha Bhuta Stalas, making it uniquely significant in Hindu cosmology."
  },
  {
    name: "Dharmapuri",
    region: "Northwestern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hogenakal_Falls.jpg/800px-Hogenakal_Falls.jpg",
    temples: [
      { name: "Theerthamalai Swami Temple", img: "", desc: "Hilltop temple complex with natural healing springs, drawing thousands seeking both spiritual merit and therapeutic benefits from the sacred waters." },
      { name: "Palamalai Murugan Temple", img: "", desc: "A serene hilltop shrine dedicated to Lord Murugan, offering panoramic views of the Cauvery valley and the surrounding dry deciduous forests." },
      { name: "Pappireddipatty Shiva Temple", img: "", desc: "One of the oldest Shiva temples in Dharmapuri, featuring beautiful stone carvings and a deeply revered Lingam said to be swayambhu (self-manifested)." }
    ],
    detail: "Dharmapuri sits at the confluence of Karnataka's Deccan Plateau and Tamil Nadu's plains. Its temples blend Tamil and Kannada architectural traditions, while the healing springs of Theerthamalai attract pilgrims year-round."
  },
  {
    name: "Dindigul",
    region: "South Central Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dindigul_Fort.jpg/800px-Dindigul_Fort.jpg",
    temples: [
      { name: "Rockfort Murugan Temple, Dindigul", img: "", desc: "Dramatically perched atop a 270-million-year-old granite rock, this Murugan temple requires climbing 417 steps and offers sweeping views of the Palani Hills." },
      { name: "Arulmigu Dhandayuthapani Temple, Palani", img: "", desc: "One of the six abodes of Murugan (Arupadaiveedu), the Palani Dandayudhapani temple sees millions of pilgrims especially during Thaipusam festival." },
      { name: "Kodaikanal Lake Temple", img: "", desc: "A charming hill station temple overlooking the star-shaped Kodaikanal lake, combining natural beauty with spiritual serenity amidst eucalyptus forests." }
    ],
    detail: "Dindigul houses the sacred Palani Hills — one of the most visited pilgrimage centres in India. The Murugan temple at Palani receives over 3 crore visitors annually, while Kodaikanal's scenic temples offer peaceful mountain spirituality."
  },
  {
    name: "Erode",
    region: "Western Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bhavani_Sangameswarar_temple.jpg/800px-Bhavani_Sangameswarar_temple.jpg",
    temples: [
      { name: "Sangameswarar Temple, Bhavani", img: "", desc: "Unique temple situated at the confluence (Sangamam) of three rivers — Cauvery, Bhavani, and Amudha — considered extremely auspicious for ancestral rituals." },
      { name: "Bannari Amman Temple", img: "", desc: "Renowned Shakti shrine at the foothills of Nilgiri hills, the presiding deity Bannari Amman is believed to grant wishes and protect travellers on the mountain road." },
      { name: "Thindal Murugan Temple", img: "", desc: "An ancient Murugan temple on the banks of river Cauvery, with elaborate bronze sculptures and beautifully carved mandapams dating to the medieval period." }
    ],
    detail: "Erode is a land of confluences — rivers, cultures, and spiritual traditions. The sacred river junction at Bhavani rivals Prayagraj's Triveni Sangam in spiritual significance for Tamil pilgrims."
  },
  {
    name: "Kallakurichi",
    region: "Northern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gomukhi_waterfalls.jpg/800px-Gomukhi_waterfalls.jpg",
    temples: [
      { name: "Gomukhi Waterfall Murugan Temple", img: "", desc: "A scenic hill temple where the deity is worshipped amidst the thundering Gomukhi waterfalls, creating a uniquely dramatic natural sacred space." },
      { name: "Thirukoilur Ulagalantha Perumal Temple", img: "", desc: "One of the 108 Divya Desams (Vaishnava sacred sites), this ancient Vishnu temple has been glorified by Azhwars and features stunning classical sculptures." },
      { name: "Ulundurpet Kailasanathar Temple", img: "", desc: "A historic Shiva temple with ancient Tamil Brahmi inscriptions, serving as an important religious centre for the newly formed Kallakurichi district." }
    ],
    detail: "Kallakurichi, one of Tamil Nadu's newest districts, is home to the Divya Desam at Thirukoilur and several significant forest temples, blending natural beauty with ancient devotion."
  },
  {
    name: "Kancheepuram",
    region: "Northern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kanchi_Kailasanathar_temple.jpg/800px-Kanchi_Kailasanathar_temple.jpg",
    temples: [
      { name: "Kailasanathar Temple", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kanchi_Kailasanathar_temple.jpg/400px-Kanchi_Kailasanathar_temple.jpg", desc: "The oldest temple in Kancheepuram (7th century CE), built by Pallava king Rajasimha, renowned for its sandstone carvings and the iconic ambulatory passage of 58 sub-shrines." },
      { name: "Ekambareswarar Temple", img: "", desc: "One of the Pancha Bhuta Stalas representing Earth (Prithvi), with a magnificent 59-metre gopuram and a sacred mango tree believed to be 3,500 years old." },
      { name: "Varadharaja Perumal Temple", img: "", desc: "A grand Divya Desam dedicated to Vishnu, featuring a remarkable 100-pillar hall with exquisite sculptures and a sacred lizard idol that pilgrims touch for blessings." }
    ],
    detail: "Kancheepuram, the 'City of a Thousand Temples,' is one of India's seven sacred cities (Sapta Puri). With over 1,000 temples, including multiple Pancha Bhuta Stalas and Divya Desams, it is arguably the most temple-dense city on Earth."
  },
  {
    name: "Kanniyakumari",
    region: "Southernmost Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vivekananda_Rock_Memorial%2C_Kanyakumari.jpg/800px-Vivekananda_Rock_Memorial%2C_Kanyakumari.jpg",
    temples: [
      { name: "Kumari Amman Temple", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vivekananda_Rock_Memorial%2C_Kanyakumari.jpg/400px-Vivekananda_Rock_Memorial%2C_Kanyakumari.jpg", desc: "At the southernmost tip of India, this ancient Shakti shrine houses the eternal virgin goddess Kumari Devi, where three seas meet." },
      { name: "Thanumalayan Temple, Suchindram", img: "", desc: "A remarkable temple with all three principal deities — Brahma, Vishnu, and Shiva — enshrined as one (Thanumalayan), unique in all of India's temple heritage." },
      { name: "Nagaraja Temple, Nagercoil", img: "", desc: "One of the most important serpent deity temples in South India, worshipping Nagaraja (King of Serpents), drawing pilgrims seeking relief from Naga doshas." }
    ],
    detail: "Kanniyakumari stands at the mystical confluence of three oceans at India's southernmost point. The land is sacred to Shakti worship and home to the ancient Kumari Amman temple, drawing millions who come to witness the legendary sunrise and sunset."
  },
  {
    name: "Karur",
    region: "Central Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Karur_Pasupatheswarar_Temple.jpg/800px-Karur_Pasupatheswarar_Temple.jpg",
    temples: [
      { name: "Pasupatheswarar Temple, Karur", img: "", desc: "An ancient Shiva temple on the banks of the Amaravathi river, with historical significance dating to the Sangam age when Karur was the ancient Chera capital." },
      { name: "Kalyana Pasupatheswarar Temple", img: "", desc: "Known for granting marital blessings, this beautiful Shiva temple is a popular destination for couples and unmarried devotees seeking divine matchmaking." },
      { name: "Thirumanancheri Kalyanasundaresar Temple", img: "", desc: "Renowned as the 'wedding temple,' Thirumanancheri is the go-to destination for couples facing marriage obstacles, where Shiva and Parvati's wedding is eternally enacted." }
    ],
    detail: "Karur, the ancient Chera capital (Vanchi Muthur), has a history dating over 2,000 years. Its temples echo with Sangam literature and are intertwined with the river Amaravathi."
  },
  {
    name: "Krishnagiri",
    region: "Northwestern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Krishnagiri_dam.jpg/800px-Krishnagiri_dam.jpg",
    temples: [
      { name: "Krishnaswami Temple, Krishnagiri Fort", img: "", desc: "A historic Krishna temple within the 16th century Krishnagiri Fort, offering stunning panoramic views and combining military history with spiritual heritage." },
      { name: "Rayakottai Murugan Temple", img: "", desc: "A hilltop temple atop the imposing Rayakottai fort hill, where the ancient Murugan shrine is surrounded by remnants of the Tipu Sultan-era fortifications." },
      { name: "Anchetty Arulmigu Murugan Temple", img: "", desc: "A peaceful forest temple nestled in the Cauvery Wildlife Sanctuary, attracting devotees and nature lovers seeking divine blessings amidst pristine wilderness." }
    ],
    detail: "Krishnagiri sits in the rolling granite hills bordering Karnataka. The district's temples are often combined with historic forts and natural landscapes, offering a unique blend of spiritual and historical tourism."
  },
  {
    name: "Madurai",
    region: "South Central Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Meenakshi_Sundareswarar_Temple.jpg/800px-Meenakshi_Sundareswarar_Temple.jpg",
    temples: [
      { name: "Meenakshi Amman Temple", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Meenakshi_Sundareswarar_Temple.jpg/400px-Meenakshi_Sundareswarar_Temple.jpg", desc: "The crown jewel of Dravidian architecture — 14 towering gopurams adorned with over 33,000 painted sculptures, dedicated to Goddess Meenakshi and Lord Sundareswarar." },
      { name: "Koodal Azhagar Temple", img: "", desc: "One of the most important Divya Desams in Madurai, the Vishnu temple features unique iconography of Vishnu seated, standing, and reclining — all in one sanctum." },
      { name: "Thiruparankundram Murugan Temple", img: "", desc: "One of the six Arupadaiveedu of Murugan, this rock-cut cave temple dates to the 8th century, where Murugan is worshipped as Subramanya who wed Devasena." }
    ],
    detail: "Madurai, the 'Athens of the East,' is one of India's oldest continuously inhabited cities with over 2,500 years of history. The Meenakshi Amman Temple is an architectural colossus that was a candidate for the New Seven Wonders of the World."
  },
  {
    name: "Mayiladuthurai",
    region: "Cauvery Delta",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mayiladuthurai_Mayuranathaswami_temple.jpg/800px-Mayiladuthurai_Mayuranathaswami_temple.jpg",
    temples: [
      { name: "Mayuranathaswami Temple, Mayiladuthurai", img: "", desc: "The principal temple of the district where Saraswati is said to have worshipped in the form of a peacock (Mayura), giving the town its name and sacred significance." },
      { name: "Sirkazhi Sattanathar Temple", img: "", desc: "An ancient Shiva temple where the great saint-poet Thirugnanasambandhar was born, making it a supremely important site in Tamil Shaiva devotional tradition." },
      { name: "Vaitheeswarankoil Temple", img: "", desc: "Famous for its curative powers, pilgrims afflicted with diseases immerse in the sacred Siddhamrut tank and worship Lord Vaidyanatha (Shiva as divine healer)." }
    ],
    detail: "Mayiladuthurai, the 'temple city of the Cauvery Delta,' is densely packed with ancient Shaiva temples. The region is considered so sacred that every inch of land is believed to be blessed by the Cauvery river's divine waters."
  },
  {
    name: "Nagapattinam",
    region: "Eastern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Velankanni_church.jpg/800px-Velankanni_church.jpg",
    temples: [
      { name: "Sikkal Singaravelan Temple", img: "", desc: "A celebrated Murugan temple where the deity is depicted with 12 hands, considered one of the most powerful Murugan shrines, especially during Skanda Sashti." },
      { name: "Nagore Dargah", img: "", desc: "Though a Sufi shrine, this ancient dargah exemplifies Tamil Nadu's syncretic spiritual tradition, attracting people of all faiths to the tomb of Hazrath Shahul Hamid." },
      { name: "Vedaranyeswarar Temple, Vedaranyam", img: "", desc: "The eastern equivalent of Rameswaram, at the land's end where pilgrims bathe in the sea and worship Shiva, completing the sacred Rameswaram pilgrimage circuit." }
    ],
    detail: "Nagapattinam is a coastal district where spirituality transcends religion — ancient Shaiva temples, Murugan shrines, and the famous Velankanni Basilica and Nagore Dargah coexist in remarkable harmony."
  },
  {
    name: "Namakkal",
    region: "Central Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Namakkal_fort.jpg/800px-Namakkal_fort.jpg",
    temples: [
      { name: "Namagiri Thayar Temple, Namakkal", img: "", desc: "The iconic Namakkal temple where Goddess Namagiri (Lakshmi Narasimha) resides inside a massive granite rock, venerated by the great mathematician Ramanujan's family." },
      { name: "Anjaneyar Temple, Namakkal", img: "", desc: "Believed to house one of the tallest Anjaneya (Hanuman) idols in India at 18 feet, carved inside a natural rock cave — a marvel of ancient sculpting." },
      { name: "Kolli Hills Arapaleeswarar Temple", img: "", desc: "A hilltop Shiva temple in the scenic Kolli Hills, accessible via 70 hairpin bends, combining spiritual merit with breathtaking mountain vistas and cascading waterfalls." }
    ],
    detail: "Namakkal is famous for its rock fort housing the unique Namagiri Thayar temple, revered by S. Ramanujan who attributed his mathematical genius to divine dreams of Goddess Namagiri writing equations on his tongue."
  },
  {
    name: "Perambalur",
    region: "Central Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Gangaikondacholapuram_temple02.jpg/800px-Gangaikondacholapuram_temple02.jpg",
    temples: [
      { name: "Kunnam Murugan Temple", img: "", desc: "A peaceful hillock Murugan shrine popular among local pilgrims, surrounded by granite outcrops and dry scrub forests characteristic of central Tamil Nadu." },
      { name: "Arathur Sundararajaswami Temple", img: "", desc: "An ancient Vaishnavite temple with beautiful gopurams and intricate stone carvings depicting scenes from the Ramayana and Mahabharata epics." },
      { name: "Veppur Shiva Temple", img: "", desc: "A historic Shiva temple with ancient inscriptions from the Chola period, documenting land grants and temple endowments made by Chola kings to this sacred site." }
    ],
    detail: "Perambalur, a compact district in the Chola heartland, contains numerous small but historically significant temples from the Chola and Pallava periods, many yet to be fully documented by the Archaeological Survey of India."
  },
  {
    name: "Pudukkottai",
    region: "Central Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Thirumayam_fort.jpg/800px-Thirumayam_fort.jpg",
    temples: [
      { name: "Thirumayam Fort Temple", img: "", desc: "An 8th century rock-cut Vishnu and Shiva temple complex within the Thirumayam fort, featuring massive sculptures carved directly into the granite hillside." },
      { name: "Kudumiyanmalai Temple", img: "", desc: "Contains the ancient Kudumiyamalai music inscription — the oldest surviving notation of Indian classical music (7th century CE) — etched on the temple walls." },
      { name: "Narthamalai Rock-cut Temples", img: "", desc: "A cluster of magnificent 9th century Pallava-era rock-cut cave temples with rare structural temples, representing a remarkable concentration of early Dravidian architecture." }
    ],
    detail: "Pudukkottai is an archaeologist's paradise, home to the world's oldest Indian music notation at Kudumiyamalai and remarkable Pallava and Chola-era rock-cut temples scattered across its landscape."
  },
  {
    name: "Ramanathapuram",
    region: "Southern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rameswaram_temple.jpg/800px-Rameswaram_temple.jpg",
    temples: [
      { name: "Ramanathaswamy Temple, Rameswaram", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rameswaram_temple.jpg/400px-Rameswaram_temple.jpg", desc: "One of the Char Dham and Jyotirlinga, the holiest temple in South India, famous for its 1,212-metre corridor — the longest temple corridor in the world." },
      { name: "Gandhamadhana Parvatham Temple", img: "", desc: "A hilltop shrine with Rama's footprints, offering stunning views of the Gulf of Mannar, from where Lord Rama is said to have prayed before building the Ram Setu bridge." },
      { name: "Devipattinam Navagraha Temple", img: "", desc: "A unique seaside temple where the nine planetary deities (Navagrahas) are worshipped as stones submerged in the sea, considered one of only two such temples in India." }
    ],
    detail: "Ramanathapuram, home to Rameswaram, is among the holiest destinations in Hinduism. The Ramanathaswamy Temple's corridor is an architectural wonder, and the district's coastal temples offer a rare blend of divine and oceanic beauty."
  },
  {
    name: "Ranipet",
    region: "Northern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Arcot_fort.jpg/800px-Arcot_fort.jpg",
    temples: [
      { name: "Sholinghur Yoga Narasimhar Temple", img: "", desc: "A Divya Desam temple on twin hills, where the upper hill houses Yoga Narasimha and the lower hill houses Anjaneya, requiring 600 steps of devoted climbing." },
      { name: "Walajapet Murugan Temple", img: "", desc: "An ancient Murugan temple on the banks of the Palar river, with annual chariot festivals attracting thousands of devotees from across the Arcot region." },
      { name: "Arcot Rangaswamy Temple", img: "", desc: "A historic Vaishnavite temple in the ancient Arcot town, bearing witness to the region's rich Tamil, Telugu, and Mughal cultural convergences over centuries." }
    ],
    detail: "Ranipet, formed from Vellore district, contains the important Divya Desam of Sholinghur and multiple ancient temples that reflect the region's history as a crossroads of Tamil, Telugu, and Mughal cultures."
  },
  {
    name: "Salem",
    region: "Central Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Salem_Sugavaneswarar_temple.jpg/800px-Salem_Sugavaneswarar_temple.jpg",
    temples: [
      { name: "Sugavaneswarar Temple, Salem", img: "", desc: "The principal Shiva temple of Salem city, where Shiva is worshipped as Sugavaneswarar (the Lord of sweet speech), with beautiful Nayak-period mandapams." },
      { name: "Kottai Mariamman Temple", img: "", desc: "A powerful Amman shrine within the historic Salem Fort area, renowned for its vibrant annual festival when the entire city transforms into a sea of devotion." },
      { name: "Mettur Theerthangi Temple", img: "", desc: "An ancient pilgrimage spot near the Mettur Dam, where pilgrims perform ancestral rites at the confluence of the Cauvery and the reservoir's sacred waters." }
    ],
    detail: "Salem, known for steel and turmeric, also has a rich temple heritage along the Cauvery and Thirumanimuthar river basins. The district's temples reflect Chera, Chola, and later Vijayanagara architectural influences."
  },
  {
    name: "Sivaganga",
    region: "Southern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pillayarpatti_Karpaga_Vinayakar_temple.jpg/800px-Pillayarpatti_Karpaga_Vinayakar_temple.jpg",
    temples: [
      { name: "Pillayarpatti Karpaga Vinayakar Temple", img: "", desc: "A remarkable 7th century cave temple housing a massive 6-foot Ganesha carved from a single rock — one of the most important Ganesha shrines in South India." },
      { name: "Kalayarkoil Temple", img: "", desc: "The district's principal Shiva temple, known for its unique festival where tribal communities participate in ancient rituals honouring Shiva as Kalayar." },
      { name: "Devakottai Visalakshi Amman Temple", img: "", desc: "A significant Shakti shrine in the prosperous Chettinad town, featuring classic Chettiar temple architecture with distinctive black granite pillars." }
    ],
    detail: "Sivaganga encompasses the famous Chettinad region, home to the unique Chettiar architecture that blends Tamil, Burmese, and European elements. The ancient cave temple at Pillayarpatti is a nationally protected heritage monument."
  },
  {
    name: "Tenkasi",
    region: "Southern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Courtallam_Falls.jpg/800px-Courtallam_Falls.jpg",
    temples: [
      { name: "Kasi Viswanathar Temple, Tenkasi", img: "", desc: "Called the 'Kasi of the South,' this 15th century temple mirrors Varanasi's Kashi Vishwanath, believed to grant the same spiritual merits as a pilgrimage to Banaras." },
      { name: "Courtallam Thirukutralanathar Temple", img: "", desc: "Located beside the famous Courtallam waterfalls — the 'Spa of South India' — this Shiva temple offers the rare experience of worshipping to the sound of cascading waters." },
      { name: "Sengottai Murugan Temple", img: "", desc: "A scenic Murugan shrine in the Pothigai Hills foothills, closely associated with the origins of the Tamil language and the legendary sage Agastya." }
    ],
    detail: "Tenkasi, cradled between the Western Ghats and the plains, is home to Courtallam's therapeutic waterfalls and the 'Southern Kasi' temple. The district is a gateway to the ancient Pothigai Hills, birthplace of Tamil literature."
  },
  {
    name: "Thanjavur",
    region: "Cauvery Delta",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Brihadeeswarar_Temple%2C_Thanjavur.JPG/800px-Brihadeeswarar_Temple%2C_Thanjavur.JPG",
    temples: [
      { name: "Brihadeeswarar Temple (Big Temple)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Brihadeeswarar_Temple%2C_Thanjavur.JPG/400px-Brihadeeswarar_Temple%2C_Thanjavur.JPG", desc: "A UNESCO World Heritage Site and the crowning glory of Chola architecture — the 66-metre vimana was the tallest in the world when built in 1010 CE by Rajaraja Chola I." },
      { name: "Airavatesvara Temple, Darasuram", img: "", desc: "Another UNESCO World Heritage Chola temple, smaller than Brihadeeswarar but artistically more intricate, with the legendary 'musical steps' producing seven distinct musical notes." },
      { name: "Thiruvaiyaru Panchanatheeswarar Temple", img: "", desc: "The sacred birth and performance site of Thyagaraja, the greatest composer of Carnatic music, where the annual Thyagaraja Aradhana music festival draws thousands." }
    ],
    detail: "Thanjavur, the 'Rice Bowl of Tamil Nadu' and its cultural capital, is home to multiple UNESCO World Heritage temples. The Great Living Chola Temples here represent the absolute pinnacle of Dravidian temple architecture."
  },
  {
    name: "The Nilgiris",
    region: "Western Ghats",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ooty_Botanical_Garden.jpg/800px-Ooty_Botanical_Garden.jpg",
    temples: [
      { name: "Murugan Temple, Ooty", img: "", desc: "A serene hilltop Murugan shrine in the misty Ooty hills, offering a spiritually unique experience amidst cool mountain air and tea estate panoramas." },
      { name: "Doddabetta Shiva Temple", img: "", desc: "Near the highest peak in the Nilgiris at 2,637m, this mountain temple offers worshippers a divine experience above the clouds in the Blue Mountains." },
      { name: "Coonoor Subramanya Temple", img: "", desc: "A heritage Murugan temple in the tea-garden hills of Coonoor, where tribal Toda and Tamil communities share a unique syncretic devotional tradition." }
    ],
    detail: "The Nilgiris (Blue Mountains) house tribal heritage temples unique to the Toda, Kota, and Kurumba communities alongside classical Tamil Murugan and Shiva shrines. At elevations above 2,000 metres, worship here has a distinctive, ethereal quality."
  },
  {
    name: "Theni",
    region: "Southern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Megamalai_wildlife_sanctuary.jpg/800px-Megamalai_wildlife_sanctuary.jpg",
    temples: [
      { name: "Kurangani Murugan Temple", img: "", desc: "A dramatic hilltop Murugan shrine in the Megamalai Hills, where pilgrims trek through tea estates and tropical forests to reach the sacred summit." },
      { name: "Bodinayakanur Subramanya Temple", img: "", desc: "The town's principal Murugan temple and a local pilgrimage hub, elaborately decorated during Skanda Sashti when thousands of devotees take the kavadi vow." },
      { name: "Uthamapalayam Periyanayaki Amman Temple", img: "", desc: "A major Amman shrine in the fertile Vaigai river valley, known for its elaborate annual festival with colourful processions and traditional folk arts." }
    ],
    detail: "Theni is a gateway to the Western Ghats and High Ranges, offering a combination of adventure tourism and temple pilgrimage. The district's Murugan temples are often reached by trekking through breathtaking highland landscapes."
  },
  {
    name: "Thiruvallur",
    region: "Northern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Veeraraghava_Perumal_Temple_Tiruvallur.jpg/800px-Veeraraghava_Perumal_Temple_Tiruvallur.jpg",
    temples: [
      { name: "Veeraraghava Perumal Temple, Tiruvallur", img: "", desc: "One of the 108 Divya Desams, the massive reclining Vishnu idol at 40 feet is one of the largest in Tamil Nadu, glorified by Thirumangai Azhwar and Thirumalisai Azhwar." },
      { name: "Poondi Madha Church (syncretic site)", img: "", desc: "While primarily Christian, the Poondi Madha Basilica exemplifies the district's diverse spiritual heritage that draws millions of pilgrims of all faiths annually." },
      { name: "Thiruttani Murugan Temple", img: "", desc: "One of the six sacred abodes of Murugan (Arupadaiveedu), Thiruttani is where Murugan reconciled with his father Shiva, the 'sixth station' of Murugan's mythological journey." }
    ],
    detail: "Thiruvallur, bordering Chennai, contains the important Divya Desam at Tiruvallur and the famous Thiruttani — one of Murugan's six sacred abodes — making it a dual pilgrimage district for Vaishnava and Murugan devotees."
  },
  {
    name: "Thiruvarur",
    region: "Cauvery Delta",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Thyagaraja_temple_Thiruvarur.jpg/800px-Thyagaraja_temple_Thiruvarur.jpg",
    temples: [
      { name: "Thyagaraja Temple, Thiruvarur", img: "", desc: "The largest temple complex in Tamil Nadu by area, housing the 5-kilometre-long Kamalambal tank, the sacred chariot (largest temple chariot in India at 26 metres), and a 2,000 year history." },
      { name: "Aayarappan Temple, Sirkazhi", img: "", desc: "An ancient Vishnu temple closely associated with Azhwar saint Thirumangai, featuring exquisite Chola bronze sculptures in its treasury collection." },
      { name: "Nagappattinam Kayarohana Swami Temple", img: "", desc: "An ancient Shiva temple with remarkable maritime history, once visited by Buddhist pilgrims from Sri Lanka and Southeast Asia who sailed through the delta region." }
    ],
    detail: "Thiruvarur is the birthplace of the legendary saint-composer Thyagaraja and is dominated by the massive Thyagaraja Temple. The district's temple density is among the highest in Tamil Nadu, situated in the sacred Cauvery Delta."
  },
  {
    name: "Thoothukkudi",
    region: "Southern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tiruchendur_Murugan_temple.jpg/800px-Tiruchendur_Murugan_temple.jpg",
    temples: [
      { name: "Arulmigu Subramaniya Swami Temple, Tiruchendur", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tiruchendur_Murugan_temple.jpg/400px-Tiruchendur_Murugan_temple.jpg", desc: "One of the six Arupadaiveedu of Murugan, uniquely situated on the seashore, where Murugan is worshipped as the victorious warrior who defeated the demon Surapadman." },
      { name: "Srivaikuntam Kallaperumal Temple", img: "", desc: "A Vaishnavite temple on the banks of the Tamraparani river, associated with Vedic traditions and featuring the unique Nava Tirupathi pilgrimage circuit." },
      { name: "Vailankulam Amman Temple", img: "", desc: "A powerful Shakti shrine of coastal Tamil Nadu, where the sea-goddess form of Amman is worshipped by fishing communities who seek her protection before voyages." }
    ],
    detail: "Thoothukkudi (Tuticorin) is a historic pearl-fishing port and spiritual centre, home to the ocean-side Tiruchendur Murugan temple — one of Murugan's six sacred abodes, dramatically set against the pounding waves of the Bay of Bengal."
  },
  {
    name: "Tiruchirappalli",
    region: "Central Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Srirangam_Ranganathaswamy_temple.jpg/800px-Srirangam_Ranganathaswamy_temple.jpg",
    temples: [
      { name: "Ranganathaswamy Temple, Srirangam", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Srirangam_Ranganathaswamy_temple.jpg/400px-Srirangam_Ranganathaswamy_temple.jpg", desc: "The world's largest functioning Hindu temple (631 acres, 7 concentric prakarams, 21 gopurams), the foremost of the 108 Divya Desams where Lord Ranganatha reclines on Adisesha." },
      { name: "Ucchi Pillayar Temple, Rock Fort", img: "", desc: "Dramatically perched atop a 270-million-year-old Vindhya rock, this Ganesha temple requires climbing 437 steps and offers magnificent views of Tiruchirappalli city." },
      { name: "Thayumanavar Temple, Rock Fort", img: "", desc: "The Shiva temple at mid-level of the Rock Fort, where the deity is celebrated as Thayumanavar ('He who became the mother'), associated with a beautiful tale of divine compassion." }
    ],
    detail: "Tiruchirappalli, home to the world's largest functioning temple at Srirangam, is one of India's most important Vaishnava pilgrimage centres. The dramatic Rock Fort with its ancient cave temples adds a unique geological and spiritual dimension."
  },
  {
    name: "Tirunelveli",
    region: "Southern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nellaiyappar_temple_Tirunelveli.jpg/800px-Nellaiyappar_temple_Tirunelveli.jpg",
    temples: [
      { name: "Nellaiappar Temple, Tirunelveli", img: "", desc: "A magnificent twin-temple complex housing Shiva (Nellaiappar) and his consort Kanthimathi Amman, renowned for its exquisitely carved musical pillars that produce different musical notes." },
      { name: "Krishnapuram Backwater Temple", img: "", desc: "A serene temple complex near the scenic backwaters, featuring rare Vijayanagara murals depicting stories of Vishnu and the local legends of the Tamraparani river." },
      { name: "Suchindram Thanumalayan Temple", img: "", desc: "The magnificent temple where Brahma, Vishnu, and Shiva are worshipped as one deity (Thanumalayan) with an 18-metre entrance gopuram and a 6-metre Anjaneya sculpture." }
    ],
    detail: "Tirunelveli, the city of the eternal Tamraparani river, is famous for its iconic Nellaiappar Temple with unique musical pillars. The district is also known for the legendary Tirunelveli halwa and the martial art tradition of Silambam."
  },
  {
    name: "Tirupathur",
    region: "Northwestern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kanchi_Kailasanathar_temple.jpg/800px-Kanchi_Kailasanathar_temple.jpg",
    temples: [
      { name: "Vaniyambadi Murugan Temple", img: "", desc: "A popular Murugan shrine serving the Muslim-majority town of Vaniyambadi, exemplifying Tamil Nadu's tradition of interfaith coexistence at sacred sites." },
      { name: "Jolarpet Shiva Temple", img: "", desc: "An ancient Shaiva shrine at the railway junction town of Jolarpet, with inscriptions from the Chola period documenting medieval land grants to this temple." },
      { name: "Tirupattur Brahmadesam Temple", img: "", desc: "A Vaishnavite temple in the town of Tirupattur, associated with the Azhwar saints and Vaishnava pilgrimage tradition." }
    ],
    detail: "Tirupathur, one of Tamil Nadu's newest districts, borders Karnataka and Andhra Pradesh. Its temples reflect the cultural confluence of multiple South Indian traditions in this transitional geographic zone."
  },
  {
    name: "Tiruppur",
    region: "Western Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tiruppur_Kanniyamman_temple.jpg/800px-Tiruppur_Kanniyamman_temple.jpg",
    temples: [
      { name: "Kanniyamman Temple, Tiruppur", img: "", desc: "The beloved guardian deity of the Tiruppur hosiery industry, Kanniyamman is worshipped by textile workers and business owners seeking prosperity and protection." },
      { name: "Dharapuram Murugaswami Temple", img: "", desc: "An ancient Murugan temple in the textile town of Dharapuram, featuring a beautifully proportioned gopuram and elaborate Vijayanagara-period mandapam pillars." },
      { name: "Palladam Pachaiamman Temple", img: "", desc: "A widely revered Amman shrine in Palladam known for its annual festival when over 100,000 devotees gather to offer prayers and kavadi to the village goddess." }
    ],
    detail: "Tiruppur, the 'Knit Wear Capital of India,' combines industrial prowess with rich spiritual heritage. Its Amman shrines are deeply woven into the daily lives of millions of textile workers."
  },
  {
    name: "Tiruvannamalai",
    region: "Northern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Arunachaleswarar_Temple.jpg/800px-Arunachaleswarar_Temple.jpg",
    temples: [
      { name: "Arunachaleswarar Temple, Tiruvannamalai", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Arunachaleswarar_Temple.jpg/400px-Arunachaleswarar_Temple.jpg", desc: "One of the Pancha Bhuta Stalas representing Fire (Agni/Teja), this massive temple at the foot of sacred Arunachala Hill draws millions for the Karthigai Deepam festival." },
      { name: "Ramanasramam", img: "", desc: "The hermitage of Ramana Maharshi, one of India's greatest 20th century sages, who lived in the shadow of Arunachala for 54 years, now a major spiritual destination globally." },
      { name: "Girivalam Path Temples", img: "", desc: "The 14-km circumambulation path around Arunachala Hill passes 8 sacred Shiva lingas representing the 8 directions, walked by millions of pilgrims on full moon nights." }
    ],
    detail: "Tiruvannamalai is considered one of the most spiritually potent places on Earth in the Hindu tradition. The sacred Arunachala Hill is revered as Shiva himself in the form of a mountain of fire, and the annual Karthigai Deepam beacon is visible 30 km away."
  },
  {
    name: "Vellore",
    region: "Northern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Jalakandeswarar_temple_vellore.jpg/800px-Jalakandeswarar_temple_vellore.jpg",
    temples: [
      { name: "Jalakandeswarar Temple, Vellore Fort", img: "", desc: "A 16th century Vijayanagara masterpiece within the historic Vellore Fort, celebrated for its elaborate sculptural programme and the magnificent kalyana mandapam (wedding hall)." },
      { name: "Srilakshmi Golden Temple, Vellore", img: "", desc: "A modern marvel with an exterior plated in 1,500 kg of pure gold, this Lakshmi Narayanan temple has become one of South India's most visited spiritual attractions." },
      { name: "Thirumalaikodi Venkateswara Temple", img: "", desc: "A hillside Vishnu temple offering panoramic views of Vellore, with ancient stone inscriptions and a scenic reservoir making it both spiritually significant and visually stunning." }
    ],
    detail: "Vellore combines ancient Vijayanagara temple architecture within its historic fort with the gleaming modern Golden Temple. The city is also a major medical hub, and many patients visit the Golden Temple before treatment at CMC Hospital."
  },
  {
    name: "Viluppuram",
    region: "Northern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Gingee_fort.jpg/800px-Gingee_fort.jpg",
    temples: [
      { name: "Thirukoilur Ulagalantha Perumal Temple", img: "", desc: "One of the 108 Divya Desams glorified by all Azhwars, this Vishnu temple hosts the unique five-tier chariot festival drawing Vaishnava pilgrims from across India." },
      { name: "Vikravandi Murugan Temple", img: "", desc: "A serene hilltop Murugan temple near the Krishnagiri reservoir, combining breathtaking natural scenery with deep spiritual significance for local communities." },
      { name: "Gingee Fort Krishnaswami Temple", img: "", desc: "A temple within the 'Troy of the East' fort complex, one of the most impregnable forts in India, offering a rare combination of military history and ancient devotion." }
    ],
    detail: "Viluppuram, home to the impregnable Gingee Fort and multiple Divya Desams, is a historically rich district. The famous Gingee Fort, which Chhatrapati Shivaji praised as the most impregnable in India, also houses ancient temple shrines."
  },
  {
    name: "Virudhunagar",
    region: "Southern Tamil Nadu",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Arulmigu_Srivilliputhur_Andal_Temple.jpg/800px-Arulmigu_Srivilliputhur_Andal_Temple.jpg",
    temples: [
      { name: "Arulmigu Andal Temple, Srivilliputhur", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Arulmigu_Srivilliputhur_Andal_Temple.jpg/400px-Arulmigu_Srivilliputhur_Andal_Temple.jpg", desc: "The birthplace of Andal (the only female Azhwar saint), whose 59-metre gopuram is the official symbol of Tamil Nadu's Hindu Religious and Charitable Endowments Department." },
      { name: "Sattur Arumugaswami Temple", img: "", desc: "An important Murugan temple in the fireworks manufacturing hub of Sattur, where Murugan's cosmic spear (vel) is worshipped in a uniquely local devotional tradition." },
      { name: "Rajapalayam Visalakshi Sundareswarar Temple", img: "", desc: "The principal Shiva temple of Rajapalayam, renowned for its elaborate annual Brahmotsavam spanning 10 days with magnificent processions through the temple town streets." }
    ],
    detail: "Virudhunagar is home to the sacred Srivilliputhur, birthplace of Andal — the divine poetess whose Tiruppavai hymns are sung across Tamil Nadu every December-January. The district's gopuram has become the state's official cultural emblem."
  }
];

// ─── Render all district cards ───────────────────────────────────────────────
function renderDistricts(data) {
  const grid = document.getElementById('districtsGrid');
  grid.innerHTML = '';
  data.forEach((d, idx) => {
    const card = document.createElement('div');
    card.className = 'district-card visible';
    const colors = ['#FF6B00', '#C0392B', '#8B0000'];
    card.innerHTML = `
      <div class="district-header">
        <img class="district-img" src="${d.img}" alt="${d.name}"
          onerror="this.src=''; this.style.background='linear-gradient(135deg,#3D1A00,#FF6B00)';
          this.parentElement.querySelector('.district-overlay').style.background='linear-gradient(to bottom,transparent 0%,rgba(26,10,0,0.95) 100%)';">
        <div class="district-overlay">
          <span class="district-number">${String(idx + 1).padStart(2, '0')} / 38</span>
          <h3 class="district-name">${d.name}</h3>
          <p class="district-region">📍 ${d.region}</p>
        </div>
      </div>
      <div class="district-body">
        <p class="temples-heading">✦ Famous Temples ✦</p>
        ${d.temples.map(t => `
          <div class="temple-item">
            ${t.img
              ? `<img class="temple-img" src="${t.img}" alt="${t.name}"
                   onerror="this.src=''; this.style.background='linear-gradient(135deg,#2A1000,#FF6B00)';">`
              : `<div class="temple-img" style="background:linear-gradient(135deg,#2A1000,${colors[Math.floor(Math.random()*3)]});
                   display:flex;align-items:center;justify-content:center;font-size:1.8rem;">🛕</div>`
            }
            <div class="temple-info">
              <p class="temple-name">${t.name}</p>
              <p class="temple-desc">${t.desc.substring(0, 100)}...</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="district-footer">
        <button class="btn-explore" onclick="openModal(${idx})">Explore More 🛕</button>
        <button class="btn-map">📍 View Map</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ─── Filter districts by search query ────────────────────────────────────────
function filterDistricts(query) {
  const q = query.toLowerCase().trim();
  const cards = document.querySelectorAll('#districtsGrid .district-card');
  districts.forEach((d, idx) => {
    const matches = !q
      || d.name.toLowerCase().includes(q)
      || d.region.toLowerCase().includes(q)
      || d.temples.some(t => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
    cards[idx].style.display = matches ? 'block' : 'none';
  });
}

// ─── Open district modal ──────────────────────────────────────────────────────
function openModal(idx) {
  const d = districts[idx];
  document.getElementById('modalBody').innerHTML = `
    <h2 class="modal-title">🛕 ${d.name}</h2>
    <p class="modal-subtitle">📍 ${d.region}</p>
    <p style="color:rgba(255,248,231,0.8);line-height:1.8;margin-bottom:1.5rem;font-size:1rem;">${d.detail}</p>
    <h3 style="font-family:'Cinzel Decorative',serif;color:var(--gold);font-size:1rem;margin-bottom:1rem;letter-spacing:0.1em;">FAMOUS TEMPLES</h3>
    ${d.temples.map(t => `
      <div class="modal-temple">
        <h4>⛩ ${t.name}</h4>
        <p>${t.desc}</p>
      </div>
    `).join('')}
    <div style="background:rgba(255,107,0,0.06);border-radius:12px;padding:1.2rem;margin-top:1rem;border:1px solid rgba(255,215,0,0.15);">
      <h4 style="font-family:'Cinzel Decorative',serif;color:var(--gold);font-size:0.9rem;margin-bottom:0.5rem;">🗺️ Plan Your Visit</h4>
      <p style="font-size:0.85rem;color:rgba(255,248,231,0.7);">Best time to visit: October to March. Contact us for curated pilgrimage packages, accommodation near temples, and festival schedules for ${d.name} district.</p>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ─── Close modal ──────────────────────────────────────────────────────────────
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Contact form submit ──────────────────────────────────────────────────────
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = "✓ Sent! We'll contact you soon 🙏";
  btn.style.background = 'linear-gradient(135deg, #2ECC71, #1ABC9C)';
  setTimeout(() => {
    btn.textContent = 'Send Message 🙏';
    btn.style.background = '';
    e.target.reset();
  }, 4000);
}

// ─── Navbar scroll effect ─────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 50
    ? 'rgba(13,5,0,0.97)'
    : 'rgba(26,10,0,0.92)';
});

// ─── Init ─────────────────────────────────────────────────────────────────────
renderDistricts(districts);