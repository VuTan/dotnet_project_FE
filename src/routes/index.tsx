//public routes
import Home from "../Page/Home/Home";
import Store from "../Page/Store/Store";
import Login from "../Page/Login/login";
import Signup from "../Page/Signup";
import CloudfeePage from "../Pages/Cloudfee/CloudfeePage";
import ListPage from "../Pages/ListProducts/ListPage";
import DetailPage from "../Pages/ProductsDetail/DetailPage";
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/store', component: Store},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/cloudfee', component: CloudfeePage},
    {path: '/products', component: ListPage},
    {path: '/products/:productId', component: DetailPage}
];


export {publicRoutes};