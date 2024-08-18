import React from 'react';
import "./CloudfeeStyles.scss"
const CloudfeePage: React.FC = () => {
    return (
        <div className="Cloudfee_container">
            <div className="banner-top">
                <img
                    src="https://hrv.hstatic.net/s_1000266602/_KV-marvel-2.jpg"
                    alt="Cloudfee - Thế hệ cà phê mới"
                />
            </div>
            <div className="cloudfee_info">

                <div className="cloudfee_text">
                    <br/>
                    Được kết hợp từ <b>Cloud</b> (đám mây) và cof<b>Fee</b> (cà phê), <b>CloudFee</b> gợi mở
                    <br/>về một thế hệ cà phê mới, êm mượt như mây.
                </div>

                <div className="cloudfee_cremeBrulee">
                    <div className="info-block">
                        <span className="subtitle">CLOuDFEE</span>
                        <div className="main-title">Creme Brulee</div>
                        <div className="cloud-desc"><b>Thức uống "chiều chuộng bản thân" bậc nhất</b> cho những ai thích
                            vị ngọt ngào hay muốn thưởng thức sự kết hợp độc đáo giữa món tráng miệng và thức uống.
                        </div>
                        <a className="cloud-btn" href="#link_sp"
                           target="_blank" title="Êm mượt như mây, Chill là ghiền ngay!">
                            <span>Êm mượt như mây, Chill là ghiền ngay!</span>
                            <svg width="6" height="13" viewBox="0 0 6 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6.5L0 12.5V0.5L6 6.5Z" fill="#FEBF3E"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="img-block">
                        <img src="https://hrv.hstatic.net/s_1000266602/_creme-brulee.png" alt="Creme Brulee"/>
                    </div>
                </div>

                <div className="cloudfee_Creamy">
                    <div className="img-block">
                        <img src="https://hrv.hstatic.net/s_1000266602/_creamy.png" alt="Creamy"/>
                    </div>
                    <div className="info-block">
                        <span className="subtitle">CLOuDFEE</span>
                        <div className="main-title2">Creamy</div>
                        <div className="cloud-desc"><b>Thức uống "đánh thức" năng lượng ngày mới </b>hợp cho những ai
                            mới bước vào thế giới cà phê hoặc ghiền cà phê nhưng muốn khám phá thêm nhiều hương vị mới.
                        </div>
                        <a className="cloud-btn" href="#"
                           target="_blank" title="Êm mượt như mây, Tươi ngày mới ngay!">
                            <span>Êm mượt như mây, Tươi ngày mới ngay!</span>
                            <svg width="6" height="13" viewBox="0 0 6 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6.5L0 12.5V0.5L6 6.5Z" fill="#FEBF3E"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="vid">
                    <div className="vid_container">
                        <div className="video-title">CÀ PHÊ CÓ DÀNH CHO TẤT CẢ MỌI NGƯỜI?</div>
                        <div className="video-box">
                            <div className="box-frame">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/t5I96ycncPA"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="cloud-desc">Bạn có biết, mỗi ngày có hơn 2 tỷ cốc cà phê được uống trên toàn thế
                            giới?

                            Có người pha cùng sữa, có người rót thêm kem béo, hay kết hợp cùng… rượu whiskey, nhưng
                            không
                            phải ai cũng có thể thưởng thức cà phê một cách ngon lành. Bằng niềm khao khát mang ẩm thực
                            thế
                            giới vào từng ly cà phê bản địa, Edward Teonadi - Giám đốc phát triển sản phẩm tại The
                            Coffee
                            House đã tạo nên thế hệ cà phê mới mang tên CloudFee. Và giờ đây, bất kỳ ai ghé Nhà cũng có
                            thể
                            tìm thấy hương vị cà phê cho riêng mình.
                        </div>
                        <div className="text-center">
                            <a className="cloud-btn"
                               href="#" title=" Đọc trọn câu chuyện">
                                <span> Đọc trọn câu chuyện</span>
                                <svg width="6" height="13" viewBox="0 0 6 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 6.5L0 12.5V0.5L6 6.5Z" fill="#FEBF3E"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="story">
                    <div className="story-container">
                        <div className="story-item flex-box flex-w align-c justify-s">
                            <div className="story-img">
                                <img
                                    src="https://file.hstatic.net/1000075078/file/thinh_93cf92a5395043a2b634af4de08c0163.png"
                                    alt="CÀ PHÊ NGON CHỈ CÓ VỊ ĐẮNG?"/>
                            </div>
                            <div className="story-info">
                                <div className="story-title">CÀ PHÊ NGON CHỈ CÓ VỊ ĐẮNG?</div>
                                <div className="cloud-desc">Từ ý tưởng về CloudFee của Edward, anh Phạm Phúc Thịnh -
                                    barista
                                    của The Coffee House nhận ra: Cà phê không nhất thiết phải đắng, phải chua thì mới
                                    ngon.
                                    Đôi khi một chút biến tấu, một chút ngọt ngào để yêu chiều bản thân mới thật sự quan
                                    trọng. Và đó là cách CloudFee Creme Brulee ra đời.
                                </div>
                                <a className="cloud-btn2" href="https://www.youtube.com/watch?v=o9G8v4j-P3w"
                                   target="_blank"
                                   title="Xem video nghe Thịnh kể chuyện">Xem video nghe Thịnh kể chuyện</a>
                            </div>
                        </div>
                        <div className="story-item right flex-box flex-w align-c justify-s">
                            <div className="story-info">
                                <div className="story-title">CÀ PHÊ ĐÂU CHỈ LÀ THỨC UỐNG</div>
                                <div className="cloud-desc">Trong ly cà phê dành cho người mình thương có gì?

                                    Khi nghe Edward chia sẻ về thế hệ cà phê mới CloudFee, anh Nguyễn Hoàng Hiếu -
                                    barista
                                    của The Coffee House chợt nhớ tới vợ mình. Cô ngại vị đắng của cà phê, nhưng cần một
                                    thức uống tỉnh táo mỗi sáng. Và CloudFee Creamy là món quà anh tặng cho người phụ nữ
                                    anh
                                    yêu.
                                </div>
                                <a className="cloud-btn2" href="https://www.youtube.com/watch?v=LdmG0hSq_Ig"
                                   target="_blank"
                                   title="Hiếu bật mí trong video này">Hiếu bật mí trong video này</a>
                            </div>
                            <div className="story-img">
                                <img
                                    src="https://file.hstatic.net/1000075078/file/hieu_ed120096122f4c279ff41696f8b97eb3.png"
                                    alt="CÀ PHÊ ĐÂU CHỈ LÀ THỨC UỐNG"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="customer">
                    <div className="customer-container">
                        <div className="customer-title">CHUYỆN CÀ PHÊ</div>

<div className="tooltip-container">
                        <div className="img-box">
                            <img
                                src="https://file.hstatic.net/1000075078/file/photo_2022-06-27_13-21-31_1f8c8a00f22e467c8d705e8a95331ae8.jpg"
                                alt="Khách hàng 2"/>
                        </div>

                        <div className="tooltip caret-bottom-left rounded">
                            <div className="text">
                                <div className="big-text">Hơn cả một loại thức uống để ngày mới tươi ngay hay yêu chiều
                                    khẩu vị vào buổi chiều, mỗi ly CloudFee còn gắn liền với một câu chuyện thú vị.
                                </div>
                                <a className="small-text"
                                   href="#"
                                   title="CÙNG ĐÓN CHỜ">CÙNG ĐÓN CHỜ
                                </a>
                            </div>
                            <div className="foreground">
                                <div className="background"></div>
                                <div className="caret"></div>
                            </div>
                            <div className="shadow">
                                <div className="background"></div>
                                <div className="caret"></div>
                            </div>
                        </div>
</div>

                    </div>
                </div>

            </div>


        </div>
    );
}

export default CloudfeePage;
