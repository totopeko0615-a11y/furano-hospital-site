const doctorData = [
  {
    category: "病院経営陣",
    name: "紡木 こかげ",
    role: "病院長 / 思春期科・小児科外来医長",
    comment: "本院と分院の連携を強め、地域の安心を支える医療体制づくりに取り組みます。"
  },
  {
    category: "病院経営陣",
    name: "四宮 春樹",
    role: "副病院長 / 産婦人科主任部長",
    comment: "産婦人科と病院運営の両面から、安全で持続可能な診療体制を支えます。"
  },
  {
    category: "病院経営陣",
    name: "鏑木 ろこ",
    role: "副病院長 / 内科主任部長（循環器内科）",
    comment: "内科・循環器の診療と、午後予約制への移行を現場から支えます。"
  },
  {
    category: "病院経営陣",
    name: "藍沢 耕作",
    role: "病院長代理 / 救急科主任部長",
    comment: "ただ目の前の命を繋ぎ止める、その原点を救急現場で貫きます。"
  },
  {
    category: "病院経営陣",
    name: "大泉 洋",
    role: "病院長代理 / 耳鼻咽喉科主任部長",
    comment: "電話トリアージ、喫煙外来、人材育成まで幅広く担い、現場を支えます。"
  },
  {
    category: "病院経営陣",
    name: "進藤 一生",
    role: "副病院長代理 / 救急科主任係長",
    comment: "1秒の無駄もなくトリアージを完遂し、急変対応の質を高めます。"
  },
  {
    category: "病院経営陣",
    name: "石神 のぞみ",
    role: "副病院長代理 / 思春期科最高統括責任者",
    comment: "本院改革と分院派遣のバランスを見極め、冷静に全体最適を実現します。"
  },
  {
    category: "病院経営陣",
    name: "蝸堂 みかる",
    role: "最高顧問 / 小児科統括",
    comment: "小児科の負荷が高い時間帯も含め、子どもたちの安心を守るため全力で支えます。"
  },
  {
    category: "病院経営陣",
    name: "先斗 寧",
    role: "新病院担当・病院改革委員 / 思春期科主任部長 / 小児外科主任部長",
    comment: "午後予約化の仕組みと新シフトを同期させ、実務に落ちる改革を進めます。"
  },
  {
    category: "病院経営陣",
    name: "渡邊 トドック",
    role: "外来医長（名誉病院長） / 総合診療科主任部長",
    comment: "複雑な症状にも柔軟に対応し、地域の総合診療を支えます。"
  },
  {
    category: "病院経営陣",
    name: "周央 サンゴ",
    role: "精神科・児童精神科外来医長 / 思春期科特任主任教授",
    comment: "笑顔と前向きさを大切に、広域のこころの医療を支えます。"
  },
  {
    category: "病院経営陣",
    name: "黒井 しば",
    role: "病院経営改革・病院運営委員会 委員長 / 児童精神科専門医",
    comment: "経営改革の司令塔として、支出管理と診療体制の両立を徹底します。"
  },
  {
    category: "病院経営陣",
    name: "蝶屋 はなび",
    role: "学校連携・行政連携委員長 / こどもとこころの相談最高顧問",
    comment: "学校現場から地域医療まで、行政との連携を実務レベルで前進させます。"
  },
  {
    category: "病院経営陣",
    name: "栞葉 るり",
    role: "新病院担当者 / 外科主任部長代理 / 小児外科・思春期科兼務",
    comment: "外科から小児科交代枠まで、現場に必要な役割を柔軟に担います。"
  },
  {
    category: "病院経営陣",
    name: "五十嵐 菜々",
    role: "診療科再編・日程等再編担当者 / 思春期科主任部長代理 / 小児外科主任部長代理",
    comment: "予定表に載らない医師を完全予約制で活かす再編を進め、外来の穴を埋めます。"
  },
  {
    category: "病院経営陣",
    name: "夜乃 くろむ",
    role: "医療サポート科相談室長 / 呼吸器内科 主任係長代理",
    comment: "水曜午後の内科1名枠や土曜午前の分院支援など、タフなマルチスキルで支えます。"
  },
  {
    category: "病院経営陣",
    name: "白砂 まどか",
    role: "医療サポート科カウンセラー兼相談室長 / 血管外科・血液内科・心臓外科主任部長",
    comment: "医療とこころの両面から、地域医療の支えとなる相談窓口を担います。"
  },
  {
    category: "病院経営陣",
    name: "浜川 百合子",
    role: "病院監査委員長 / 心療内科主任部長",
    comment: "厳しい監査視点と心療内科の知見で、ガバナンスと安心感の両立を目指します。"
  },

  {
    category: "内科・外科・整形外科",
    name: "猪股 隆",
    role: "外科主任部長",
    comment: "予約制と通常外来を両立しながら、手術と外来を安定して運営します。"
  },
  {
    category: "内科・外科・整形外科",
    name: "五島 健助",
    role: "消化器内科主任部長代理",
    comment: "へき地医療で培った経験を活かし、仲間との連携で患者さんを支えます。"
  },
  {
    category: "内科・外科・整形外科",
    name: "神楽坂 倫太郎",
    role: "主任係長代理（消化器内科）",
    comment: "月曜午後の内科交代枠も含め、内視鏡を中心にスピード感ある対応を行います。"
  },
  {
    category: "内科・外科・整形外科",
    name: "高本 めぐみ",
    role: "循環器内科主任部長",
    comment: "丁寧な循環器診療と、集中配置日における広域患者対応を進めます。"
  },
  {
    category: "内科・外科・整形外科",
    name: "澤田 咲",
    role: "神経内科（脳神経内科・外科担当）主任部長",
    comment: "脳神経専門予約枠を担い、急変時にはERと素早く連携します。"
  },
  {
    category: "内科・外科・整形外科",
    name: "辻元 朝子",
    role: "整形外科主任係長",
    comment: "火・木午後の予約枠でも、骨折や外傷をしっかり支えます。"
  },
  {
    category: "内科・外科・整形外科",
    name: "松前 春香",
    role: "内科・消化器内科 主任係長代理",
    comment: "火曜午後の内科1名体制を含め、消化器診療を安定運用します。"
  },
  {
    category: "内科・外科・整形外科",
    name: "早坂 昇",
    role: "内科 医員",
    comment: "木曜午後、日曜終日、分院日曜午前まで、内科の底力で支えます。"
  },
  {
    category: "内科・外科・整形外科",
    name: "高木 裕樹",
    role: "内科 医員",
    comment: "水曜午後の内科交代枠も含め、急患を断らない姿勢で対応します。"
  },
  {
    category: "内科・外科・整形外科",
    name: "原 守",
    role: "遺伝カウンセリング科・緩和ケア科 予約担当医（外科 / 小児外科サポート兼務）",
    comment: "完全予約制移行後の予約整理を正確に行い、専門外来を支えます。"
  },

  {
    category: "小児科・周産期",
    name: "小々波 いるか",
    role: "思春期科主任係長 / 小児科全般主任係長代理",
    comment: "日曜午前と土曜小児科枠を担当し、子どもたちの笑顔を守ります。"
  },
  {
    category: "小児科・周産期",
    name: "不破 拓海",
    role: "小児糖尿病・内分泌・新生児科新生児発達科主任部長",
    comment: "火曜午後の完全予約枠で、専門性の高い小児医療を提供します。"
  },
  {
    category: "小児科・周産期",
    name: "星川 輝",
    role: "小児科全般主任係長",
    comment: "水曜午後の小児科1名体制も、補助体制と連携して乗り切ります。"
  },
  {
    category: "小児科・周産期",
    name: "千凛 あゆむ",
    role: "本館・別館小児科最高顧問",
    comment: "分院派遣も含めて、地域の小児医療を安定して支えます。"
  },
  {
    category: "小児科・周産期",
    name: "角巻 わため",
    role: "医員（小児神経科担当医、児童精神科研修中）",
    comment: "小児神経、児童精神、産婦人科支援まで幅広く動きます。"
  },
  {
    category: "小児科・周産期",
    name: "一ノ瀬 うるは",
    role: "小児科兼児童精神科・ラベンダー外来専任研修医",
    comment: "小児科交代枠にも入り、現場で成長しながら地域医療を支えます。"
  },

  {
    category: "救急科",
    name: "五条 蓮",
    role: "救急科主任部長代理（AI手術担当医）",
    comment: "AI手術とERの連携基盤づくりを進め、救急医療の幅を広げます。"
  },
  {
    category: "救急科",
    name: "一橋 太郎",
    role: "救急科主任部長代理 兼 総合診療科主任係長",
    comment: "外来から回ってくる急患も含め、無駄のない救急導線を担います。"
  },
  {
    category: "救急科",
    name: "星川 サラ",
    role: "救急科主任部長代理",
    comment: "雪国ERの急変対応を24時間体制で支えます。"
  },
  {
    category: "救急科",
    name: "神崎 徹",
    role: "別館救急科（ER）主任係長代理",
    comment: "冬季のER負荷にも即応し、当直現場を支えます。"
  },
  {
    category: "救急科",
    name: "前澤 優作",
    role: "医員（小児救急先行医）",
    comment: "小児救急の防壁として、子どもの急変対応に力を注ぎます。"
  },
  {
    category: "救急科",
    name: "茨城 美紅",
    role: "医員（山岳救助担当医）",
    comment: "冬山・山岳救助の現場でも迅速なトリアージを行います。"
  },

  {
    category: "産婦人科",
    name: "水野 遥",
    role: "産婦人科主任係長",
    comment: "毎日の外来とお産を笑顔で支える安定役です。"
  },
  {
    category: "産婦人科",
    name: "赤羽 葉雪",
    role: "医員（産婦人科カウンセリング担当）",
    comment: "妊婦さんやご家族の不安に寄り添い、心の支えとなります。"
  },
  {
    category: "産婦人科",
    name: "赤羽 祐司",
    role: "医員",
    comment: "24時間体制のお産ラインを支える一員として現場に立ちます。"
  },
  {
    category: "産婦人科",
    name: "雲母 たまこ",
    role: "医員（産婦人科研修医、その他臨床）",
    comment: "週末のお産ラインでもスクラムを組んで支えます。"
  },
  {
    category: "産婦人科",
    name: "菊田 真理恵",
    role: "産婦人科 日中外来特任主任部長",
    comment: "日勤帯の外来を支え、若手医師の育成にも力を入れます。"
  },

  {
    category: "精神医学・児童精神科・心療内科",
    name: "夢咲 ネム",
    role: "精神科主任部長",
    comment: "睡眠医学の知見も活かし、予約制外来で丁寧な診療を行います。"
  },
  {
    category: "精神医学・児童精神科・心療内科",
    name: "雪村 双葉",
    role: "児童精神科主任部長",
    comment: "日曜の完全予約枠でも、家族の不安に丁寧に寄り添います。"
  },
  {
    category: "精神医学・児童精神科・心療内科",
    name: "中村 里子",
    role: "こころの相談窓口『ふらの・ハートポート』専任外来医長代理",
    comment: "医師・心理の両面から、迷いを抱える患者さんを支えます。"
  },
  {
    category: "精神医学・児童精神科・心療内科",
    name: "竹田 康",
    role: "思春期科・こころの専門医（児童精神科主任部長代理兼務）",
    comment: "こころの専門医として、夜間も含め安心できる支えを目指します。"
  },
  {
    category: "精神医学・児童精神科・心療内科",
    name: "小森 明二",
    role: "精神科・児童精神科医員 / 泌尿器科主任部長",
    comment: "児童精神から泌尿器まで横断的に支え、週末の体制も守ります。"
  },
  {
    category: "精神医学・児童精神科・心療内科",
    name: "天宮 こころ",
    role: "児童精神科主任教授（特任）",
    comment: "子どもたちのこころとからだの両面を守る連携医療を進めます。"
  },
  {
    category: "精神医学・児童精神科・心療内科",
    name: "葉加瀬 冬雪",
    role: "専任心理士 兼 広域学校連携スクールカウンセラー",
    comment: "学校現場のSOSを見逃さず、外来と地域をつなぎます。"
  },
  {
    category: "精神医学・児童精神科・心療内科",
    name: "アンジュ・カトリーナ",
    role: "別館児童精神科 専任主任心理士",
    comment: "傾聴を大切にし、こころの迷いに丁寧に寄り添います。"
  },
  {
    category: "精神医学・児童精神科・心療内科",
    name: "大久保 希美",
    role: "別館精神科 専任心理士",
    comment: "大人のストレスや疲弊を静かに受け止める支えになります。"
  },
  {
    category: "精神医学・児童精神科・心療内科",
    name: "風間 トオル",
    role: "心療内科 主任部長代理",
    comment: "火・木午後の予約枠から土曜集中配置まで、ストレス関連症状を支えます。"
  },

  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "山田 義治",
    role: "皮膚科主任部長代理",
    comment: "皮膚科外来を強化し、総合診療との橋渡し役も担います。"
  },
  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "福山 鉄人",
    role: "眼科主任部長代理",
    comment: "眼科の外来体制を補強し、安定した診療につなげます。"
  },
  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "樋口 楓",
    role: "耳鼻咽喉科主任部長代理",
    comment: "耳鼻科外来を支えながら、他部門サポートにも柔軟に対応します。"
  },

  {
    category: "緩和ケア・遺伝カウンセリング",
    name: "長野 信二",
    role: "緩和ケア主任部長",
    comment: "患者さんとご家族の痛みや不安に寄り添う緩和ケアを行います。"
  },
  {
    category: "緩和ケア・遺伝カウンセリング",
    name: "田沼 譲",
    role: "遺伝カウンセリング主任部長 / 喫煙外来主任部長",
    comment: "専門相談をわかりやすく整理し、家族の不安軽減に努めます。"
  },
  {
    category: "緩和ケア・遺伝カウンセリング",
    name: "星野 彩乃",
    role: "遺伝カウンセリング・緩和ケア担当医",
    comment: "遺伝相談と緩和ケアをまたぎ、地域医療を丁寧に支えます。"
  },

  {
    category: "総合診療科",
    name: "星川 郁男",
    role: "総合診療科最高顧問",
    comment: "総合診療の安定運用を支え、広く地域医療に貢献します。"
  },
  {
    category: "総合診療科",
    name: "藤原 のりこ",
    role: "総合診療科 医員",
    comment: "日曜の縮小外来サポートまで、地域医療を地道に支えます。"
  },
  {
    category: "総合診療科",
    name: "七瀬 すず菜",
    role: "総合診療科兼ラベンダー外来・救急トリアージ支援室（医療コーディネーター）",
    comment: "窓口の混雑を減らし、医療・心理・事務の連携で受診をスムーズにします。"
  },

  {
    category: "泌尿器科",
    name: "北里 りさ",
    role: "泌尿器科 主任係長",
    comment: "受診しづらさを減らし、安心して相談できる体制づくりを進めます。"
  },

  {
    category: "トミカ分院",
    name: "加地 秀樹",
    role: "トミカ分院長",
    comment: "分院を地域の要として再構築し、自立的な運営を目指します。"
  },
  {
    category: "トミカ分院",
    name: "奥野 宗一郎",
    role: "循環器内科・消化器内科 専門医（分院長代理）",
    comment: "専門外来と新設救急科支援を、データと規律を重視して行います。"
  },
  {
    category: "トミカ分院",
    name: "田崎 恵",
    role: "産婦人科主任部長代理",
    comment: "分院の平日外来から本院連携まで、切れ目なく支えます。"
  },
  {
    category: "トミカ分院",
    name: "江田 雄二",
    role: "総合診療科（小児科担当・新設救急科主任部長）",
    comment: "分院総合診療の集約と新設救急科の立ち上げを担います。"
  },
  {
    category: "トミカ分院",
    name: "山崎 育三",
    role: "精神科・児童精神科部長・係長代理",
    comment: "平日の分院で、患者さんとご家族の心の負担に寄り添います。"
  },
  {
    category: "トミカ分院",
    name: "家長 むぎ",
    role: "小児科・児童精神科主任部長代理 兼 副分院長",
    comment: "分院の小児・こころの医療を軸に、地域の子どもたちを支えます。"
  },
  {
    category: "トミカ分院",
    name: "木村 彩乃",
    role: "産婦人科外来医長（新設救急科主任係長）",
    comment: "新設救急科と母子医療の橋渡しを担います。"
  },
  {
    category: "トミカ分院",
    name: "花芽 すみれ",
    role: "トミカ分院救急科主任部長（指導医）",
    comment: "分院救急科の要として、小児救急から学校精神まで全力を尽くします。"
  }
];

const departmentData = {
  naika: {
    title: "内科",
    summary: "発熱、咳、腹痛、生活習慣病、一般内科症状に幅広く対応します。",
    reception: "原則予約なし可。月〜木午後は1名体制です。",
    points: [
      "月〜木午後も原則受診可能",
      "混雑時は翌日案内となる場合あり",
      "専門相談は予約推奨"
    ],
    doctors: ["鏑木 ろこ", "高本 めぐみ", "五島 健助", "神楽坂 倫太郎", "松前 春香", "早坂 昇", "高木 裕樹"]
  },
  shonika: {
    title: "小児科",
    summary: "お子さまの一般診療、継続診療、学校や発達に関する相談に対応します。",
    reception: "原則予約なし可。月〜木午後は1名体制です。",
    points: [
      "午後は1名体制",
      "専門外来は予約制",
      "土曜は比較的受診しやすい体制"
    ],
    doctors: ["紡木 こかげ", "蝸堂 みかる", "小々波 いるか", "不破 拓海", "星川 輝", "千凛 あゆむ", "角巻 わため", "一ノ瀬 うるは"]
  },
  seishin: {
    title: "精神科・児童精神科・心療内科",
    summary: "こころの不調、睡眠、ストレス、児童思春期の相談に対応します。",
    reception: "原則予約制です。",
    points: [
      "初診・継続とも予約推奨",
      "児童思春期の相談にも対応",
      "日曜は一部予約枠"
    ],
    doctors: ["周央 サンゴ", "夢咲 ネム", "雪村 双葉", "中村 里子", "竹田 康", "小森 明二", "天宮 こころ", "葉加瀬 冬雪", "アンジュ・カトリーナ", "大久保 希美", "風間 トオル", "白砂 まどか", "黒井 しば", "蝶屋 はなび"]
  },
  sango: {
    title: "産婦人科",
    summary: "妊娠・出産・婦人科相談・周産期支援に対応します。",
    reception: "原則予約制です。",
    points: [
      "平日午前と金・土が比較的安定",
      "週末は週替わり体制あり",
      "相談・継続受診は予約推奨"
    ],
    doctors: ["四宮 春樹", "水野 遥", "赤羽 葉雪", "赤羽 祐司", "雲母 たまこ", "菊田 真理恵", "田崎 恵", "木村 彩乃"]
  },
  seikei: {
    title: "外科・整形外科",
    summary: "外傷、骨折、術後フォロー、一般外科の相談に対応します。",
    reception: "月〜木午後は原則予約制です。",
    points: [
      "金・土は比較的受診しやすい体制",
      "急患は救急科と連携",
      "整形外科は曜日枠中心"
    ],
    doctors: ["猪股 隆", "辻元 朝子", "栞葉 るり", "原 守"]
  },
  kyukyu: {
    title: "救急科",
    summary: "救急搬送、急変対応、時間外の緊急診療に対応します。",
    reception: "24時間体制を基本に、重症度に応じて優先対応します。",
    points: [
      "救急搬送・急変対応を優先",
      "小児救急や山岳救助支援にも対応",
      "外来各科と連携し重症患者を受け入れ"
    ],
    doctors: ["藍沢 耕作", "進藤 一生", "五条 蓮", "一橋 太郎", "星川 サラ", "神崎 徹", "前澤 優作", "茨城 美紅", "花芽 すみれ", "江田 雄二"]
  },
  hifu: {
    title: "皮膚科・眼科・耳鼻咽喉科",
    summary: "皮膚、目、耳・鼻・のどの症状に対応します。",
    reception: "平日午前または予約枠中心です。",
    points: [
      "午後は予約枠中心",
      "金・土は比較的受診しやすい",
      "日曜は原則休診"
    ],
    doctors: ["大泉 洋", "山田 義治", "福山 鉄人", "樋口 楓"]
  },
  sogo: {
    title: "総合診療科",
    summary: "どの診療科に行くべきか迷う方の相談窓口です。",
    reception: "曜日により体制が異なります。",
    points: [
      "初診相談の入口として対応",
      "複数症状の相談にも対応",
      "日曜縮小外来も支援"
    ],
    doctors: ["渡邊 トドック", "星川 郁男", "藤原 のりこ", "七瀬 すず菜", "一橋 太郎"]
  },
  kanwa: {
    title: "緩和ケア・遺伝カウンセリング",
    summary: "痛みや不安の緩和、遺伝相談、専門カウンセリングに対応します。",
    reception: "原則予約制です。",
    points: [
      "専門相談は事前予約制",
      "ご家族の相談にも対応",
      "他科と連携し継続支援"
    ],
    doctors: ["長野 信二", "田沼 譲", "星野 彩乃", "原 守"]
  },
  hinyoki: {
    title: "泌尿器科",
    summary: "排尿の悩みや泌尿器領域の症状に対応します。",
    reception: "曜日・時間帯により案内が異なります。",
    points: [
      "相談しづらい症状にも丁寧に対応",
      "必要時は他科と連携",
      "来院前確認がおすすめ"
    ],
    doctors: ["北里 りさ", "小森 明二"]
  },
  tomica: {
    title: "トミカにじいろクリニック",
    summary: "平日中心の分院診療と新設救急科を担います。",
    reception: "平日中心。土曜一部、日曜午前のみ。",
    points: [
      "平日日勤＋一部夜間",
      "土曜は一部予約診療",
      "日曜は午前のみ"
    ],
    doctors: ["加地 秀樹", "奥野 宗一郎", "田崎 恵", "江田 雄二", "山崎 育三", "家長 むぎ", "木村 彩乃", "花芽 すみれ"]
  }
};

function initials(name) {
  return name.replace(/\s/g, "").slice(0, 2);
}

function renderTodayDate() {
  const target = document.getElementById("today-title");
  if (!target) return;
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  target.textContent = `本日の休診・代診（${y}年${m}月${d}日）`;
}

function renderDoctors() {
  const tableBody = document.getElementById("doctorTableBody");
  const cards = document.getElementById("doctorCards");
  const searchInput = document.getElementById("doctorSearch");
  const categorySelect = document.getElementById("doctorCategory");
  if (!tableBody || !cards || !searchInput || !categorySelect) return;

  [...new Set(doctorData.map(d => d.category))].forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });

  function draw() {
    const q = searchInput.value.trim().toLowerCase();
    const cat = categorySelect.value;
    const filtered = doctorData.filter(d => {
      const t = `${d.category} ${d.name} ${d.role} ${d.comment}`.toLowerCase();
      return (!q || t.includes(q)) && (!cat || d.category === cat);
    });

    tableBody.innerHTML = filtered.map(d => `
      <tr>
        <td>${d.category}</td>
        <td>${d.name}</td>
        <td>${d.role}</td>
      </tr>
    `).join("");

    cards.innerHTML = filtered.map(d => `
      <article class="doctor-card">
        <p class="doctor-tag">${d.category}</p>
        <div class="doctor-top">
          <div class="doctor-photo">${initials(d.name)}</div>
          <div>
            <h3>${d.name}</h3>
            <p class="doctor-role">${d.role}</p>
          </div>
        </div>
        <p class="doctor-comment">「${d.comment}」</p>
      </article>
    `).join("");
  }

  searchInput.addEventListener("input", draw);
  categorySelect.addEventListener("change", draw);
  draw();
}

function renderDepartment() {
  const title = document.getElementById("departmentTitle");
  const summary = document.getElementById("departmentSummary");
  const reception = document.getElementById("departmentReception");
  const points = document.getElementById("departmentPoints");
  const doctorList = document.getElementById("departmentDoctors");
  if (!title || !summary || !reception || !points || !doctorList) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "naika";
  const dept = departmentData[id] || departmentData.naika;

  title.textContent = dept.title;
  summary.textContent = dept.summary;
  reception.textContent = dept.reception;
  points.innerHTML = dept.points.map(p => `<li>${p}</li>`).join("");

  const related = doctorData.filter(d => dept.doctors.includes(d.name));
  doctorList.innerHTML = related.map(d => `
    <article class="doctor-card">
      <div class="doctor-top">
        <div class="doctor-photo">${initials(d.name)}</div>
        <div>
          <h3>${d.name}</h3>
          <p class="doctor-role">${d.role}</p>
        </div>
      </div>
      <p class="doctor-comment">「${d.comment}」</p>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderTodayDate();
  renderDoctors();
  renderDepartment();
});
