import React, {ReactNode} from 'react';
// import Footer from "../components/Footer/Footer";
import Header from "../Component/Header/Header";
import './DefaultLayout.scss';
interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
    return (

        <div>
            <Header/>

            <div className={"Container"}>{children}</div>

            {/*<Footer/>*/}
        </div>
    );
};


export default DefaultLayout;
