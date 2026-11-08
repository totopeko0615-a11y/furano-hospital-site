const doctorData = [
  {
    category: "病院経営陣",
    name: "紡木 こかげ",
    role: "病院長 / 思春期科・小児科外来医長",
    comment: "病院全体の運営と小児・思春期診療の両面を担います。"
  },
  {
    category: "病院経営陣",
    name: "四宮 春樹",
    role: "副病院長 / 産婦人科主任部長",
    comment: "病院運営と産婦人科診療の両面から地域医療を支えます。"
  },
  {
    category: "病院経営陣",
    name: "鏑木 ろこ",
    role: "副病院長 / 内科主任部長（循環器内科） / 喫煙外来担当医",
    comment: "内科・循環器を中心に病院運営と外来体制を支えます。"
  },
  {
    category: "病院経営陣",
    name: "藍沢 耕作",
    role: "病院長代理 / 救急科主任部長",
    comment: "24時間の救急対応を支える中心的な役割を担います。"
  },
  {
    category: "病院経営陣",
    name: "大泉 洋",
    role: "病院長代理 / 耳鼻咽喉科主任部長 / 喫煙外来担当医",
    comment: "耳鼻咽喉科と禁煙支援、病院運営を横断して支えます。"
  },
  {
    category: "病院経営陣",
    name: "進藤 一生",
    role: "副病院長代理 / 救急科主任係長",
    comment: "救急科の現場と病院運営の両方を担います。"
  },
  {
    category: "病院経営陣",
    name: "石神 のぞみ",
    role: "副病院長代理 / 思春期科最高統括責任者 / 小児科全般主任部長",
    comment: "小児・思春期医療の統括と病院運営を担います。"
  },
  {
    category: "病院経営陣",
    name: "蝸堂 みかる",
    role: "最高顧問 / 別館臨床最高執行責任者（COO） / 小児科全般主任部長",
    comment: "別館体制と小児医療の中核を担います。"
  },
  {
    category: "病院経営陣",
    name: "先斗 寧",
    role: "新病院担当 / 病院改革委員 / 思春期科主任部長 / 小児外科主任部長 / 児童精神科・精神科主任係長",
    comment: "新病院整備と診療科改革、思春期・小児外科・精神領域を担います。"
  },
  {
    category: "病院経営陣",
    name: "渡邊 トドック",
    role: "外来医長（名誉病院長） / 総合診療科主任部長",
    comment: "総合診療の入口として幅広い相談に対応します。"
  },
  {
    category: "病院経営陣",
    name: "周央 サンゴ",
    role: "精神科・児童精神科外来医長（病院意見係） / 思春期科特任主任教授 / 児童精神科特任主任教授",
    comment: "思春期と児童精神領域の連携を担います。"
  },
  {
    category: "病院経営陣",
    name: "黒井 しば",
    role: "病院経営改革・病院運営委員会 委員長 / 小児科全般主任部長補佐 / 児童精神科専門医",
    comment: "病院経営改革と小児・児童精神領域を支えます。"
  },
  {
    category: "病院経営陣",
    name: "蝶屋 はなび",
    role: "学校連携・行政連携委員長 / 小児科・周産期・慢性期マルチタスク統括特任部長 / こどもとこころの相談最高顧問",
    comment: "学校・行政との連携と子ども支援体制を担います。"
  },
  {
    category: "病院経営陣",
    name: "栞葉 るり",
    role: "新病院担当者 / 外科主任部長代理 / 思春期科・小児外科・小児神経担当",
    comment: "外科と小児領域をまたぎながら新病院体制にも関わります。"
  },
  {
    category: "病院経営陣",
    name: "五十嵐 菜々",
    role: "診療科再編・日程等再編担当者 / 思春期科主任部長代理 / 小児外科主任部長代理",
    comment: "診療科再編と小児・思春期体制の整備を担います。"
  },
  {
    category: "病院経営陣",
    name: "夜乃 くろむ",
    role: "医療サポート科相談室長 / 呼吸器内科主任係長代理 / 総合診療科・整形外科災害連携官",
    comment: "相談支援と内科・総合診療の連携を担います。"
  },
  {
    category: "病院経営陣",
    name: "白砂 まどか",
    role: "医療サポート科カウンセラー兼相談室長 / 血管外科・血液内科・心臓外科主任部長 / ラベンダー外来統括責任者",
    comment: "相談支援と専門外科外来の両面を担います。"
  },
  {
    category: "病院経営陣",
    name: "浜川 百合子",
    role: "病院監査委員長 / 心療内科主任部長",
    comment: "病院監査と心療内科診療を担います。"
  },

  {
    category: "内科・外科・整形外科",
    name: "猪股 隆",
    role: "外科主任部長",
    comment: "一般外科診療の中核を担います。"
  },
  {
    category: "内科・外科・整形外科",
    name: "五島 健助",
    role: "消化器内科主任部長代理",
    comment: "消化器内科を中心に内科診療を支えます。"
  },
  {
    category: "内科・外科・整形外科",
    name: "神楽坂 倫太郎",
    role: "主任係長代理（消化器内科）",
    comment: "消化器内科の診療と外来体制を担います。"
  },
  {
    category: "内科・外科・整形外科",
    name: "高本 めぐみ",
    role: "循環器内科主任部長",
    comment: "循環器内科の専門診療を担います。"
  },
  {
    category: "内科・外科・整形外科",
    name: "澤田 咲",
    role: "神経内科（脳神経内科・外科担当）主任部長",
    comment: "脳神経領域の専門診療を担当します。"
  },
  {
    category: "内科・外科・整形外科",
    name: "辻元 朝子",
    role: "整形外科主任係長（常勤医）",
    comment: "整形外科外来と運動器診療を担います。"
  },
  {
    category: "内科・外科・整形外科",
    name: "松前 春香",
    role: "内科・消化器内科主任係長代理 / 15倍速内視鏡室監査官",
    comment: "内科・消化器内科診療と内視鏡体制を支えます。"
  },
  {
    category: "内科・外科・整形外科",
    name: "早坂 昇",
    role: "内科医員",
    comment: "一般内科診療を中心に担当します。"
  },
  {
    category: "内科・外科・整形外科",
    name: "高木 裕樹",
    role: "内科医員",
    comment: "内科外来と総合的な初期対応を担います。"
  },
  {
    category: "内科・外科・整形外科",
    name: "原 守",
    role: "遺伝カウンセリング科・緩和ケア科予約担当医 / 外科サポート担当医 / 小児外科サポート担当医 / 総合診療科サポート担当医",
    comment: "予約整理と複数診療科のサポートを担います。"
  },

  {
    category: "小児科・思春期科・周産期",
    name: "小々波 いるか",
    role: "思春期科主任係長 / 小児科全般主任係長代理",
    comment: "小児一般と思春期支援の橋渡しを担います。"
  },
  {
    category: "小児科・思春期科・周産期",
    name: "不破 拓海",
    role: "小児糖尿病・内分泌・新生児科・新生児発達科主任部長",
    comment: "小児専門外来と発達支援を担います。"
  },
  {
    category: "小児科・思春期科・周産期",
    name: "星川 輝",
    role: "小児科全般主任係長",
    comment: "小児一般診療の中心を担います。"
  },
  {
    category: "小児科・思春期科・周産期",
    name: "千凛 あゆむ",
    role: "本館・別館小児科最高顧問 / 院内総選挙管理委員長",
    comment: "本館・別館をまたぐ小児医療体制を支えます。"
  },
  {
    category: "小児科・思春期科・周産期",
    name: "角巻 わため",
    role: "医員 / 小児神経科担当医 / 児童精神科研修中 / フォローアップ外来担当 / リエゾン特別外来担当",
    comment: "小児神経とこころの支援外来を横断して担当します。"
  },
  {
    category: "小児科・思春期科・周産期",
    name: "水野 遥",
    role: "産婦人科主任係長",
    comment: "周産期を支える産婦人科診療を担当します。"
  },
  {
    category: "小児科・思春期科・周産期",
    name: "赤羽 葉雪",
    role: "医員 / 産婦人科カウンセリング担当",
    comment: "産婦人科診療と相談支援を担います。"
  },
  {
    category: "小児科・思春期科・周産期",
    name: "赤羽 祐司",
    role: "医員",
    comment: "産婦人科診療を担当します。"
  },
  {
    category: "小児科・思春期科・周産期",
    name: "雲母 たまこ",
    role: "医員 / 産婦人科研修医 / その他臨床",
    comment: "産婦人科を中心に臨床を担当します。"
  },
  {
    category: "小児科・思春期科・周産期",
    name: "菊田 真理恵",
    role: "産婦人科 日中外来特任主任部長",
    comment: "日中外来体制を中心に産婦人科診療を支えます。"
  },

  {
    category: "救急科",
    name: "五条 蓮",
    role: "救急科主任部長代理 / Ai手術担当医",
    comment: "救急診療とAi手術体制を担当します。"
  },
  {
    category: "救急科",
    name: "一橋 太郎",
    role: "救急科主任部長代理 / 総合診療科主任係長",
    comment: "救急と総合診療の連携を担います。"
  },
  {
    category: "救急科",
    name: "星川 サラ",
    role: "救急科主任部長代理（救急科専門医）",
    comment: "救急専門医として急変対応を担います。"
  },
  {
    category: "救急科",
    name: "神崎 徹",
    role: "別館救急科（ER）主任係長代理 / 特殊外科突撃当直医",
    comment: "別館ERと当直対応を担います。"
  },
  {
    category: "救急科",
    name: "前澤 優作",
    role: "医員 / 小児救急先行医",
    comment: "小児救急を中心に救急対応を担当します。"
  },
  {
    category: "救急科",
    name: "茨城 美紅",
    role: "医員 / 山岳救助担当医",
    comment: "特殊救助と救急対応を担当します。"
  },

  {
    category: "精神科・児童精神科・心理",
    name: "夢咲 ネム",
    role: "精神科主任部長",
    comment: "精神科診療の中心を担います。"
  },
  {
    category: "精神科・児童精神科・心理",
    name: "雪村 双葉",
    role: "児童精神科主任部長",
    comment: "児童精神科診療を担当します。"
  },
  {
    category: "精神科・児童精神科・心理",
    name: "中村 里子",
    role: "こころの相談窓口『ふらの・ハートポート』専任外来医長代理 / 心理カウンセラー・医師 / フォローアップ外来担当 / リエゾン特別外来担当",
    comment: "こころの相談と継続支援外来を担当します。"
  },
  {
    category: "精神科・児童精神科・心理",
    name: "竹田 康",
    role: "思春期科・こころの専門医 / 児童精神科主任部長代理",
    comment: "思春期と児童精神領域の専門診療を担います。"
  },
  {
    category: "精神科・児童精神科・心理",
    name: "小森 明二",
    role: "精神科・児童精神科医員 / 別館総合診療特任部長代理 / 泌尿器科主任部長",
    comment: "精神科・児童精神科と泌尿器科を兼務します。"
  },
  {
    category: "精神科・児童精神科・心理",
    name: "天宮 こころ",
    role: "児童精神科主任教授（特任） / 周産期・循環器内科連撃統括医",
    comment: "児童精神科と周産期・循環器連携を担います。"
  },
  {
    category: "精神科・児童精神科・心理",
    name: "葉加瀬 冬雪",
    role: "専任心理士 / 広域学校連携スクールカウンセラー / リエゾン特別外来担当",
    comment: "心理支援と学校連携を担当します。"
  },
  {
    category: "精神科・児童精神科・心理",
    name: "アンジュ・カトリーナ",
    role: "別館児童精神科 専任主任心理士",
    comment: "別館児童精神科の心理支援を担当します。"
  },
  {
    category: "精神科・児童精神科・心理",
    name: "大久保 希美",
    role: "別館精神科 専任心理士",
    comment: "別館精神科の心理支援を担当します。"
  },

  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "緋山 美帆子",
    role: "皮膚科主任部長（担当医）",
    comment: "皮膚科診療を担当します。"
  },
  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "山田 義治",
    role: "皮膚科主任部長代理（皮膚科専門医）",
    comment: "皮膚科専門医として診療を担当します。"
  },
  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "白石 恵",
    role: "眼科主任部長（眼科担当医）",
    comment: "眼科診療を担当します。"
  },
  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "福山 鉄人",
    role: "眼科主任部長代理（眼科専門医）",
    comment: "眼科専門医として診療を担当します。"
  },
  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "樋口 楓",
    role: "耳鼻咽喉科主任部長代理（耳鼻咽喉科専門医）",
    comment: "耳鼻咽喉科専門診療を担当します。"
  },

  {
    category: "緩和ケア・遺伝カウンセリング・喫煙外来",
    name: "長野 信二",
    role: "緩和ケア主任部長（消化器内科専門医）",
    comment: "緩和ケアを中心に専門的支援を担います。"
  },
  {
    category: "緩和ケア・遺伝カウンセリング・喫煙外来",
    name: "田沼 譲",
    role: "遺伝カウンセリング主任部長（小児専門医） / 喫煙外来主任部長 / 遺伝カウンセリング担当医 / 内科サポート担当医",
    comment: "遺伝カウンセリングと禁煙支援を担当します。"
  },
  {
    category: "緩和ケア・遺伝カウンセリング・喫煙外来",
    name: "星野 彩乃",
    role: "遺伝カウンセリング（産婦人科） / 緩和ケア担当医（小児血液・小児神経・呼吸器内科）",
    comment: "遺伝相談と緩和ケア支援を担当します。"
  },

  {
    category: "総合診療科・外来支援",
    name: "星川 郁男",
    role: "総合診療科最高顧問 / 臨床研修特任指導教授",
    comment: "総合診療と臨床研修体制を支えます。"
  },
  {
    category: "総合診療科・外来支援",
    name: "藤原 のりこ",
    role: "総合診療科医員",
    comment: "総合診療外来を担当します。"
  },
  {
    category: "総合診療科・外来支援",
    name: "七瀬 すず菜",
    role: "総合診療科兼ラベンダー外来・救急トリアージ支援室 / 医療コーディネーター兼公認心理・医療事務統括補佐",
    comment: "総合診療とトリアージ支援を担当します。"
  },

  {
    category: "泌尿器科・心療内科",
    name: "北里 りさ",
    role: "泌尿器科主任係長 / 『お悩みゼロ・安心アクセス』特任統括官",
    comment: "泌尿器科外来と相談しやすい受診体制づくりを担います。"
  },
  {
    category: "泌尿器科・心療内科",
    name: "風間 トオル",
    role: "心療内科主任部長代理",
    comment: "心療内科診療を担当します。"
  },

  {
    category: "出張医・連携医師",
    name: "高畑 崇",
    role: "旭川医科大学病院 小児科教授 / 出張医",
    comment: "小児領域の連携診療を担当します。"
  },
  {
    category: "出張医・連携医師",
    name: "井坂 信彦",
    role: "北海道大学付属病院（眼科） / 出張医",
    comment: "眼科領域の連携診療を担当します。"
  },
  {
    category: "出張医・連携医師",
    name: "斉木 直樹",
    role: "北海道大学付属病院名誉教授 / 出張医",
    comment: "専門領域の連携診療を担当します。"
  },

  {
    category: "トミカ出向",
    name: "加地 秀樹",
    role: "連携医師",
    comment: "トミカ分院との連携診療を担当します。"
  },
  {
    category: "トミカ出向",
    name: "奥野 宗一郎",
    role: "連携医師",
    comment: "トミカ分院との専門連携を担当します。"
  },
  {
    category: "トミカ出向",
    name: "田崎 恵",
    role: "産婦人科主任部長代理",
    comment: "トミカ分院で産婦人科連携を担当します。"
  },
  {
    category: "トミカ出向",
    name: "江田 雄二",
    role: "総合診療科（小児科担当）",
    comment: "総合診療と小児対応を担当します。"
  },
  {
    category: "トミカ出向",
    name: "山崎 育三",
    role: "精神科・児童精神科部長・係長代理",
    comment: "精神科・児童精神科の連携診療を担います。"
  },
  {
    category: "トミカ出向",
    name: "家長 むぎ",
    role: "小児科・児童精神科主任部長代理 / こどもとこころの相談最高統括指導医",
    comment: "小児と児童精神の連携診療を担当します。"
  },
  {
    category: "トミカ出向",
    name: "木村 彩乃",
    role: "産婦人科外来医長",
    comment: "産婦人科外来の連携診療を担当します。"
  },
  {
    category: "トミカ出向",
    name: "花芽 すみれ",
    role: "トミカ分院救急科主任部長",
    comment: "分院救急体制の中核を担います。"
  },

  {
    category: "研修医",
    name: "一ノ瀬 うるは",
    role: "小児科兼児童精神科・ラベンダー外来専任研修医",
    comment: "小児科・児童精神科・外来支援を学びながら診療に参加します。"
  },

  {
    category: "旭川医科大学病院に出向",
    name: "空澄 セナ",
    role: "児童精神科講師・副診療科長・病棟医長",
    comment: "児童精神科領域での出向先業務を担います。"
  },
  {
    category: "旭川医科大学病院に出向",
    name: "目黒 連",
    role: "助教・外来医長",
    comment: "専門外来体制の強化に関わります。"
  }
];

const departmentData = {
  naika: {
    title: "内科",
    summary: "一般内科、循環器内科、消化器内科、呼吸器内科など、日常的な体調不良から慢性疾患、専門性の高い内科診療まで幅広く対応します。",
    reception: "原則予約なしで受診できます。ただし月曜日〜木曜日の午後は1名体制で、救急性の高い患者さまを優先します。専門内科は予約制となる場合があります。",
    points: [
      "月〜木午後は△ 1名体制、原則予約なし可",
      "循環器・消化器・呼吸器など専門内科は予約制となる場合があります",
      "金曜・土曜は通常運用です",
      "慢性疾患の継続管理や総合診療との連携にも対応します"
    ],
    doctors: [
      "鏑木 ろこ",
      "五島 健助",
      "神楽坂 倫太郎",
      "高本 めぐみ",
      "松前 春香",
      "夜乃 くろむ",
      "早坂 昇",
      "高木 裕樹",
      "白砂 まどか"
    ]
  },

  shonika: {
    title: "小児科・思春期科",
    summary: "一般小児医療に加え、思春期支援、発達支援、小児神経、小児内分泌、新生児発達、学校生活や家族支援まで見据えた体制を整えています。",
    reception: "小児科一般は原則予約なしで受診できます。ただし月曜日〜木曜日の午後は1名体制です。小児専門外来は原則予約制です。",
    points: [
      "小児科一般は月〜木午後△ 1名体制",
      "小児専門外来は原則予約制です",
      "思春期科、児童精神科、周産期部門と連携します",
      "発達・学校生活・こころの相談まで含めて支援します"
    ],
    doctors: [
      "先斗 寧",
      "五十嵐 菜々",
      "石神 のぞみ",
      "小々波 いるか",
      "不破 拓海",
      "星川 輝",
      "紡木 こかげ",
      "黒井 しば",
      "蝸堂 みかる",
      "千凛 あゆむ",
      "角巻 わため",
      "栞葉 るり",
      "蝶屋 はなび",
      "一ノ瀬 うるは"
    ]
  },

  nou: {
    title: "脳神経内科・外科",
    summary: "頭痛、しびれ、神経症状、脳神経領域の継続診療や専門評価に対応します。",
    reception: "午後は原則予約制です。救急性が高い場合は救急科と連携して対応します。",
    points: [
      "月〜木午後は予 予約制",
      "神経症状や脳神経領域の専門診療に対応",
      "必要時は救急科・総合診療科と連携",
      "継続診療や精密評価にも対応します"
    ],
    doctors: [
      "澤田 咲"
    ]
  },

  seikei: {
    title: "一般外科・整形外科",
    summary: "外科的処置、術後フォロー、外傷、整形外科的評価などに幅広く対応します。",
    reception: "月曜日〜木曜日の午後は原則予約制です。急変や外傷時は救急科と連携して受け入れます。",
    points: [
      "月〜木午後は予 予約制",
      "金曜・土曜は通常運用です",
      "外傷や急患では救急科と連携します",
      "小児外科サポートや周辺診療科との連携があります"
    ],
    doctors: [
      "猪股 隆",
      "栞葉 るり",
      "進藤 一生",
      "辻元 朝子",
      "不破 拓海",
      "原 守"
    ]
  },

  sango: {
    title: "産婦人科",
    summary: "妊娠・出産・産後ケアに加え、婦人科疾患や月経に関する悩み、女性のライフステージに応じた相談に対応します。",
    reception: "月曜日〜木曜日の午後は原則予約制です。金曜・土曜は通常運用、日曜は縮小運用です。",
    points: [
      "妊娠・出産・産後まで一貫支援します",
      "月〜木午後は予 予約制です",
      "小児科・思春期科・心理支援部門と連携します",
      "日曜は週替わりの縮小運用です"
    ],
    doctors: [
      "四宮 春樹",
      "水野 遥",
      "赤羽 葉雪",
      "赤羽 祐司",
      "雲母 たまこ",
      "菊田 真理恵",
      "木村 彩乃",
      "田崎 恵",
      "角巻 わため",
      "先斗 寧"
    ]
  },

  seishin: {
    title: "精神科・児童精神科・心療内科",
    summary: "不眠、不安、気分の落ち込み、ストレス関連症状、発達や対人関係の悩み、不登校、思春期特有のこころの問題などに対応します。",
    reception: "月曜日〜木曜日の午後は原則予約制です。専門医による診察を希望される方は事前予約または受付への相談をおすすめします。",
    points: [
      "精神科と児童精神科、心療内科の連携体制があります",
      "月〜木午後は予 予約制です",
      "相談窓口、心理士、学校連携体制を整えています",
      "土曜は集中配置日として手厚い体制です"
    ],
    doctors: [
      "夢咲 ネム",
      "周央 サンゴ",
      "先斗 寧",
      "雪村 双葉",
      "中村 里子",
      "竹田 康",
      "小森 明二",
      "天宮 こころ",
      "葉加瀬 冬雪",
      "アンジュ・カトリーナ",
      "大久保 希美",
      "浜川 百合子",
      "風間 トオル",
      "黒井 しば",
      "蝶屋 はなび"
    ]
  },

  kyukyu: {
    title: "救急科",
    summary: "急な発熱、外傷、意識障害、呼吸苦など、緊急対応が必要な症状に幅広く対応します。成人救急に加え、小児救急にも対応します。",
    reception: "24時間対応です。夜間帯は救急科と各科当番医が中心となって対応します。",
    points: [
      "成人・小児の救急初期対応に対応",
      "24時間体制で受け入れます",
      "外科・整形外科・小児科・精神科などと連携します",
      "災害時や特殊対応も見据えた体制を整えています"
    ],
    doctors: [
      "藍沢 耕作",
      "進藤 一生",
      "五条 蓮",
      "一橋 太郎",
      "星川 サラ",
      "神崎 徹",
      "前澤 優作",
      "茨城 美紅",
      "花芽 すみれ",
      "江田 雄二"
    ]
  },

  hifu: {
    title: "皮膚科・眼科・耳鼻咽喉科",
    summary: "皮膚、目、耳・鼻・のどに関する幅広い症状に対応します。身近な症状から専門的な評価までご相談いただけます。",
    reception: "月曜日〜木曜日の午後は原則予約制です。日曜日は休診です。",
    points: [
      "皮膚科、眼科、耳鼻咽喉科の連携案内が可能です",
      "月〜木午後は予 予約制です",
      "日曜は休診です",
      "必要時は他科や連携医療機関につなぎます"
    ],
    doctors: [
      "緋山 美帆子",
      "山田 義治",
      "白石 恵",
      "福山 鉄人",
      "大泉 洋",
      "樋口 楓"
    ]
  },

  sogo: {
    title: "総合診療科",
    summary: "どの科を受診すればよいかわからない方、複数の症状がある方、身体の不調とこころの不調が重なっている方の最初の窓口です。",
    reception: "原則予約なしでも相談可能です。木曜日は終日1名体制、日曜日は縮小運用です。感染症疑いのある方は別館診察室で対応する場合があります。",
    points: [
      "最初の相談窓口として幅広く対応します",
      "木曜は終日△ 1名体制です",
      "日曜は縮小運用です",
      "必要に応じて適切な専門診療科へつなぎます"
    ],
    doctors: [
      "渡邊 トドック",
      "星川 郁男",
      "藤原 のりこ",
      "一橋 太郎",
      "夜乃 くろむ",
      "原 守",
      "高木 裕樹",
      "五島 健助",
      "七瀬 すず菜",
      "角巻 わため"
    ]
  },

  kanwa: {
    title: "緩和ケア・遺伝カウンセリング科",
    summary: "病気に伴う身体的・心理的負担をやわらげる支援と、遺伝に関する不安や疑問への専門的な相談対応を行います。",
    reception: "原則予約制です。専門相談は事前予約をお願いします。",
    points: [
      "身体的・心理的負担の軽減を支援します",
      "遺伝に関する不安や疑問に専門的に対応します",
      "患者さんご本人だけでなくご家族の相談にも対応します",
      "他科と連携しながら継続支援を行います"
    ],
    doctors: [
      "長野 信二",
      "田沼 譲",
      "星野 彩乃",
      "原 守"
    ]
  },

  hinyoki: {
    title: "泌尿器科",
    summary: "排尿の悩み、尿路感染症、泌尿器疾患に幅広く対応します。相談しづらい症状にも丁寧に対応します。",
    reception: "曜日や時間帯により通常運用または予約制です。午後は予約制中心となる日があります。",
    points: [
      "排尿や泌尿器の悩みに幅広く対応します",
      "相談しにくい症状にも丁寧に対応します",
      "火・木は午後予約制中心です",
      "金・土は比較的受診しやすい運用です"
    ],
    doctors: [
      "小森 明二",
      "北里 りさ"
    ]
  },

  tomica: {
    title: "トミカにじいろクリニック",
    summary: "関連病院・分院との連携を通じて、救急、小児、精神、産婦人科など多領域で人材交流と診療支援を行っています。",
    reception: "平日は日勤中心、土曜は午前一般＋午後予約、日曜は午前診療のみです。夜間は当番制で補完体制を整えています。",
    points: [
      "平日 08:30〜17:30 を中心に運用します",
      "夜間は当番医体制で対応します",
      "土曜午後は完全予約制です",
      "本院との連携で小児・精神・救急・産婦人科を支えます"
    ],
    doctors: [
      "加地 秀樹",
      "奥野 宗一郎",
      "田崎 恵",
      "江田 雄二",
      "山崎 育三",
      "家長 むぎ",
      "木村 彩乃",
      "花芽 すみれ",
      "夜乃 くろむ",
      "千凛 あゆむ",
      "角巻 わため",
      "紡木 こかげ"
    ]
  }
};

function normalizeText(value) {
  return (value || "")
    .toString()
    .replace(/\s+/g, "")
    .replace(/　/g, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return (value || "")
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function findDoctorByName(name) {
  const target = normalizeText(name);
  return doctorData.find((doctor) => normalizeText(doctor.name) === target) || null;
}

function createDoctorCardHtml(doctor) {
  return `
    <article class="doctor-card">
      <div class="doctor-card-body">
        <p class="doctor-meta">${escapeHtml(doctor.category)}</p>
        <h3>${escapeHtml(doctor.name)}</h3>
        <p class="doctor-role">${escapeHtml(doctor.role)}</p>
        <p>${escapeHtml(doctor.comment || "")}</p>
      </div>
    </article>
  `;
}

function renderDepartment() {
  const titleEl = document.getElementById("departmentTitle");
  const summaryEl = document.getElementById("departmentSummary");
  const receptionEl = document.getElementById("departmentReception");
  const pointsEl = document.getElementById("departmentPoints");
  const doctorsEl = document.getElementById("departmentDoctors");

  if (!titleEl || !summaryEl || !receptionEl || !pointsEl || !doctorsEl) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "naika";
  const department = departmentData[id] || departmentData.naika;

  titleEl.textContent = department.title;
  summaryEl.textContent = department.summary;
  receptionEl.textContent = department.reception;

  pointsEl.innerHTML = department.points
    .map((point) => `<li>${escapeHtml(point)}</li>`)
    .join("");

  doctorsEl.innerHTML = department.doctors
    .map((name) => {
      const doctor = findDoctorByName(name);
      if (doctor) {
        return createDoctorCardHtml(doctor);
      }
      return `
        <article class="doctor-card">
          <div class="doctor-card-body">
            <p class="doctor-meta">担当医</p>
            <h3>${escapeHtml(name)}</h3>
            <p class="doctor-role">医師情報を準備中です</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDoctors() {
  const searchInput = document.getElementById("doctorSearch");
  const categorySelect = document.getElementById("doctorCategory");
  const tableBody = document.getElementById("doctorTableBody");
  const cardsContainer = document.getElementById("doctorCards");

  if (!searchInput || !categorySelect || !tableBody || !cardsContainer) {
    return;
  }

  const categories = [...new Set(doctorData.map((doctor) => doctor.category))];

  categorySelect.innerHTML = `
    <option value="">すべて表示</option>
    ${categories
      .map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
      .join("")}
  `;

  function getFilteredDoctors() {
    const keyword = normalizeText(searchInput.value);
    const category = categorySelect.value;

    return doctorData.filter((doctor) => {
      const matchCategory = !category || doctor.category === category;

      const searchTarget = normalizeText(
        `${doctor.category} ${doctor.name} ${doctor.role} ${doctor.comment}`
      );
      const matchKeyword = !keyword || searchTarget.includes(keyword);

      return matchCategory && matchKeyword;
    });
  }

  function updateDoctorsView() {
    const filtered = getFilteredDoctors();

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="3">該当する医師が見つかりませんでした。</td>
        </tr>
      `;
      cardsContainer.innerHTML = `
        <article class="doctor-card">
          <div class="doctor-card-body">
            <h3>該当なし</h3>
            <p>検索条件を変更して再度お試しください。</p>
          </div>
        </article>
      `;
      return;
    }

    tableBody.innerHTML = filtered
      .map(
        (doctor) => `
          <tr>
            <td>${escapeHtml(doctor.category)}</td>
            <td>${escapeHtml(doctor.name)}</td>
            <td>${escapeHtml(doctor.role)}</td>
          </tr>
        `
      )
      .join("");

    cardsContainer.innerHTML = filtered.map(createDoctorCardHtml).join("");
  }

  searchInput.addEventListener("input", updateDoctorsView);
  categorySelect.addEventListener("change", updateDoctorsView);

  updateDoctorsView();
}

function initSite() {
  renderDepartment();
  renderDoctors();
}

document.addEventListener("DOMContentLoaded", initSite);
