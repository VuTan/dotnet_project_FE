//public routes
import Home from "../Page/Home/Home";
import Store from "../Page/Store/Store";
import Login from "../Page/Login/login";
import Signup from "../Page/Signup";
import CloudfeePage from "../Pages/Cloudfee/CloudfeePage";
import ListPage from "../Pages/ListProducts/ListPage";
import DetailPage from "../Pages/ProductsDetail/DetailPage";
//admin
import AdminPage from "../Pages/Admin/AdminPage";
import AdminOrderManagement from "../Component/AdminDonHang/AdminOrderManagement";
import AllOrder from "../Component/AdminDonHang/allOrders/AllOrder";
import ConfirmedOrders from "../Component/AdminDonHang/confirmedOrders/ConfirmedOrders";
import CancelledOrders from "../Component/AdminDonHang/cancelledOrders/CancelledOrders";
import CompletedReturns from "../Component/AdminDonHang/completedReturns/CompletedReturns";
import PackagingOrders from "../Component/AdminDonHang/packagingOrders/PackagingOrders";
import ShippingHandovers from "../Component/AdminDonHang/shippingHandovers/ShippingHandovers";
import CompletedOrders from "../Component/AdminDonHang/completedOrders/CompletedOrders";
import ReturnConfirmation from "../Component/AdminDonHang/returnConfirmation/ReturnConfirmation";

import AdminUserManager from "../Component/AdminNguoiDung/AdminUserManager";


import AllOrdersUser from "../Component/UserDonHang/allOrdersUser/AllOrdersUser";
import UserOrderManagement from "../Pages/UserOrderManagement/UserOrderManagement";
import ShippingHandoversUser from "../Component/UserDonHang/shippingHandoversUser/ShippingHandoversUser";
import ConfirmedOrdersUser from "../Component/UserDonHang/confirmedOrdersUser/ConfirmedOrdersUser";
import PackagingOrdersUser from "../Component/UserDonHang/packagingOrdersUser/PackagingOrdersUser";
import CompletedOrdersUser from "../Component/UserDonHang/completedOrdersUser/CompletedOrdersUser";
import CancelledOrdersUser from "../Component/UserDonHang/cancelledOrdersUser/CancelledOrdersUser";
import UserDetailManager from "../Component/AdminNguoiDung/UserDetailManager/UserDetailManager";
import AddUser from "../Component/AdminNguoiDung/AddUser/AddUser";
import Profile from "../Page/Profile/Profile";
import gioHang from "../Component/gioHang/GioHang";


import QLSanPham from "../Component/quanLySanPham/QLSanPham";
import AdminSanPham from "../Component/AdminSanPham/AdminSanPham";


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/store', component: Store},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/cloudfee', component: CloudfeePage},
    {path: '/products', component: ListPage},
    {path: '/products/:productId', component: DetailPage},
    {path: '/profile', component: Profile},
    {path: '/cart', component: gioHang},
    {path: '/menu', component: ListPage},
    // {path: 'qlSanPham', component: QLSanPham},
    //admin quản lý người dùng
    {
        path: '/admin', component: AdminPage,
        children: [
            {path: 'adminUserManager', component: AdminUserManager},
            {path: 'adminProductManager', component: AdminSanPham},
            {path: 'user/:userId', component: UserDetailManager},
            {path: 'addUser', component: AddUser},

        ]
    },

    // admin don hang
    {
        path: '/adminOrderManagement',
        component: AdminOrderManagement,
        children: [
            {path: 'allOrder', component: AllOrder},
            {path: 'confirmedOrders', component: ConfirmedOrders},
            {path: 'cancelledOrders', component: CancelledOrders},
            {path: 'packagingOrders', component: PackagingOrders},
            {path: 'shippingHandovers', component: ShippingHandovers},
            {path: 'completedOrders', component: CompletedOrders},
            {path: 'returnConfirmation', component: ReturnConfirmation},
            {path: 'completedReturns', component: CompletedReturns},

        ]
    },


    // user don hang
    {
        path: '/userOrderManagement',
        component: UserOrderManagement,
        children: [
            {path: 'allOrdersUser', component: AllOrdersUser},
            {path: 'confirmedOrdersUser', component: ConfirmedOrdersUser},
            {path: 'packagingOrdersUser', component: PackagingOrdersUser},
            {path: 'shippingHandoversUser', component: ShippingHandoversUser},
            {path: 'completedOrdersUser', component: CompletedOrdersUser},
            {path: 'cancelledOrdersUser', component: CancelledOrdersUser},
        ]
    },

];


export {publicRoutes};