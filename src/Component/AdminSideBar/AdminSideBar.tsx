import React, {useState} from 'react';
import './AdminSideBar.scss';

import {Link, useLocation} from "react-router-dom";
import config from "../AdminDonHang/config/config";


interface AdminSideBarProps {
    roles: string;
    currentAdminMenu: string;
}

const AdminSideBar: React.FC<AdminSideBarProps> = ({roles, currentAdminMenu}) => {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const location = useLocation();
    const handleToggle = (value: string) => {
        setSelectedType(value);

    };

    const handleClick = (path: string) => {
        if (location.pathname === path) {
            window.location.reload();
        }
    };

    return (
        <div id="ad_sidebar" className="ad_sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <h3>Admin</h3>
                

                {/* Customer Management */}
                {roles.includes("user") && (
                    <li className={`nav-item ${currentAdminMenu === "user" ? "" : "collapsed"}`}>
                        <Link to="adminUserManager" className="nav-link">

                            <span className={`text_sidebar ${selectedType === 'qli_nd' ? 'selected' : ''}`}
                                  onClick={() => handleToggle('qli_nd')}>Quản lý người dùng</span>
                        </Link>

                    </li>
                )}


                {/* Product Management */}
                {/*{roles.includes("product") && (*/}
                {/*    <li className={`nav-item ${currentAdminMenu === "product" ? "" : "collapsed"}`}>*/}
                {/*        <a className="nav-link" href="#">*/}
                {/*             <span className={`text_sidebar ${selectedType === 'qli_sp' ? 'selected' : ''}`}*/}
                {/*                   onClick={() => handleToggle('qli_sp')}>Quản lý sản phẩm</span>*/}
                {/*        </a>*/}
                {/*    </li>*/}
                {/*)}*/}
                {roles.includes("product") && (
                    <li className={`nav-item ${currentAdminMenu === "product" ? "" : "collapsed"}`}>
                        <Link to="adminProductManager" className="nav-link">

                            <span className={`text_sidebar ${selectedType === 'qli_sp' ? 'selected' : ''}`}
                                  onClick={() => handleToggle('qli_sp')}>Quản lý sản phẩm</span>
                        </Link>

                    </li>
                )}
                {/* Order Management */}
                {roles.includes("order") && (
                    <li className={`nav-item ${currentAdminMenu === "order" ? "" : "collapsed"}`}>
                        <Link to={config.routes.adminOrderManagement} className="nav-link"
                              onClick={() => handleClick(config.routes.adminOrderManagement)}>
                             <span className={`text_sidebar ${selectedType === 'qli_dh' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('qli_dh')}>Quản lý đơn hàng</span>
                        </Link>
                    </li>
                )}

            </ul>
        </div>
    );
};

export default AdminSideBar;
