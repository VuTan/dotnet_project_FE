import React from 'react';
import './AllOrderStyles.scss'
import DataTable from 'react-data-table-component';

// Định nghĩa kiểu dữ liệu cho đối tượng đơn hàng
interface Order {
    id: number;
    time: string;
    product: string;
    total: number;
    status: string;
}

// Dữ liệu giả lập
const orders = [
    {
        id: 1,
        time: '2024-08-01 12:30',
        product: 'Sản phẩm 1, Sản phẩm 2',
        total: 500000,
        status: 'Đã giao'
    },
    {
        id: 2,
        time: '2024-08-05 15:45',
        product: 'Sản phẩm 3',
        total: 300000,
        status: 'Đang xử lý'
    },
    {
        id: 3,
        time: '2024-08-10 10:00',
        product: 'Sản phẩm 4, Sản phẩm 5, Sản phẩm 6',
        total: 1500000,
        status: 'Đã hủy'
    },
];

// Cấu hình các cột của bảng
const columns = [
    {
        name: 'ID',
        selector: (row: Order) => row.id,
        sortable: true,
        width: '80px',
    },
    {
        name: 'Thời gian',
        selector: (row: Order) => row.time,
        sortable: true,
    },
    {
        name: 'Sản phẩm',
        selector: (row: Order) => row.product,
        wrap: true,
    },
    {
        name: 'Tổng tiền (VND)',
        selector: (row: Order) => row.total.toLocaleString('vi-VN'),
        sortable: true,
    },
    {
        name: 'Tình trạng',
        selector: (row: Order) => row.status,
        sortable: true,
    },
];

const AllOrder: React.FC = () => {
    return (
        <div className="all-order-container">

            <DataTable
                columns={columns}
                data={orders}
                title="Tất cả đơn hàng"
                pagination
                highlightOnHover
                striped
            />
        </div>
    );
};

export default AllOrder;
