const words12 = [
  {
    word: "birthday",
    phonetic: "/ˈbɝːθ.deɪ/",
    partOfSpeech: "n.",
    meaning: "生日",
    example: "Happy birthday to you!"
  },
  {
    word: "blank",
    phonetic: "/blæŋk/",
    partOfSpeech: "n.",
    meaning: "空格",
    example: "Fill in the blank with a word."
  },
  {
    word: "bottom",
    phonetic: "/ˈbɑː.təm/",
    partOfSpeech: "n.",
    meaning: "底部",
    example: "The keys are at the bottom of the bag."
  },
  {
    word: "box",
    phonetic: "/bɑːks/",
    partOfSpeech: "n.",
    meaning: "盒子",
    example: "She opened the box carefully."
  },
  {
    word: "can",
    phonetic: "/kæn/",
    partOfSpeech: "n.",
    meaning: "罐",
    example: "He drank a can of soda."
  },
  {
    word: "case",
    phonetic: "/keɪs/",
    partOfSpeech: "n.",
    meaning: "情形",
    example: "In that case, we should leave now."
  },
  {
    word: "castle",
    phonetic: "/ˈkæs.əl/",
    partOfSpeech: "n.",
    meaning: "城堡",
    example: "The old castle stood on the hill."
  },
  {
    word: "cellphone",
    phonetic: "/ˈsɛl.foʊn/",
    partOfSpeech: "n.",
    meaning: "手機",
    example: "My cellphone battery is dead."
  },
  {
    word: "center",
    phonetic: "/ˈsɛn.tɚ/",
    partOfSpeech: "n.",
    meaning: "中心",
    example: "The table is in the center of the room."
  },
  {
    word: "chance",
    phonetic: "/tʃæns/",
    partOfSpeech: "n.",
    meaning: "機會",
    example: "Give me a chance to explain."
  },
  {
    word: "cheer",
    phonetic: "/tʃɪr/",
    partOfSpeech: "v.",
    meaning: "歡呼",
    example: "The crowd began to cheer loudly."
  },
  {
    word: "choice",
    phonetic: "/tʃɔɪs/",
    partOfSpeech: "n.",
    meaning: "選擇; 抉擇",
    example: "You made a good choice."
  },
  {
    word: "club",
    phonetic: "/klʌb/",
    partOfSpeech: "n.",
    meaning: "社團",
    example: "She joined the chess club."
  },
  {
    word: "corner",
    phonetic: "/ˈkɔːr.nɚ/",
    partOfSpeech: "n.",
    meaning: "角落",
    example: "The store is on the corner."
  },
  {
    word: "dream",
    phonetic: "/driːm/",
    partOfSpeech: "n.",
    meaning: "夢",
    example: "I had a strange dream last night."
  },
  {
    word: "e-mail",
    phonetic: "/ˈiː.meɪl/",
    partOfSpeech: "n.",
    meaning: "電子郵件",
    example: "I sent her an e-mail yesterday."
  },
  {
    word: "error",
    phonetic: "/ˈɛr.ɚ/",
    partOfSpeech: "n.",
    meaning: "錯誤",
    example: "The report contained an error."
  },
  {
    word: "eve",
    phonetic: "/iːv/",
    partOfSpeech: "n.",
    meaning: "前夕",
    example: "We gathered on Christmas Eve."
  },
  {
    word: "excuse",
    phonetic: "/ɪkˈskjuːs/",
    partOfSpeech: "n.",
    meaning: "藉口",
    example: "His excuse was not convincing."
  },
  {
    word: "experience",
    phonetic: "/ɪkˈspɪr.i.əns/",
    partOfSpeech: "n.",
    meaning: "經驗",
    example: "She has years of experience."
  },
  {
    word: "fact",
    phonetic: "/fækt/",
    partOfSpeech: "n.",
    meaning: "事實",
    example: "It is a fact that the Earth is round."
  },
  {
    word: "file",
    phonetic: "/faɪl/",
    partOfSpeech: "n.",
    meaning: "檔案",
    example: "Save the file to your desktop."
  },
  {
    word: "fire",
    phonetic: "/ˈfaɪ.ɚ/",
    partOfSpeech: "n.",
    meaning: "火焰",
    example: "The fire spread quickly."
  },
  {
    word: "foreigner",
    phonetic: "/ˈfɔːr.ən.ɚ/",
    partOfSpeech: "n.",
    meaning: "外國人",
    example: "He was the only foreigner in the village."
  },
  {
    word: "flower",
    phonetic: "/ˈflaʊ.ɚ/",
    partOfSpeech: "n.",
    meaning: "花朵",
    example: "She picked a flower from the garden."
  },
  {
    word: "fun",
    phonetic: "/fʌn/",
    partOfSpeech: "n.",
    meaning: "樂趣",
    example: "We had fun at the beach."
  },
  {
    word: "garbage",
    phonetic: "/ˈɡɑːr.bɪdʒ/",
    partOfSpeech: "n.",
    meaning: "垃圾",
    example: "He took out the garbage this morning."
  },
  {
    word: "gas",
    phonetic: "/ɡæs/",
    partOfSpeech: "n.",
    meaning: "瓦斯",
    example: "The stove runs on gas."
  },
  {
    word: "ghost",
    phonetic: "/ɡoʊst/",
    partOfSpeech: "n.",
    meaning: "鬼",
    example: "The kids told ghost stories around the fire."
  },
  {
    word: "gift",
    phonetic: "/ɡɪft/",
    partOfSpeech: "n.",
    meaning: "禮物",
    example: "She received a gift on her birthday."
  },
  {
    word: "god",
    phonetic: "/ɡɑːd/",
    partOfSpeech: "n.",
    meaning: "上帝",
    example: "They prayed to God for guidance."
  },
  {
    word: "grass",
    phonetic: "/ɡræs/",
    partOfSpeech: "n.",
    meaning: "草",
    example: "The dog rolled in the grass."
  },
  {
    word: "ground",
    phonetic: "/ɡraʊnd/",
    partOfSpeech: "n.",
    meaning: "地面",
    example: "He sat on the ground under the tree."
  },
  {
    word: "group",
    phonetic: "/ɡruːp/",
    partOfSpeech: "n.",
    meaning: "團體",
    example: "A group of tourists entered the museum."
  },
  {
    word: "habit",
    phonetic: "/ˈhæb.ɪt/",
    partOfSpeech: "n.",
    meaning: "習慣",
    example: "Biting nails is a bad habit."
  },
  {
    word: "heat",
    phonetic: "/hiːt/",
    partOfSpeech: "n.",
    meaning: "熱度",
    example: "The heat of the oven warmed the kitchen."
  },
  {
    word: "honey",
    phonetic: "/ˈhʌn.i/",
    partOfSpeech: "n.",
    meaning: "蜂蜜",
    example: "She added honey to her tea."
  },
  {
    word: "idea",
    phonetic: "/aɪˈdiː.ə/",
    partOfSpeech: "n.",
    meaning: "主意",
    example: "He had a great idea for the project."
  },
  {
    word: "interest",
    phonetic: "/ˈɪn.tɚ.ɪst/",
    partOfSpeech: "n.",
    meaning: "興趣",
    example: "She has a strong interest in music."
  },
  {
    word: "Internet (Net)",
    phonetic: "/ˈɪn.tɚ.net/",
    partOfSpeech: "n.",
    meaning: "網路",
    example: "He looked up the answer on the Internet."
  },
  {
    word: "interview",
    phonetic: "/ˈɪn.tɚ.vjuː/",
    partOfSpeech: "n.",
    meaning: "採訪; 面試",
    example: "She had a job interview on Monday."
  },
  {
    word: "item",
    phonetic: "/ˈaɪ.təm/",
    partOfSpeech: "n.",
    meaning: "項目",
    example: "Each item on the list was checked off."
  },
  {
    word: "joke",
    phonetic: "/dʒoʊk/",
    partOfSpeech: "n.",
    meaning: "笑話",
    example: "He told a funny joke at dinner."
  },
  {
    word: "joy",
    phonetic: "/dʒɔɪ/",
    partOfSpeech: "n.",
    meaning: "歡欣",
    example: "The children felt great joy on Christmas morning."
  },
  {
    word: "kind",
    phonetic: "/kaɪnd/",
    partOfSpeech: "n.",
    meaning: "種類",
    example: "What kind of food do you like?"
  },
  {
    word: "leader",
    phonetic: "/ˈliː.dɚ/",
    partOfSpeech: "n.",
    meaning: "領導者",
    example: "She is the leader of the team."
  },
  {
    word: "level",
    phonetic: "/ˈlev.əl/",
    partOfSpeech: "n.",
    meaning: "水平; 水平線",
    example: "The water level in the river rose quickly."
  },
  {
    word: "mail",
    phonetic: "/meɪl/",
    partOfSpeech: "n.",
    meaning: "信件",
    example: "I checked the mail this morning."
  },
  {
    word: "matter",
    phonetic: "/ˈmæt.ɚ/",
    partOfSpeech: "n.",
    meaning: "事情",
    example: "What is the matter with your car?"
  },
  {
    word: "meeting",
    phonetic: "/ˈmiː.tɪŋ/",
    partOfSpeech: "n.",
    meaning: "會議",
    example: "The staff meeting started at noon."
  },
  {
    word: "member",
    phonetic: "/ˈmem.bɚ/",
    partOfSpeech: "n.",
    meaning: "會員",
    example: "He became a member of the club."
  },
  {
    word: "metro",
    phonetic: "/ˈmet.roʊ/",
    partOfSpeech: "n.",
    meaning: "捷運",
    example: "She took the metro to work."
  },
  {
    word: "mind",
    phonetic: "/maɪnd/",
    partOfSpeech: "n.",
    meaning: "頭腦",
    example: "He made up his mind to leave early."
  },
  {
    word: "mistake",
    phonetic: "/mɪˈsteɪk/",
    partOfSpeech: "n.",
    meaning: "錯誤",
    example: "I made a mistake on the form."
  },
  {
    word: "mud",
    phonetic: "/mʌd/",
    partOfSpeech: "n.",
    meaning: "泥巴",
    example: "His boots were covered in mud."
  },
  {
    word: "news",
    phonetic: "/nuːz/",
    partOfSpeech: "n.",
    meaning: "消息; 新聞",
    example: "She watched the news every evening."
  },
  {
    word: "newspaper",
    phonetic: "/ˈnuːz.peɪ.pɚ/",
    partOfSpeech: "n.",
    meaning: "報紙",
    example: "He read the newspaper over breakfast."
  },
  {
    word: "noise",
    phonetic: "/nɔɪz/",
    partOfSpeech: "n.",
    meaning: "噪音",
    example: "The noise outside woke the baby."
  },
  {
    word: "note",
    phonetic: "/noʊt/",
    partOfSpeech: "n.",
    meaning: "筆記",
    example: "She left a note on the fridge."
  },
  {
    word: "order",
    phonetic: "/ˈɔːr.dɚ/",
    partOfSpeech: "n.",
    meaning: "點餐; 指令; 順序",
    example: "He placed an order for pizza."
  },
  {
    word: "party",
    phonetic: "/ˈpɑːr.ti/",
    partOfSpeech: "n.",
    meaning: "派對",
    example: "They threw a surprise party for her."
  },
  {
    word: "photo",
    phonetic: "/ˈfoʊ.toʊ/",
    partOfSpeech: "n.",
    meaning: "相片",
    example: "I took a photo of the sunset."
  },
  {
    word: "pin",
    phonetic: "/pɪn/",
    partOfSpeech: "n.",
    meaning: "大頭針",
    example: "She used a pin to fasten the fabric."
  },
  {
    word: "planet",
    phonetic: "/ˈplæn.ɪt/",
    partOfSpeech: "n.",
    meaning: "行星",
    example: "Mars is the fourth planet from the sun."
  },
  {
    word: "player",
    phonetic: "/ˈpleɪ.ɚ/",
    partOfSpeech: "n.",
    meaning: "球員; 玩家",
    example: "The player scored the winning goal."
  },
  {
    word: "pleasure",
    phonetic: "/ˈplɛʒ.ɚ/",
    partOfSpeech: "n.",
    meaning: "愉快",
    example: "She took great pleasure in reading."
  },
  {
    word: "power",
    phonetic: "/ˈpaʊ.ɚ/",
    partOfSpeech: "n.",
    meaning: "動力; 權力",
    example: "The storm knocked out power to the whole block."
  },
  {
    word: "prize",
    phonetic: "/praɪz/",
    partOfSpeech: "n.",
    meaning: "獎品; 獎金",
    example: "She won first prize in the contest."
  },
  {
    word: "program",
    phonetic: "/ˈproʊ.ɡræm/",
    partOfSpeech: "n.",
    meaning: "節目",
    example: "My favorite program starts at eight."
  },
  {
    word: "reason",
    phonetic: "/ˈriː.zən/",
    partOfSpeech: "n.",
    meaning: "理由",
    example: "Give me one good reason to stay."
  },
  {
    word: "report",
    phonetic: "/rɪˈpɔːrt/",
    partOfSpeech: "n.",
    meaning: "報導; 報告",
    example: "The report was due on Friday."
  },
  {
    word: "robot",
    phonetic: "/ˈroʊ.bɑːt/",
    partOfSpeech: "n.",
    meaning: "機器人",
    example: "The robot assembled the parts on the line."
  },
  {
    word: "rock",
    phonetic: "/rɑːk/",
    partOfSpeech: "n.",
    meaning: "岩石",
    example: "The climber gripped the rock with both hands."
  },
  {
    word: "root",
    phonetic: "/ruːt/",
    partOfSpeech: "n.",
    meaning: "根",
    example: "The root of the tree cracked the sidewalk."
  },
  {
    word: "rope",
    phonetic: "/roʊp/",
    partOfSpeech: "n.",
    meaning: "繩子",
    example: "She tied the box with a rope."
  },
  {
    word: "rose",
    phonetic: "/roʊz/",
    partOfSpeech: "n.",
    meaning: "玫瑰",
    example: "He gave her a red rose."
  },
  {
    word: "rule",
    phonetic: "/ruːl/",
    partOfSpeech: "n.",
    meaning: "規則",
    example: "The rule says no food in class."
  },
  {
    word: "sale",
    phonetic: "/seɪl/",
    partOfSpeech: "n.",
    meaning: "出售",
    example: "The store is having a big sale."
  },
  {
    word: "screen",
    phonetic: "/skriːn/",
    partOfSpeech: "n.",
    meaning: "螢幕",
    example: "The screen on my phone is cracked."
  },
  {
    word: "seat",
    phonetic: "/siːt/",
    partOfSpeech: "n.",
    meaning: "座位",
    example: "Please take your seat."
  },
  {
    word: "seed",
    phonetic: "/siːd/",
    partOfSpeech: "n.",
    meaning: "種子",
    example: "The bird ate the seed."
  },
  {
    word: "sentence",
    phonetic: "/ˈsentəns/",
    partOfSpeech: "n.",
    meaning: "句子",
    example: "Write a sentence for each word."
  },
  {
    word: "service",
    phonetic: "/ˈsɝː.vɪs/",
    partOfSpeech: "n.",
    meaning: "服務",
    example: "The service at this hotel is excellent."
  },
  {
    word: "set",
    phonetic: "/set/",
    partOfSpeech: "n.",
    meaning: "套; 組",
    example: "He bought a new set of golf clubs."
  },
  {
    word: "side",
    phonetic: "/saɪd/",
    partOfSpeech: "n.",
    meaning: "旁邊; 邊; 面",
    example: "She sat by my side."
  },
  {
    word: "sight",
    phonetic: "/saɪt/",
    partOfSpeech: "n.",
    meaning: "視力",
    example: "He lost his sight in the accident."
  },
  {
    word: "smile",
    phonetic: "/smaɪl/",
    partOfSpeech: "n.",
    meaning: "微笑",
    example: "Her smile lit up the room."
  },
  {
    word: "space",
    phonetic: "/speɪs/",
    partOfSpeech: "n.",
    meaning: "空間",
    example: "There is not enough space in the car."
  },
  {
    word: "story",
    phonetic: "/ˈstɔːr.i/",
    partOfSpeech: "n.",
    meaning: "故事",
    example: "Tell me a story before bed."
  },
  {
    word: "line",
    phonetic: "/laɪn/",
    partOfSpeech: "n.",
    meaning: "線",
    example: "Draw a straight line on paper."
  },
  {
    word: "subject",
    phonetic: "/ˈsʌb.dʒekt/",
    partOfSpeech: "n.",
    meaning: "科目",
    example: "Math is my favorite subject."
  },
  {
    word: "swing",
    phonetic: "/swɪŋ/",
    partOfSpeech: "n.",
    meaning: "鞦韆",
    example: "Kids play on the swing in the park."
  },
  {
    word: "thing",
    phonetic: "/θɪŋ/",
    partOfSpeech: "n.",
    meaning: "事情",
    example: "Doing homework is a boring thing."
  },
  {
    word: "ticket",
    phonetic: "/ˈtɪk.ɪt/",
    partOfSpeech: "n.",
    meaning: "票券",
    example: "I bought two tickets for the movie."
  },
  {
    word: "tip",
    phonetic: "/tɪp/",
    partOfSpeech: "n.",
    meaning: "小費",
    example: "Leave a tip for the waiter."
  },
  {
    word: "tool",
    phonetic: "/tuːl/",
    partOfSpeech: "n.",
    meaning: "工具",
    example: "Hammer is useful tool."
  },
  {
    word: "topic",
    phonetic: "/ˈtɑː.pɪk/",
    partOfSpeech: "n.",
    meaning: "話題",
    example: "Weather is good topic for small talk."
  },
  {
    word: "trash",
    phonetic: "/træʃ/",
    partOfSpeech: "n.",
    meaning: "垃圾",
    example: "Throw trash in the bin."
  },
  {
    word: "treat",
    phonetic: "/triːt/",
    partOfSpeech: "n.",
    meaning: "請客",
    example: "My boss gave us treat at lunch."
  },
  {
    word: "tree",
    phonetic: "/triː/",
    partOfSpeech: "n.",
    meaning: "樹",
    example: "Bird landed on tall tree."
  },
  {
    word: "trick",
    phonetic: "/trɪk/",
    partOfSpeech: "n.",
    meaning: "惡作劇",
    example: "He played trick on his friend."
  },
  {
    word: "trouble",
    phonetic: "/ˈtrʌb.əl/",
    partOfSpeech: "n.",
    meaning: "麻煩",
    example: "Car broke down and caused big trouble."
  },
  {
    word: "voice",
    phonetic: "/vɔɪs/",
    partOfSpeech: "n.",
    meaning: "聲音",
    example: "She has sweet singing voice."
  },
  {
    word: "way",
    phonetic: "/weɪ/",
    partOfSpeech: "n.",
    meaning: "道路; 方法",
    example: "This way leads to station."
  },
  {
    word: "word",
    phonetic: "/wɝːd/",
    partOfSpeech: "n.",
    meaning: "字",
    example: "She chose the right word."
  },
];
