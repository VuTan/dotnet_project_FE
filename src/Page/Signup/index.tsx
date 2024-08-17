import React, {useState} from "react";
import "./style.scss";
import {User} from "../../modal/user.model";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../../redux/user.reducer";

function Signup() {
    const dispatch = useDispatch();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        let user: User = {
            name: name,
            username: username,
            password: password,
            email: email,
            phone: phone,
            date: date,
            gender: gender
        }
        dispatch(register(user));
    }

    return (
        <div className={"Container"}>
            <form className={"form"} onSubmit={handleSubmit}>
                <div className={"heading"}>
                    <h2>Đăng Ký Tài Khoản</h2>
                </div>

                <div className={"formGroup"}>
                    <input id="fullName" name="fullName" placeholder="Nhập họ và tên"
                           onChange={(event) => setName(event.target.value)}/>
                </div>

                <div className={"formGroup"}>
                    <input id="email" name="email" placeholder="Nhập email"
                           onChange={(event) => setEmail(event.target.value)}/>
                </div>

                <div className={"formGroup"}>
                    <input id="phoneNumber" name="phoneNumber" placeholder="Nhập số điện thoại"
                           onChange={(event) => setPhone(event.target.value)}/>
                </div>

                <div className={"formGroup"}>
                    <input id="birthOfDate" name="birthOfDate" type="date"
                           onChange={(event) => setDate(event.target.value)}/>
                </div>
                {/*
          --------------------------------------------
          Phuong lam ho cai setGender khi thay doi nha
          --------------------------------------------
          */}
                <div className={"formGroup"}>
                    <select id="gender" name="gender">
                        <option value="">Chọn giới tính</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                    </select>
                </div>

                <div className={"formGroup"}>
                    <input id="username" name="username" placeholder="Nhập tên đăng nhập"
                           onChange={(event) => setUsername(event.target.value)}/>
                </div>

                <div className={"formGroup"}>
                    <input id="password" type="password" name="password" placeholder="Nhập mật khẩu"
                           onChange={(event) => setPassword(event.target.value)}/>
                </div>


                <button type="submit" className={"submitButton"}>
                    Đăng ký
                </button>
                <div>
                    Đã có tài khoản?{" "}
                    <Link to="/login" className={"link"}>
                        Đăng nhập
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;
