import React, { useState} from "react";
import {AiOutlineUser} from "react-icons/ai";
import {Link} from "react-router-dom";
import "./login.scss";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/user.reducer";
import {RootState} from "../../redux/store";


function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        dispatch(login({username: username, password: password}))
    }

    // gọi user
    const user = useSelector((state: RootState) => state.user);

    return (
        <div className={"container"}>
            <form className={"form"} onSubmit={handleSubmit}>
                <div>
                    <div className={"heading"}>
                        <AiOutlineUser className={"icon"}/>
                        <h3 className={"title"}>Đăng nhập</h3>
                    </div>
                    <div className={"title2"}>
                        Điền Thông Tin Đăng Nhập
                    </div>

                </div>
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    className={"input"}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className={"input"}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                <button type="submit" className={"button"}>
                    Đăng nhập
                </button>
                <div>
                    Chưa có tài khoản?{" "}
                    <Link to="/signup" className={"link"}>
                        Đăng ký
                    </Link>
                </div>
            </form>


        </div>
    );
}

export default Login;
