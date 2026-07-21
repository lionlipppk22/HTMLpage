const words3 = [
  {
    word: "seventy",
    phonetic: "/ˈsev.ən.ti/",
    partOfSpeech: "num.",
    meaning: "七十",
    example: "Seventy is a big number."
  },
  {
    word: "eighty",
    phonetic: "/ˈeɪ.ti/",
    partOfSpeech: "num.",
    meaning: "八十",
    example: "He is eighty years old."
  },
  {
    word: "ninety",
    phonetic: "/ˈnaɪn.ti/",
    partOfSpeech: "num.",
    meaning: "九十",
    example: "Ninety students took the exam."
  },
  {
    word: "hundred",
    phonetic: "/ˈhʌn.drəd/",
    partOfSpeech: "num.",
    meaning: "百",
    example: "One hundred people attended."
  },
  {
    word: "thousand",
    phonetic: "/ˈθaʊ.zənd/",
    partOfSpeech: "num.",
    meaning: "千",
    example: "A thousand thanks to you."
  },
  {
    word: "million",
    phonetic: "/ˈmɪl.jən/",
    partOfSpeech: "num.",
    meaning: "百萬",
    example: "He won a million dollars."
  },
  {
    word: "first",
    phonetic: "/fɝːst/",
    partOfSpeech: "num.",
    meaning: "第一 (的)",
    example: "She won first place."
  },
  {
    word: "second",
    phonetic: "/ˈsek.ənd/",
    partOfSpeech: "num.",
    meaning: "第二 (的)",
    example: "He came in second."
  },
  {
    word: "third",
    phonetic: "/θɝːrd/",
    partOfSpeech: "num.",
    meaning: "第三 (的)",
    example: "This is my third time here."
  },
  {
    word: "last",
    phonetic: "/læst/",
    partOfSpeech: "adj.",
    meaning: "最後的",
    example: "He was the last to leave."
  },
  {
    word: "all",
    phonetic: "/ɔːl/",
    partOfSpeech: "adj.",
    meaning: "全部的",
    example: "All students are here today."
  },
  {
    word: "a few",
    phonetic: "/ə fjuː/",
    partOfSpeech: "adj.",
    meaning: "一些",
    example: "I have a few friends here."
  },
  {
    word: "a little",
    phonetic: "/ə ˈlɪt.əl/",
    partOfSpeech: "adj.",
    meaning: "一點兒",
    example: "I need a little help."
  },
  {
    word: "a lot",
    phonetic: "/ə lɑːt/",
    partOfSpeech: "adj.",
    meaning: "許多",
    example: "Thanks a lot for your help."
  },
  {
    word: "any",
    phonetic: "/ˈen.i/",
    partOfSpeech: "adj.",
    meaning: "任何的",
    example: "Do you have any questions?"
  },
  {
    word: "both",
    phonetic: "/boʊθ/",
    partOfSpeech: "adj.",
    meaning: "兩者都",
    example: "Both sisters are tall."
  },
  {
    word: "few",
    phonetic: "/fjuː/",
    partOfSpeech: "adj.",
    meaning: "少數的",
    example: "Few people know the answer."
  },
  {
    word: "less",
    phonetic: "/les/",
    partOfSpeech: "adj.",
    meaning: "較少的",
    example: "I have less money than before."
  },
  {
    word: "little",
    phonetic: "/ˈlɪt.əl/",
    partOfSpeech: "adj.",
    meaning: "小的",
    example: "The little dog barked loudly."
  },
  {
    word: "many",
    phonetic: "/ˈmen.i/",
    partOfSpeech: "adj.",
    meaning: "許多的",
    example: "How many books do you have?"
  },
  {
    word: "more",
    phonetic: "/mɔːr/",
    partOfSpeech: "adj.",
    meaning: "更多的",
    example: "I need more time."
  },
  {
    word: "much",
    phonetic: "/mʌtʃ/",
    partOfSpeech: "adj.",
    meaning: "許多 (不可數)",
    example: "How much water do you need?"
  },
  {
    word: "number",
    phonetic: "/ˈnʌm.bər/",
    partOfSpeech: "n.",
    meaning: "號碼",
    example: "What is your phone number?"
  },
  {
    word: "several",
    phonetic: "/ˈsev.ər.əl/",
    partOfSpeech: "adj.",
    meaning: "幾個的",
    example: "Several students raised their hands."
  },
  {
    word: "some",
    phonetic: "/sʌm/",
    partOfSpeech: "adj.",
    meaning: "一些",
    example: "I bought some apples."
  },
  {
    word: "total",
    phonetic: "/ˈtoʊ.təl/",
    partOfSpeech: "n.",
    meaning: "總計",
    example: "The total is fifty dollars."
  },
  {
    word: "morning",
    phonetic: "/ˈmɔːr.nɪŋ/",
    partOfSpeech: "n.",
    meaning: "早上",
    example: "I drink coffee every morning."
  },
  {
    word: "noon",
    phonetic: "/nuːn/",
    partOfSpeech: "n.",
    meaning: "中午",
    example: "We eat lunch at noon."
  },
  {
    word: "afternoon",
    phonetic: "/ˌæf.tərˈnuːn/",
    partOfSpeech: "n.",
    meaning: "下午",
    example: "The meeting is in the afternoon."
  },
  {
    word: "evening",
    phonetic: "/ˈiːv.nɪŋ/",
    partOfSpeech: "n.",
    meaning: "傍晚",
    example: "We watch TV in the evening."
  },
  {
    word: "night",
    phonetic: "/naɪt/",
    partOfSpeech: "n.",
    meaning: "晚上",
    example: "I sleep at night."
  },
  {
    word: "Monday",
    phonetic: "/ˈmʌn.deɪ/",
    partOfSpeech: "n.",
    meaning: "星期一",
    example: "School starts on Monday."
  },
  {
    word: "Tuesday",
    phonetic: "/ˈtuːz.deɪ/",
    partOfSpeech: "n.",
    meaning: "星期二",
    example: "We have art class on Tuesday."
  },
  {
    word: "Wednesday",
    phonetic: "/ˈwenz.deɪ/",
    partOfSpeech: "n.",
    meaning: "星期三",
    example: "Wednesday is my busy day."
  },
  {
    word: "Thursday",
    phonetic: "/ˈθɝːrz.deɪ/",
    partOfSpeech: "n.",
    meaning: "星期四",
    example: "We have a test on Thursday."
  },
  {
    word: "Friday",
    phonetic: "/ˈfraɪ.deɪ/",
    partOfSpeech: "n.",
    meaning: "星期五",
    example: "Friday is my favorite day."
  },
  {
    word: "Saturday",
    phonetic: "/ˈsæt.ɚ.deɪ/",
    partOfSpeech: "n.",
    meaning: "星期六",
    example: "We go shopping on Saturday."
  },
  {
    word: "Sunday",
    phonetic: "/ˈsʌn.deɪ/",
    partOfSpeech: "n.",
    meaning: "星期日",
    example: "Sunday is a rest day."
  },
  {
    word: "week",
    phonetic: "/wiːk/",
    partOfSpeech: "n.",
    meaning: "星期",
    example: "There are seven days in a week."
  },
  {
    word: "weekend",
    phonetic: "/ˈwiːk.end/",
    partOfSpeech: "n.",
    meaning: "週末",
    example: "We travel on the weekend."
  },
  {
    word: "month",
    phonetic: "/mʌnθ/",
    partOfSpeech: "n.",
    meaning: "月份",
    example: "January is the first month."
  },
  {
    word: "January",
    phonetic: "/ˈdʒæn.ju.er.i/",
    partOfSpeech: "n.",
    meaning: "一月",
    example: "My birthday is in January."
  },
  {
    word: "February",
    phonetic: "/ˈfeb.ru.er.i/",
    partOfSpeech: "n.",
    meaning: "二月",
    example: "February has twenty-eight days."
  },
  {
    word: "March",
    phonetic: "/mɑːrtʃ/",
    partOfSpeech: "n.",
    meaning: "三月",
    example: "March is a windy month."
  },
  {
    word: "April",
    phonetic: "/ˈeɪ.prəl/",
    partOfSpeech: "n.",
    meaning: "四月",
    example: "April showers bring flowers."
  },
  {
    word: "May",
    phonetic: "/meɪ/",
    partOfSpeech: "n.",
    meaning: "五月",
    example: "May is a warm month."
  },
  {
    word: "June",
    phonetic: "/dʒuːn/",
    partOfSpeech: "n.",
    meaning: "六月",
    example: "School ends in June."
  },
  {
    word: "July",
    phonetic: "/dʒuˈlaɪ/",
    partOfSpeech: "n.",
    meaning: "七月",
    example: "July is hot in summer."
  },
  {
    word: "August",
    phonetic: "/ˈɔː.ɡəst/",
    partOfSpeech: "n.",
    meaning: "八月",
    example: "August is my vacation month."
  },
  {
    word: "September",
    phonetic: "/sepˈtem.bər/",
    partOfSpeech: "n.",
    meaning: "九月",
    example: "School starts in September."
  },
  {
    word: "October",
    phonetic: "/ɑːkˈtoʊ.bər/",
    partOfSpeech: "n.",
    meaning: "十月",
    example: "October is a cool month."
  },
  {
    word: "November",
    phonetic: "/noʊˈvem.bər/",
    partOfSpeech: "n.",
    meaning: "十一月",
    example: "November is a rainy month."
  },
  {
    word: "December",
    phonetic: "/dɪˈsem.bər/",
    partOfSpeech: "n.",
    meaning: "十二月",
    example: "Christmas is in December."
  },
  {
    word: "season",
    phonetic: "/ˈsiː.zən/",
    partOfSpeech: "n.",
    meaning: "季節",
    example: "Summer is my favorite season."
  },
  {
    word: "spring",
    phonetic: "/sprɪŋ/",
    partOfSpeech: "n.",
    meaning: "春天",
    example: "Flowers bloom in spring."
  },
  {
    word: "summer",
    phonetic: "/ˈsʌm.ər/",
    partOfSpeech: "n.",
    meaning: "夏天",
    example: "It is hot in summer."
  },
  {
    word: "autumn",
    phonetic: "/ˈɔː.təm/",
    partOfSpeech: "n.",
    meaning: "秋天 (fall)",
    example: "Leaves fall in autumn."
  },
  {
    word: "winter",
    phonetic: "/ˈwɪn.tər/",
    partOfSpeech: "n.",
    meaning: "冬天",
    example: "It snows in winter."
  },
  {
    word: "clock",
    phonetic: "/klɑːk/",
    partOfSpeech: "n.",
    meaning: "時鐘",
    example: "The clock on the wall is broken."
  },
  {
    word: "watch",
    phonetic: "/wɑːtʃ/",
    partOfSpeech: "n.",
    meaning: "手錶",
    example: "My watch shows the right time."
  },
  {
    word: "a.m.",
    phonetic: "/ˌeɪˈem/",
    partOfSpeech: "n.",
    meaning: "上午",
    example: "The meeting is at nine a.m."
  },
  {
    word: "p.m.",
    phonetic: "/ˌpiːˈem/",
    partOfSpeech: "n.",
    meaning: "下午",
    example: "The show starts at eight p.m."
  },
  {
    word: "half",
    phonetic: "/hæf/",
    partOfSpeech: "n.",
    meaning: "一半",
    example: "I ate half the cake."
  },
  {
    word: "hour",
    phonetic: "/aʊər/",
    partOfSpeech: "n.",
    meaning: "小時",
    example: "We waited for an hour."
  },
  {
    word: "minute",
    phonetic: "/ˈmɪn.ɪt/",
    partOfSpeech: "n.",
    meaning: "分鐘",
    example: "I will be there in ten minutes."
  },
  {
    word: "moment",
    phonetic: "/ˈmoʊ.mənt/",
    partOfSpeech: "n.",
    meaning: "片刻",
    example: "Wait a moment, please."
  },
  {
    word: "o'clock",
    phonetic: "/əˈklɑːk/",
    partOfSpeech: "n.",
    meaning: "點鐘",
    example: "It is three o'clock now."
  },
  {
    word: "past",
    phonetic: "/pæst/",
    partOfSpeech: "n.",
    meaning: "經過",
    example: "It is ten past three."
  },
  {
    word: "quarter",
    phonetic: "/ˈkwɔːr.tər/",
    partOfSpeech: "n.",
    meaning: "15 分鐘",
    example: "It is a quarter past three."
  },
  {
    word: "second",
    phonetic: "/ˈsek.ənd/",
    partOfSpeech: "n.",
    meaning: "秒",
    example: "Wait one second, please."
  },
  {
    word: "time",
    phonetic: "/taɪm/",
    partOfSpeech: "n.",
    meaning: "時間",
    example: "What time is it now?"
  },
  {
    word: "ago",
    phonetic: "/əˈɡoʊ/",
    partOfSpeech: "adv.",
    meaning: "以前",
    example: "He left an hour ago."
  },
  {
    word: "already",
    phonetic: "/ɔːlˈred.i/",
    partOfSpeech: "adv.",
    meaning: "已經",
    example: "I have already finished my work."
  },
  {
    word: "early",
    phonetic: "/ˈɝːr.li/",
    partOfSpeech: "adj.",
    meaning: "早的",
    example: "She wakes up early every day."
  },
  {
    word: "last",
    phonetic: "/læst/",
    partOfSpeech: "adj.",
    meaning: "最後的",
    example: "He was the last one to come."
  },
  {
    word: "late",
    phonetic: "/leɪt/",
    partOfSpeech: "adj.",
    meaning: "晚的",
    example: "The train is late today."
  },
  {
    word: "later",
    phonetic: "/ˈleɪ.tər/",
    partOfSpeech: "adv.",
    meaning: "稍後",
    example: "I will call you later."
  },
  {
    word: "next",
    phonetic: "/nekst/",
    partOfSpeech: "adj.",
    meaning: "下一個",
    example: "The next bus is at noon."
  },
  {
    word: "now",
    phonetic: "/naʊ/",
    partOfSpeech: "adv.",
    meaning: "現在",
    example: "I am busy now."
  },
  {
    word: "once",
    phonetic: "/wʌns/",
    partOfSpeech: "adv.",
    meaning: "一次",
    example: "I visit them once a week."
  },
  {
    word: "future",
    phonetic: "/ˈfjuː.tʃər/",
    partOfSpeech: "n.",
    meaning: "未來",
    example: "I hope for a bright future."
  },
  {
    word: "soon",
    phonetic: "/suːn/",
    partOfSpeech: "adv.",
    meaning: "不久; 即將",
    example: "He will arrive soon."
  },
  {
    word: "today",
    phonetic: "/təˈdeɪ/",
    partOfSpeech: "adv.",
    meaning: "今天",
    example: "Today is my birthday."
  },
  {
    word: "tonight",
    phonetic: "/təˈnaɪt/",
    partOfSpeech: "adv.",
    meaning: "今晚",
    example: "We will meet tonight."
  },
  {
    word: "tomorrow",
    phonetic: "/təˈmɑːroʊ/",
    partOfSpeech: "adv.",
    meaning: "明天",
    example: "Tomorrow is a holiday."
  },
  {
    word: "year",
    phonetic: "/jɪr/",
    partOfSpeech: "n.",
    meaning: "年",
    example: "There are 365 days in a year."
  },
  {
    word: "yesterday",
    phonetic: "/ˈjes.tər.deɪ/",
    partOfSpeech: "adv.",
    meaning: "昨天",
    example: "I saw him yesterday."
  },
  {
    word: "day",
    phonetic: "/deɪ/",
    partOfSpeech: "n.",
    meaning: "日子",
    example: "Have a nice day!"
  },
  {
    word: "cent",
    phonetic: "/sent/",
    partOfSpeech: "n.",
    meaning: "(一) 分錢",
    example: "I have fifty cents."
  },
  {
    word: "change",
    phonetic: "/tʃeɪndʒ/",
    partOfSpeech: "n.",
    meaning: "零錢",
    example: "Keep the change, please."
  },
  {
    word: "dollar",
    phonetic: "/ˈdɑː.lər/",
    partOfSpeech: "n.",
    meaning: "元",
    example: "The book costs five dollars."
  },
  {
    word: "money",
    phonetic: "/ˈmʌn.i/",
    partOfSpeech: "n.",
    meaning: "錢",
    example: "I need some money for lunch."
  },
  {
    word: "price",
    phonetic: "/praɪs/",
    partOfSpeech: "n.",
    meaning: "價格",
    example: "The price is too high."
  },
];
