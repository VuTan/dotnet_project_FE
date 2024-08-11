import React from "react";
// import {Link, useNavigate} from "react-router-dom";
// import images from "../../../../../FE-bicycle-sell/src/images/images";
import './MiddleHeader.scss';
import {AiFillEnvironment, AiFillPhone} from "react-icons/ai";
const MiddleHeader = () => {
    return (
        <div className={"middle"}>
            <div className={"container"}>
                <div className={"information"}>
                    <div className="box">
                        <AiFillEnvironment size={20} color="orange" /><p className={"title"}>117 Cửa hàng khắp cả nước</p>
                    </div>
                    <div className={"box"}>
                        <AiFillPhone size={20} color="orange" /><p className={"title"}>Đặt hàng: 1800.6936</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MiddleHeader;
