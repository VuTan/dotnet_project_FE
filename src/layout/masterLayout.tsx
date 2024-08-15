import React, { memo, ReactNode } from "react";
import "./masterLayoutStyle.scss";

interface MasterLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

// Layout gốc cho tất cả các trang
const MasterLayout: React.FC<MasterLayoutProps> = ({ children, ...props }) => {
    return (
        <div {...props}>
            {/* <Header /> */}
            <div className="content">{children}</div>
            {/* <Footer /> */}
        </div>
    );
};

export default memo(MasterLayout);
