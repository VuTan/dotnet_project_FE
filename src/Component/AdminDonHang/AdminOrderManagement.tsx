import React from 'react';
import './AdminOrderManagement.scss';
import AdminSideBarOrder from "./sideBarOrder/AdminSideBarOrder";
import {Outlet} from "react-router-dom";


const AdminOrderManagement: React.FC = () => {

    return (
        <div className="admin-OrderPage">
            {/* Sidebar */}
            <div className="adminOrder_sidebar">
                <AdminSideBarOrder/>
            </div>


            {/* Nội dung chính của trang */}
            <div className="mainOrder-content">

<Outlet/>
            </div>
        </div>
    );
};

export default AdminOrderManagement;
