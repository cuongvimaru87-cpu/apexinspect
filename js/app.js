/**
 * APEX INSPECT - Interactive Application Logic & Internationalization (Bilingual VI/EN)
 * CÔNG TY CỔ PHẦN KIỂM ĐỊNH VÀ GIÁM ĐỊNH APEX
 * APEX INSPECTION AND SURVEY JOINT STOCK COMPANY
 */

// 1. Comprehensive Bilingual Dictionary (VI / EN)
const I18N = {
  vi: {
    // Announcement & Top Bar
    top_readiness: "Trực Ban Hiện Trường 24/7",
    top_port_cluster: "Cụm Cảng Hải Phòng & Quảng Ninh (Hạ Long, Cái Lân) sẵn sàng tác nghiệp trong 30-45 phút",
    
    // Header Brand & Navigation
    company_full_vi: "CÔNG TY CỔ PHẦN KIỂM ĐỊNH VÀ GIÁM ĐỊNH APEX",
    company_full_en: "APEX INSPECTION AND SURVEY JOINT STOCK COMPANY",
    company_short_label: "TÊN VIẾT TẮT:",
    company_short_name: "APEX INSPECT",
    company_tax_id: "MST: 0202240957",
    nav_about: "Về APEX",
    nav_services: "Dịch vụ Giám định",
    nav_capabilities: "Năng lực & Thiết bị",
    nav_network: "Mạng lưới Cảng",
    nav_workflow: "Quy trình 24/7",
    nav_tracking: "Tra cứu Chứng thư",
    nav_tracking_btn: "Tra cứu",
    btn_nominate: "Chỉ định Giám định 24/7",
    mobile_duty: "GIÁM ĐỊNH HÀNG HẢI 24/7",

    // Hero Section
    hero_lang_vi_tag: "TIẾNG VIỆT",
    hero_lang_en_tag: "ENGLISH",
    hero_tag: "TỔ CHỨC GIÁM ĐỊNH HÀNG HẢI & HÀNG HÓA ĐỘC LẬP",
    hero_title_html: "Độc Lập • <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-200\">Chuẩn Xác</span> • <span class=\"text-rose-400\">Tin Cậy</span> Cho Mọi Chuyến Tàu & Lô Hàng",
    hero_desc: "Đồng hành tin cậy cùng Chủ tàu, Doanh nghiệp XNK, Hãng tàu và P&I Club. Bảo vệ tối đa quyền lợi thương mại và pháp lý với chứng thư giám định chuẩn mực, tốc độ tác nghiệp 30-60 phút tại tất cả cụm cảng biển trọng điểm.",
    hero_btn_req: "Gửi Chỉ Định Giám Định 24/7",
    hero_btn_track: "Tra Cứu Chứng Thư",
    hero_btn_profile: "Tải Hồ Sơ Năng Lực (PDF 27 trang)",
    trust_iso: "Tiêu chuẩn ISO/IEC 17020",
    trust_gafta: "Chuẩn GAFTA & FOSFA Sampling",
    trust_surveyors: "Giám định viên 100% ĐH Hàng Hải",
    
    // Hero Right Highlight Cards
    hero_card1_title: "Phản Ứng Nhanh (30 - 60 Phút)",
    hero_card1_desc: "Đội ngũ giám định viên thường trực 24/7 tại khu neo Hạ Long, Cái Lân, Cẩm Phả, Đình Vũ và các bến cảng nội địa.",
    hero_card2_title: "Báo Cáo Sơ Bộ Cấp Ngay Hiện Trường",
    hero_card2_desc: "Cập nhật tiến độ theo từng ca làm việc (Shift Report) qua Email/Zalo và cấp Interim Report ngay khi tàu/sà lan hoàn tất làm hàng.",
    hero_card3_title: "Giá Trị Pháp Lý Độc Lập Cao Nhất",
    hero_card3_desc: "Chứng thư giám định APEX INSPECT là cơ sở quyết toán thương mại vững chắc, được Hải quan, Tòa án và các Hội bảo hiểm P&I quốc tế tin cậy.",

    // Stats Bar
    stat_exp: "Năm Kinh Nghiệm",
    stat_exp_sub: "Chỉ đạo thực chiến hàng hải & giám định",
    stat_vessels: "Lượt Tàu & Sà Lan",
    stat_vessels_sub: "Đã hoàn thành giám định an toàn",
    stat_response: "Phút Có Mặt Hiện Trường",
    stat_response_sub: "Kể từ khi nhận thông báo chỉ định 24/7",
    stat_accuracy: "Chuẩn Mực Pháp Lý",
    stat_accuracy_sub: "Được P&I, Ngân hàng & Hải quan chấp thuận",

    // Certificate Verification Tool
    track_tag: "CỔNG DỊCH VỤ SỐ APEX INSPECT",
    track_heading: "Xác Thực & Tra Cứu Chứng Thư Giám Định",
    track_desc: "Nhập số Ref biên bản hoặc chứng thư để tra cứu tính xác thực, thông số kỹ thuật tàu, tình trạng phê duyệt và chữ ký số của APEX.",
    track_placeholder: "Nhập số chứng thư (Ví dụ: 26B1386, 26B1332, 26C0812)...",
    track_btn: "Tra Cứu Ngay",
    track_sample_label: "Biên bản mẫu thử nghiệm:",
    modal_header: "Hệ Thống Thẩm Định Chứng Thư APEX INSPECT",
    modal_close_btn: "Đóng Cửa Sổ",

    // Services Section
    srv_tag: "DANH MỤC DỊCH VỤ TOÀN DIỆN",
    srv_heading: "7 Trụ Cột Giám Định Chuyên Sâu Của APEX",
    srv_desc: "Quy trình chuẩn hóa, đội ngũ giàu kinh nghiệm thực chiến và trang thiết bị hiện đại đảm bảo tính chính xác tuyệt đối cho từng chuyến hàng.",
    
    // Filter Buttons
    filter_all: "Tất cả (7)",
    filter_agri: "TACN & Nông Sản",
    filter_marine: "Hàng Hải & Mớn Nước",
    filter_container: "Container & Hàng Đóng",
    filter_liquid: "Xăng Dầu & Hàng Lỏng",
    filter_bulk: "Hàng Rời Công Nghiệp",
    filter_loss: "Tổn Thất & P&I",

    // Service 1: Agri & TACN
    srv1_badge: "TACN & Nông Sản Rời",
    srv1_title: "Giám Định Khối Hàng Thức Ăn Chăn Nuôi (TACN) & Nông Sản",
    srv1_desc: "Khô đậu tương (Soybean meal), ngô hạt, lúa mỳ, cám mỳ viên, bã ngô lên men (DDGS), hạt cải, thạch cao nông sản...",
    srv1_b1_html: "<strong>Draft Survey:</strong> Đo mớn tàu biển & mớn sà lan chuyển tải chính xác.",
    srv1_b2_html: "<strong>Giám sát cân 100%:</strong> Cân cầu cảng, đối soát phiếu cân điện tử.",
    srv1_b3_html: "<strong>Lấy mẫu chuẩn:</strong> Niêm phong đại diện 3 bên theo chuẩn GAFTA / FOSFA.",
    srv1_cta: "Chỉ định giám định mặt hàng này →",

    // Service 2: Marine & Bunker
    srv2_badge: "Hàng Hải & Mớn Nước",
    srv2_title: "Giám Định Mớn Nước Tàu Biển & Nhiên Liệu (Draft & Bunker Survey)",
    srv2_desc: "Đo mớn nước đầu (Initial), giữa chừng (Interim) và kết thúc (Final) cho tàu Handysize, Supramax, Panamax, Capesize...",
    srv2_b1_html: "<strong>Tính toán thủy tĩnh chuẩn xác:</strong> Bù sai số mớm nước, mật độ nước biển, mớn uốn võng (Hogging/Sagging).",
    srv2_b2_html: "<strong>Bunker Survey (BQS):</strong> Đo thể tích nhiên liệu FO, DO, dầu nhờn khi nhận/trả tàu (On/Off-hire).",
    srv2_b3_html: "<strong>Kiểm tra hầm hàng & nắp hầm:</strong> Kiểm tra độ sạch (Hold Cleanliness) và siêu âm độ kín nước (Ultrasonic).",
    srv2_cta: "Chỉ định giám định hàng hải →",

    // Service 3: Container
    srv3_badge: "Container & Hàng Đóng",
    srv3_title: "Giám Định Tình Trạng Container & Giám Sát Đóng/Rút Hàng",
    srv3_desc: "Kiểm tra tình trạng kỹ thuật container rỗng theo chuẩn IICL, giám sát đóng hàng (Stuffing) và rút hàng (Unstuffing)...",
    srv3_b1_html: "<strong>Giám định tình trạng vỏ cont:</strong> Kiểm tra độ kín sáng, kín nước, sàn gỗ, góc khóa gù ISO.",
    srv3_b2_html: "<strong>Giám sát chằng buộc & gia cố (Lashing):</strong> Kiểm tra chèn lót, dây đai dệt, xích sắt an toàn đi biển.",
    srv3_b3_html: "<strong>Kiểm tra niêm chì (Seal check):</strong> Đối chiếu số chì Hải quan & Hãng tàu, kẹp chì bảo mật APEX.",
    srv3_cta: "Chỉ định giám định container →",

    // Service 4: Liquid & Petroleum
    srv4_badge: "Xăng Dầu & Hàng Lỏng",
    srv4_title: "Giám Định Xăng Dầu, Hóa Chất & Hàng Hóa Lỏng",
    srv4_desc: "Xăng dầu thương phẩm, dầu cọ, dầu đậu nành, hóa chất lỏng, cồn, mật rỉ đường, khí hóa lỏng (LPG)...",
    srv4_b1_html: "<strong>Đo tính thể tích tiêu chuẩn:</strong> Đo chiều cao ullage, nhiệt độ, tỷ trọng theo ASTM Tab 54B.",
    srv4_b2_html: "<strong>Line Verification & Dry Tank:</strong> Kiểm tra độ sạch đường ống, két rỗng trước nạp.",
    srv4_b3_html: "<strong>Lấy mẫu đa tầng:</strong> Mặt, giữa, đáy (Top/Middle/Lower) chuẩn ASTM/API MPMS.",
    srv4_cta: "Chỉ định giám định xăng dầu →",

    // Service 5: Industrial Bulk
    srv5_badge: "Hàng Rời & Quặng Khoáng Sản",
    srv5_title: "Giám Định Hàng Rời Công Nghiệp & Hàng Bách Hóa",
    srv5_desc: "Than đá, quặng sắt, bauxite, clinker, phân bón rời/bao, xi măng, sắt thép thành phẩm...",
    srv5_b1_html: "<strong>Draft Survey:</strong> Tàu biển và sà lan chuyên chở than, quặng, clinker.",
    srv5_b2_html: "<strong>Kiểm đếm số lượng (Tallying):</strong> Giám sát phân loại, tính tỷ lệ rách vỡ, hao hụt.",
    srv5_b3_html: "<strong>Gia công mẫu tại hiện trường:</strong> Đo độ ẩm, cỡ hạt, thành phần lý hóa.",
    srv5_cta: "Chỉ định giám định hàng rời →",

    // Service 6: Project Cargo
    srv6_badge: "Thiết Bị & Máy Móc Dự Án",
    srv6_title: "Giám Định Hàng Công Nghiệp, Ô Tô & Máy Móc Thiết Bị",
    srv6_desc: "Dây chuyền thiết bị đồng bộ (mới 100% hoặc đã qua sử dụng), ô tô, xe máy công trình phục vụ thông quan Hải quan.",
    srv6_b1_html: "<strong>Giám định tình trạng & tính đồng bộ:</strong> Đối chiếu Packing List, kiểm tra trầy xước, han gỉ.",
    srv6_b2_html: "<strong>Giám định phục vụ thông quan:</strong> Cấp chứng thư giám định máy móc thiết bị cũ theo Quyết định 18/2019/QĐ-TTg.",
    srv6_b3_html: "<strong>Giám sát bốc dỡ & hạ thủy:</strong> Hàng siêu trường siêu trọng (OOG), thiết bị siêu nặng.",
    srv6_cta: "Chỉ định giám định thiết bị →",

    // Service 7: Damage & P&I
    srv7_badge: "Bảo Hiểm & P&I Club",
    srv7_title: "Giám Định Tổn Thất, Điều Tra Sự Cố & P&I Club Survey",
    srv7_desc: "Đại diện độc lập bảo vệ quyền lợi hợp pháp cho Hội bảo hiểm P&I, công ty bảo hiểm hàng hải và các bên liên quan.",
    srv7_b1_html: "<strong>Điều tra nguyên nhân & mức độ tổn thất:</strong> Hàng ướt, mốc hỏng, cháy nổ, va chạm đâm va trên biển.",
    srv7_b2_html: "<strong>Giám sát cứu nạn hàng hóa:</strong> Phân loại hàng tổn thất, thương thảo hạ giá hoặc bán thanh lý.",
    srv7_b3_html: "<strong>Báo cáo phục vụ khiếu nại (Claim):</strong> Bằng chứng hình ảnh sắc bén, biên bản đối soát đa bên chặt chẽ.",
    srv7_cta: "Chỉ định giám định tổn thất →",

    // Seaport Network Section
    net_tag: "ĐỘ PHỦ SÓNG CẢNG BIỂN TOÀN QUỐC",
    net_heading: "Mạng Lưới Trạm Giám Định Trực Chiến 24/7",
    net_desc: "Bố trí thường trực tại tất cả các vịnh neo đậu và cụm cảng nước sâu trọng điểm, đảm bảo có mặt tại hiện trường chỉ sau 30-45 phút nhận thông báo.",
    net_hp_title: "Cụm Cảng Hải Phòng & Vịnh Neo",
    net_hp_sub: "Trụ sở điều hành chính & Trạm trực ban Đình Vũ",
    net_hp_time: "20 - 30 Phút",
    net_qn_title: "Khu Neo Hạ Long & Cảng Cái Lân",
    net_qn_sub: "Trạm hiện trường thường trực Vịnh Bái Tử Long",
    net_qn_time: "30 - 45 Phút ra phao neo",
    net_mt_title: "Cụm Cảng Miền Trung",
    net_mt_sub: "Trạm hiện trường Nghi Sơn & Đà Nẵng",
    net_mt_time: "40 - 60 Phút",
    net_mn_title: "Cụm Cảng Miền Nam & ĐBSCL",
    net_mn_sub: "Văn phòng liên kết Cái Mép & TP. Hồ Chí Minh",
    net_mn_time: "30 - 45 Phút",

    // Workflow Section
    wf_tag: "QUY TRÌNH CHUẨN ISO/IEC 17020",
    wf_heading: "Quy Trình Tiếp Nhận & Tác Nghiệp 5 Bước Chuyên Nghiệp",
    wf_desc: "Minh bạch, tốc độ và pháp lý chuẩn mực từ khi nhận cuộc gọi đầu tiên đến khi bàn giao chứng thư quyết toán quốc tế.",
    wf_step1_time: "10 - 15 Phút",
    wf_step1_title: "Tiếp Nhận & Lập Kế Hoạch",
    wf_step1_desc: "Xác nhận chỉ định trong 10-15 phút. Rà soát thông số tàu (Ship's Particulars), sơ đồ xếp hàng (Stowage Plan) và điều động phương tiện ca nô tiếp cận.",
    wf_step2_time: "30 - 45 Phút",
    wf_step2_title: "Điều Động Hiện Trường Thần Tốc",
    wf_step2_desc: "Giám định viên có mặt tại mạn tàu hoặc cầu cảng trong 30-45 phút. Họp giao ban đầu bờ (Pre-survey Meeting) cùng Thuyền trưởng, Đại lý và Chủ hàng.",
    wf_step3_time: "Trực tiếp trên tàu",
    wf_step3_title: "Tác Nghiệp Đo Tính & Lấy Mẫu",
    wf_step3_desc: "Đọc mớn nước 6 điểm bằng thước dây chuẩn hoặc ca nô; đo tỷ trọng nước biển; kiểm tra két dằn (Ballast tanks); lấy mẫu niêm chì chuẩn 3 bên.",
    wf_step4_time: "Trong vòng 2 giờ",
    wf_step4_title: "Cấp Báo Cáo Sơ Bộ (Interim Report)",
    wf_step4_desc: "Tính toán sơ bộ khối lượng hàng và lập Báo cáo Hiện trường (Survey Sheet) ký nhận cùng Thuyền trưởng/Đại diện tàu ngay sau khi dứt điểm tác nghiệp.",
    wf_step5_time: "Quyết toán chính thức",
    wf_step5_title: "Phát Hành Chứng Thư Chính Thức",
    wf_step5_desc: "Phát hành Chứng thư giám định bản cứng có dấu nổi bảo mật, chữ ký số và mã QR xác thực trên hệ thống trực tuyến trong vòng 24 giờ.",

    // Equipment Section
    eq_tag: "NĂNG LỰC KỸ THUẬT & TRANG BỊ HIỆN TRƯỜNG",
    eq_heading: "Trang Thiết Bị Đo Lường & Kiểm Định Chuẩn Hóa",
    eq_desc: "100% trang thiết bị hiện trường được kiểm chuẩn định kỳ tại Viện Đo lường Quốc gia (VMI) và các trung tâm QUATEST đạt chuẩn quốc tế.",
    eq1_title: "Bộ Dụng Cụ Lấy Mẫu Nông Sản Chuẩn GAFTA / FOSFA",
    eq1_desc: "Xiên lấy mẫu đa tầng (Spear sampler) bằng inox 316, bộ chia mẫu Jones Riffle Divider đạt chuẩn quốc tế, túi đựng mẫu chuyên dụng có niêm chì chống tráo đổi.",
    eq2_title: "Thước Đo Mớn Nước & Cảm Biến Nghiêng Kỹ Thuật Số",
    eq2_desc: "Dụng cụ đo mớn nước chuyên dụng trong điều kiện sóng lắc, máy đo góc nghiêng điện tử (Digital Inclinometer) độ phân giải 0.01 độ phục vụ hiệu chỉnh trim/list.",
    eq3_title: "Thước Đo Dầu Điện Tử UTI MMC & Khí Độc Honeywell",
    eq3_desc: "Thước đo dầu kín MMC (Ullage - Temperature - Interface) kiểm chuẩn định kỳ, máy đo nồng độ khí đa chỉ tiêu (O2, LEL, CO, H2S) bảo đảm an toàn trước khi vào hầm hàng.",
    eq4_title: "Thiết Bị Siêu Âm Độ Kín Nắp Hầm Hàng Cygnus Hatch",
    eq4_desc: "Công nghệ siêu âm không phá hủy (Ultrasonic Hatch Cover Tester) phát hiện chính xác vị trí rò rỉ gioăng cao su nắp hầm hàng tàu biển theo quy chuẩn P&I Club.",
    eq5_title: "Bộ Tỷ Trọng Kế Chuẩn & Nhiệt Kế Điện Tử ASTM",
    eq5_desc: "Bộ Hydrometer đo tỷ trọng nước biển và tỷ trọng xăng dầu dải đo chuẩn xác cao, nhiệt kế điện tử chuẩn hóa theo tiêu chuẩn ASTM E1 phục vụ tính toán thể tích tiêu chuẩn.",
    eq6_title: "Hệ Thống Niêm Phong Kẹp Chì Cáp Thép & Kìm Bấm Bảo Mật",
    eq6_desc: "Kẹp chì cáp thép định danh khắc laser mã số bảo mật chống giả mạo, kìm bấm chì chuyên dụng có logo APEX được Hải quan và Hãng tàu công nhận.",

    // About Section
    abt_tag: "VỀ CÔNG TY CỔ PHẦN KIỂM ĐỊNH VÀ GIÁM ĐỊNH APEX",
    abt_heading: "Tổ Chức Giám Định Hàng Hải Độc Lập Hàng Đầu Việt Nam",
    abt_desc: "Được thành lập với sứ mệnh bảo vệ sự công bằng, minh bạch và an toàn pháp lý cho mọi giao dịch thương mại hàng hải quốc tế.",
    abt_p1_title: "Độc Lập & Khách Quan Tuyệt Đối",
    abt_p1_desc: "Không chịu bất kỳ áp lực thương mại nào. Mọi số liệu đo tính đều dựa trên cơ sở khoa học và chứng cứ hiện trường không thể bác bỏ.",
    abt_p2_title: "Đội Ngũ Giám Định Viên Dạn Dày Thực Chiến",
    abt_p2_desc: "100% nhân sự tốt nghiệp Đại học Hàng hải Việt Nam, nắm giữ chứng chỉ Sĩ quan boong, Máy trưởng và Giám định viên hàng hải quốc tế.",
    abt_p3_title: "Quy Trình Chuẩn Quốc Tế ISO/IEC 17020",
    abt_p3_desc: "Hệ thống quản lý chất lượng giám định loại A (Type A Inspection Body), kiểm chuẩn thiết bị định kỳ và bảo mật hồ sơ 10 năm.",

    // Nomination Form Section
    nom_tag: "TIẾP NHẬN CHỈ ĐỊNH 24/7",
    nom_heading: "Gửi Yêu Cầu Giám Định Hiện Trường",
    nom_desc: "Điền thông tin chỉ định giám định dưới đây. Ban điều phối hiện trường APEX sẽ liên hệ phản hồi xác nhận trong vòng 15 phút.",
    nom_lbl_service: "1. Loại hình dịch vụ giám định *",
    nom_lbl_port: "2. Cụm Cảng Biển / Khu Neo tác nghiệp *",
    nom_lbl_vessel: "Tên Tàu / Sà lan / Container *",
    nom_lbl_cargo: "Tên mặt hàng & Khối lượng B/L",
    nom_lbl_date: "Thời gian tàu cập / dự kiến làm hàng",
    nom_lbl_name: "Họ tên người chỉ định *",
    nom_lbl_company: "Tên Công ty / Đơn vị *",
    nom_lbl_phone: "Số điện thoại liên hệ *",
    nom_lbl_notes: "Ghi chú thêm về yêu cầu tác nghiệp (nếu có)",
    nom_btn_submit: "Gửi Chỉ Định & Nhận Xác Nhận Tác Nghiệp",
    nom_emergency_call: "Cần hỗ trợ khẩn cấp ngay tại tàu? Vui lòng gọi trực ban hotline 24/7:",

    // FAQ Section
    faq_tag: "GIẢI ĐÁP NGHIỆP VỤ",
    faq_heading: "Câu Hỏi Thường Gặp Về Dịch Vụ Giám Định",
    faq_q1: "Thời gian Giám định viên APEX có mặt tại tàu/khu neo sau khi nhận chỉ định là bao lâu?",
    faq_a1: "Tại các cụm cảng trọng điểm như Cảng Hải Phòng (Đình Vũ, Lạch Huyện, sông Cấm) và Cảng Quảng Ninh (khu neo Hạ Long, Cái Lân, Cẩm Phả), giám định viên APEX có mặt tại hiện trường trong vòng 30 - 45 phút. Đội tàu ca nô cao tốc luôn ứng trực 24/7 để tiếp cận mạn tàu ngoài vịnh nhanh nhất.",
    faq_q2: "Chứng thư giám định của APEX INSPECT có giá trị pháp lý như thế nào?",
    faq_a2: "Chứng thư giám định của APEX INSPECT được ban hành hoàn toàn độc lập, khách quan theo Luật Thương mại Việt Nam và các công ước hàng hải quốc tế. Chứng thư có đầy đủ giá trị pháp lý để quyết toán hợp đồng ngoại thương, mở thư tín dụng L/C, làm thủ tục hải quan thông quan và làm chứng cứ trước Tòa án, Trọng tài thương mại hoặc các Hội bảo hiểm P&I quốc tế.",
    faq_q3: "Khách hàng có được nhận báo cáo tiến độ trong quá trình làm hàng không?",
    faq_a3: "Có. APEX triển khai hệ thống báo cáo thời gian thực: Sau mỗi ca làm việc (Shift Report), giám định viên sẽ gửi cập nhật khối lượng đã dỡ, tình trạng hầm hàng và hình ảnh hiện trường qua Email hoặc Zalo nhóm. Ngay khi kết thúc làm hàng, Báo cáo sơ bộ (Interim Report) được cấp ngay tại hiện trường.",
    faq_q4: "Quy định lưu mẫu và gửi mẫu phân tích đối với hàng nông sản & thức ăn chăn nuôi?",
    faq_a4: "Mẫu hàng được lấy bằng dụng cụ chuyên dụng (Spear sampler) theo đúng quy chuẩn GAFTA / FOSFA, chia đều bằng bộ chia mẫu Jones và niêm phong kẹp chì đại diện 3 bên (Chủ tàu/Đại lý - Chủ hàng - APEX INSPECT). Mẫu được bàn giao cho phòng Lab chỉ định và lưu trữ tại kho mẫu APEX trong thời gian tối thiểu 90 ngày phục vụ đối soát.",

    // Footer
    footer_company_vi: "CÔNG TY CỔ PHẦN KIỂM ĐỊNH VÀ GIÁM ĐỊNH APEX",
    footer_company_en: "APEX INSPECTION AND SURVEY JOINT STOCK COMPANY",
    footer_tagline: "Tổ chức giám định độc lập chuyên nghiệp phục vụ chuỗi cung ứng hàng hải, xuất nhập khẩu và thương mại quốc tế.",
    footer_headquarters: "Trụ sở chính: Tổ 32, Phường An Biên, TP. Hải Phòng, Việt Nam",
    footer_hotline_label: "Hotline Nghiệp vụ (24/7):",
    footer_email_label: "Email:",
    footer_website_label: "Website:",
    footer_links_title: "Dịch Vụ Trọng Điểm",
    footer_coverage_title: "Mạng Lưới Trực Chiến",
    footer_legal_title: "Chuẩn Mực & Pháp Lý",
    footer_copyright: "© 2026 CÔNG TY CỔ PHẦN KIỂM ĐỊNH VÀ GIÁM ĐỊNH APEX. All rights reserved."
  },

  en: {
    // Announcement & Top Bar
    top_readiness: "24/7 Field Operations Duty",
    top_port_cluster: "Hai Phong & Quang Ninh (Ha Long, Cai Lan) port clusters ready for deployment within 30-45 mins",
    
    // Header Brand & Navigation
    company_full_vi: "CÔNG TY CỔ PHẦN KIỂM ĐỊNH VÀ GIÁM ĐỊNH APEX",
    company_full_en: "APEX INSPECTION AND SURVEY JOINT STOCK COMPANY",
    company_short_label: "SHORT NAME:",
    company_short_name: "APEX INSPECT",
    company_tax_id: "TAX ID: 0202240957",
    nav_about: "About APEX",
    nav_services: "Inspection Services",
    nav_capabilities: "Capacity & Gear",
    nav_network: "Port Coverage",
    nav_workflow: "24/7 Workflow",
    nav_tracking: "Verify Certificate",
    nav_tracking_btn: "Verify",
    btn_nominate: "Nominate Survey 24/7",
    mobile_duty: "24/7 MARINE SURVEY",

    // Hero Section
    hero_lang_vi_tag: "VIETNAMESE",
    hero_lang_en_tag: "ENGLISH",
    hero_tag: "INDEPENDENT CARGO & MARINE SURVEY ORGANIZATION",
    hero_title_html: "Independent • <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-200\">Accurate</span> • <span class=\"text-rose-400\">Trusted</span> For Every Vessel & Cargo",
    hero_desc: "A steadfast partner to Shipowners, Charterers, Traders, Logistics and P&I Clubs. Safeguarding your legal and commercial interests with authoritative technical certificates, mobilized on-site in 30-60 minutes across all major Vietnamese ports.",
    hero_btn_req: "Submit Nomination 24/7",
    hero_btn_track: "Verify Certificate",
    hero_btn_profile: "Download Profile (27-Page PDF)",
    trust_iso: "ISO/IEC 17020 Standard",
    trust_gafta: "GAFTA & FOSFA Sampling Rules",
    trust_surveyors: "100% Maritime University Surveyors",

    // Hero Right Highlight Cards
    hero_card1_title: "Rapid Mobilization (30 - 60 Mins)",
    hero_card1_desc: "Certified marine surveyors stationed 24/7 across Ha Long, Cai Lan, Cam Pha, Dinh Vu anchorages and deepwater berths.",
    hero_card2_title: "On-Site Interim Survey Report",
    hero_card2_desc: "Shift-by-shift updates via Email/Zalo and immediate on-site Interim Report issued upon vessel cargo completion.",
    hero_card3_title: "Uncompromised Legal Validity",
    hero_card3_desc: "APEX INSPECT survey certificates serve as definitive trade settlement evidence, recognized by Customs, Courts, and P&I Clubs.",

    // Stats Bar
    stat_exp: "Years Experience",
    stat_exp_sub: "Field maritime command & technical surveys",
    stat_vessels: "Vessels & Barges",
    stat_vessels_sub: "Successfully surveyed safely",
    stat_response: "Mins Mobilization",
    stat_response_sub: "Upon receiving 24/7 survey nomination",
    stat_accuracy: "Legal Conformity",
    stat_accuracy_sub: "Accepted by P&I Clubs, Banks & Customs",

    // Certificate Verification Tool
    track_tag: "APEX DIGITAL VERIFICATION PORTAL",
    track_heading: "Online Inspection Certificate Verification",
    track_desc: "Enter certificate or survey report reference number to verify authenticity, vessel particulars, approval status, and digital signatures.",
    track_placeholder: "Enter certificate ref code (e.g. 26B1386, 26B1332, 26C0812)...",
    track_btn: "Verify Now",
    track_sample_label: "Quick verified samples:",
    modal_header: "APEX INSPECT Certificate Verification System",
    modal_close_btn: "Close Window",

    // Services Section
    srv_tag: "COMPREHENSIVE SERVICE PORTFOLIO",
    srv_heading: "APEX's 7 Core Inspection Capabilities",
    srv_desc: "Standardized procedures, veteran maritime surveyors, and modern calibrated equipment ensuring absolute precision for every cargo.",
    
    // Filter Buttons
    filter_all: "All Services (7)",
    filter_agri: "Agri & Feedstuffs",
    filter_marine: "Marine & Draft Survey",
    filter_container: "Containers & Cargo",
    filter_liquid: "Petroleum & Chemical",
    filter_bulk: "Industrial Bulk Cargo",
    filter_loss: "Damage & P&I Survey",

    // Service 1: Agri & TACN
    srv1_badge: "Agri-Bulk & Animal Feed",
    srv1_title: "Inspection of Animal Feedstuffs (Feed) & Agricultural Commodities",
    srv1_desc: "Soybean meal, yellow corn, milling wheat, wheat pollard pellets, DDGS, canola meal, agricultural gypsum...",
    srv1_b1_html: "<strong>Draft Survey:</strong> High-precision draft surveys for ocean bulkers and transshipment barges.",
    srv1_b2_html: "<strong>100% Weighbridge Supervision:</strong> Port electronic scale monitoring and reconciliation.",
    srv1_b3_html: "<strong>Standardized Sampling:</strong> 3-party composite sampling under strict GAFTA & FOSFA rules.",
    srv1_cta: "Nominate survey for this cargo →",

    // Service 2: Marine & Bunker
    srv2_badge: "Marine & Vessel Survey",
    srv2_title: "Draft Survey & Bunker Quantity Survey (BQS)",
    srv2_desc: "Initial, interim, and final draft surveys for Handysize, Supramax, Panamax, and Capesize bulk carriers...",
    srv2_b1_html: "<strong>Hydrostatic Computations:</strong> Accurate correction for trim, water density, ballast, and hogging/sagging.",
    srv2_b2_html: "<strong>Bunker Survey (BQS):</strong> Sounding and verification of FO/DO/lubricants upon on/off-hire.",
    srv2_b3_html: "<strong>Hold & Hatch Inspection:</strong> Hold cleanliness certification and ultrasonic watertightness testing.",
    srv2_cta: "Nominate marine survey →",

    // Service 3: Container
    srv3_badge: "Container & Packaging",
    srv3_title: "Container Condition Inspection & Stuffing/Unstuffing Supervision",
    srv3_desc: "Technical container condition inspection under IICL standards, stuffing and destuffing supervision...",
    srv3_b1_html: "<strong>Container Structural Audit:</strong> Light/watertightness tests, wooden floor, ISO corner castings.",
    srv3_b2_html: "<strong>Lashing & Securing Survey:</strong> Dunnage inspection, polyester web lashings, and heavy chains.",
    srv3_b3_html: "<strong>Seal Integrity Verification:</strong> Verification of Customs & carrier high-security bolt seals.",
    srv3_cta: "Nominate container survey →",

    // Service 4: Liquid & Petroleum
    srv4_badge: "Petroleum & Chemical",
    srv4_title: "Petroleum, Chemical & Liquid Cargo Survey",
    srv4_desc: "Commercial petroleum products, palm oil, soybean oil, bulk liquid chemicals, ethanol, molasses, LPG...",
    srv4_b1_html: "<strong>Standardized Volume Gauging:</strong> Ullage, temperature, density measurements under ASTM Tab 54B.",
    srv4_b2_html: "<strong>Line Verification & Dry Tank:</strong> Pipe cleanliness and empty tank inspection prior to loading.",
    srv4_b3_html: "<strong>Multi-level Sampling:</strong> Top, middle, lower sampling under ASTM / API MPMS standards.",
    srv4_cta: "Nominate liquid cargo survey →",

    // Service 5: Industrial Bulk
    srv5_badge: "Industrial Bulk & Minerals",
    srv5_title: "Industrial Bulk Minerals & General Cargo Survey",
    srv5_desc: "Steam coal, iron ore, bauxite, clinker, bagged/bulk fertilizers, cement, finished steel products...",
    srv5_b1_html: "<strong>Draft Survey:</strong> Specialized draft surveys for coal, ore, and clinker bulk vessels.",
    srv5_b2_html: "<strong>Quantity Tallying:</strong> Piece-by-piece tallying, cargo classification, and damage calculation.",
    srv5_b3_html: "<strong>On-Site Sample Preparation:</strong> Moisture, grain size screening, and chemical assay preparation.",
    srv5_cta: "Nominate bulk cargo survey →",

    // Service 6: Project Cargo
    srv6_badge: "Machinery & Project Cargo",
    srv6_title: "Industrial Equipment, Automotive & Project Machinery Survey",
    srv6_desc: "Turnkey machinery production lines, imported brand new/used equipment, and construction vehicles.",
    srv6_b1_html: "<strong>Condition & Completeness:</strong> Packing list reconciliation, scratches, deformation, and rust inspection.",
    srv6_b2_html: "<strong>Customs Clearance Certification:</strong> Used machinery inspection per Prime Minister Decision 18/2019.",
    srv6_b3_html: "<strong>Heavy-Lift & OOG Supervision:</strong> Safe crane lifting, stowage, and barge roll-on/roll-off oversight.",
    srv6_cta: "Nominate machinery survey →",

    // Service 7: Damage & P&I
    srv7_badge: "Marine Insurance & P&I",
    srv7_title: "Damage Survey, Casualty Investigation & P&I Club Representation",
    srv7_desc: "Independent representation safeguarding legal rights for P&I Clubs, marine underwriters, and shipowners.",
    srv7_b1_html: "<strong>Causation & Extent Investigation:</strong> Wet damage, seawater ingress, mould, fire, and collision assessment.",
    srv7_b2_html: "<strong>Cargo Salvage & Mitigation:</strong> Segregation of sound/damaged cargo, salvage sales, loss mitigation.",
    srv7_b3_html: "<strong>Formal Claim Survey Reports:</strong> Definitive photographic logs and joint survey minutes for legal claims.",
    srv7_cta: "Nominate damage survey →",

    // Seaport Network Section
    net_tag: "NATIONWIDE SEAPORT FOOTPRINT",
    net_heading: "24/7 Field Station Network Across Vietnam",
    net_desc: "Stationed continuously at all anchorage areas and deepwater seaports, guaranteeing rapid on-site arrival within 30-45 minutes.",
    net_hp_title: "Hai Phong Port Cluster & Anchorages",
    net_hp_sub: "Main Operational HQ & Dinh Vu Field Station",
    net_hp_time: "20 - 30 Mins",
    net_qn_title: "Ha Long Anchorages & Cai Lan Port",
    net_qn_sub: "Bai Tu Long Bay Permanent Field Station",
    net_qn_time: "30 - 45 Mins offshore",
    net_mt_title: "Central Vietnam Seaports",
    net_mt_sub: "Nghi Son & Da Nang Field Stations",
    net_mt_time: "40 - 60 Mins",
    net_mn_title: "Southern Ports & Mekong Delta",
    net_mn_sub: "Cai Mep & Ho Chi Minh City Liaison",
    net_mn_time: "30 - 45 Mins",

    // Workflow Section
    wf_tag: "ISO/IEC 17020 STANDARD WORKFLOW",
    wf_heading: "5-Step Professional Survey Workflow",
    wf_desc: "Transparent, rapid, and legally sound from first contact to delivering the final international settlement certificate.",
    wf_step1_time: "10 - 15 Mins",
    wf_step1_title: "Nomination Intake & Planning",
    wf_step1_desc: "Acknowledge nomination within 10-15 mins. Review ship particulars, stowage plan, and assign pilot boat dispatch.",
    wf_step2_time: "30 - 45 Mins",
    wf_step2_title: "Rapid Field Mobilization",
    wf_step2_desc: "Surveyor on-site at vessel side or berth within 30-45 mins. Pre-survey briefing with Master, Chief Officer, Agent, and Receivers.",
    wf_step3_time: "Direct Onboard",
    wf_step3_title: "On-Site Surveying & Sampling",
    wf_step3_desc: "6-point draft reading via calibrated tape/pilot boat; water density sounding; ballast tank sounding; 3-party composite sampling.",
    wf_step4_time: "Within 2 Hours",
    wf_step4_title: "Interim Survey Report Issuance",
    wf_step4_desc: "Compute preliminary cargo weight and issue joint Field Survey Sheet signed with Captain/Chief Officer on-site.",
    wf_step5_time: "Official Settlement",
    wf_step5_title: "Final Official Certificate Delivery",
    wf_step5_desc: "Issue final accredited certificate with embossed security seal, digital signature, and online verification QR code within 24 hours.",

    // Equipment Section
    eq_tag: "TECHNICAL CAPACITY & FIELD EQUIPMENT",
    eq_heading: "Standardized Calibrated Measurement Instruments",
    eq_desc: "100% field measurement devices are periodically calibrated at the Vietnam Metrology Institute (VMI) and accredited QUATEST laboratories.",
    eq1_title: "GAFTA / FOSFA Agricultural Sampling Kit",
    eq1_desc: "Stainless steel 316 multi-compartment spear samplers, international Jones Riffle Dividers, tamper-evident sample bags with security cable seals.",
    eq2_title: "Draft-Gauge & Electronic Inclinometer",
    eq2_desc: "Specialized wave-dampening draft reading tools and 0.01-degree digital inclinometers for exact list and trim correction.",
    eq3_title: "MMC UTI Electronic Sounding Tape & Honeywell Gas Detector",
    eq3_desc: "Calibrated MMC Ullage-Temperature-Interface tapes and multi-gas detectors (O2, LEL, CO, H2S) ensuring enclosed space entry safety.",
    eq4_title: "Cygnus Ultrasonic Hatch Cover Tester",
    eq4_desc: "Non-destructive ultrasonic testing detecting minute rubber packing leaks across vessel cargo hatch covers per P&I Club rules.",
    eq5_title: "ASTM Standard Hydrometers & Digital Thermometers",
    eq5_desc: "High-accuracy hydrometer sets for seawater density and petroleum BQS, paired with ASTM E1 calibrated temperature probes.",
    eq6_title: "High-Security Cable Seals & Registered Crimpers",
    eq6_desc: "Laser-engraved anti-tamper cable seals and dedicated APEX-stamped crimping pliers accepted by Customs and container lines.",

    // About Section
    abt_tag: "ABOUT APEX INSPECTION AND SURVEY JSC",
    abt_heading: "Vietnam's Leading Independent Marine Survey Organization",
    abt_desc: "Founded with the mission to safeguard fairness, transparency, and legal security for all international maritime trade transactions.",
    abt_p1_title: "Absolute Independence & Impartiality",
    abt_p1_desc: "Free from commercial bias. Every survey finding is anchored in empirical science and unassailable physical evidence.",
    abt_p2_title: "Veteran Marine Surveyors & Master Mariners",
    abt_p2_desc: "100% surveyors are alumni of Vietnam Maritime University, holding Master Mariner, Chief Engineer, and international survey licenses.",
    abt_p3_title: "ISO/IEC 17020 Standardized Process",
    abt_p3_desc: "Type A accredited inspection body management, continuous equipment calibration, and 10-year archival security.",

    // Nomination Form Section
    nom_tag: "24/7 ONLINE SURVEY NOMINATION",
    nom_heading: "Submit Field Survey Nomination",
    nom_desc: "Complete the survey nomination details below. APEX Operations Desk will contact and confirm within 15 minutes.",
    nom_lbl_service: "1. Inspection Service Type *",
    nom_lbl_port: "2. Port Cluster / Anchorage Area *",
    nom_lbl_vessel: "Vessel / Barge / Container Name *",
    nom_lbl_cargo: "Cargo Description & B/L Quantity",
    nom_lbl_date: "ETA / Expected Cargo Commencement",
    nom_lbl_name: "Contact Person Name *",
    nom_lbl_company: "Company / Organization Name *",
    nom_lbl_phone: "Contact Phone / Hotline *",
    nom_lbl_notes: "Additional Technical Instructions (if any)",
    nom_btn_submit: "Submit Survey Nomination & Receive Confirmation",
    nom_emergency_call: "Need urgent on-board attendance? Call our 24/7 duty desk hotline:",

    // FAQ Section
    faq_tag: "TECHNICAL FAQ",
    faq_heading: "Frequently Asked Questions About Survey Services",
    faq_q1: "How fast can an APEX marine surveyor board a vessel upon nomination?",
    faq_a1: "Across major hubs like Hai Phong (Dinh Vu, Lach Huyen, Cam River) and Quang Ninh (Ha Long anchorages, Cai Lan, Cam Pha), our surveyors arrive on-site within 30 - 45 minutes. Dedicated pilot speedboats are on standby 24/7 for offshore bay boardings.",
    faq_q2: "What is the legal validity of an APEX INSPECT survey certificate?",
    faq_a2: "APEX INSPECT certificates are issued completely independently under the Vietnam Commercial Law and international maritime conventions. They possess full legal validity for international trade settlements, L/C negotiations, Customs clearance, and commercial litigation before Courts or P&I Clubs.",
    faq_q3: "Do clients receive real-time updates during cargo operations?",
    faq_a3: "Yes. APEX deploys real-time field reporting: after each working shift (Shift Report), surveyors transmit discharged tonnage, hold status, and photographic evidence via Email or dedicated group channels. An Interim Report is issued immediately upon completion on-site.",
    faq_q4: "What are the sampling and retention rules for agricultural commodities?",
    faq_a4: "Sampling is executed via dedicated spear samplers adhering strictly to GAFTA / FOSFA standards, homogenized with Jones dividers, and sealed under 3-party custody. Samples are delivered to designated accredited testing labs and securely retained in APEX sample archives for a minimum of 90 days.",

    // Footer
    footer_company_vi: "CÔNG TY CỔ PHẦN KIỂM ĐỊNH VÀ GIÁM ĐỊNH APEX",
    footer_company_en: "APEX INSPECTION AND SURVEY JOINT STOCK COMPANY",
    footer_tagline: "Independent professional survey organization serving global maritime supply chains, shipping lines, and international trade.",
    footer_headquarters: "Head Office: Group 32, An Bien Ward, Hai Phong City, Vietnam",
    footer_hotline_label: "24/7 Operational Hotline:",
    footer_email_label: "Email:",
    footer_website_label: "Website:",
    footer_links_title: "Core Services",
    footer_coverage_title: "Port Coverage",
    footer_legal_title: "Standards & Accreditations",
    footer_copyright: "© 2026 APEX INSPECTION AND SURVEY JOINT STOCK COMPANY. All rights reserved."
  }
};

// 2. Interactive Certificate Database (Bilingual Support)
const CERTIFICATE_DATABASE = {
  "26B1386": {
    ref: "26B1386",
    vessel: "M/V PACIFIC GLORY",
    callSign: "3FGL9 / IMO 9681452",
    cargoVi: "Ngô hạt dỡ rời (Yellow Corn in Bulk)",
    cargoEn: "Yellow Corn in Bulk",
    declaredBL: "62,500.000 MT",
    surveyTypeVi: "Initial & Final Draft Survey (Giám định Mớn nước lần đầu & lần cuối)",
    surveyTypeEn: "Initial & Final Draft Survey",
    locationVi: "Khu neo Hạ Long & Cầu cảng Cái Lân, Quảng Ninh",
    locationEn: "Ha Long Anchorage & Cai Lan Berth, Quang Ninh",
    surveyDate: "05/11/2026 - 08/11/2026",
    surveyorVi: "Bùi Thanh Cương (Lead Surveyor #APX-01)",
    surveyorEn: "Bui Thanh Cuong (Lead Marine Surveyor #APX-01)",
    statusVi: "ĐÃ PHÁT HÀNH CHÍNH THỨC",
    statusEn: "OFFICIALLY ISSUED",
    findingsVi: "Khối lượng hàng thực nhận sai lệch -0.042% so với B/L (nằm trong dung sai thương mại quốc tế). Hầm hàng sạch khô, không ngấm nước biển.",
    findingsEn: "Actual outturn cargo deviation of -0.042% vs B/L (within international trade tolerance). Cargo holds dry, sound, no seawater ingress.",
    legalValidityVi: "Chứng thư có đầy đủ giá trị pháp lý quyết toán hợp đồng ngoại thương & thông quan Hải quan.",
    legalValidityEn: "Full legal standing for foreign trade sales contract settlement and Vietnam Customs clearance."
  },
  "26B1332": {
    ref: "26B1332",
    vessel: "M/V STAR VOYAGER",
    callSign: "VRHQ7 / IMO 9452109",
    cargoVi: "Khô đậu tương dỡ rời (Soybean Meal Pellets)",
    cargoEn: "Soybean Meal Pellets in Bulk",
    declaredBL: "48,200.000 MT",
    surveyTypeVi: "Barge Draft Survey & Tallying (Giám định Mớn sà lan & Cân 100%)",
    surveyTypeEn: "Barge Draft Survey & 100% Scale Supervision",
    locationVi: "Cụm Cảng Hải Phòng (Cảng Đình Vũ)",
    locationEn: "Hai Phong Port Cluster (Dinh Vu Port)",
    surveyDate: "01/11/2026 - 04/11/2026",
    surveyorVi: "Nguyễn Văn Hùng (Marine Surveyor #APX-06)",
    surveyorEn: "Nguyen Van Hung (Marine Surveyor #APX-06)",
    statusVi: "ĐÃ PHÁT HÀNH CHÍNH THỨC",
    statusEn: "OFFICIALLY ISSUED",
    findingsVi: "Đã giám sát 100% cân cầu cảng điện tử và niêm phong kẹp chì toàn bộ sà lan chuyển tải. Lấy mẫu phân tích GAFTA/FOSFA đại diện 3 bên.",
    findingsEn: "100% electronic weighbridge supervision completed; all transshipment barges sealed. 3-party composite sampling under GAFTA/FOSFA rules.",
    legalValidityVi: "Hồ sơ đính kèm phiếu cân điện tử và biên bản lấy mẫu niêm phong 3 bên hợp lệ.",
    legalValidityEn: "Accompanied by verified electronic scale tally sheets and formal 3-party joint custody sampling minutes."
  },
  "26C0812": {
    ref: "26C0812",
    vessel: "M/T OCEAN GEM",
    callSign: "9V8214 / IMO 9811204",
    cargoVi: "Xăng khoáng RON 95-III (Gasoline in Bulk)",
    cargoEn: "Motor Gasoline RON 95-III in Bulk",
    declaredBL: "14,500.000 m³ (tại 15°C)",
    surveyTypeVi: "Petroleum Cargo & Bunker Survey (BQS, Đo Ullage & Tỷ trọng)",
    surveyTypeEn: "Petroleum Cargo & Bunker Quantity Survey (BQS)",
    locationVi: "Khu neo Cảng Nghi Sơn, Thanh Hóa",
    locationEn: "Nghi Son Port Anchorage, Thanh Hoa",
    surveyDate: "07/11/2026",
    surveyorVi: "Trần Anh Tuấn (Liquid Cargo Specialist #APX-03)",
    surveyorEn: "Tran Anh Tuan (Liquid Cargo Specialist #APX-03)",
    statusVi: "ĐÃ PHÁT HÀNH CHÍNH THỨC",
    statusEn: "OFFICIALLY ISSUED",
    findingsVi: "Đo tính thể tích tiêu chuẩn ASTM Tab 54B, không phát hiện nước tự do đáy két. Giám sát khử trùng làm sạch đường ống trước khi bơm.",
    findingsEn: "Standard volume calculation via ASTM Tab 54B; nil free water detected. Pipeline cleanliness verified prior to cargo discharge.",
    legalValidityVi: "Chứng thư được chấp thuận làm chứng từ thanh toán L/C quốc tế.",
    legalValidityEn: "Accepted as primary documentary evidence for commercial bank Letter of Credit (L/C) negotiation."
  },
  "26D0499": {
    ref: "26D0499",
    vessel: "M/V WAN HAI 315",
    callSign: "BL889 / IMO 9324567",
    cargoVi: "85 x 40'HC Dây chuyền cơ khí chính xác",
    cargoEn: "85 x 40'HC Precision Machinery Production Line",
    declaredBL: "85 Containers (1,420 Tons)",
    surveyTypeVi: "Container Condition & Unstuffing Survey (Rút hàng & Giám định tổn thất)",
    surveyTypeEn: "Container Condition & Unstuffing / Damage Survey",
    locationVi: "Bãi Depot Nam Đình Vũ, Hải Phòng",
    locationEn: "Nam Dinh Vu Depot Yard, Hai Phong",
    surveyDate: "09/11/2026",
    surveyorVi: "Lê Minh Đức (Container Inspector #APX-08)",
    surveyorEn: "Le Minh Duc (Container Inspector #APX-08)",
    statusVi: "ĐANG TÁC NGHIỆP HIỆN TRƯỜNG",
    statusEn: "IN-PROGRESS ON SITE",
    findingsVi: "Đang tiến hành kiểm tra tình trạng số chì hải quan, kẹp chì hãng tàu và giám sát dỡ hàng an toàn vào kho bảo quản.",
    findingsEn: "Currently verifying carrier and Customs bolt seals, overseeing destuffing operations into secure warehouse custody.",
    legalValidityVi: "Báo cáo sơ bộ (Interim Report) sẽ được phát hành trong vòng 2 giờ sau khi dỡ xong container cuối cùng.",
    legalValidityEn: "Interim Survey Report will be issued within 2 hours of the final container destuffing."
  }
};

let currentLang = "vi";

// 3. Language Controller
function initLanguageToggle() {
  const savedLang = localStorage.getItem("apex_lang");
  if (savedLang && (savedLang === "vi" || savedLang === "en")) {
    currentLang = savedLang;
  }

  // Bind click handlers to all lang toggle buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });

  // Apply initial language
  setLanguage(currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("apex_lang", lang);
  document.documentElement.lang = lang;

  // Update button active styles
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const isTarget = btn.dataset.lang === lang;
    if (isTarget) {
      btn.classList.add("bg-brand-sapphire", "text-white");
      btn.classList.remove("text-slate-400", "text-slate-600", "hover:text-white", "hover:text-brand-sapphire");
    } else {
      btn.classList.remove("bg-brand-sapphire", "text-white");
      btn.classList.add("text-slate-400", "hover:text-white");
    }
  });

  // 1. Text elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang] && I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  // 2. HTML elements (with spans or rich accents)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (I18N[lang] && I18N[lang][key]) {
      el.innerHTML = I18N[lang][key];
    }
  });

  // 3. Input Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (I18N[lang] && I18N[lang][key]) {
      el.placeholder = I18N[lang][key];
    }
  });

  // Re-render Lucide icons if available
  if (window.lucide && typeof lucide.createIcons === "function") {
    lucide.createIcons();
  }
}

// 4. Service Category Filter
function initServiceFilter() {
  const filterBtns = document.querySelectorAll(".service-filter-btn");
  const serviceCards = document.querySelectorAll(".service-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      // Active button style
      filterBtns.forEach(b => {
        b.classList.remove("bg-brand-sapphire", "text-white", "shadow-md", "shadow-brand-sapphire/20");
        b.classList.add("bg-white", "text-slate-700", "border", "border-slate-200");
      });
      btn.classList.remove("bg-white", "text-slate-700", "border", "border-slate-200");
      btn.classList.add("bg-brand-sapphire", "text-white", "shadow-md", "shadow-brand-sapphire/20");

      // Filter cards
      serviceCards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
          card.classList.add("fade-in");
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 5. Certificate Verification Tool
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
        alert(currentLang === "vi" ? "Vui lòng nhập số chứng thư (Ví dụ: 26B1386)" : "Please enter certificate ref number (e.g. 26B1386)");
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

    const isEn = currentLang === "en";

    if (data) {
      modalBody.innerHTML = `
        <div class="space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-brand-sapphire">
                ${isEn ? "Official Digital Inspection Verification" : "Xác thực chứng thư giám định số điện tử"}
              </span>
              <h3 class="text-2xl font-extrabold text-slate-900 font-mono">REF NO: ${data.ref}</h3>
            </div>
            <div class="stamp-verified">
              ${isEn ? data.statusEn : data.statusVi}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span class="text-slate-500 block text-xs">${isEn ? "Vessel / Craft Name:" : "Tên phương tiện / Tàu biển:"}</span>
              <strong class="text-slate-900 font-bold text-base">${data.vessel}</strong>
              <span class="text-xs text-slate-500 block">${data.callSign}</span>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">${isEn ? "Survey Scope / Category:" : "Loại hình giám định:"}</span>
              <strong class="text-slate-900">${isEn ? data.surveyTypeEn : data.surveyTypeVi}</strong>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">${isEn ? "Cargo & Declared B/L Quantity:" : "Tên hàng & Số lượng B/L:"}</span>
              <strong class="text-slate-900">${isEn ? data.cargoEn : data.cargoVi} (${data.declaredBL})</strong>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">${isEn ? "Inspection Location:" : "Địa điểm giám định:"}</span>
              <strong class="text-slate-900">${isEn ? data.locationEn : data.locationVi}</strong>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">${isEn ? "Survey Date / Duration:" : "Thời gian tác nghiệp:"}</span>
              <span class="text-slate-800 font-medium">${data.surveyDate}</span>
            </div>
            <div>
              <span class="text-slate-500 block text-xs">${isEn ? "Lead Marine Surveyor:" : "Giám định viên phụ trách:"}</span>
              <span class="text-slate-800 font-semibold">${isEn ? data.surveyorEn : data.surveyorVi}</span>
            </div>
          </div>

          <div class="border-l-4 border-brand-sapphire bg-brand-lightBlue/60 p-4 rounded-r-xl">
            <h4 class="font-bold text-brand-blue text-sm mb-1">
              ${isEn ? "Key Technical Findings & On-Site Evaluation:" : "Kết luận kỹ thuật & Nhận định hiện trường:"}
            </h4>
            <p class="text-slate-700 text-xs sm:text-sm leading-relaxed">${isEn ? data.findingsEn : data.findingsVi}</p>
          </div>

          <div class="border-l-4 border-emerald-500 bg-emerald-50/70 p-4 rounded-r-xl">
            <h4 class="font-bold text-emerald-950 text-sm mb-1">
              ${isEn ? "Legal Validity & Trade Recognition:" : "Giá trị pháp lý & Quyết toán:"}
            </h4>
            <p class="text-emerald-800 text-xs sm:text-sm leading-relaxed">${isEn ? data.legalValidityEn : data.legalValidityVi}</p>
          </div>

          <div class="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
            <div class="flex items-center gap-2">
              <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>${isEn ? "Digital signature & APEX INSPECT stamp verified" : "Chữ ký số & Con dấu APEX INSPECT hợp lệ"}</span>
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
          <h3 class="text-xl font-bold text-slate-900">
            ${isEn ? `No record found for certificate: "${code}"` : `Không tìm thấy mã số: "${code}"`}
          </h3>
          <p class="text-slate-600 text-sm max-w-md mx-auto">
            ${isEn ? "This record may be under technical appraisal or the reference code was typed incorrectly. Please call our 24/7 duty desk for instant manual check." : "Hồ sơ có thể đang trong giai đoạn thẩm định kỹ thuật hoặc số biên bản chưa chính xác. Vui lòng liên hệ trực ban 24/7 để được hỗ trợ kiểm tra trực tiếp."}
          </p>
          <div class="pt-2">
            <a href="tel:0961799968" class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-sapphire text-white rounded-lg text-sm font-semibold hover:bg-brand-sapphireHover transition">
              ${isEn ? "Call 24/7 Hotline: (+84) 961 799 968" : "Gọi Hotline 24/7: 0961 799 968"}
            </a>
          </div>
        </div>
      `;
    }

    modal.classList.remove("hidden");
    if (window.lucide && typeof lucide.createIcons === "function") {
      lucide.createIcons();
    }
  }
}

// 6. Interactive Port Network Map
function initPortMapInteractions() {
  const portButtons = document.querySelectorAll(".port-select-btn");
  const portDetailCard = document.getElementById("port-detail-display");

  const PORT_DATA = {
    haiphong: {
      nameVi: "Cụm Cảng Hải Phòng (Đình Vũ, Lạch Huyện, Nam Đình Vũ, Cảng Cấm)",
      nameEn: "Hai Phong Port Cluster (Dinh Vu, Lach Huyen TC-HICT, Nam Dinh Vu, Cam River)",
      typeVi: "Trụ sở chính & Trung tâm Giám định Phía Bắc",
      typeEn: "Operational HQ & Northern Vietnam Inspection Hub",
      timeVi: "20 - 30 Phút",
      timeEn: "20 - 30 Minutes",
      staffVi: "15+ Giám định viên thường trực 24/7",
      staffEn: "15+ Marine Surveyors on duty 24/7",
      cargoVi: "Container, Thức ăn chăn nuôi (TACN), Hàng rời công nghiệp, Thiết bị dự án",
      cargoEn: "Containers, Animal Feedstuffs (TACN), Industrial Bulk Cargo, Project Machinery",
      notesVi: "Sẵn sàng lên tàu tại phao số 0, các bến cầu cảng sông Cấm, Đình Vũ và cảng nước sâu Lạch Huyện.",
      notesEn: "Available at pilot station buoy zero, Cam river berths, Dinh Vu, and Lach Huyen deepwater terminals."
    },
    quangninh: {
      nameVi: "Cụm Cảng Quảng Ninh (Khu neo Hạ Long, Hòn Gai, Cảng Cái Lân, Cẩm Phả)",
      nameEn: "Quang Ninh Port Cluster (Ha Long, Hon Gai Anchorages, Cai Lan Port, Cam Pha)",
      typeVi: "Trạm Hiện trường & Đội tàu cano cao tốc thường trực",
      typeEn: "Offshore Field Station & Dedicated High-Speed Pilot Boats",
      timeVi: "30 - 45 Phút ra phao neo",
      timeEn: "30 - 45 Mins to anchorage berths",
      staffVi: "10+ Giám định viên mớn nước chuyên sâu",
      staffEn: "10+ Specialized Draft Surveyors",
      cargoVi: "Tàu hàng rời cỡ lớn (Panamax, Supramax, Capesize), Ngô hạt, Khô đậu, Than đá, Clinker",
      cargoEn: "Capesize/Panamax/Supramax Bulkers, Yellow Corn, Soybean Meal, Steam Coal, Clinker",
      notesVi: "Chuyên trách Draft survey mớn đầu, mớn cắt hạ tải, giám định mớn sà lan chuyển tải về các cảng nội địa.",
      notesEn: "Specialized in initial draft survey, lightening surveys, and transshipment barge draft surveys."
    },
    nghison: {
      nameVi: "Cảng Nghi Sơn (Thanh Hóa) & Cửa Lò (Nghệ An)",
      nameEn: "Nghi Son Port (Thanh Hoa) & Cua Lo Port (Nghe An)",
      typeVi: "Văn phòng Đại diện Bắc Trung Bộ",
      typeEn: "North-Central Vietnam Regional Office",
      timeVi: "40 - 60 Phút",
      timeEn: "40 - 60 Minutes",
      staffVi: "6 Giám định viên thường trực",
      staffEn: "6 Stationed Marine Surveyors",
      cargoVi: "Xăng dầu, Hóa chất, Dầu cọ, Than nhập khẩu, Clinker xuất khẩu",
      cargoEn: "Petroleum, Chemicals, Crude Palm Oil, Imported Coal, Export Clinker",
      notesVi: "Giám sát đo tính bồn bể, đường ống và tàu dầu tải trọng lớn.",
      notesEn: "Shore tank gauging, pipeline line verification, and large oil tanker surveys."
    },
    danang: {
      nameVi: "Cảng Đà Nẵng (Tiên Sa, Liên Chiểu) & Cảng Quy Nhơn",
      nameEn: "Da Nang Seaport (Tien Sa) & Quy Nhon Port",
      typeVi: "Trạm Giám định Miền Trung",
      typeEn: "Central Vietnam Inspection Station",
      timeVi: "30 - 45 Phút",
      timeEn: "30 - 45 Minutes",
      staffVi: "5 Giám định viên thường trực",
      staffEn: "5 Stationed Marine Surveyors",
      cargoVi: "Dăm gỗ, Tinh quặng, Nông sản đóng bao, Container bách hóa",
      cargoEn: "Woodchips, Mineral Concentrates, Bagged Agri-Cargo, General Containerized Freight",
      notesVi: "Kiểm tra tình trạng hầm hàng, giám sát dỡ hàng và đóng gói xuất khẩu.",
      notesEn: "Hold condition inspection, cargo discharge supervision, and export packaging certification."
    },
    caimep: {
      nameVi: "Cụm Cảng Cái Mép - Thị Vải & Cảng TP. Hồ Chí Minh",
      nameEn: "Cai Mep - Thi Vai Deepwater Cluster & Ho Chi Minh City Ports",
      typeVi: "Văn phòng Điều phối Hiện trường Phía Nam",
      typeEn: "Southern Regional Marine Coordination Office",
      timeVi: "30 - 45 Phút",
      timeEn: "30 - 45 Minutes",
      staffVi: "12 Giám định viên hàng hải & container",
      staffEn: "12 Marine & Container Inspectors",
      cargoVi: "Tàu container mẹ tuyến Âu - Mỹ, Xăng dầu bồn tổng kho, Nông sản Nam Bộ",
      cargoEn: "Mother Container Vessels (US/EU Direct Calls), Terminal Petroleum Tanks, Agri-Cargo",
      notesVi: "Tác nghiệp kết nối liên hoàn toàn bộ hệ thống ICD và cụm cảng quốc tế Đông Nam Bộ.",
      notesEn: "Seamless operations linking all ICD inland depots and Southeastern deepwater ports."
    }
  };

  portButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      portButtons.forEach(b => {
        b.classList.remove("border-brand-sapphire", "bg-brand-lightBlue/40");
        b.classList.add("border-slate-200", "bg-white");
      });
      btn.classList.add("border-brand-sapphire", "bg-brand-lightBlue/40");
      btn.classList.remove("border-slate-200", "bg-white");

      const portKey = btn.dataset.port;
      const data = PORT_DATA[portKey];
      const isEn = currentLang === "en";

      if (data && portDetailCard) {
        portDetailCard.innerHTML = `
          <div class="space-y-4 animate-fade-in">
            <div class="flex items-start justify-between gap-3">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-brand-sapphire">
                  ${isEn ? data.typeEn : data.typeVi}
                </span>
                <h4 class="text-lg font-bold text-slate-900">${isEn ? data.nameEn : data.nameVi}</h4>
              </div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ${isEn ? "24/7 Ready" : "24/7 Sẵn sàng"}
              </span>
            </div>

            <div class="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div>
                <span class="text-slate-500 block">${isEn ? "Response Mobilization:" : "Thời gian tiếp cận:"}</span>
                <strong class="text-slate-900 text-sm font-semibold">${isEn ? data.timeEn : data.timeVi}</strong>
              </div>
              <div>
                <span class="text-slate-500 block">${isEn ? "On-site Surveyors:" : "Nhân sự hiện trường:"}</span>
                <strong class="text-slate-900 text-sm font-semibold">${isEn ? data.staffEn : data.staffVi}</strong>
              </div>
            </div>

            <div>
              <span class="text-xs font-semibold text-slate-500 block mb-1">
                ${isEn ? "Key Cargoes & Core Operations:" : "Mặt hàng & Nghiệp vụ mũi nhọn:"}
              </span>
              <p class="text-sm text-slate-800 font-medium">${isEn ? data.cargoEn : data.cargoVi}</p>
            </div>

            <div class="text-xs text-slate-600 border-t border-slate-200 pt-3 flex items-center justify-between">
              <span>${isEn ? data.notesEn : data.notesVi}</span>
              <a href="#nominate" class="text-brand-sapphire font-bold hover:underline inline-flex items-center gap-1">
                ${isEn ? "Nominate survey at this port →" : "Chỉ định tại cảng này →"}
              </a>
            </div>
          </div>
        `;
      }
    });
  });
}

// 7. Nomination Request Form
function initNominationForm() {
  const form = document.getElementById("nomination-form");
  const successBox = document.getElementById("nomination-success-box");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const refCode = "APX-NOM-" + Math.floor(1000 + Math.random() * 9000);
    const clientName = form.querySelector('[name="client_name"]')?.value || "Quý khách";
    const vesselName = form.querySelector('[name="vessel_name"]')?.value || "Phương tiện";
    const portSelect = form.querySelector('[name="port"]')?.value || "Cụm cảng biển";

    const isEn = currentLang === "en";

    if (successBox) {
      successBox.innerHTML = `
        <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
          <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h4 class="text-xl font-bold text-emerald-950">
            ${isEn ? "Survey Nomination Received Successfully!" : "Tiếp nhận chỉ định giám định thành công!"}
          </h4>
          <p class="text-sm text-emerald-800 max-w-lg mx-auto">
            ${isEn ? `APEX Operations Desk has registered nomination from <strong>${clientName}</strong> for <strong>${vesselName}</strong> at <strong>${portSelect}</strong>.` : `Hệ thống tác nghiệp APEX đã ghi nhận yêu cầu từ <strong>${clientName}</strong> đối với <strong>${vesselName}</strong> tại <strong>${portSelect}</strong>.`}
          </p>
          <div class="inline-block bg-white px-4 py-2 rounded-lg border border-emerald-200 font-mono text-sm font-bold text-slate-900">
            ${isEn ? "NOMINATION REF:" : "MÃ CHỈ ĐỊNH:"} ${refCode}
          </div>
          <p class="text-xs text-slate-600">
            ${isEn ? "Our Senior Marine Operations Officer will acknowledge and deploy accredited surveyors within <strong>15 minutes</strong>." : "Trưởng ban điều phối hiện trường sẽ liên hệ xác nhận và cử Giám định viên trong vòng <strong>15 phút</strong>."}
          </p>
          <div class="pt-2">
            <button type="button" onclick="location.reload()" class="text-xs font-bold text-emerald-700 underline">
              ${isEn ? "Submit another survey nomination" : "Gửi thêm chỉ định mới"}
            </button>
          </div>
        </div>
      `;
      successBox.classList.remove("hidden");
      form.reset();
      successBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

// 8. Animated Counters
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

// 9. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (trigger && content) {
      trigger.addEventListener("click", () => {
        const isOpen = !content.classList.contains("hidden");
        
        // Close others
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

// 10. Mobile Menu
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

// Main Bootstrapper
document.addEventListener("DOMContentLoaded", () => {
  initLanguageToggle();
  initServiceFilter();
  initCertificateTracking();
  initPortMapInteractions();
  initNominationForm();
  initCounters();
  initFaqAccordion();
  initMobileMenu();
});
