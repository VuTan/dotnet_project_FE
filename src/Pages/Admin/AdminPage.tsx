import React from 'react';
import './AdminPageStyles.scss';
import AdminSideBar from '../../Component/AdminSideBar/AdminSideBar';
import { Outlet } from 'react-router-dom';
const AdminPage: React.FC = () => {
    // Thông tin giả lập về roles và currentAdminMenu, có thể thay thế bằng dữ liệu thực tế
    const roles = "dashboard,customer,employee,product,order,log";
    const currentAdminMenu = "dashboard"; // Giá trị hiện tại, có thể thay đổi dựa trên logic ứng dụng của bạn

    return (
        <div className="admin-page">
            {/* Sidebar */}
            <div className="admin_sidebar">
                <AdminSideBar roles={roles} currentAdminMenu={currentAdminMenu} />
            </div>


            {/* Nội dung chính của trang */}
            <div className="main-content">
                <h1>Welcome to the Admin</h1>
{/*<Outlet/>*/}
            </div>
        </div>
    );
};

export default AdminPage;
