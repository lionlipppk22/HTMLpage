const words10 = [
  {
    word: "dog",
    phonetic: "/dɔɡ/",
    partOfSpeech: "n.",
    meaning: "狗",
    example: "The dog barked at the mailman."
  },
  {
    word: "duck",
    phonetic: "/dʌk/",
    partOfSpeech: "n.",
    meaning: "鴨",
    example: "The duck swam across the pond."
  },
  {
    word: "elephant",
    phonetic: "/ˈɛl.ə.fənt/",
    partOfSpeech: "n.",
    meaning: "大象",
    example: "The elephant raised its trunk."
  },
  {
    word: "fox",
    phonetic: "/fɑks/",
    partOfSpeech: "n.",
    meaning: "狐狸",
    example: "The fox sneaked into the henhouse."
  },
  {
    word: "frog",
    phonetic: "/frɑɡ/",
    partOfSpeech: "n.",
    meaning: "青蛙",
    example: "The frog jumped into the water."
  },
  {
    word: "goat",
    phonetic: "/ɡoʊt/",
    partOfSpeech: "n.",
    meaning: "山羊",
    example: "The goat climbed the steep hill."
  },
  {
    word: "goose",
    phonetic: "/ɡus/",
    partOfSpeech: "n.",
    meaning: "鵝",
    example: "The goose honked loudly."
  },
  {
    word: "hen",
    phonetic: "/hɛn/",
    partOfSpeech: "n.",
    meaning: "母雞",
    example: "The hen sat on her eggs."
  },
  {
    word: "horse",
    phonetic: "/hɔːrs/",
    partOfSpeech: "n.",
    meaning: "馬",
    example: "The horse galloped across the field."
  },
  {
    word: "lion",
    phonetic: "/ˈlaɪ.ən/",
    partOfSpeech: "n.",
    meaning: "獅子",
    example: "The lion roared loudly at the zoo."
  },
  {
    word: "monkey",
    phonetic: "/ˈmʌŋ.ki/",
    partOfSpeech: "n.",
    meaning: "猴子",
    example: "The monkey swung from branch to branch."
  },
  {
    word: "mouse",
    phonetic: "/maʊs/",
    partOfSpeech: "n.",
    meaning: "老鼠",
    example: "A mouse ran across the kitchen floor."
  },
  {
    word: "pet",
    phonetic: "/pet/",
    partOfSpeech: "n.",
    meaning: "寵物",
    example: "My cat is my favorite pet."
  },
  {
    word: "pig",
    phonetic: "/pɪɡ/",
    partOfSpeech: "n.",
    meaning: "豬",
    example: "The pig rolled in the mud."
  },
  {
    word: "puppy",
    phonetic: "/ˈpʌp.i/",
    partOfSpeech: "n.",
    meaning: "小狗",
    example: "The puppy chased its tail."
  },
  {
    word: "rabbit",
    phonetic: "/ˈræb.ɪt/",
    partOfSpeech: "n.",
    meaning: "兔子",
    example: "The rabbit ate a carrot."
  },
  {
    word: "rat",
    phonetic: "/ræt/",
    partOfSpeech: "n.",
    meaning: "(大) 老鼠",
    example: "A rat ran across the street."
  },
  {
    word: "sheep",
    phonetic: "/ʃiːp/",
    partOfSpeech: "n.",
    meaning: "綿羊",
    example: "The sheep grazed in the field."
  },
  {
    word: "tiger",
    phonetic: "/ˈtaɪ.ɡər/",
    partOfSpeech: "n.",
    meaning: "老虎",
    example: "The tiger is a powerful hunter."
  },
  {
    word: "zebra",
    phonetic: "/ˈziː.brə/",
    partOfSpeech: "n.",
    meaning: "斑馬",
    example: "The zebra has black and white stripes."
  },
  {
    word: "insect",
    phonetic: "/ˈɪn.sekt/",
    partOfSpeech: "n.",
    meaning: "昆蟲",
    example: "An insect has six legs."
  },
  {
    word: "ant",
    phonetic: "/ænt/",
    partOfSpeech: "n.",
    meaning: "螞蟻",
    example: "The ant carried a leaf."
  },
  {
    word: "bat",
    phonetic: "/bæt/",
    partOfSpeech: "n.",
    meaning: "蝙蝠",
    example: "The bat flew at night."
  },
  {
    word: "bee",
    phonetic: "/biː/",
    partOfSpeech: "n.",
    meaning: "蜜蜂",
    example: "The bee made honey."
  },
  {
    word: "bird",
    phonetic: "/bɜːrd/",
    partOfSpeech: "n.",
    meaning: "鳥",
    example: "A bird sang in the tree."
  },
  {
    word: "bug",
    phonetic: "/bʌɡ/",
    partOfSpeech: "n.",
    meaning: "小蟲",
    example: "A small bug crawled on the wall."
  },
  {
    word: "butterfly",
    phonetic: "/ˈbʌt.ər.flaɪ/",
    partOfSpeech: "n.",
    meaning: "蝴蝶",
    example: "The butterfly landed on the flower."
  },
  {
    word: "snake",
    phonetic: "/sneɪk/",
    partOfSpeech: "n.",
    meaning: "蛇",
    example: "The snake slithered through the grass."
  },
  {
    word: "spider",
    phonetic: "/ˈspaɪ.dər/",
    partOfSpeech: "n.",
    meaning: "蜘蛛",
    example: "The spider spun a web."
  },
  {
    word: "fish",
    phonetic: "/fɪʃ/",
    partOfSpeech: "n.",
    meaning: "魚",
    example: "The fish swims in the river."
  },
  {
    word: "turtle",
    phonetic: "/ˈtɜːr.təl/",
    partOfSpeech: "n.",
    meaning: "烏龜",
    example: "The turtle moved slowly."
  },
  {
    word: "bite",
    phonetic: "/baɪt/",
    partOfSpeech: "v.",
    meaning: "咬",
    example: "The dog will bite if scared."
  },
  {
    word: "tail",
    phonetic: "/teɪl/",
    partOfSpeech: "n.",
    meaning: "尾巴",
    example: "The dog wagged its tail."
  },
  {
    word: "a/an",
    phonetic: "/eɪ, æn/",
    partOfSpeech: "art.",
    meaning: "一 (個)",
    example: "I saw a cat and an elephant."
  },
  {
    word: "every",
    phonetic: "/ˈev.ri/",
    partOfSpeech: "adj.",
    meaning: "每一個 (的)",
    example: "Every student passed the test."
  },
  {
    word: "the",
    phonetic: "/ðə/",
    partOfSpeech: "art.",
    meaning: "這; 那",
    example: "The sun is bright today."
  },
  {
    word: "this",
    phonetic: "/ðɪs/",
    partOfSpeech: "adj.",
    meaning: "這個",
    example: "This book is interesting."
  },
  {
    word: "that",
    phonetic: "/ðæt/",
    partOfSpeech: "adj.",
    meaning: "那個",
    example: "That car is fast."
  },
  {
    word: "these",
    phonetic: "/ðiːz/",
    partOfSpeech: "adj.",
    meaning: "這些",
    example: "These apples are sweet."
  },
  {
    word: "those",
    phonetic: "/ðoʊz/",
    partOfSpeech: "adj.",
    meaning: "那些",
    example: "Those shoes are mine."
  },
  {
    word: "my",
    phonetic: "/maɪ/",
    partOfSpeech: "adj.",
    meaning: "我的",
    example: "My house is big."
  },
  {
    word: "our",
    phonetic: "/ˈaʊ.ər/",
    partOfSpeech: "adj.",
    meaning: "我們的",
    example: "Our team won the game."
  },
  {
    word: "your",
    phonetic: "/jɔːr/",
    partOfSpeech: "adj.",
    meaning: "你們的",
    example: "Your dog is cute."
  },
  {
    word: "his",
    phonetic: "/hɪz/",
    partOfSpeech: "adj.",
    meaning: "他的",
    example: "His bike is red."
  },
  {
    word: "her",
    phonetic: "/hɜːr/",
    partOfSpeech: "adj.",
    meaning: "她的",
    example: "Her hair is long."
  },
  {
    word: "its",
    phonetic: "/ɪts/",
    partOfSpeech: "adj.",
    meaning: "它的",
    example: "The cat licked its paw."
  },
  {
    word: "their",
    phonetic: "/ðɛr/",
    partOfSpeech: "adj.",
    meaning: "他們的",
    example: "Their house is new."
  },
  {
    word: "I (me, my, mine, myself)",
    phonetic: "/aɪ/",
    partOfSpeech: "pron.",
    meaning: "我",
    example: "I went to the store."
  },
  {
    word: "you (you, your, yours, yourself, yourselves)",
    phonetic: "/juː/",
    partOfSpeech: "pron.",
    meaning: "你 (們)",
    example: "You are my best friend."
  },
  {
    word: "he (him, his, himself)",
    phonetic: "/hiː/",
    partOfSpeech: "pron.",
    meaning: "他",
    example: "He runs fast."
  },
  {
    word: "she (her, hers, herself)",
    phonetic: "/ʃiː/",
    partOfSpeech: "pron.",
    meaning: "她",
    example: "She likes to read."
  },
  {
    word: "it (it, its, itself)",
    phonetic: "/ɪt/",
    partOfSpeech: "pron.",
    meaning: "它",
    example: "It is raining outside."
  },
  {
    word: "we (us, our, ours, ourselves)",
    phonetic: "/wiː/",
    partOfSpeech: "pron.",
    meaning: "我們",
    example: "We play soccer on weekends."
  },
  {
    word: "they (them, their, theirs, themselves)",
    phonetic: "/ðeɪ/",
    partOfSpeech: "pron.",
    meaning: "他們",
    example: "They went to the store."
  },
  {
    word: "all",
    phonetic: "/ɔːl/",
    partOfSpeech: "adj.",
    meaning: "全部的",
    example: "All students passed the test."
  },
  {
    word: "another",
    phonetic: "/əˈnʌð.ɚ/",
    partOfSpeech: "adj.",
    meaning: "另一個的",
    example: "Can I have another cup?"
  },
  {
    word: "any",
    phonetic: "/ˈen.i/",
    partOfSpeech: "adj.",
    meaning: "任何的",
    example: "I don't have any money."
  },
  {
    word: "anyone (anybody)",
    phonetic: "/ˈen.i.wʌn/",
    partOfSpeech: "pron.",
    meaning: "任何人",
    example: "Is anyone there?"
  },
  {
    word: "anything",
    phonetic: "/ˈen.i.θɪŋ/",
    partOfSpeech: "pron.",
    meaning: "任何事物",
    example: "I don't want anything."
  },
  {
    word: "both",
    phonetic: "/boʊθ/",
    partOfSpeech: "pron.",
    meaning: "兩者都",
    example: "Both options are good."
  },
  {
    word: "each",
    phonetic: "/iːtʃ/",
    partOfSpeech: "adj.",
    meaning: "每一 (的)",
    example: "Each child got a gift."
  },
  {
    word: "everyone (everybody)",
    phonetic: "/ˈev.ri.wʌn/",
    partOfSpeech: "pron.",
    meaning: "每一個人",
    example: "Everyone is here."
  },
  {
    word: "everything",
    phonetic: "/ˈev.ri.θɪŋ/",
    partOfSpeech: "pron.",
    meaning: "每件事",
    example: "Everything is fine."
  },
  {
    word: "many",
    phonetic: "/ˈmen.i/",
    partOfSpeech: "adj.",
    meaning: "許多的",
    example: "Many people agree."
  },
  {
    word: "most",
    phonetic: "/moʊst/",
    partOfSpeech: "adj.",
    meaning: "大部分的",
    example: "Most students like pizza."
  },
  {
    word: "nobody",
    phonetic: "/ˈnoʊˌbɑː.di/",
    partOfSpeech: "pron.",
    meaning: "沒有人",
    example: "Nobody knows the answer."
  },
  {
    word: "nothing",
    phonetic: "/ˈnʌθ.ɪŋ/",
    partOfSpeech: "pron.",
    meaning: "沒東西; 沒事",
    example: "Nothing happened."
  },
  {
    word: "other",
    phonetic: "/ˈʌð.ɚ/",
    partOfSpeech: "adj.",
    meaning: "其他的",
    example: "The other door is open."
  },
  {
    word: "part",
    phonetic: "/pɑːrt/",
    partOfSpeech: "n.",
    meaning: "部分",
    example: "This is part of the plan."
  },
  {
    word: "some",
    phonetic: "/sʌm/",
    partOfSpeech: "adj.",
    meaning: "一些",
    example: "I need some help."
  },
  {
    word: "someone (somebody)",
    phonetic: "/ˈsʌm.wʌn/",
    partOfSpeech: "pron.",
    meaning: "某人",
    example: "Someone is at the door."
  },
  {
    word: "something",
    phonetic: "/ˈsʌm.θɪŋ/",
    partOfSpeech: "pron.",
    meaning: "某事",
    example: "I heard something outside."
  },
  {
    word: "how",
    phonetic: "/haʊ/",
    partOfSpeech: "adv.",
    meaning: "如何",
    example: "How are you?"
  },
  {
    word: "what",
    phonetic: "/wʌt/",
    partOfSpeech: "pron.",
    meaning: "什麼",
    example: "What is your name?"
  },
  {
    word: "which",
    phonetic: "/wɪtʃ/",
    partOfSpeech: "pron.",
    meaning: "哪一個",
    example: "Which book do you want?"
  },
  {
    word: "who",
    phonetic: "/huː/",
    partOfSpeech: "pron.",
    meaning: "誰",
    example: "Who is that?"
  },
  {
    word: "whose",
    phonetic: "/huːz/",
    partOfSpeech: "pron.",
    meaning: "誰的",
    example: "Whose bag is this?"
  },
  {
    word: "when",
    phonetic: "/wen/",
    partOfSpeech: "adv.",
    meaning: "何時",
    example: "When did you arrive?"
  },
  {
    word: "where",
    phonetic: "/wer/",
    partOfSpeech: "adv.",
    meaning: "何處",
    example: "Where do you live?"
  },
  {
    word: "whether",
    phonetic: "/ˈweð.ɚ/",
    partOfSpeech: "conj.",
    meaning: "是否",
    example: "I don't know whether to go."
  },
  {
    word: "while",
    phonetic: "/waɪl/",
    partOfSpeech: "conj.",
    meaning: "當...的時候",
    example: "She called while I was cooking."
  },
  {
    word: "why",
    phonetic: "/waɪ/",
    partOfSpeech: "adv.",
    meaning: "為什麼",
    example: "Why are you late?"
  },
];
