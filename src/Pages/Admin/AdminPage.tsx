import React from 'react';
import './AdminPageStyles.scss';
import AdminSideBar from '../../Component/AdminSideBar/AdminSideBar';

import {Outlet, useLocation} from 'react-router-dom';

const AdminPage: React.FC = () => {
    // Thông tin giả lập về roles và currentAdminMenu, có thể thay thế bằng dữ liệu thực tế
    const roles = "dashboard,user,product,order,log";

    const currentAdminMenu = "dashboard";
    const location = useLocation(); // Lấy đường dẫn hiện tại

    const shouldRenderOutlet = location.pathname !== '/adminOrderManagement';

    return (
        <div className="admin-page">
            {/* Sidebar */}
            <div className="admin_sidebar">
                <AdminSideBar roles={roles} currentAdminMenu={currentAdminMenu}/>
            </div>


            {/* Nội dung chính của trang */}
            <div className="main-content">

                {shouldRenderOutlet && <Outlet/>}

            </div>
        </div>
    );
};

export default AdminPage;
