import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from "./DefaultLayout/DefaultLayout";
import { publicRoutes } from "./routes";

interface RouteConfig {
    path: string;
    component: React.ComponentType;
    children?: RouteConfig[];
}
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        if (!route.children) {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page/>
                                        </DefaultLayout>
                                    }
                                />
                            );
                        }
                        else {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                >
                                    {route.children.map((child: RouteConfig, childIndex: number) => {
                                        const ChildComponent = child.component;
                                        return (
                                            <Route
                                                key={childIndex}
                                                path={child.path}
                                                element={<ChildComponent />}
                                            />
                                        );
                                    })}
                                </Route>
                            );
                        }
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
