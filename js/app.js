/**
 * APEX INSPECT - Interactive Application Logic & Internationalization
 */

// Sample Inspection Records for Certificate Verification Demo
const CERTIFICATE_DATABASE = {
  "26B1386": {
    ref: "26B1386",
    vessel: "M/V PACIFIC GLORY",
    callSign: "3FGL9 / IMO 9681452",
    cargo: "Ngô hạt dỡ rời (Yellow Corn in Bulk)",
    declaredBL: "62,500.000 MT",
    surveyType: "Initial & Final Draft Survey (Giám định Mớn nước lần đầu & lần cuối)",
    location: "Khu neo Hạ Long & Cầu cảng Cái Lân, Quảng Ninh",
    surveyDate: "05/11/2026 - 08/11/2026",
    surveyor: "Bùi Thanh Cương (Lead Surveyor #APX-01)",
    status: "ĐÃ PHÁT HÀNH CHÍNH THỨC",
    statusEn: "OFFICIALLY ISSUED",
    findings: "Khối lượng hàng thực nhận sai lệch -0.042% so với B/L (nằm trong dung sai thương mại quốc tế). Hầm hàng sạch khô, không ngấm nước biển.",
    legalValidity: "Chứng thư có đầy đủ giá trị pháp lý quyết toán hợp đồng ngoại thương & thông quan Hải quan."
  },
  "26B1332": {
    ref: "26B1332",
    vessel: "M/V STAR VOYAGER",
    callSign: "VRHQ7 / IMO 9452109",
    cargo: "Khô đậu tương dỡ rời (Soybean Meal Pellets)",
    declaredBL: "48,200.000 MT",
    surveyType: "Barge Draft Survey & Tallying (Giám định Mớn sà lan & Cân 100%)",
    location: "Cụm Cảng Hải Phòng (Cảng Đình Vũ)",
    surveyDate: "01/11/2026 - 04/11/2026",
    surveyor: "Nguyễn Văn Hùng (Marine Surveyor #APX-06)",
    status: "ĐÃ PHÁT HÀNH CHÍNH THỨC",
    statusEn: "OFFICIALLY ISSUED",
    findings: "Đã giám sát 100% cân cầu cảng điện tử và niêm phong kẹp chì toàn bộ sà lan chuyển tải. Lấy mẫu phân tích GAFTA/FOSFA đại diện 3 bên.",
    legalValidity: "Hồ sơ đính kèm phiếu cân điện tử và biên bản lấy mẫu niêm phong 3 bên hợp lệ."
  },
  "26C0812": {
    ref: "26C0812",
    vessel: "M/T OCEAN GEM",
    callSign: "9V8214 / IMO 9811204",
    cargo: "Xăng khoáng RON 95-III (Gasoline in Bulk)",
    declaredBL: "14,500.000 m³ (tại 15°C)",
    surveyType: "Petroleum Cargo & Bunker Survey (BQS, Đo Ullage & Tỷ trọng)",
    location: "Khu neo Cảng Nghi Sơn, Thanh Hóa",
    surveyDate: "07/11/2026",
    surveyor: "Trần Anh Tuấn (Liquid Cargo Specialist #APX-03)",
    status: "ĐÃ PHÁT HÀNH CHÍNH THỨC",
    statusEn: "OFFICIALLY ISSUED",
    findings: "Đo tính thể tích tiêu chuẩn ASTM Tab 54B, không phát hiện nước tự do đáy két. Giám sát khử trùng làm sạch đường ống trước khi bơm.",
    legalValidity: "Chứng thư được chấp thuận làm chứng từ thanh toán L/C quốc tế."
  },
  "26D0499": {
    ref: "26D0499",
    vessel: "M/V WAN HAI 315",
    callSign: "BL889 / IMO 9324567",
    cargo: "85 x 40'HC Thiết bị dây chuyền cơ khí chính xác",
    declaredBL: "85 Containers (1,420 Tons)",
    surveyType: "Container Condition & Unstuffing Survey (Rút hàng & Giám định tổn thất)",
    location: "Bãi Depot Nam Đình Vũ, Hải Phòng",
    surveyDate: "09/11/2026",
    surveyor: "Lê Minh Đức (Container Inspector #APX-08)",
    status: "ĐANG TÁC NGHIỆP HIỆN TRƯỜNG",
    statusEn: "IN-PROGRESS ON SITE",
    findings: "Đang tiến hành kiểm tra tình trạng số chì hải quan, kẹp chì hãng tàu và giám sát dỡ hàng an toàn vào kho bảo quản.",
    legalValidity: "Báo cáo sơ bộ (Interim Report) sẽ được phát hành trong vòng 2 giờ sau khi dỡ xong container cuối cùng."
  }
};

// Bilingual dictionary for dynamic switching
const I18N = {
  vi: {
    nav_about: "Về APEX",
    nav_services: "Dịch vụ Giám định",
    nav_capabilities: "Năng lực & Thiết bị",
    nav_network: "Mạng lưới Cảng",
    nav_workflow: "Quy trình 24/7",
    nav_tracking: "Tra cứu Chứng thư",
    btn_nominate: "Chỉ định Giám định 24/7",
    hero_tag: "TỔ CHỨC GIÁM ĐỊNH HÀNG HẢI & HÀNG HÓA ĐỘC LẬP",
    hero_title: "Độc Lập • Chuẩn Xác • Tin Cậy Cho Mọi Chuyến Tàu & Lô Hàng",
    hero_desc: "Đồng hành tin cậy cùng Chủ tàu, Doanh nghiệp XNK, Hãng tàu và P&I Club. Bảo vệ tối đa quyền lợi thương mại và pháp lý với chứng thư giám định chuẩn mực, tốc độ tác nghiệp 30-60 phút tại tất cả cụm cảng biển trọng điểm.",
    hero_btn_req: "Yêu Cầu Giám Định 24/7",
    hero_btn_track: "Tra Cứu Chứng Thư Trực Tuyến",
    stat_exp: "Năm Kinh Nghiệm",
    stat_exp_sub: "Chỉ huy thực chiến hàng hải",
    stat_vessels: "Lượt Tàu & Sà Lan",
    stat_vessels_sub: "Giám định thành công",
    stat_response: "Phút Có Mặt",
    stat_response_sub: "Kể từ khi nhận chỉ định 24/7",
    stat_accuracy: "Chuẩn Mực Pháp Lý",
    stat_accuracy_sub: "Được P&I, Ngân hàng & Hải quan chấp thuận"
  },
  en: {
    nav_about: "About APEX",
    nav_services: "Inspection Services",
    nav_capabilities: "Capacity & Gear",
    nav_network: "Port Coverage",
    nav_workflow: "24/7 Workflow",
    nav_tracking: "Verify Certificate",
    btn_nominate: "Nominate Survey 24/7",
    hero_tag: "INDEPENDENT CARGO & MARINE SURVEY ORGANIZATION",
    hero_title: "Independence • Accuracy • Trust For Every Vessel & Shipment",
    hero_desc: "A steadfast partner to Shipowners, Charterers, Traders, Logistics and P&I Clubs. Safeguarding your legal interests with rigorous technical reports and 30-60 min rapid on-site mobilization across all Vietnamese key ports.",
    hero_btn_req: "Submit Nomination 24/7",
    hero_btn_track: "Verify Inspection Certificate",
    stat_exp: "Years Experience",
    stat_exp_sub: "Field maritime command",
    stat_vessels: "Vessels & Barges",
    stat_vessels_sub: "Successfully surveyed",
    stat_response: "Mins Mobilization",
    stat_response_sub: "Upon 24/7 nomination notice",
    stat_accuracy: "Legal Conformity",
    stat_accuracy_sub: "Accepted by P&I, Banks & Customs"
  }
};

let currentLang = "vi";

// Initialize UI when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initLanguageToggle();
  initServiceFilter();
  initCertificateTracking();
  initNominationForm();
  initPortMapInteractions();
  initCounters();
  initFaqAccordion();
  initMobileMenu();
});

// 1. Language Toggle
function initLanguageToggle() {
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("bg-blue-600", "text-white");
      btn.classList.remove("text-slate-600", "hover:text-blue-600");
    } else {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add("text-slate-600", "hover:text-blue-600");
    }
  });

  // Update translatable elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang] && I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });
}

// 2. Service Sector Filter
function initServiceFilter() {
  const filterBtns = document.querySelectorAll(".service-filter-btn");
  const serviceCards = document.querySelectorAll(".service-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-blue-600", "text-white", "shadow-md");
        b.classList.add("bg-white", "text-slate-700", "border-slate-200");
      });
      btn.classList.add("bg-blue-600", "text-white", "shadow-md");
      btn.classList.remove("bg-white", "text-slate-700", "border-slate-200");

      const filter = btn.dataset.filter;
      serviceCards.forEach(card => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
          card.classList.add("fade-in");
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 3. Certificate Verification Demo
function initCertificateTracking() {
  const trackForm = document.getElementById("certificate-search-form");
  const trackInput = document.getElementById("certificate-input");
  const modal = document.getElementById("certificate-modal");
  const modalBody = document.getElementById("certificate-modal-body");
  const closeModalBtn = document.getElementById("close-certificate-modal");
  const samplePills = document.querySelectorAll(".sample-cert-pill");

  // Sample quick pills
  samplePills.forEach(pill => {
    pill.addEventListener("click", () => {
      const code = pill.dataset.code;
      if (trackInput) trackInput.value = code;
      showCertificateResult(code);
    });
  });

  if (trackForm) {
    trackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = trackInput.value.trim().toUpperCase();
      if (!code) {
        alert("Vui lòng nhập số biên bản / số chứng thư (Ví dụ: 26B1386)");
        return;
      }
      showCertificateResult(code);
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      if (modal) modal.classList.add("hidden");
    });
  }

  // Click outside to close
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  function showCertificateResult(code) {
    const data = CERTIFICATE_DATABASE[code];
    if (!modal || !modalBody) return;

    if (data) {
      modalBody.innerHTML = `
        <div class="space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600">Xác thực chứng thư giám định số điện tử</span>
              <h3 class="text-2xl font-extrabold text-slate-900 font-mono">REF NO: ${data.ref}</h3>
            </div>
            <div class="stamp-verified">
              ${data.status}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span class="text-slate-500 block text-xs">Tên phương tiện / Tàu biển:</span>
              <strong class="text-slate-900 font-semibold text-base">${data.vessel}</strong>
              <span class="text-xs text-slate-500 block">${data.callSign}</span>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">Loại hình giám định:</span>
              <strong class="text-slate-900">${data.surveyType}</strong>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">Tên hàng & Số lượng B/L:</span>
              <strong class="text-slate-900">${data.cargo} (${data.declaredBL})</strong>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">Địa điểm giám định:</span>
              <strong class="text-slate-900">${data.location}</strong>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">Thời gian tác nghiệp:</span>
              <span class="text-slate-800">${data.surveyDate}</span>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">Giám định viên phụ trách:</span>
              <span class="text-slate-800 font-medium">${data.surveyor}</span>
            </div>
          </div>

          <div class="border-l-4 border-blue-600 bg-blue-50/70 p-4 rounded-r-xl">
            <h4 class="font-bold text-blue-900 text-sm mb-1">Kết luận kỹ thuật & Nhận định hiện trường:</h4>
            <p class="text-slate-700 text-sm">${data.findings}</p>
          </div>

          <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
            <div class="flex items-center gap-2">
              <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>Chữ ký số & Con dấu APEX INSPECT hợp lệ</span>
            </div>
            <span>Mã bảo mật: SHA256-${Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
          </div>
        </div>
      `;
    } else {
      modalBody.innerHTML = `
        <div class="text-center py-8 space-y-4">
          <div class="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            !
          </div>
          <h3 class="text-xl font-bold text-slate-900">Không tìm thấy mã số: "${code}"</h3>
          <p class="text-slate-600 text-sm max-w-md mx-auto">
            Hồ sơ có thể đang trong giai đoạn thẩm định kỹ thuật hoặc số biên bản chưa chính xác. Vui lòng liên hệ trực ban 24/7 để được hỗ trợ kiểm tra trực tiếp.
          </p>
          <div class="pt-2">
            <a href="tel:0961799968" class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
              Gọi Hotline 24/7: 0961 799 968
            </a>
          </div>
        </div>
      `;
    }

    modal.classList.remove("hidden");
  }
}

// 4. Interactive Port Network Map
function initPortMapInteractions() {
  const portButtons = document.querySelectorAll(".port-select-btn");
  const portDetailCard = document.getElementById("port-detail-display");

  const PORT_DATA = {
    haiphong: {
      name: "Cụm Cảng Hải Phòng (Đình Vũ, Lạch Huyện, Nam Đình Vũ, Cảng Vật Cách)",
      type: "Trụ sở chính & Trung tâm Giám định Phía Bắc",
      time: "20 - 30 Phút",
      staff: "15+ Giám định viên thường trực 24/7",
      cargo: "Container, Thức ăn chăn nuôi (TACN), Hàng rời công nghiệp, Thiết bị dự án",
      notes: "Sẵn sàng lên tàu tại phao số 0, các bến cầu cảng sông Cấm, Đình Vũ và cảng nước sâu Lạch Huyện."
    },
    quangninh: {
      name: "Cụm Cảng Quảng Ninh (Khu neo Hạ Long, Hòn Gai, Cảng Cái Lân, Cẩm Phả)",
      type: "Trạm Hiện trường & Đội tàu cano cao tốc",
      time: "30 - 45 Phút ra phao neo",
      staff: "10+ Giám định viên mớn nước chuyên sâu",
      cargo: "Tàu hàng rời cỡ lớn (Panamax, Supramax, Capesize), Ngô hạt, Khô đậu, Than đá, Clinker",
      notes: "Chuyên trách Draft survey mớn đầu, mớn cắt hạ tải, giám định mớn sà lan chuyển tải về các cảng nội địa."
    },
    nghison: {
      name: "Cảng Nghi Sơn (Thanh Hóa) & Cửa Lò (Nghệ An)",
      type: "Văn phòng Đại diện Bắc Trung Bộ",
      time: "40 - 60 Phút",
      staff: "6 Giám định viên thường trực",
      cargo: "Xăng dầu, Hóa chất, Dầu cọ, Than nhập khẩu, Clinker xuất khẩu",
      notes: "Giám sát đo tính bồn bể, đường ống và tàu dầu tải trọng lớn."
    },
    danang: {
      name: "Cảng Đà Nẵng (Tiên Sa, Liên Chiểu) & Cảng Quy Nhơn",
      type: "Trạm Giám định Miền Trung",
      time: "30 - 45 Phút",
      staff: "5 Giám định viên thường trực",
      cargo: "Dăm gỗ, Tinh quặng, Nông sản đóng bao, Container bách hóa",
      notes: "Kiểm tra tình trạng hầm hàng, giám sát dỡ hàng và đóng gói xuất khẩu."
    },
    caimep: {
      name: "Cụm Cảng Cái Mép - Thị Vải & Cảng TP. Hồ Chí Minh",
      type: "Văn phòng Điều phối Hiện trường Phía Nam",
      time: "30 - 45 Phút",
      staff: "12 Giám định viên hàng hải & container",
      cargo: "Tàu container mẹ tuyến Âu - Mỹ, Xăng dầu bồn tổng kho, Nông sản Nam Bộ",
      notes: "Tác nghiệp kết nối liên hoàn toàn bộ hệ thống ICD và cụm cảng quốc tế Đông Nam Bộ."
    }
  };

  portButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      portButtons.forEach(b => {
        b.classList.remove("border-blue-600", "bg-blue-50/50");
        b.classList.add("border-slate-200", "bg-white");
      });
      btn.classList.add("border-blue-600", "bg-blue-50/50");
      btn.classList.remove("border-slate-200", "bg-white");

      const portKey = btn.dataset.port;
      const data = PORT_DATA[portKey];
      if (data && portDetailCard) {
        portDetailCard.innerHTML = `
          <div class="space-y-4 animate-fade-in">
            <div class="flex items-start justify-between gap-3">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-blue-600">${data.type}</span>
                <h4 class="text-lg font-bold text-slate-900">${data.name}</h4>
              </div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 24/7 Sẵn sàng
              </span>
            </div>

            <div class="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div>
                <span class="text-slate-500 block">Thời gian tiếp cận:</span>
                <strong class="text-slate-900 text-sm font-semibold">${data.time}</strong>
              </div>
              <div>
                <span class="text-slate-500 block">Nhân sự hiện trường:</span>
                <strong class="text-slate-900 text-sm font-semibold">${data.staff}</strong>
              </div>
            </div>

            <div>
              <span class="text-xs font-semibold text-slate-500 block mb-1">Mặt hàng & Nghiệp vụ mũi nhọn:</span>
              <p class="text-sm text-slate-800 font-medium">${data.cargo}</p>
            </div>

            <div class="text-xs text-slate-600 border-t border-slate-200 pt-3 flex items-center justify-between">
              <span>${data.notes}</span>
              <a href="#nominate" class="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                Chỉ định tại cảng này &rarr;
              </a>
            </div>
          </div>
        `;
      }
    });
  });
}

// 5. Nomination Request Form
function initNominationForm() {
  const form = document.getElementById("nomination-form");
  const successBox = document.getElementById("nomination-success-box");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Generate mock request ref
    const refCode = "APX-NOM-" + Math.floor(1000 + Math.random() * 9000);
    const clientName = form.querySelector('[name="client_name"]')?.value || "Quý khách";
    const vesselName = form.querySelector('[name="vessel_name"]')?.value || "Phương tiện / Lô hàng";
    const portSelect = form.querySelector('[name="port"]')?.value || "Cụm cảng biển";

    if (successBox) {
      successBox.innerHTML = `
        <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
          <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h4 class="text-xl font-bold text-emerald-950">Tiếp nhận chỉ định giám định thành công!</h4>
          <p class="text-sm text-emerald-800 max-w-lg mx-auto">
            Hệ thống tác nghiệp APEX đã ghi nhận yêu cầu từ <strong>${clientName}</strong> đối với <strong>${vesselName}</strong> tại <strong>${portSelect}</strong>.
          </p>
          <div class="inline-block bg-white px-4 py-2 rounded-lg border border-emerald-200 font-mono text-sm font-bold text-slate-900">
            MÃ CHỈ ĐỊNH: ${refCode}
          </div>
          <p class="text-xs text-slate-600">
            Trưởng ban điều phối hiện trường sẽ liên hệ xác nhận và cử Giám định viên trong vòng <strong>15 phút</strong>.
          </p>
          <div class="pt-2">
            <button type="button" onclick="location.reload()" class="text-xs font-bold text-emerald-700 underline">
              Gửi thêm chỉ định mới
            </button>
          </div>
        </div>
      `;
      form.style.display = "none";
      successBox.classList.remove("hidden");
    }
  });
}

// 6. Number Counter Animation
function initCounters() {
  const counters = document.querySelectorAll(".counter-value");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.target, 10);
          const duration = 1500;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current).toLocaleString();
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById("stats-section");
  if (statsSection) observer.observe(statsSection);
}

// 7. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (trigger && content) {
      trigger.addEventListener("click", () => {
        const isOpen = !content.classList.contains("hidden");
        
        // Close all others
        faqItems.forEach(i => {
          const c = i.querySelector(".faq-content");
          const ic = i.querySelector(".faq-icon");
          if (c) c.classList.add("hidden");
          if (ic) ic.style.transform = "rotate(0deg)";
        });

        if (!isOpen) {
          content.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    }
  });
}

// 8. Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuBtn = document.getElementById("close-mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
    });
  }

  if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenu) mobileMenu.classList.add("hidden");
    });
  });
}
