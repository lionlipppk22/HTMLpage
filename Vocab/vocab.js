const words = [
  {
    word: "baby",
    phonetic: "/ˈbeɪ.bi/",
    partOfSpeech: "n.",
    meaning: "嬰兒",
    example: "The baby is sleeping peacefully."
  },
  {
    word: "girl",
    phonetic: "/ɡɜːrl/",
    partOfSpeech: "n.",
    meaning: "女孩",
    example: "The girl is playing in the park."
  },
  {
    word: "guy",
    phonetic: "/ɡaɪ/",
    partOfSpeech: "n.",
    meaning: "傢伙",
    example: "He is a nice guy."
  },
  {
    word: "neighbor",
    phonetic: "/ˈneɪ.bər/",
    partOfSpeech: "n.",
    meaning: "鄰居",
    example: "Our neighbor helped us carry the groceries."
  },
  {
    word: "teenager",
    phonetic: "/ˈtiːnˌeɪ.dʒər/",
    partOfSpeech: "n.",
    meaning: "青少年",
    example: "The teenager is studying for his exams."
  },
  {
    word: "boy",
    phonetic: "/bɔɪ/",
    partOfSpeech: "n.",
    meaning: "男孩",
    example: "The boy ran across the field."
  },
  {
    word: "child",
    phonetic: "/tʃaɪld/",
    partOfSpeech: "n.",
    meaning: "小孩",
    example: "The child is learning to read."
  },
  {
    word: "kid",
    phonetic: "/kɪd/",
    partOfSpeech: "n.",
    meaning: "小孩",
    example: "The kids are playing outside."
  },
  {
    word: "person",
    phonetic: "/ˈpɜːr.sən/",
    partOfSpeech: "n.",
    meaning: "人",
    example: "She is a kind person."
  },
  {
    word: "woman",
    phonetic: "/ˈwʊm.ən/",
    partOfSpeech: "n.",
    meaning: "女人",
    example: "The woman is waiting for the bus."
  },
  {
    word: "fool",
    phonetic: "/fuːl/",
    partOfSpeech: "n.",
    meaning: "傻子",
    example: "Don't be a fool."
  },
  {
    word: "king",
    phonetic: "/kɪŋ/",
    partOfSpeech: "n.",
    meaning: "國王",
    example: "The king ruled the kingdom wisely."
  },
  {
    word: "queen",
    phonetic: "/kwiːn/",
    partOfSpeech: "n.",
    meaning: "皇后",
    example: "The queen wore a golden crown."
  },
  {
    word: "giant",
    phonetic: "/ˈdʒaɪ.ənt/",
    partOfSpeech: "n.",
    meaning: "巨人",
    example: "The giant lived in a castle above the clouds."
  },
  {
    word: "man",
    phonetic: "/mæn/",
    partOfSpeech: "n.",
    meaning: "男人",
    example: "The man is reading a newspaper."
  },
  {
    word: "stranger",
    phonetic: "/ˈstreɪn.dʒər/",
    partOfSpeech: "n.",
    meaning: "陌生人",
    example: "Never talk to a stranger."
  },
  {
    word: "beautiful",
    phonetic: "/ˈbjuː.tɪ.fəl/",
    partOfSpeech: "adj.",
    meaning: "美麗的",
    example: "The sunset was beautiful."
  },
  {
    word: "heavy",
    phonetic: "/ˈhev.i/",
    partOfSpeech: "adj.",
    meaning: "重的",
    example: "The box is too heavy to carry."
  },
  {
    word: "tall",
    phonetic: "/tɔːl/",
    partOfSpeech: "adj.",
    meaning: "高的",
    example: "He is tall and thin."
  },
  {
    word: "bad",
    phonetic: "/bæd/",
    partOfSpeech: "adj.",
    meaning: "壞的",
    example: "The weather is bad today."
  },
  {
    word: "careful",
    phonetic: "/ˈker.fəl/",
    partOfSpeech: "adj.",
    meaning: "仔細的",
    example: "Be careful when crossing the street."
  },
  {
    word: "famous",
    phonetic: "/ˈfeɪ.məs/",
    partOfSpeech: "adj.",
    meaning: "有名的",
    example: "She is a famous singer."
  },
  {
    word: "hard-working",
    phonetic: "/ˌhɑːrd ˈwɜːr.kɪŋ/",
    partOfSpeech: "adj.",
    meaning: "努力工作的",
    example: "He is a hard-working student."
  },
  {
    word: "lonely",
    phonetic: "/ˈloʊn.li/",
    partOfSpeech: "adj.",
    meaning: "寂寞的",
    example: "The old man felt lonely."
  },
  {
    word: "poor",
    phonetic: "/pɔːr/",
    partOfSpeech: "adj.",
    meaning: "貧困的；可憐的",
    example: "They live in a poor neighborhood."
  },
  {
    word: "shy",
    phonetic: "/ʃaɪ/",
    partOfSpeech: "adj.",
    meaning: "害羞的",
    example: "The shy girl hid behind her mother."
  },
  {
    word: "wise",
    phonetic: "/waɪz/",
    partOfSpeech: "adj.",
    meaning: "明智的",
    example: "A wise person thinks before speaking."
  },
  {
    word: "blind",
    phonetic: "/blaɪnd/",
    partOfSpeech: "adj.",
    meaning: "瞎的",
    example: "The blind man used a cane to walk."
  },
  {
    word: "old",
    phonetic: "/oʊld/",
    partOfSpeech: "adj.",
    meaning: "老的",
    example: "My grandmother is very old."
  },
  {
    word: "thin",
    phonetic: "/θɪn/",
    partOfSpeech: "adj.",
    meaning: "瘦的",
    example: "She is tall and thin."
  },
  {
    word: "bored",
    phonetic: "/bɔːrd/",
    partOfSpeech: "adj.",
    meaning: "感到厭煩的",
    example: "The students looked bored during the lecture."
  },
  {
    word: "cool",
    phonetic: "/kuːl/",
    partOfSpeech: "adj.",
    meaning: "涼爽的",
    example: "It is cool and breezy today."
  },
  {
    word: "friendly",
    phonetic: "/ˈfrend.li/",
    partOfSpeech: "adj.",
    meaning: "友善的",
    example: "The local people are very friendly."
  },
  {
    word: "honest",
    phonetic: "/ˈɒn.ɪst/",
    partOfSpeech: "adj.",
    meaning: "誠實的",
    example: "An honest person always tells the truth."
  },
  {
    word: "lovely",
    phonetic: "/ˈlʌv.li/",
    partOfSpeech: "adj.",
    meaning: "可愛的",
    example: "What a lovely garden!"
  },
  {
    word: "proud",
    phonetic: "/praʊd/",
    partOfSpeech: "adj.",
    meaning: "驕傲的",
    example: "Her parents are proud of her achievements."
  },
  {
    word: "smart",
    phonetic: "/smɑːrt/",
    partOfSpeech: "adj.",
    meaning: "聰明的",
    example: "She is a smart student."
  },
  {
    word: "cute",
    phonetic: "/kjuːt/",
    partOfSpeech: "adj.",
    meaning: "可愛的",
    example: "The puppy is so cute."
  },
  {
    word: "pretty",
    phonetic: "/ˈprɪt.i/",
    partOfSpeech: "adj.",
    meaning: "漂亮的",
    example: "She wore a pretty dress."
  },
  {
    word: "ugly",
    phonetic: "/ˈʌɡ.li/",
    partOfSpeech: "adj.",
    meaning: "醜的",
    example: "The building is ugly."
  },
  {
    word: "boring",
    phonetic: "/ˈbɔːr.ɪŋ/",
    partOfSpeech: "adj.",
    meaning: "無聊的",
    example: "The movie was boring."
  },
  {
    word: "crazy",
    phonetic: "/ˈkreɪ.zi/",
    partOfSpeech: "adj.",
    meaning: "瘋狂的",
    example: "That is a crazy idea."
  },
  {
    word: "funny",
    phonetic: "/ˈfʌn.i/",
    partOfSpeech: "adj.",
    meaning: "好笑的",
    example: "He told a funny joke."
  },
  {
    word: "interested",
    phonetic: "/ˈɪn.trɪ.stɪd/",
    partOfSpeech: "adj.",
    meaning: "感覺有趣的",
    example: "She is interested in learning Japanese."
  },
  {
    word: "mad",
    phonetic: "/mæd/",
    partOfSpeech: "adj.",
    meaning: "瘋狂的",
    example: "He got mad when he heard the news."
  },
  {
    word: "rich",
    phonetic: "/rɪtʃ/",
    partOfSpeech: "adj.",
    meaning: "有錢的",
    example: "Rich people often travel a lot."
  },
  {
    word: "stupid",
    phonetic: "/ˈstjuː.pɪd/",
    partOfSpeech: "adj.",
    meaning: "笨的",
    example: "That was a stupid mistake."
  },
  {
    word: "fat",
    phonetic: "/fæt/",
    partOfSpeech: "adj.",
    meaning: "胖的",
    example: "The cat is fat."
  },
  {
    word: "short",
    phonetic: "/ʃɔːrt/",
    partOfSpeech: "adj.",
    meaning: "短的",
    example: "She is shorter than her sister."
  },
  {
    word: "young",
    phonetic: "/jʌŋ/",
    partOfSpeech: "adj.",
    meaning: "年輕的",
    example: "She is young and energetic."
  },
  {
    word: "brave",
    phonetic: "/breɪv/",
    partOfSpeech: "adj.",
    meaning: "勇敢的",
    example: "The brave firefighter saved the child."
  },
  {
    word: "excited",
    phonetic: "/ɪkˈsaɪ.tɪd/",
    partOfSpeech: "adj.",
    meaning: "感到興奮的",
    example: "The children are excited about the trip."
  },
  {
    word: "good",
    phonetic: "/ɡʊd/",
    partOfSpeech: "adj.",
    meaning: "好的",
    example: "This is a good book."
  },
  {
    word: "kind",
    phonetic: "/kaɪnd/",
    partOfSpeech: "adj.",
    meaning: "親切的",
    example: "She is a kind person."
  },
  {
    word: "nice",
    phonetic: "/naɪs/",
    partOfSpeech: "adj.",
    meaning: "好的",
    example: "Have a nice day!"
  },
  {
    word: "sad",
    phonetic: "/sæd/",
    partOfSpeech: "adj.",
    meaning: "悲傷的",
    example: "The ending of the movie was sad."
  },
  {
    word: "successful",
    phonetic: "/səkˈses.fəl/",
    partOfSpeech: "adj.",
    meaning: "成功的",
    example: "He is a successful businessman."
  },
  {
    word: "handsome",
    phonetic: "/ˈhæn.səm/",
    partOfSpeech: "adj.",
    meaning: "英俊的",
    example: "He is tall and handsome."
  },
  {
    word: "slim",
    phonetic: "/slɪm/",
    partOfSpeech: "adj.",
    meaning: "苗條的",
    example: "She has a slim figure."
  },
  {
    word: "angry",
    phonetic: "/ˈæŋ.ɡri/",
    partOfSpeech: "adj.",
    meaning: "生氣的",
    example: "She was angry at the delay."
  },
  {
    word: "busy",
    phonetic: "/ˈbɪz.i/",
    partOfSpeech: "adj.",
    meaning: "忙碌的",
    example: "The restaurant is always busy."
  },
  {
    word: "exciting",
    phonetic: "/ɪkˈsaɪ.tɪŋ/",
    partOfSpeech: "adj.",
    meaning: "令人興奮的",
    example: "This is an exciting game."
  },
  {
    word: "happy",
    phonetic: "/ˈhæp.i/",
    partOfSpeech: "adj.",
    meaning: "快樂的",
    example: "She looks happy today."
  },
  {
    word: "lazy",
    phonetic: "/ˈleɪ.zi/",
    partOfSpeech: "adj.",
    meaning: "懶惰的",
    example: "Don't be lazy."
  },
  {
    word: "polite",
    phonetic: "/pəˈlaɪt/",
    partOfSpeech: "adj.",
    meaning: "有禮貌的",
    example: "The polite boy said thank you."
  },
  {
    word: "scared",
    phonetic: "/skerd/",
    partOfSpeech: "adj.",
    meaning: "害怕的",
    example: "I am scared of spiders."
  },
  {
    word: "unhappy",
    phonetic: "/ʌnˈhæp.i/",
    partOfSpeech: "adj.",
    meaning: "不快樂的",
    example: "He looked unhappy after the argument."
  },
  {
    word: "ear",
    phonetic: "/ɪr/",
    partOfSpeech: "n.",
    meaning: "耳朵",
    example: "The rabbit has long ears."
  },
  {
    word: "eye",
    phonetic: "/aɪ/",
    partOfSpeech: "n.",
    meaning: "眼睛",
    example: "She has blue eyes."
  },
  {
    word: "face",
    phonetic: "/feɪs/",
    partOfSpeech: "n.",
    meaning: "臉",
    example: "She has a friendly face."
  },
  {
    word: "mouth",
    phonetic: "/maʊθ/",
    partOfSpeech: "n.",
    meaning: "嘴巴",
    example: "Open your mouth."
  },
  {
    word: "nose",
    phonetic: "/noʊz/",
    partOfSpeech: "n.",
    meaning: "鼻子",
    example: "He has a big nose."
  },
  {
    word: "tooth",
    phonetic: "/tuːθ/",
    partOfSpeech: "n.",
    meaning: "牙齒",
    example: "I need to brush my teeth."
  },
  {
    word: "hair",
    phonetic: "/her/",
    partOfSpeech: "n.",
    meaning: "頭髮",
    example: "She has long hair."
  },
  {
    word: "arm",
    phonetic: "/ɑːrm/",
    partOfSpeech: "n.",
    meaning: "手臂",
    example: "He broke his arm."
  },
  {
    word: "lip",
    phonetic: "/lɪp/",
    partOfSpeech: "n.",
    meaning: "嘴唇",
    example: "She bit her lip."
  },
  {
    word: "back",
    phonetic: "/bæk/",
    partOfSpeech: "n.",
    meaning: "背",
    example: "My back hurts."
  }
];
