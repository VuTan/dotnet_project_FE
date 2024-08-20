// src/Component/UserDonHang/UserSideBar/UserOrderSideBar.tsx
import React, {useEffect, useState} from 'react';
import './UserOrderSideBarStyle.scss';
import { Link, useLocation } from 'react-router-dom';
import config from '../config/config';

interface UserOrderSideBarProps {}

const UserOrderSideBar: React.FC<UserOrderSideBarProps> = () => {
    const location = useLocation();
    const [selectedType, setSelectedType] = useState<string | null>(null);

    // Lấy phần tử cuối của đường link hiện tại
        useEffect(() => {
        const path = location.pathname.split('/').pop();
        switch (path) {
            case 'allOrdersUser':
                setSelectedType('all_dh') ;
                break;
            case 'confirmedOrdersUser':
                setSelectedType('xn_dh') ;
                break;
            case 'packagingOrdersUser':
                setSelectedType('cb_dh') ;
                break;
            case 'shippingHandoversUser':
                setSelectedType('vc_dh') ;
                break;
            case 'completedOrdersUser':
                setSelectedType('ht_dh') ;
                break;
            case 'cancelledOrdersUser':
                setSelectedType('h_dh') ;
                break;
            default:
                setSelectedType(null) ;
                break;
        }
        }, [location.pathname]);

    const handleToggle = (value: string) => {
        setSelectedType(value);
    };

    return (
        <div id="u_sidebar" className="u_sidebar">
            <div className="sidebar-nav" id="sidebar-nav">
                <div className="nav-item">
                    <Link to={`${config.routes.userOrderManagement}/allOrdersUser`} className="nav-link">
                        <span className={`text_sidebar ${selectedType === 'all_dh' ? 'selected' : ''}`} onClick={() => handleToggle('all_dh')}>Tất cả đơn</span>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to={`${config.routes.userOrderManagement}/confirmedOrdersUser`} className="nav-link">
                        <span className={`text_sidebar ${selectedType === 'xn_dh' ? 'selected' : ''}`} onClick={() => handleToggle('xn_dh')}>Đơn chờ xác nhận</span>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to={`${config.routes.userOrderManagement}/packagingOrdersUser`} className="nav-link">
                        <span className={`text_sidebar ${selectedType === 'cb_dh' ? 'selected' : ''}`} onClick={() => handleToggle('cb_dh')}>Đơn đang chuẩn bị</span>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to={`${config.routes.userOrderManagement}/shippingHandoversUser`} className="nav-link">
                        <span className={`text_sidebar ${selectedType === 'vc_dh' ? 'selected' : ''}`} onClick={() => handleToggle('vc_dh')}>Đơn đang vận chuyển</span>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to={`${config.routes.userOrderManagement}/completedOrdersUser`} className="nav-link">
                        <span className={`text_sidebar ${selectedType === 'ht_dh' ? 'selected' : ''}`} onClick={() => handleToggle('ht_dh')}>Đơn đã hoàn thành</span>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to={`${config.routes.userOrderManagement}/cancelledOrdersUser`} className="nav-link">
                        <span className={`text_sidebar ${selectedType === 'h_dh' ? 'selected' : ''}`} onClick={() => handleToggle('h_dh')}> Đơn đã hủy </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserOrderSideBar;
