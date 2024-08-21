import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'; // Thêm hook useNavigate
import DataTable from "react-data-table-component";
import './AdminUserManager.scss'

interface User {
    id: number;
    fullName: string;
    userName: string;
    email: string;
    address: string;
    yearOfBirth: Date;
    sex: string;
    role: string;
}

// Dữ liệu người dùng
const initialUsers: User[] = [
    {
        id: 1,
        fullName: "Huỳnh Thị Mai Phương",
        userName: "Phương",
        email: "26@gmail.com",
        address: "Đăk Nông",
        yearOfBirth: new Date('2003-03-13'),
        sex: "Nữ",
        role: "Khách hàng"
    },
    {
        id: 2,
        fullName: "Mai Phương",
        userName: "Mai",
        email: "26@gmail.com",
        address: "Đăk Nông",
        yearOfBirth: new Date('2003-03-13'),
        sex: "Nữ",
        role: "Nhân viên"
    },
];

const AdminUserManager: React.FC = () => {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const navigate = useNavigate(); // Khai báo useNavigate

    const handleDelete = (id: number) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    };

    const handleUpdate = (id: number) => {
        navigate(`/admin/user/${id}`);
    };

    const columns = [
        {
            name: 'ID',
            selector: (row: User) => row.id,
            sortable: true,
            width: '80px',
        },
        {
            name: 'Họ và tên',
            selector: (row: User) => row.fullName,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Tên đăng nhập',
            selector: (row: User) => row.userName,
            wrap: true,
        },
        {
            name: 'Địa chỉ',
            selector: (row: User) => row.address,
            sortable: true,
            wrap: true,
        },
        {
            name: 'Ngày sinh',
            selector: (row: User) => row.yearOfBirth.toLocaleDateString('vi-VN'),
            sortable: true,
            width: '150px',
        },
        {
            name: 'Giới tính',
            selector: (row: User) => row.sex,
            sortable: true,
            width: '120px',
        },
        {
            name: 'Hành động',
            cell: (row: User) => (
                <div className="action-buttons">
                    <button
                        className="btn-update"
                        onClick={() => handleUpdate(row.id)}
                    >
                        Cập nhật
                    </button>
                    <button
                        className="btn-delete"
                        onClick={() => handleDelete(row.id)}
                    >
                        Xóa
                    </button>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: '150px',
        },
    ];

    return (
        <div className="all-order-container">
            <DataTable
                columns={columns}
                data={users}
                title="Quản Lý Người Dùng"
                pagination
                highlightOnHover
                striped
            />
        </div>
    );
};

export default AdminUserManager;
