import React from 'react';
import './ConfirmedOrdersStyles.scss'
import DataTable from 'react-data-table-component';
import { Order }  from '../interfaceOrder/OrdersType';
// Dữ liệu giả lập
const orders : Order[] = [
    {
        id: 1,
        time: '2024-08-01 12:30',
        product: 'Sản phẩm 1, Sản phẩm 2',
        total: 500000,
        status: 'Chờ xác nhận'
    },
    {
        id: 2,
        time: '2024-08-05 15:45',
        product: 'Sản phẩm 3',
        total: 300000,
        status: 'Chờ xác nhận'
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
const handleConfirm = (orderId: number) => {
    console.log(`Đơn hàng ${orderId} đã được xác nhận`);
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
    {
        name: 'Cập nhật',
        cell: (row: Order) => (
            <button
                className="btn-confirm"
                onClick={() => handleConfirm(row.id)}
            >
                Xác nhận
            </button>
        ),
    },
];

const ConfirmedOrders: React.FC = () => {
    return (
        <div className="confirmedOrders-container">

            <DataTable
                columns={columns}
                data={orders}
                title="Xác nhận đơn hàng"
                pagination
                highlightOnHover
                striped
            />
        </div>
    );
};

export default ConfirmedOrders;
