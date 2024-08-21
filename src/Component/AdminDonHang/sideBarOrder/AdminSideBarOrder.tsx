import React, {useState} from 'react';
import './AdminSideBarOrderStyles.scss';
import {Link} from "react-router-dom";
import config from "../config/config";

interface AdminSideBarOrderProps {

}

const AdminSideBarOrder: React.FC<AdminSideBarOrderProps> = () => {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleToggle = (value: string) => {
        setSelectedType(value);

    };

    return (
        <div id="ad_sidebar" className="ad_sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <h3>Đơn hàng</h3>

                <li className="nav-item">
                    <Link to={`${config.routes.adminOrderManagement}/allOrder`} className="nav-link">
                             <span className={`text_sidebar ${selectedType === 'all_dh' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('all_dh')}>Tất cả đơn hàng</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={`${config.routes.adminOrderManagement}/confirmedOrders`} className="nav-link">
                             <span className={`text_sidebar ${selectedType === 'xn_dh' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('xn_dh')}>Xác nhận đơn hàng</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={`${config.routes.adminOrderManagement}/cancelledOrders`} className="nav-link">
                             <span className={`text_sidebar ${selectedType === 'h_dh' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('h_dh')}>Hủy đơn hàng</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={`${config.routes.adminOrderManagement}/packagingOrders`} className="nav-link">
                             <span className={`text_sidebar ${selectedType === 'xndg_dh' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('xndg_dh')}>Đóng gói đơn hàng</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={`${config.routes.adminOrderManagement}/shippingHandovers`} className="nav-link">
                             <span className={`text_sidebar ${selectedType === 'bg_dh' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('bg_dh')}>Bàn giao vận chuyển</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={`${config.routes.adminOrderManagement}/completedOrders`} className="nav-link">
                             <span className={`text_sidebar ${selectedType === 'ht_dh' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('ht_dh')}>Hoàn thành đơn hàng</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={`${config.routes.adminOrderManagement}/returnConfirmation`} className="nav-link">
                             <span className={`text_sidebar ${selectedType === 'xnt_dh' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('xnt_dh')}>Xác nhận trả đơn</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={`${config.routes.adminOrderManagement}/completedReturns`} className="nav-link">
                             <span className={`text_sidebar ${selectedType === 'qli_dh' ? 'selected' : ''}`}
                                   onClick={() => handleToggle('qli_dh')}>Hoàn thành trả đơn</span>
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default AdminSideBarOrder;
