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
import {MdOutlineArrowDropDown} from "react-icons/md";
import CategoryList from "../../ProductList/SideBar/ProductsTypes/CtegoryList/CategoryList";

function NavBar() {
    const [isSticky, setIsSticky] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenuDropdown, setShowMenuDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Retrieve user info from Redux store
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

    const toggleMenuDropdown = () => {
        setShowMenuDropdown(prev => !prev);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate(config.routes.login);
    };

    const handleCategoryToggle = (value: string) => {
        setExpandedCategory(prev => (prev === value ? null : value));
        setSelectedCategory(value);
        setSelectedSubcategory(null);
    };

    const handleSubcategoryClick = (subcategory: string) => {
        setSelectedSubcategory(subcategory);
    };

    const handleSelectAll = () => {
        setSelectedCategory('all');
        setExpandedCategory(null);
        setSelectedSubcategory(null);
    };

    const typesOptions = [
        {
            classnames: "coffee", categogyID: "2", value: "coffee", title: "Cà Phê",
            subcategories: ["Cà Phê Highlight", "Cà Phê Việt Nam", "Cà Phê Máy", "Cold Brew"]
        },
        {
            classnames: "fruitsBlend", categogyID: "5", value: "fruitsBlend", title: "Trái Cây Xay 0°C",
            subcategories: ["Trái Cây Xay 0°C"]
        },
        {
            classnames: "teaFruits", categogyID: "4", value: "teaFruits", title: "Trà Trái Cây - HiTea",
            subcategories: ["Trà Trái Cây", "Hi-Tea"]
        },
        {
            classnames: "milkTea", categogyID: "1", value: "milkTea", title: "Trà Sữa",
            subcategories: ["Trà Sữa"]
        },
        {
            classnames: "greenTea", categogyID: "3", value: "greenTea", title: "Trà Xanh - Chocolate",
            subcategories: ["Trà Xanh Tây Bắc", "Chocolate"]
        },
        {
            classnames: "blendIceDrink", categogyID: "3", value: "blendIceDrink", title: "Thức uống đá xay",
            subcategories: ["Đá xay Frosty"]
        },
        {
            classnames: "snackCake", categogyID: "3", value: "snackCake", title: "Bánh & Snack",
            subcategories: ["Bánh mặn", "Bánh ngọt", "Bánh Pastry"]
        },
        {
            classnames: "atHome", categogyID: "3", value: "atHome", title: "Thưởng Thức Tại Nhà",
            subcategories: ["Cà phê tại nhà"]
        },
    ];

    return (
        <div className={`navbar-wrapper ${isSticky ? 'navbar-sticky' : ''}`}>
            <div className="logo">
                <img src={images.logo} alt="The coffee house"/>
            </div>
            <div className="menu-wrapper">
                <Link to={config.routes.home} title="Trang chủ">
                    Trang chủ
                </Link>
                <div className="menu-item-with-dropdown" onMouseEnter={toggleMenuDropdown}
                     onMouseLeave={toggleMenuDropdown}>
                    <Link to={config.routes.menu} title="Menu" onClick={() => handleClick(config.routes.menu)}>
                        Menu<MdOutlineArrowDropDown style={{marginLeft: '5px', transition: 'color 0.3s'}}/>
                    </Link>
                    <div className="dropdown-menu">
                        {showMenuDropdown && (
                            <div className="dropdown-content">
                                <CategoryList
                                    typesOptions={typesOptions}
                                    expandedCategory={expandedCategory}
                                    selectedCategory={selectedCategory}
                                    selectedSubcategory={selectedSubcategory}
                                    onToggle={handleCategoryToggle}
                                    onSubcategoryClick={handleSubcategoryClick}
                                    onSelectAll={handleSelectAll}
                                    className="category-list" // Use "List" class name for dropdown
                                />
                            </div>
                        )}
                    </div>
                </div>
                <Link title="Chuyện nhà" to={config.routes.homeStory}
                      onClick={() => handleClick(config.routes.homeStory)}>
                    Chuyện nhà
                </Link>
                <Link title="Cảm hứng CloudFee" to={config.routes.inspiration}
                      onClick={() => handleClick(config.routes.inspiration)}>
                    Cảm hứng CloudFee
                </Link>
                <Link title="Cửa hàng" to={config.routes.store} onClick={() => handleClick(config.routes.store)}>
                    Cửa hàng
                </Link>
            </div>
            <div className="login">
                <div className="user-icon" onClick={toggleDropdown}>
                    <FaUser size={20}/>
                </div>
                {showDropdown && (

                    <div className="dropdown-menu">
                        {user ? (
                            <button className="logout-button" onClick={() => handleClick(config.routes.logout)}>
                                Logout
                                <CiLogout className="logout-icon"/>
                            </button>
                        ) : (
                            <Link to={config.routes.login}>
                                <button className="logout-button">
                                    Login
                                    <CiLogin className="logout-icon"/>
                                </button>
                            </Link>
                        )}
                        <Link to={config.routes.profile}>
                            <button className="logout-button">
                                Profile
                            </button>
                        </Link>
                    </div>


                )}
            </div>
        </div>
    );
}

export default NavBar;
