import React, {ReactNode} from 'react';
import Header from "../Component/Header/Header";
import './DefaultLayout.scss';
import Footer from "../Component/Footer/Footer";

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
    return (

        <div>
            <Header/>

            <div className={"Container"}>{children}</div>

            <Footer/>
        </div>
    );
};


export default DefaultLayout;
