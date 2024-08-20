import React, {useEffect} from 'react';
import './UserOrderManagementStyles.scss';

import {Outlet, useNavigate} from "react-router-dom";
import UserOrderSideBar from "../../Component/UserDonHang/UserSideBar/UserOrderSideBar";


const UserOrderManagement: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Nếu không có đoạn đường cụ thể, điều hướng đến 'allOrdersUser'
        navigate('allOrdersUser', { replace: true });
    }, [navigate]);
    return (
        <div className="user-OrderPage">
            {/* Sidebar */}
            <div className="UserOrder_sidebar">
<UserOrderSideBar/>
            </div>


            {/* Nội dung chính của trang */}
            <div className="mainOrder-content">
                <Outlet/>
            </div>
        </div>
    );
};

export default UserOrderManagement;
