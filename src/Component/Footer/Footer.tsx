import './Footer.scss';
import {Link} from "react-router-dom";
import images from "../images/images";
import {Box, Container, Grid} from "@mui/material";
import {FaPhoneAlt} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className={"footer-container"}>
                <div className={"footer-column"}>
                    <h4>Giới thiệu</h4>
                    <ul>
                        <li><a href="/chuyennha">Về chúng tôi</a></li>
                        <li><a href="/menu">Sản phẩm</a></li>
                        <li><a href="/store">Cửa hàng</a></li>
                        <li><a href="/camhung">Cảm hứng</a></li>
                    </ul>
                </div>
                <div className={"footer-column"}>
                    <h4>Điều khoản</h4>
                    <ul>
                        <li><a href="/">Điều khoản sử dụng</a></li>
                        <li><a href="/">Chính sách bảo mật thông tin</a></li>
                        <li><a href="/">Hướng dẫn xuất hóa đơn GTGT</a></li>
                    </ul>
                </div>
                <div className={"footer-column"}>
                    <ul>
                        <li>
                            <FaPhoneAlt/> Đặt hàng: 0877.287.869
                        </li>
                        <li>
                            Email: 21130149@st.hcmuaf.edu.vn
                        </li>
                        <li>
                            Địa chỉ: Tầng 3-4 Hub Building
                            195/10E Điện Biên Phủ, P.15,
                            Q.Bình Thạnh, TP.Hồ Chí Minh
                        </li>
                    </ul>
                </div>
                <div className={"footer-column"}>
                    <div className="fb-page fb_iframe_widget"
                         data-href="https://www.facebook.com/The.Coffee.House.2014/" data-small-header="false"
                         data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"
                         fb-xfbml-state="rendered"
                         fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=363772567412181&amp;container_width=270&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FThe.Coffee.House.2014%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false">
                                <span><iframe
                                    name="f585155d21e1fa1a3" width="300px" height="150px"
                                    data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin"
                                    allow="encrypted-media"
                                    src="https://www.facebook.com/v2.0/plugins/page.php?adapt_container_width=true&amp;app_id=363772567412181&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfe27efe702a399c52%26domain%3Dthecoffeehouse.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fthecoffeehouse.com%252Ff3422876ee19b5111%26relation%3Dparent.parent&amp;container_width=270&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FThe.Coffee.House.2014%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false"
                                ></iframe></span>
                    </div>
                </div>
                <div className={"cleat"}></div>
            </div>
        </footer>
    );
};

export default Footer;
