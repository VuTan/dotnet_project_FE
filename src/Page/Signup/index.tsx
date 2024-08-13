import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Signup() {
  return (
      <div className={"container"}>
        <form className={"form"}>
          <div className={"heading"}>
            <h2>Đăng Ký Tài Khoản</h2>
          </div>

          <div className={"formGroup"}>
            <input id="fullName" name="fullName" placeholder="Nhập họ và tên" />
          </div>

          <div className={"formGroup"}>
            <input id="email" name="email" placeholder="Nhập email" />
          </div>

          <div className={"formGroup"}>
            <input id="phoneNumber" name="phoneNumber" placeholder="Nhập số điện thoại" />
          </div>

          <div className={"formGroup"}>
            <input id="birthOfDate" name="birthOfDate" type="date" />
          </div>

          <div className={"formGroup"}>
            <select id="gender" name="gender">
              <option value="">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <div className={"formGroup"}>
            <input id="username" name="username" placeholder="Nhập tên đăng nhập" />
          </div>

          <div className={"formGroup"}>
            <input id="password" type="password" name="password" placeholder="Nhập mật khẩu" />
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
