//public routes
import Home from "../Page/Home/Home";
import Store from "../Page/Store/Store";
import Login from "../Page/Login/login";
import Signup from "../Page/Signup";


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/store', component: Store},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
];


export {publicRoutes};