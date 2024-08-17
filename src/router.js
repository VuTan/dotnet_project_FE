import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {PATH} from "./utils/path";
import MasterLayout from "./layout/masterLayout";
import ListPage from './Pages/ListProducts/ListPage';
import DetailPage from './Pages/ProductsDetail/DetailPage';

const renderRouter = () => {
    const userRouters = [
        {
            path: PATH.USER.LISTPRODUCT,
            component: <ListPage/>
        },
        {
            path: PATH.USER.PRODUCTDETAIL,
            component: <DetailPage/>
        },

    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component}/>
                ))}
            </Routes>
        </MasterLayout>
    );
}
const RouterCustom = () => {
    return renderRouter();
}
export default RouterCustom;