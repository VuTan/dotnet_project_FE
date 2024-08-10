import React from "react";
// import {Link, useNavigate} from "react-router-dom";
// import images from "../../../../../FE-bicycle-sell/src/images/images";
import './MiddleHeader.scss';
import { AiFillEnvironment } from "react-icons/ai";
const MiddleHeader = () => {
    return (
        <div className={"middle"}>
            <div className={"container"}>
                {/*<div className={"logo"}>*/}
                {/*    <Link to="/">*/}
                {/*        /!*<img src={images.logo} alt="Shop hàng Nguyễn Duy Thanh"/>*!/*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <div className={"information"}>
                    <div className="box">
                        <AiFillEnvironment size={30} color="orange" /><p className={"title"}>117 Cửa hàng khắp cả nước</p>
                    </div>
                    <div className={"box"}>
                        <p className={"title"}>Đặt hàng: 1800.6936</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MiddleHeader;
