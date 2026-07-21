const words11 = [
  {
    word: "be (is, am, are, was, were, been)",
    phonetic: "/biː/",
    partOfSpeech: "v.",
    meaning: "是",
    example: "I want to be a doctor."
  },
  {
    word: "do (does, did, done)",
    phonetic: "/duː/",
    partOfSpeech: "v.",
    meaning: "做",
    example: "What do you mean?"
  },
  {
    word: "have (has, had)",
    phonetic: "/hæv/",
    partOfSpeech: "v.",
    meaning: "有",
    example: "I have a car."
  },
  {
    word: "can",
    phonetic: "/kæn/",
    partOfSpeech: "aux.",
    meaning: "能夠",
    example: "I can swim."
  },
  {
    word: "could",
    phonetic: "/kʊd/",
    partOfSpeech: "aux.",
    meaning: "能; 可以",
    example: "I could help you."
  },
  {
    word: "will (would)",
    phonetic: "/wɪl/",
    partOfSpeech: "aux.",
    meaning: "將會...",
    example: "I will call you."
  },
  {
    word: "may (might)",
    phonetic: "/meɪ/",
    partOfSpeech: "aux.",
    meaning: "可能",
    example: "It may rain."
  },
  {
    word: "must",
    phonetic: "/mʌst/",
    partOfSpeech: "aux.",
    meaning: "必須",
    example: "You must leave now."
  },
  {
    word: "should",
    phonetic: "/ʃʊd/",
    partOfSpeech: "aux.",
    meaning: "應該",
    example: "You should rest."
  },
  {
    word: "about",
    phonetic: "/əˈbaʊt/",
    partOfSpeech: "prep.",
    meaning: "關於",
    example: "Tell me about your trip."
  },
  {
    word: "above",
    phonetic: "/əˈbʌv/",
    partOfSpeech: "prep.",
    meaning: "在...上方",
    example: "The plane flew above the clouds."
  },
  {
    word: "across",
    phonetic: "/əˈkrɑːs/",
    partOfSpeech: "prep.",
    meaning: "在...對面",
    example: "She lives across the street."
  },
  {
    word: "after",
    phonetic: "/ˈæf.tɚ/",
    partOfSpeech: "prep.",
    meaning: "在...之後",
    example: "We left after dinner."
  },
  {
    word: "along",
    phonetic: "/əˈlɔːŋ/",
    partOfSpeech: "prep.",
    meaning: "沿著",
    example: "They walked along the beach."
  },
  {
    word: "around",
    phonetic: "/əˈraʊnd/",
    partOfSpeech: "prep.",
    meaning: "在...四周",
    example: "Look around the room."
  },
  {
    word: "at",
    phonetic: "/æt/",
    partOfSpeech: "prep.",
    meaning: "在...",
    example: "She is at school."
  },
  {
    word: "before",
    phonetic: "/bɪˈfɔːr/",
    partOfSpeech: "prep.",
    meaning: "在...之前",
    example: "Come before 5 PM."
  },
  {
    word: "behind",
    phonetic: "/bɪˈhaɪnd/",
    partOfSpeech: "prep.",
    meaning: "在...後面",
    example: "The car is behind the house."
  },
  {
    word: "below",
    phonetic: "/bɪˈloʊ/",
    partOfSpeech: "prep.",
    meaning: "在...下方",
    example: "The price fell below ten dollars."
  },
  {
    word: "beside",
    phonetic: "/bɪˈsaɪd/",
    partOfSpeech: "prep.",
    meaning: "在...旁邊",
    example: "Sit beside me."
  },
  {
    word: "between",
    phonetic: "/bɪˈtwiːn/",
    partOfSpeech: "prep.",
    meaning: "在...之間",
    example: "The ball is between the boxes."
  },
  {
    word: "by",
    phonetic: "/baɪ/",
    partOfSpeech: "prep.",
    meaning: "藉著",
    example: "Send it by email."
  },
  {
    word: "down",
    phonetic: "/daʊn/",
    partOfSpeech: "prep.",
    meaning: "向下",
    example: "Walk down the hill."
  },
  {
    word: "during",
    phonetic: "/ˈdʊr.ɪŋ/",
    partOfSpeech: "prep.",
    meaning: "在...期間",
    example: "Sleep during the flight."
  },
  {
    word: "except",
    phonetic: "/ɪkˈsept/",
    partOfSpeech: "prep.",
    meaning: "除了...之外",
    example: "All came except Tom."
  },
  {
    word: "for",
    phonetic: "/fɔːr/",
    partOfSpeech: "prep.",
    meaning: "為了",
    example: "This is for you."
  },
  {
    word: "from",
    phonetic: "/frʌm/",
    partOfSpeech: "prep.",
    meaning: "從",
    example: "She is from Texas."
  },
  {
    word: "in",
    phonetic: "/ɪn/",
    partOfSpeech: "prep.",
    meaning: "在...裡面",
    example: "The cat is in the box."
  },
  {
    word: "inside",
    phonetic: "/ɪnˈsaɪd/",
    partOfSpeech: "prep.",
    meaning: "在...內部",
    example: "It's dark inside the cave."
  },
  {
    word: "into",
    phonetic: "/ˈɪn.tuː/",
    partOfSpeech: "prep.",
    meaning: "到...之內",
    example: "He jumped into the pool."
  },
  {
    word: "like",
    phonetic: "/laɪk/",
    partOfSpeech: "v.",
    meaning: "喜歡; 像; 如",
    example: "I like ice cream."
  },
  {
    word: "near",
    phonetic: "/nɪr/",
    partOfSpeech: "prep.",
    meaning: "在...附近",
    example: "The school is near the lake."
  },
  {
    word: "of",
    phonetic: "/ʌv/",
    partOfSpeech: "prep.",
    meaning: "...的",
    example: "A cup of tea."
  },
  {
    word: "off",
    phonetic: "/ɔːf/",
    partOfSpeech: "prep.",
    meaning: "離開; 除掉",
    example: "He fell off the bike."
  },
  {
    word: "on",
    phonetic: "/ɑːn/",
    partOfSpeech: "prep.",
    meaning: "在...上面",
    example: "Put it on the table."
  },
  {
    word: "out",
    phonetic: "/aʊt/",
    partOfSpeech: "adv.",
    meaning: "在外",
    example: "Let's eat out tonight."
  },
  {
    word: "outside",
    phonetic: "/ˌaʊtˈsaɪd/",
    partOfSpeech: "prep.",
    meaning: "在...外部",
    example: "Wait outside the door."
  },
  {
    word: "over",
    phonetic: "/ˈoʊ.vɚ/",
    partOfSpeech: "prep.",
    meaning: "超過",
    example: "Jump over the fence."
  },
  {
    word: "since",
    phonetic: "/sɪns/",
    partOfSpeech: "prep.",
    meaning: "自從",
    example: "I've worked here since May."
  },
  {
    word: "than",
    phonetic: "/ðæn/",
    partOfSpeech: "conj.",
    meaning: "比...",
    example: "He runs faster than me."
  },
  {
    word: "through",
    phonetic: "/θruː/",
    partOfSpeech: "prep.",
    meaning: "穿過",
    example: "Walk through the door."
  },
  {
    word: "to",
    phonetic: "/tuː/",
    partOfSpeech: "prep.",
    meaning: "到",
    example: "Go to the store."
  },
  {
    word: "under",
    phonetic: "/ˈʌn.dɚ/",
    partOfSpeech: "prep.",
    meaning: "在...之下",
    example: "The dog is under the bed."
  },
  {
    word: "until",
    phonetic: "/ʌnˈtɪl/",
    partOfSpeech: "prep.",
    meaning: "直到",
    example: "Wait until tomorrow."
  },
  {
    word: "up",
    phonetic: "/ʌp/",
    partOfSpeech: "adv.",
    meaning: "向上",
    example: "Please stand up."
  },
  {
    word: "with",
    phonetic: "/wɪð/",
    partOfSpeech: "prep.",
    meaning: "和",
    example: "Come with me."
  },
  {
    word: "without",
    phonetic: "/wɪðˈaʊt/",
    partOfSpeech: "prep.",
    meaning: "沒有",
    example: "She left without her bag."
  },
  {
    word: "and",
    phonetic: "/ænd/",
    partOfSpeech: "conj.",
    meaning: "和",
    example: "Bread and butter."
  },
  {
    word: "as",
    phonetic: "/æz/",
    partOfSpeech: "conj.",
    meaning: "像; 如同...那樣",
    example: "Do as I say."
  },
  {
    word: "because",
    phonetic: "/bɪˈkɑːz/",
    partOfSpeech: "conj.",
    meaning: "因為",
    example: "I slept because I was tired."
  },
  {
    word: "but",
    phonetic: "/bʌt/",
    partOfSpeech: "conj.",
    meaning: "但是",
    example: "I'm tired but happy."
  },
  {
    word: "however",
    phonetic: "/haʊˈev.ɚ/",
    partOfSpeech: "adv.",
    meaning: "然而",
    example: "I was tired; however, I kept working."
  },
  {
    word: "if",
    phonetic: "/ɪf/",
    partOfSpeech: "conj.",
    meaning: "如果",
    example: "If it rains, we will stay home."
  },
  {
    word: "or",
    phonetic: "/ɔːr/",
    partOfSpeech: "conj.",
    meaning: "或",
    example: "Would you like tea or coffee?"
  },
  {
    word: "since",
    phonetic: "/sɪns/",
    partOfSpeech: "prep.",
    meaning: "自從",
    example: "I have lived here since 2010."
  },
  {
    word: "than",
    phonetic: "/ðæn/",
    partOfSpeech: "conj.",
    meaning: "比...",
    example: "She is taller than her brother."
  },
  {
    word: "that",
    phonetic: "/ðæt/",
    partOfSpeech: "adj.",
    meaning: "那個",
    example: "That book is on the table."
  },
  {
    word: "though (although)",
    phonetic: "/ðoʊ/",
    partOfSpeech: "conj.",
    meaning: "雖然",
    example: "Though it was late, he kept studying."
  },
  {
    word: "hello",
    phonetic: "/həˈloʊ/",
    partOfSpeech: "interj.",
    meaning: "哈囉",
    example: "Hello, how are you today?"
  },
  {
    word: "hey",
    phonetic: "/heɪ/",
    partOfSpeech: "interj.",
    meaning: "嘿",
    example: "Hey, what are you doing?"
  },
  {
    word: "hi",
    phonetic: "/haɪ/",
    partOfSpeech: "interj.",
    meaning: "嗨",
    example: "Hi, nice to meet you."
  },
  {
    word: "good-bye (goodbye, bye)",
    phonetic: "/ɡʊdˈbaɪ/",
    partOfSpeech: "interj.",
    meaning: "再見",
    example: "She said good-bye and left."
  },
  {
    word: "action",
    phonetic: "/ˈæk.ʃən/",
    partOfSpeech: "n.",
    meaning: "動作",
    example: "His quick action saved the day."
  },
  {
    word: "age",
    phonetic: "/eɪdʒ/",
    partOfSpeech: "n.",
    meaning: "年齡",
    example: "What is your age?"
  },
  {
    word: "American",
    phonetic: "/əˈmɛr.ɪ.kən/",
    partOfSpeech: "n.",
    meaning: "美國人",
    example: "He is an American."
  },
  {
    word: "band",
    phonetic: "/bænd/",
    partOfSpeech: "n.",
    meaning: "樂團",
    example: "The band played all night."
  },
  {
    word: "bell",
    phonetic: "/bɛl/",
    partOfSpeech: "n.",
    meaning: "鈴",
    example: "The bell rang loudly."
  },
];
