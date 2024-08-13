import React, {useState, useEffect} from 'react';
import './navbar.scss';
import images from '../../images/images';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import config from "./config/config";
import {FaChevronUp, FaUser} from "react-icons/fa";


function NavBar() {
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (path: string) => {
        if (location.pathname === path) {
            window.location.reload(); // Tải lại trang nếu đang ở trang hiện tại
        } else {
            navigate(path); // Chuyển đến trang mới nếu không phải trang hiện tại
        }
    };

    return (
        <div className={`navbar-wrapper ${isSticky ? 'navbar-sticky' : ''}`}>
            <div className={"logo"}>
                <img src={images.logo} alt="The coffee house"/>
            </div>
            <div className={"menu-wrapper"}>
                <Link to={config.routes.home} title="Trang chủ">
                    Trang chủ
                </Link>
                <Link
                    to={config.routes.menu}
                    title="Danh mục sản phẩm"
                    onClick={() => handleClick(config.routes.menu)}
                >
                    Danh mục sản phẩm
                </Link>

                    <Link title="Chuyện nhà" to={config.routes.homeStory}
                              onClick={() => handleClick(config.routes.homeStory)}>
                        Chuyện nhà
                    </Link>
                    <Link title="Cảm hứng CloudFee" to={config.routes.inspiration}
                              onClick={() => handleClick(config.routes.inspiration)}>
                        Cảm hứng CloudFee
                    </Link>
                    <Link title="Cửa hàng" to={config.routes.store}
                              onClick={() => handleClick(config.routes.store)}>
                        Cửa hàng
                    </Link>

            </div>
            <div className={"login"}>
                <Link title="Đăng nhập" to={config.routes.login}
                      onClick={() => handleClick(config.routes.login)}>
                <FaUser size={20} color={"orange"} />
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
