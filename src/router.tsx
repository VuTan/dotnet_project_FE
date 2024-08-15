import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATH } from './utils/path';
import MasterLayout from './layout/masterLayout';
import ListPage from './Pages/ListProducts/ListPage';
import DetailPage from './Pages/ProductsDetail/DetailPage';

// Define a type for the route configuration
interface RouteConfig {
    path: string;
    component: React.ReactElement;
}

const renderRouter = (): JSX.Element => {
    const userRouters: RouteConfig[] = [
        {
            path: PATH.USER.LISTPRODUCT,
            component: <ListPage />,
        },
        {
            path: PATH.USER.PRODUCTDETAIL,
            component: <DetailPage />,
        },
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom: React.FC = () => {
    return <>{renderRouter()}</>;
};

export default RouterCustom;
