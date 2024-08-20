import React from 'react';
import './CancelledOrdersStyles.scss'
import DataTable from 'react-data-table-component';
import { Order }  from '../interfaceOrder/OrdersType';
// Dữ liệu giả lập
const orders : Order[] = [
    {
        id: 1,
        time: '2024-08-01 12:30',
        product: 'Sản phẩm 1, Sản phẩm 2',
        total: 500000,
        status: 'Đang xử lý'
    },
    {
        id: 2,
        time: '2024-08-05 15:45',
        product: 'Sản phẩm 3',
        total: 300000,
        status: 'Đã được đóng gói'
    },
    {
        id: 3,
        time: '2024-08-10 10:00',
        product: 'Sản phẩm 4, Sản phẩm 5, Sản phẩm 6',
        total: 1500000,
        status: 'Chờ xác nhận'
    },
];

// Hàm để render button "Xác nhận"
const handlecancel = (orderId: number) => {
    console.log(`Đơn hàng ${orderId} đã được huy`);
};

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
        name: 'Danh sách sản phẩm',
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
    {
        name: 'Cập nhật',
        cell: (row: Order) => (
            <button
                className="btn-cancel"
                onClick={() => handlecancel(row.id)}
            >
                Hủy đơn
            </button>
        ),
    },
];

const CancelledOrders: React.FC = () => {
    return (
        <div className="CancelledOrders-container">

            <DataTable
                columns={columns}
                data={orders}
                title="Hủy đơn hàng"
                pagination
                highlightOnHover
                striped
            />
        </div>
    );
};

export default CancelledOrders;
