import './gioHang.scss';
import React from 'react';
import {FaPhoneAlt} from "react-icons/fa";
import {AiFillEnvironment, AiFillPhone} from "react-icons/ai";

const GioHang = () => {
    return (
        <div className="Container">
            <div className="head-container d-flex">
                <h1>
                    <span>
                        <i className="fa-solid fa-file"></i>
                    </span>
                    <span style={{fontSize:'35px'}}>Xác Nhận đơn Hàng</span>
                </h1>
            </div>
            <div className={'conten-container'}>
                <div className={'giohang-left '} style={{width: '500px'}}>
                    <div className="head-left d-flex justify-content-between">
                        <div style={{fontSize:'25px'}}>
                            Giao hàng
                            <div className="tch-check-box-tile"></div>
                        </div>
                        <p className="p-dpt ">
                            Đôi phương thức
                        </p>
                    </div>
                    <div className="conten-left">
                        <img src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" width="50px"
                             height="50px" alt=""/>
                        <div className="diachi">
                            <h4>Bien Hoa</h4>
                            <p>Bien Hoa, Tp.Biên Hòa, Đồng Nai, Viet Nam</p>
                            <div className="tch-check-box-tile" style={{width: '400px', marginTop: '0px' ,marginBottom:'8px'}}></div>
                        </div>
                        <div className="d-flex chevron-right">
                            <span><i className="fa-solid fa-chevron-right"></i></span>
                        </div>
                    </div>
                    <div className="conten-left" style={{marginBottom:'16px'}}>
                        <img src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" width="50px"
                             height="50px" alt=""/>
                        <div className="diachi" style={{width: '400px'}}>
                            <h4>Nhận hàng trong ngày Hôm nay</h4>
                            <p>Vào Lúc: Sớm nhất có thể</p>
                        </div>
                        <div className="d-flex chevron-right">
                            <span><i className="fa-solid fa-chevron-right"></i></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className={'input-name'} id="name"
                               placeholder="Tên Người Nhân"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className={'input-name'} id="name"
                               placeholder="Số điện thoại"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className={'input-name'} id="name"
                               placeholder="Thêm hướng dẫn giao hàng"/>
                    </div>
                </div>
                <div className="giohang-right">
                    <div className="head-right d-flex justify-content-between">
                        <div style={{fontSize:'25px'}}>
                            Các món đã chọn
                            <div className="tch-check-box-tile"></div>
                        </div>
                        <p className="p-dpt ">
                            Thêm món
                        </p>
                    </div>
                    <div className="donHang d-flex justify-content-between">
                        <div className="d-flex edit">
                        <span>
                            <i className="fa-solid fa-pen"></i>
                        </span>
                        </div>
                        <div>
                            <h5>
                                1 x Bơ Sưa Phô Mai Tươi
                            </h5>
                            <div className={'pdb-8px'}>
                                <h5 style={{display: 'inline'}}>Size:</h5>
                                <span>Nhỏ</span>
                            </div>
                            <span>
                            <i className="fa-solid fa-trash"></i>
                        </span>
                        </div>
                        <div className="d-flex price">
                            <p className="">55.000</p>
                        </div>
                    </div>
                    <div className="tongCong">
                        <div className={'pdb-8px'}>
                            <h4>Tổng Cộng</h4>
                            <div className="tch-check-box-tile"></div>
                        </div>
                        <div className="d-flex justify-content-between" style={{padding: '12px 0px'}}>
                            <p>Thành tiền</p>
                            <p className="">55.000</p>
                        </div>
                        <div className="tch-check-box-tile"
                             style={{width: '500px', height: '1px',margin:'0px', background: 'gray'}}></div>
                        <div>
                            <div className="d-flex justify-content-between" style={{padding: '24px 0px 8px 0px'}}>
                                <p>Phí giao hàng</p>
                                <p className="ship">18.000</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Bạn có mã Freeship trong mục Ưu đãi</p>
                                <p className="freeShip">0đ</p>
                            </div>
                            <div className="tch-check-box-tile"
                                 style={{width: '460px', height: '1px', background: 'gray', marginTop: '12px'}}></div>
                        </div>
                        <div className="">
                            <p className="" style={{paddingTop: '12px', color: '#fa8c16'}}>Khuyến mãi</p>
                        </div>
                    </div>
                    <div className="footer-donHang d-flex justify-content-between">
                        <div style={{color: 'white'}}>
                            <p style={{paddingTop: '12px'}}>Thành Tiền</p>
                            <p className="bold-700">73.000</p>
                        </div>
                        <div>
                            <button className="bt-datHang">
                                Đặt Hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pttt">
                <div style={{paddingTop: '16px'}}>
                    <h4>Phương Thức Thanh Toán</h4>
                    <div className="tch-check-box-tile" ></div>
                </div>
                <ul className="ptth_gioHang">
                    <li data-v-d1bcb9c8="" className="tch-payment-method-item">
                        <div data-v-d1bcb9c8="" className="custom-control custom-radio ">
                            <input data-v-d1bcb9c8="" type="radio" name="payment-method" id="COD"
                                   className="custom-control-input"/>
                            <label data-v-d1bcb9c8="" htmlFor="COD" className="custom-control-label tch-custom-radio"
                                   style={{paddingLeft: '6px'}}>
                                <img data-v-d1bcb9c8="" className="img_pttt"
                                     src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
                                     alt=""/>
                                <span data-v-d1bcb9c8="" className="text">Tiền mặt</span>
                            </label>
                        </div>
                        <div className="tch-check-box-tile"
                             style={{width: '460px', height: '1px', background: 'gray'}}></div>
                    </li>
                    <li data-v-d1bcb9c8="" className="tch-payment-method-item">
                        <div data-v-d1bcb9c8="" className="custom-control custom-radio ">
                            <input data-v-d1bcb9c8="" type="radio" name="payment-method" id="COD"
                                   className="custom-control-input"/>
                            <label data-v-d1bcb9c8="" htmlFor="COD" className="custom-control-label tch-custom-radio"
                                   style={{paddingLeft: '6px'}}>
                                <img data-v-d1bcb9c8="" className="img_pttt"
                                     src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png"
                                     alt=""/>
                                <span data-v-d1bcb9c8="" className="text">Momo</span>
                            </label>
                        </div>
                        <div className="tch-check-box-tile"
                             style={{width: '460px', height: '1px', background: 'gray'}}></div>
                    </li>
                    <li data-v-d1bcb9c8="" className="tch-payment-method-item">
                        <div data-v-d1bcb9c8="" className="custom-control custom-radio ">
                            <input data-v-d1bcb9c8="" type="radio" name="payment-method" id="COD"
                                   className="custom-control-input"/>
                            <label data-v-d1bcb9c8="" htmlFor="COD" className="custom-control-label tch-custom-radio"
                                   style={{paddingLeft: '6px'}}>
                                <img data-v-d1bcb9c8="" className="img_pttt"
                                     src="https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png"
                                     alt=""/>
                                <span data-v-d1bcb9c8="" className="text" >Zalopay</span>
                            </label>
                        </div>
                    </li>
                </ul>
                <div data-v-d1bcb9c8="" className="policy">
                    <label data-v-d1bcb9c8="" className="checkbox-button">
                        <input data-v-d1bcb9c8="" checked={false} disabled={true} type="checkbox" id="choice1-1"
                               name="choice1" className="checkbox-button__input"/>
                        <span data-v-d1bcb9c8="" className="checkbox-button__control"></span>
                        <span data-v-d1bcb9c8="" className="checkbox-button__label">Đồng ý với các
                        <a data-v-d1bcb9c8="" href="/policy" className="policy-link">điều khoản và điều kiện</a>
                        mua hàng của The Coffee House
                    </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default GioHang;
