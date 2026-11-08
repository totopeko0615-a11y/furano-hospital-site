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
    name: "蝸堂 みかる",
    role: "最高顧問 / 小児科統括",
    comment: "小児科の負荷が高い時間帯も含め、子どもたちの安心を守るため全力で支えます。"
  },
  {
    category: "病院経営陣",
    name: "白砂 まどか",
    role: "医療サポート科カウンセラー兼相談室長",
    comment: "医療とこころの両面から、地域医療の支えとなる相談窓口を担います。"
  },
  {
    category: "内科・外科",
    name: "猪股 隆",
    role: "外科主任部長",
    comment: "予約制と通常外来を両立しながら、手術と外来を安定して運営します。"
  },
  {
    category: "内科・外科",
    name: "高本 めぐみ",
    role: "循環器内科主任部長",
    comment: "丁寧な循環器診療と、集中配置日における広域患者対応を進めます。"
  },
  {
    category: "内科・外科",
    name: "澤田 咲",
    role: "神経内科主任部長",
    comment: "脳神経専門予約枠を担い、急変時にはERと素早く連携します。"
  },
  {
    category: "小児科・周産期",
    name: "星川 輝",
    role: "小児科全般主任係長",
    comment: "水曜午後の小児科1名体制も含め、現場を前向きに支えます。"
  },
  {
    category: "小児科・周産期",
    name: "千凛 あゆむ",
    role: "本館・別館小児科最高顧問",
    comment: "分院派遣も含めて、地域の小児医療を安定して支えます。"
  },
  {
    category: "救急科",
    name: "進藤 一生",
    role: "救急科主任係長",
    comment: "1秒の無駄もなくトリアージを完遂し、急変対応の質を高めます。"
  },
  {
    category: "救急科",
    name: "五条 蓮",
    role: "救急科主任部長代理（AI手術担当医）",
    comment: "AI手術とERの連携基盤づくりを進め、救急医療の幅を広げます。"
  },
  {
    category: "産婦人科",
    name: "水野 遥",
    role: "産婦人科主任係長",
    comment: "毎日の外来とお産を笑顔で支える安定役です。"
  },
  {
    category: "精神科・児童精神科",
    name: "周央 サンゴ",
    role: "精神科・児童精神科外来医長",
    comment: "笑顔と前向きさを大切に、広域のこころの医療を支えます。"
  },
  {
    category: "精神科・児童精神科",
    name: "夢咲 ネム",
    role: "精神科主任部長",
    comment: "睡眠医学の知見も活かし、予約制外来で丁寧な診療を行います。"
  },
  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "緋山 美帆子",
    role: "皮膚科主任部長",
    comment: "安全性と精度を大切に、皮膚科外来を安定して守ります。"
  },
  {
    category: "皮膚科・眼科・耳鼻咽喉科",
    name: "白石 恵",
    role: "眼科主任部長",
    comment: "視能訓練スタッフと連携し、無駄のない検査と診療を進めます。"
  },
  {
    category: "総合診療科",
    name: "渡邊 トドック",
    role: "外来医長（名誉病院長） / 総合診療科主任部長",
    comment: "複雑な症状にも柔軟に対応し、地域の総合診療を支えます。"
  },
  {
    category: "トミカ分院",
    name: "加地 秀樹",
    role: "トミカ分院長",
    comment: "分院を地域の要として再構築し、自立的な運営を目指します。"
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
    doctors: ["鏑木 ろこ", "高本 めぐみ", "澤田 咲"]
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
    doctors: ["紡木 こかげ", "蝸堂 みかる", "星川 輝", "千凛 あゆむ"]
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
    doctors: ["周央 サンゴ", "夢咲 ネム", "白砂 まどか"]
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
    doctors: ["四宮 春樹", "水野 遥"]
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
    doctors: ["猪股 隆", "進藤 一生"]
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
    doctors: ["緋山 美帆子", "白石 恵"]
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
    doctors: ["渡邊 トドック"]
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
    doctors: ["加地 秀樹", "花芽 すみれ"]
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
