const words2 = [
  {
    word: "body",
    phonetic: "/ˈbɑː.di/",
    partOfSpeech: "n.",
    meaning: "身體",
    example: "He injured his body during the game."
  },
  {
    word: "finger",
    phonetic: "/ˈfɪŋ.ɡər/",
    partOfSpeech: "n.",
    meaning: "手指",
    example: "She pointed her finger at the map."
  },
  {
    word: "foot",
    phonetic: "/fʊt/",
    partOfSpeech: "n.",
    meaning: "腳",
    example: "He hurt his foot while running."
  },
  {
    word: "hand",
    phonetic: "/hænd/",
    partOfSpeech: "n.",
    meaning: "手",
    example: "Raise your hand if you know the answer."
  },
  {
    word: "head",
    phonetic: "/hed/",
    partOfSpeech: "n.",
    meaning: "頭",
    example: "He shook his head in disagreement."
  },
  {
    word: "knee",
    phonetic: "/niː/",
    partOfSpeech: "n.",
    meaning: "膝蓋",
    example: "She fell and hurt her knee."
  },
  {
    word: "leg",
    phonetic: "/leɡ/",
    partOfSpeech: "n.",
    meaning: "腿",
    example: "My legs are tired after the hike."
  },
  {
    word: "nail",
    phonetic: "/neɪl/",
    partOfSpeech: "n.",
    meaning: "指甲",
    example: "She painted her nails red."
  },
  {
    word: "shoulder",
    phonetic: "/ˈʃoʊl.dər/",
    partOfSpeech: "n.",
    meaning: "肩膀",
    example: "He carried the bag on his shoulder."
  },
  {
    word: "throat",
    phonetic: "/θroʊt/",
    partOfSpeech: "n.",
    meaning: "喉嚨",
    example: "I have a sore throat."
  },
  {
    word: "toe",
    phonetic: "/toʊ/",
    partOfSpeech: "n.",
    meaning: "腳趾",
    example: "She stubbed her toe on the table."
  },
  {
    word: "heart",
    phonetic: "/hɑːrt/",
    partOfSpeech: "n.",
    meaning: "心",
    example: "Her heart beats fast when she runs."
  },
  {
    word: "stomach",
    phonetic: "/ˈstʌm.ək/",
    partOfSpeech: "n.",
    meaning: "胃",
    example: "My stomach hurts after eating too much."
  },
  {
    word: "comfortable",
    phonetic: "/ˈkʌmf.tər.bəl/",
    partOfSpeech: "adj.",
    meaning: "舒適的",
    example: "This chair is very comfortable."
  },
  {
    word: "healthy",
    phonetic: "/ˈhel.θi/",
    partOfSpeech: "adj.",
    meaning: "健康的",
    example: "She eats a healthy diet every day."
  },
  {
    word: "sick",
    phonetic: "/sɪk/",
    partOfSpeech: "adj.",
    meaning: "生病的",
    example: "He is sick and stayed home today."
  },
  {
    word: "strong",
    phonetic: "/strɔːŋ/",
    partOfSpeech: "adj.",
    meaning: "強壯的",
    example: "He is strong enough to lift the box."
  },
  {
    word: "tired",
    phonetic: "/ˈtaɪərd/",
    partOfSpeech: "adj.",
    meaning: "疲倦的",
    example: "I am tired after a long day."
  },
  {
    word: "weak",
    phonetic: "/wiːk/",
    partOfSpeech: "adj.",
    meaning: "弱的",
    example: "The old man is weak after the illness."
  },
  {
    word: "well",
    phonetic: "/wel/",
    partOfSpeech: "adv.",
    meaning: "好地",
    example: "She plays the piano well."
  },
  {
    word: "cold",
    phonetic: "/koʊld/",
    partOfSpeech: "adj.",
    meaning: "寒冷的",
    example: "It is cold outside today."
  },
  {
    word: "headache",
    phonetic: "/ˈhed.eɪk/",
    partOfSpeech: "n.",
    meaning: "頭痛",
    example: "I have a bad headache."
  },
  {
    word: "fever",
    phonetic: "/ˈfiː.vər/",
    partOfSpeech: "n.",
    meaning: "發燒",
    example: "He has a high fever."
  },
  {
    word: "sore",
    phonetic: "/sɔːr/",
    partOfSpeech: "adj.",
    meaning: "疼痛的",
    example: "My throat is sore and dry."
  },
  {
    word: "death",
    phonetic: "/deθ/",
    partOfSpeech: "n.",
    meaning: "死亡",
    example: "The news of his death shocked us."
  },
  {
    word: "health",
    phonetic: "/helθ/",
    partOfSpeech: "n.",
    meaning: "健康",
    example: "Exercise is good for your health."
  },
  {
    word: "life",
    phonetic: "/laɪf/",
    partOfSpeech: "n.",
    meaning: "生活",
    example: "Life is full of surprises."
  },
  {
    word: "medicine",
    phonetic: "/ˈmed.sən/",
    partOfSpeech: "n.",
    meaning: "藥",
    example: "Take this medicine after meals."
  },
  {
    word: "doctor",
    phonetic: "/ˈdɑːk.tər/",
    partOfSpeech: "n.",
    meaning: "醫生 (Dr.)",
    example: "The doctor will see you now."
  },
  {
    word: "Mr.",
    phonetic: "/ˈmɪs.tər/",
    partOfSpeech: "n.",
    meaning: "先生",
    example: "Mr. Smith is our teacher."
  },
  {
    word: "Mrs.",
    phonetic: "/ˈmɪs.ɪz/",
    partOfSpeech: "n.",
    meaning: "太太",
    example: "Mrs. Brown is my neighbor."
  },
  {
    word: "Miss",
    phonetic: "/mɪs/",
    partOfSpeech: "n.",
    meaning: "小姐",
    example: "Miss Lee is our new classmate."
  },
  {
    word: "Ms.",
    phonetic: "/məz/",
    partOfSpeech: "n.",
    meaning: "女士",
    example: "Ms. Chen will lead the meeting."
  },
  {
    word: "sir",
    phonetic: "/sɜːr/",
    partOfSpeech: "n.",
    meaning: "先生",
    example: "Excuse me, sir, your table is ready."
  },
  {
    word: "name",
    phonetic: "/neɪm/",
    partOfSpeech: "n.",
    meaning: "名字",
    example: "What is your name?"
  },
  {
    word: "aunt",
    phonetic: "/ænt/",
    partOfSpeech: "n.",
    meaning: "伯 (叔) 母",
    example: "My aunt lives in Taipei."
  },
  {
    word: "brother",
    phonetic: "/ˈbrʌð.ər/",
    partOfSpeech: "n.",
    meaning: "兄弟",
    example: "My brother is two years older."
  },
  {
    word: "cousin",
    phonetic: "/ˈkʌz.ən/",
    partOfSpeech: "n.",
    meaning: "堂表兄弟姊妹",
    example: "I have three cousins."
  },
  {
    word: "daughter",
    phonetic: "/ˈdɔː.tər/",
    partOfSpeech: "n.",
    meaning: "女兒",
    example: "Their daughter is a doctor."
  },
  {
    word: "family",
    phonetic: "/ˈfæm.əli/",
    partOfSpeech: "n.",
    meaning: "家庭",
    example: "My family is very close."
  },
  {
    word: "father",
    phonetic: "/ˈfɑː.ðər/",
    partOfSpeech: "n.",
    meaning: "父親 (dad, daddy)",
    example: "My father works in a bank."
  },
  {
    word: "grandfather",
    phonetic: "/ˈɡrænd.fɑː.ðər/",
    partOfSpeech: "n.",
    meaning: "祖父 (grandpa)",
    example: "My grandfather is eighty years old."
  },
  {
    word: "grandmother",
    phonetic: "/ˈɡrænd.mʌð.ər/",
    partOfSpeech: "n.",
    meaning: "祖母 (grandma)",
    example: "My grandmother bakes great cookies."
  },
  {
    word: "husband",
    phonetic: "/ˈhʌz.bənd/",
    partOfSpeech: "n.",
    meaning: "丈夫",
    example: "Her husband is a teacher."
  },
  {
    word: "mother",
    phonetic: "/ˈmʌð.ər/",
    partOfSpeech: "n.",
    meaning: "母親 (mom, mommy)",
    example: "My mother cooks dinner every day."
  },
  {
    word: "parent",
    phonetic: "/ˈper.ənt/",
    partOfSpeech: "n.",
    meaning: "父 (母) 親",
    example: "Parents should care for their children."
  },
  {
    word: "relative",
    phonetic: "/ˈrel.ə.tɪv/",
    partOfSpeech: "n.",
    meaning: "親戚",
    example: "We visit our relatives during holidays."
  },
  {
    word: "sister",
    phonetic: "/ˈsɪs.tər/",
    partOfSpeech: "n.",
    meaning: "姊妹",
    example: "My sister is younger than me."
  },
  {
    word: "son",
    phonetic: "/sʌn/",
    partOfSpeech: "n.",
    meaning: "兒子",
    example: "Their son is in college."
  },
  {
    word: "uncle",
    phonetic: "/ˈʌŋ.kəl/",
    partOfSpeech: "n.",
    meaning: "伯 (叔) 父",
    example: "My uncle gave me a gift."
  },
  {
    word: "wife",
    phonetic: "/waɪf/",
    partOfSpeech: "n.",
    meaning: "妻子",
    example: "His wife is a nurse."
  },
  {
    word: "born",
    phonetic: "/bɔːrn/",
    partOfSpeech: "v.",
    meaning: "出生",
    example: "I was born in Taiwan."
  },
  {
    word: "grow",
    phonetic: "/ɡroʊ/",
    partOfSpeech: "v.",
    meaning: "成長",
    example: "Plants grow in the spring."
  },
  {
    word: "live",
    phonetic: "/lɪv/",
    partOfSpeech: "v.",
    meaning: "住; 活著",
    example: "I live in Taipei."
  },
  {
    word: "married",
    phonetic: "/ˈmer.id/",
    partOfSpeech: "adj.",
    meaning: "已婚的",
    example: "They are married and happy."
  },
  {
    word: "zero",
    phonetic: "/ˈzɪr.oʊ/",
    partOfSpeech: "num.",
    meaning: "零",
    example: "The temperature is zero degrees."
  },
  {
    word: "one",
    phonetic: "/wʌn/",
    partOfSpeech: "num.",
    meaning: "一",
    example: "I have one brother."
  },
  {
    word: "two",
    phonetic: "/tuː/",
    partOfSpeech: "num.",
    meaning: "二",
    example: "Two cats are on the roof."
  },
  {
    word: "three",
    phonetic: "/θriː/",
    partOfSpeech: "num.",
    meaning: "三",
    example: "Three birds flew away."
  },
  {
    word: "four",
    phonetic: "/fɔːr/",
    partOfSpeech: "num.",
    meaning: "四",
    example: "There are four seasons in a year."
  },
  {
    word: "five",
    phonetic: "/faɪv/",
    partOfSpeech: "num.",
    meaning: "五",
    example: "She has five fingers on each hand."
  },
  {
    word: "six",
    phonetic: "/sɪks/",
    partOfSpeech: "num.",
    meaning: "六",
    example: "Six students passed the test."
  },
  {
    word: "seven",
    phonetic: "/ˈsev.ən/",
    partOfSpeech: "num.",
    meaning: "七",
    example: "Seven days make a week."
  },
  {
    word: "eight",
    phonetic: "/eɪt/",
    partOfSpeech: "num.",
    meaning: "八",
    example: "Eight is my lucky number."
  },
  {
    word: "nine",
    phonetic: "/naɪn/",
    partOfSpeech: "num.",
    meaning: "九",
    example: "Nine players are on a baseball team."
  },
  {
    word: "ten",
    phonetic: "/ten/",
    partOfSpeech: "num.",
    meaning: "十",
    example: "Count from one to ten."
  },
  {
    word: "eleven",
    phonetic: "/ɪˈlev.ən/",
    partOfSpeech: "num.",
    meaning: "十一",
    example: "Eleven people came to the party."
  },
  {
    word: "twelve",
    phonetic: "/twelv/",
    partOfSpeech: "num.",
    meaning: "十二",
    example: "There are twelve months in a year."
  },
  {
    word: "thirteen",
    phonetic: "/ˌθɝːrˈtiːn/",
    partOfSpeech: "num.",
    meaning: "十三",
    example: "He is thirteen years old."
  },
  {
    word: "fourteen",
    phonetic: "/ˌfɔːrˈtiːn/",
    partOfSpeech: "num.",
    meaning: "十四",
    example: "Fourteen days make two weeks."
  },
  {
    word: "fifteen",
    phonetic: "/ˌfɪfˈtiːn/",
    partOfSpeech: "num.",
    meaning: "十五",
    example: "She is fifteen minutes late."
  },
  {
    word: "sixteen",
    phonetic: "/ˌsɪksˈtiːn/",
    partOfSpeech: "num.",
    meaning: "十六",
    example: "Sixteen candles are on the cake."
  },
  {
    word: "seventeen",
    phonetic: "/ˌsev.ənˈtiːn/",
    partOfSpeech: "num.",
    meaning: "十七",
    example: "Seventeen is a lucky number to her."
  },
  {
    word: "eighteen",
    phonetic: "/ˌeɪˈtiːn/",
    partOfSpeech: "num.",
    meaning: "十八",
    example: "He will be eighteen next year."
  },
  {
    word: "nineteen",
    phonetic: "/ˌnaɪnˈtiːn/",
    partOfSpeech: "num.",
    meaning: "十九",
    example: "Nineteen students joined the club."
  },
  {
    word: "twenty",
    phonetic: "/ˈtwen.ti/",
    partOfSpeech: "num.",
    meaning: "二十",
    example: "Twenty dollars is the price."
  },
  {
    word: "thirty",
    phonetic: "/ˈθɝːr.ti/",
    partOfSpeech: "num.",
    meaning: "三十",
    example: "Thirty minutes is half an hour."
  },
  {
    word: "forty",
    phonetic: "/ˈfɔːr.ti/",
    partOfSpeech: "num.",
    meaning: "四十",
    example: "He is forty years old."
  },
  {
    word: "fifty",
    phonetic: "/ˈfɪf.ti/",
    partOfSpeech: "num.",
    meaning: "五十",
    example: "Fifty people joined the event."
  },
  {
    word: "sixty",
    phonetic: "/ˈsɪks.ti/",
    partOfSpeech: "num.",
    meaning: "六十",
    example: "Sixty seconds make a minute."
  },
];
