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
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/store', component: Store},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/cloudfee', component: CloudfeePage},
    {path: '/products', component: ListPage},
    {path: '/products/:productId', component: DetailPage},
    //admin
    {path: '/admin', component: AdminPage},

    // admin don hang
    {
        path: '/adminOrderManagement',
        component: AdminOrderManagement,
        children: [
            { path: 'allOrder', component: AllOrder },
            { path: 'confirmedOrders', component: ConfirmedOrders },
            { path: 'cancelledOrders', component: CancelledOrders },
            { path: 'packagingOrders', component: PackagingOrders },
            { path: 'shippingHandovers', component: ShippingHandovers },
            { path: 'completedOrders', component: CompletedOrders },
            { path: 'returnConfirmation', component: ReturnConfirmation },
            { path: 'completedReturns', component: CompletedReturns },
        ]
    },
];


export {publicRoutes};