import React, {useState} from "react";
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [forgotUsername, setForgotUsername] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login({username: username, password: password}));
    };

    const handleForgotPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Xử lý logic khi người dùng submit yêu cầu quên mật khẩu
        console.log(`Email: ${email}, Username: ${forgotUsername}`);
        setIsModalOpen(false);
    };

    // Gọi user từ Redux store
    const user = useSelector((state: RootState) => state.user);

    return (
        <div className={"Container"}>
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
                <div className={"forgotPass"} onClick={() => setIsModalOpen(true)}>
                    Quên mật khẩu
                </div>
                <div>
                    Chưa có tài khoản?{" "}
                    <Link to="/signup" className={"link"}>
                        Đăng ký
                    </Link>
                </div>
            </form>
            {/*popup quên mk*/}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Quên mật khẩu</h3>
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <input
                                type="text"
                                placeholder="Tên đăng nhập"
                                className={"input"}
                                onChange={(event) => setForgotUsername(event.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className={"input"}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            <button type="submit" className={"button1"}>
                                Gửi yêu cầu
                            </button>
                            <button type="button" className={"button2"} onClick={() => setIsModalOpen(false)}>
                                Đóng
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
