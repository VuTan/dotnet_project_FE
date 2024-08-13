import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";



function Login() {

  return (
      <div className={"container"}>
        <form className={"form"}>
          <div>
            <div className={"heading"}>
              <AiOutlineUser className={"icon"} />
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
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className={"input"}
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
