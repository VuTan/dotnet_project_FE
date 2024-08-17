import React, {useState, useEffect} from 'react';
import './navbar.scss';
import images from '../../images/images';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import config from "./config/config";
import {FaUser} from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../redux/user.reducer';
import {RootState} from "../../../redux/store";
import {CiLogin, CiLogout} from "react-icons/ci";

function NavBar() {
    const [isSticky, setIsSticky] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Lấy thông tin người dùng từ Redux store
    const user = useSelector((state: RootState) => state.user.user);

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
        if (path === config.routes.logout) {
            handleLogout();
        } else if (location.pathname === path) {
            window.location.reload();
        } else {
            navigate(path);
        }
    };

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate(config.routes.login);
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
                <div className="user-icon" onClick={toggleDropdown}>
                    <FaUser size={20}/>
                </div>
                {showDropdown && (
                    <div className="dropdown-menu">
                        {user ? (
                            <button className="logout-button" onClick={() => handleClick(config.routes.logout)}>
                                LogOut
                                <CiLogout className="logout-icon"/>
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="logout-button">
                                    Login
                                    <CiLogin className="logout-icon"/>
                                </button>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;
