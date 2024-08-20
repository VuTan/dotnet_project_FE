import React, {useState} from 'react';
import './AdminSideBar.scss';

import {Link, useLocation} from "react-router-dom";
import config from "../AdminDonHang/config/config";

interface AdminSideBarProps {
    roles: string;
    currentAdminMenu: string;
}

const AdminSideBar: React.FC<AdminSideBarProps> = ({ roles, currentAdminMenu }) => {
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

                {/* Dashboard */}
                {roles.includes("dashboard") && (
                    <li className={`nav-item ${currentAdminMenu === "dashboard" ? "" : "collapsed"}`}>
                        <a className="nav-link" href="#">
                            <span className={`text_sidebar ${selectedType === 'thong_ke' ? 'selected' : ''}`}
                                  onClick={() => handleToggle('thong_ke')}>Thống kê</span>
                        </a>
                    </li>
                )}

                {/* Customer Management */}
                {roles.includes("customer") && (
                    <li className={`nav-item ${currentAdminMenu === "customer" ? "" : "collapsed"}`}>
                        <a className="nav-link" href="#">
                              <span className={`text_sidebar ${selectedType === 'qli_kh' ? 'selected' : ''}`}
                                    onClick={() => handleToggle('qli_kh')}>Quản lý khách hàng</span>
                        </a>
                    </li>
                )}

                {/* Employee Management */}
                {roles.includes("employee") && (
                    <li className={`nav-item ${currentAdminMenu === "employee" ? "" : "collapsed"}`}>
                        <a className="nav-link" href="#">
                             <span className={`text_sidebar ${selectedType === 'qli_nv' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('qli_nv')}>Quản lý nhân viên</span>
                        </a>
                    </li>
                )}

                {/* Product Management */}
                {roles.includes("product") && (
                    <li className={`nav-item ${currentAdminMenu === "product" ? "" : "collapsed"}`}>
                        <a className="nav-link" href="#">
                             <span className={`text_sidebar ${selectedType === 'qli_sp' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('qli_sp')}>Quản lý sản phẩm</span>
                        </a>
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

                {/* Logs */}
                {roles.includes("log") && (
                    <li className={`nav-item ${currentAdminMenu === "log" ? "" : "collapsed"}`}>
                        <a className="nav-link" href="#">
                             <span className={`text_sidebar ${selectedType === 'qli_log' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('qli_log')}>Quản lý Log</span>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default AdminSideBar;
