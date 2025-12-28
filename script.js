const view = document.getElementById("view");

const WORKS = [
  {
    slug: "work-01",
    title: "charim app uxui ",
    desc: "prototype link: https://www.figma.com/proto/DVqvW9NI0PDrZiYpCmciML/%EC%A0%95%EC%9D%B8%EB%94%94_2298013_%EA%B9%80%EC%84%9C%EC%A7%84?page-id=501%3A5485&node-id=442-3574&p=f&viewport=4%2C323%2C0.02&t=6WU7XUbmxNJPjSta-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=442%3A3574&show-proto-sidebar=1",
    cover: "https://i.imgur.com/8Y5xLXI.jpeg",
    cuts: [
      "https://i.imgur.com/8Y5xLXI.jpeg",
      "https://i.imgur.com/54pSUyf.jpeg",
      "https://i.imgur.com/Zn2VmJG.png",
      "https://i.imgur.com/Tc8gQqO.png",
      "https://i.imgur.com/1q76PHR.png",
      "https://i.imgur.com/Pdlj2o3.png",
      "https://i.imgur.com/uErF2lD.png",
      "https://i.imgur.com/fr1hmYZ.jpeg",
      "https://i.imgur.com/irqPMeS.png",
      "https://i.imgur.com/WNIYwvK.png",
      "https://i.imgur.com/yUgFrRJ.png",
      "https://i.imgur.com/l6ZLRMA.png",
      "https://i.imgur.com/avv9ulL.jpeg",
      "https://i.imgur.com/DkAPGoG.jpeg",
      "https://i.imgur.com/5RQdWzV.png",
      "https://i.imgur.com/59azcVG.jpeg"
    ],
    size: "size-lg"
  },
  {
    slug: "work-02",
    title: "spoany uxui rebranding",
    desc: "",
    figma: "https://www.figma.com/proto/MTuXwVxGue1DhYqDUb8VJK/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9D%B8%ED%84%B0%EB%A0%89%EC%85%98-%EB%94%94%EC%9E%90%EC%9D%B8-2025-1?page-id=698%3A5659&node-id=698-6104&p=f&viewport=472%2C173%2C0.1&t=PiVm02WEhB0FvSeK-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=698%3A6097&show-proto-sidebar=1",
    cover: "https://i.imgur.com/ygi2lI7.jpeg",
    cuts: [
      "https://i.imgur.com/ygi2lI7.jpeg",
      "https://i.imgur.com/ZwA1YU4.jpeg",
      "https://i.imgur.com/nZFKb8X.jpeg",
      "https://i.imgur.com/WbsZKeZ.png",
      "https://i.imgur.com/0piNWoC.png",
      "https://i.imgur.com/frq9Lug.png",
      "https://i.imgur.com/KSrgJPJ.png",
      "https://i.imgur.com/UGc9cTP.jpeg",
      "https://i.imgur.com/dSk0PG1.jpeg",
      "https://i.imgur.com/cxMmk4q.jpeg",
      "https://i.imgur.com/AYrjFDn.png",
      "https://i.imgur.com/WxMs6BS.png",
      "https://i.imgur.com/4s2Q80k.jpeg",
      "https://i.imgur.com/huiTBkz.png",
      "https://i.imgur.com/3vVHZrp.jpeg",
      "https://i.imgur.com/nQ9X3UU.jpeg",
      "https://i.imgur.com/9UaBpVp.jpeg",
      "https://i.imgur.com/I9d1aeQ.jpeg",
      "https://i.imgur.com/lynT8cM.jpeg"
    ],
    size: "size-lg"
  },

  {
    slug: "work-03",
    title: "LG Electronics Art Collaboration Vol. 3 ",
    desc: "",
    cover: "https://i.imgur.com/wJrIwfw.jpeg",
    cuts: ["https://i.imgur.com/ilsatYm.jpeg","https://i.imgur.com/boQoSB6.png","https://i.imgur.com/AQEKrdz.png","https://i.imgur.com/Zc41ia1.png","https://i.imgur.com/IRJi6VQ.png","https://i.imgur.com/3tkJyGz.png","https://i.imgur.com/vc54RRf.png","https://i.imgur.com/3lkGJYx.jpeg","https://i.imgur.com/WpLRTIi.jpeg","https://i.imgur.com/y2112Nb.jpeg","https://i.imgur.com/mcof5kY.jpeg","https://i.imgur.com/PMTlWHZ.jpeg","https://i.imgur.com/dMJyPnX.jpeg","https://i.imgur.com/GUEYblL.jpeg","https://i.imgur.com/5ekltl6.jpeg","https://i.imgur.com/lmXDkUa.jpeg","https://i.imgur.com/g82hpck.jpeg","https://i.imgur.com/OR4u03C.png","https://i.imgur.com/kkk6hXt.jpeg","https://i.imgur.com/azYM6AW.png","https://i.imgur.com/XMuX74R.jpeg","https://i.imgur.com/FBMB7iy.png","https://i.imgur.com/r77il5i.jpeg","https://i.imgur.com/CnHGR1u.jpeg","https://i.imgur.com/z9jfZ2T.jpeg","https://i.imgur.com/bB6dBOq.jpeg","https://i.imgur.com/hd5q7QJ.jpeg","https://i.imgur.com/zwyp6LM.png","https://i.imgur.com/vuB5lsb.png","https://i.imgur.com/zNd8i86.jpeg","https://i.imgur.com/O8bX9P6.jpeg","https://i.imgur.com/b5ZlogZ.jpeg","https://i.imgur.com/eu31tVX.png","https://i.imgur.com/omYEgQI.png","https://i.imgur.com/fOxofUx.png"],
    size: "size-lg"
  },
  {
    slug: "work-04",
    title: "얼굴들 faces",
    desc: "",
    cover: "https://i.imgur.com/4eDT0md.png",
    cuts: [
    "https://i.imgur.com/4eDT0md.png","https://i.imgur.com/PVMLxbl.png","https://i.imgur.com/2TnZo0k.png","https://i.imgur.com/sxynbxs.png","https://i.imgur.com/t44ixJS.gif","https://i.imgur.com/Pce7Wam.jpeg","https://i.imgur.com/1lbj2vA.png","https://i.imgur.com/XYqKydR.png","https://i.imgur.com/Ofs3zgy.jpeg","https://i.imgur.com/616fejV.jpeg","https://i.imgur.com/OcPFBkv.png","https://i.imgur.com/odOc4tK.jpeg","https://i.imgur.com/hXNOQ53.jpeg","https://i.imgur.com/TUfrYiq.jpeg","https://i.imgur.com/GglbbVh.jpeg"
    ],
    size: "size-lg"
  },
  {
    slug: "work-05",
    title: "shinhan bank Smart Campus Banking App proposal",
    desc: "",
    cover: "https://i.imgur.com/HzQAqrj.jpeg",
    cuts: ["https://i.imgur.com/HzQAqrj.jpeg","https://i.imgur.com/9RT2JRb.png","https://i.imgur.com/mzrzc4d.jpeg","https://i.imgur.com/aiXGxCL.jpeg","https://i.imgur.com/xkRJxcU.jpeg","https://i.imgur.com/4Xgs9Pp.jpeg"],
    size: "size-lg"
  },
  {
    slug: "work-06",
    title: "외모정병 Appearance obsession",
    desc: "",
    cover: "https://i.imgur.com/TqksbrM.jpeg",
    cuts: ["https://i.imgur.com/TqksbrM.jpeg","https://i.imgur.com/dnhhBUI.png","https://i.imgur.com/afoW1ho.jpeg","https://i.imgur.com/rxuZgoa.png","https://i.imgur.com/ZgCGN83.png","https://i.imgur.com/FkiAy1B.jpeg","https://i.imgur.com/ep8Vfz1.png","https://i.imgur.com/eXtHcwx.jpeg","https://i.imgur.com/5nhnXzF.png","https://i.imgur.com/yqlVlPi.gif"
           ],
    size: "size-lg"
  },
  {
    slug: "work-07",
    title: "Rhino modeling",
    desc: "",
    cover: "https://i.imgur.com/oMJeelK.png",
    cuts: ["https://i.imgur.com/P2DVAnf.png","https://i.imgur.com/H3J45Gr.jpeg","https://i.imgur.com/eEG5FyU.jpeg","https://i.imgur.com/MyJfM3N.png","https://i.imgur.com/FDQwXxx.png","https://i.imgur.com/mlfm4da.jpeg","https://i.imgur.com/Z18GpHg.jpeg","https://i.imgur.com/L8yL9Bz.png","https://i.imgur.com/TMSMrPv.png","https://i.imgur.com/aviqc3T.png","https://i.imgur.com/QmLKyiM.png","https://i.imgur.com/chk1KFq.jpeg","https://i.imgur.com/4V6cNRM.png","https://i.imgur.com/DxMqywp.jpeg","https://i.imgur.com/RHNQb1C.jpeg","https://i.imgur.com/TGkvhxB.jpeg","https://i.imgur.com/vbFk82k.jpeg","https://i.imgur.com/XYYMmAv.jpeg","https://i.imgur.com/XN9mANf.png","https://i.imgur.com/0GQaC7J.jpeg","https://i.imgur.com/oMJeelK.png"
    ],
    size: "size-lg"
  },
  {
    slug: "work-08",
    title: "풍기인견 패키지 디자인 Yeongju scarf Package",
    desc: "",
    cover: "https://i.imgur.com/oEUFzlZ.jpeg"
,
    // ✅ 여기 원본 ",," 오류 수정 완료
    cuts: ["https://i.imgur.com/oEUFzlZ.jpeg","https://i.imgur.com/a2Ybjtx.png",  "https://i.imgur.com/XyZibgZ.jpeg","https://i.imgur.com/f5fx9z8.png","https://i.imgur.com/i0hziTP.png","https://i.imgur.com/RgmTthZ.jpeg","https://i.imgur.com/SkW9TV4.jpeg","https://i.imgur.com/cMSwJB9.jpeg","https://i.imgur.com/1UCgEJ7.jpeg","https://i.imgur.com/x9tzx5v.jpeg","https://i.imgur.com/ipp4yDd.jpeg","https://i.imgur.com/3z8dVVq.jpeg","https://i.imgur.com/fZkXGlD.jpeg","https://i.imgur.com/0M8t2PF.jpeg","https://i.imgur.com/rKqNHlN.jpeg","https://i.imgur.com/UKoLzwc.jpeg","https://i.imgur.com/ZdMqkcB.jpeg","https://i.imgur.com/OZtuLYE.jpeg","https://i.imgur.com/KyhKX9q.jpeg"
],
    size: "size-lg"
  },
  {
    slug: "work-09",
    title: "스몰톡 small talk",
    desc: "",
    cover: "https://i.imgur.com/j6YbxIQ.jpeg",
    cuts: [
      "https://i.imgur.com/j6YbxIQ.jpeg","https://i.imgur.com/Y1SV1mA.jpeg","https://i.imgur.com/ABpLhr2.jpeg","https://i.imgur.com/Ll3scvg.jpeg","https://i.imgur.com/xwoyc0h.jpeg","https://i.imgur.com/SMHvWHb.jpeg","https://i.imgur.com/JtHbtcF.jpeg","https://i.imgur.com/raCP0F9.jpeg","https://i.imgur.com/BJhcCrB.jpeg","https://i.imgur.com/MGuXbyW.jpeg","https://i.imgur.com/KuKmWJG.png","https://i.imgur.com/M60HQeZ.jpeg","https://i.imgur.com/DcflAkk.jpeg","https://i.imgur.com/a68cSIf.jpeg","https://i.imgur.com/O80VAaW.jpeg"
    ],
    size: "size-lg"
  },
  {
    slug: "work-10",
    title: "Interactive Media Art",
    desc: "",
    cover: "https://i.imgur.com/K03M3Kg.jpeg",
    cuts: ["https://i.imgur.com/K03M3Kg.jpeg","https://i.imgur.com/n7u5Ng2.png","https://i.imgur.com/AzhYn9i.png","https://i.imgur.com/ijFk3Cp.png","https://i.imgur.com/su0JkPi.png","https://i.imgur.com/KRlW0CZ.png","https://i.imgur.com/u6TlsrH.jpeg","https://i.imgur.com/4vBuVfJ.jpeg","https://i.imgur.com/7m2Pj8l.jpeg","https://i.imgur.com/D4UfFF9.jpeg"],
    size: "size-lg",
    video: "https://youtu.be/J0zaTO904Vk" // ✅ View Video 버튼용 링크
  },
];

/* 🔹 desc에서 figma 링크만 제거한 순수 설명 */
function cleanDesc(text) {
  if (!text) return "";
  return text.replace(/https?:\/\/(www\.)?figma\.com\/[^\s)]+/gi, "")
             .replace(/prototype link:\s*/gi, "")
             .trim();
}

/* 🔹 figma 링크 자동 추출 */
function extractFigmaUrl(work) {
  if (work.figma) return work.figma;
  const m = (work.desc || "").match(/https?:\/\/(www\.)?figma\.com\/[^\s)]+/i);
  return m ? m[0] : "";
}

function homeView(){
  return `
    <section class="stage">
      <div class="bg-title">tjwls works</div>
      <div class="grid" id="grid"></div>
    </section>
  `;
}

function detailView(work){
  const figmaUrl = extractFigmaUrl(work);
  const descText = cleanDesc(work.desc);
  const videoUrl = work.video || ""; // ✅ 추가

  const images = (work.cuts || []).map((src, idx) => `
    <div class="cut">
      <img
        src="${src}"
        alt="${work.title} detail ${idx + 1}"
        onerror="this.outerHTML='<div class=\\'fallback\\'>이미지 로딩 실패: ${src}</div>'"
      >
    </div>
  `).join("");

  return `
    <section class="detail">
      <header class="detailHeader">
        <button class="back" id="backBtn">← back</button>

        <div class="detailMeta">
          <h1>${work.title || ""}</h1>
          ${descText ? `<p>${descText}</p>` : ""}

          ${figmaUrl ? `
            <a class="figmaLink"
               href="${figmaUrl}"
               target="_blank"
               rel="noopener noreferrer">
              View on Figma →
            </a>
          ` : ""}

          ${videoUrl ? `
            <a class="figmaLink"
               href="${videoUrl}"
               target="_blank"
               rel="noopener noreferrer">
              View Video →
            </a>
          ` : ""}
        </div>
      </header>

      <main class="detailContent">
        ${images}
      </main>
    </section>
  `;
}

function render(){
  const hash = location.hash || "#home";

  if(hash.startsWith("#work/")){
    const slug = hash.split("/")[1];
    const work = WORKS.find(w => w && w.slug === slug);

    if(!work){
      location.hash = "#home";
      return;
    }

    view.innerHTML = detailView(work);
    document.getElementById("backBtn").onclick = () => history.back();
    window.scrollTo(0,0);
    return;
  }

  view.innerHTML = homeView();
  const grid = document.getElementById("grid");

  WORKS.forEach(work => {
    if (!work) return;

    const tile = document.createElement("button");
    tile.className = `tile ${work.size || "size-md"}`;
    tile.type = "button";
    tile.onclick = () => location.hash = `#work/${work.slug}`;

    const img = document.createElement("img");
    img.src = work.cover;
    img.alt = work.title || "";

    img.onerror = () => {
      img.replaceWith(Object.assign(document.createElement("div"), {
        className: "fallback",
        textContent: `표지 이미지 로딩 실패: ${work.cover}`
      }));
    };

    tile.appendChild(img);
    grid.appendChild(tile);
  });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

function homeView(){
  return `
    <section class="stage">
      <div class="bg-title">tjwls works</div>
      <div class="grid" id="grid"></div>
    </section>
  `;
}

function homeView(){
  return `
    <section class="stage">
      <div class="bg-title">tjwls works</div>

      <div class="grid" id="grid"></div>

      <!-- footer -->
      <footer class="siteFooter">
        <div class="contact">
          contact&nbsp;
          <a href="mailto:mmin.zzing.mmin.zzing@gmail.com">
            mmin.zzing.mmin.zzing@gmail.com
          </a>
        </div>
        <div class="tagline">
          for designs that turn everyday experiences into meaning
        </div>
      </footer>
    </section>
  `;
}


function bindSpinOnScroll(){
  const el = document.querySelector(".spinMark");
  if(!el) return;

  let rafId = null;

  const onScroll = () => {
    if(rafId) return;
    rafId = requestAnimationFrame(() => {
      const y = window.scrollY || 0;
      const deg = y * 0.35; // 회전 강도
      el.style.transform = `rotate(${deg}deg)`;
      rafId = null;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
view.innerHTML = homeView();
bindSpinOnScroll();