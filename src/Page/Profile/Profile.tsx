import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Profile.scss';

const Profile: React.FC = () => {
    const initialUserState = {
        fullName: "Huỳnh Thị Mai Phương",
        userName: "Phương",
        email: "26@gmail.com",
        phoneNumber: '0898388564',
        address: "Đăk Nông",
        yearOfBirth: new Date('2003-03-13'),
        sex: "Nữ",
        role: "Khách hàng"
    };

    const [user, setUser] = useState(initialUserState);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value, type} = e.target;
        if (type === 'date' && name === 'yearOfBirth') {
            setUser(prevUser => ({
                ...prevUser,
                [name]: new Date(value)
            }));
        } else {
            setUser(prevUser => ({
                ...prevUser,
                [name]: value
            }));
        }
    };

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Cập nhật thông tin người dùng:', user);
    };

    const handleCancel = () => {
        setUser(initialUserState);
    };

    return (
        <div className="profile-container">
            <nav className="profile-navbar">
                <ul>
                    <li className="profile-nav-item" onClick={() => navigate('/profile')}>Cài đặt</li>
                    <li className="profile-nav-item" onClick={() => navigate('/userOrderManagement')}>Đơn hàng của tôi
                    </li>
                </ul>
            </nav>
            <div className="profile-content">
                <div className="sc-epPVmt bvRKJa rdt_TableHeader">
                    <div className="text-profile">Thông tin cá nhân</div>
                </div>
                <form className="form-container" onSubmit={handleUpdate}>
                    <div className="form-group">
                        <label>Họ và Tên:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={user.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tên đăng nhập:</label>
                        <input
                            type="text"
                            name="userName"
                            value={user.userName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ:</label>
                        <input
                            type="text"
                            name="address"
                            value={user.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ngày sinh:</label>
                        <input
                            type="date"
                            name="yearOfBirth"
                            value={user.yearOfBirth.toISOString().split('T')[0]}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giới tính:</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="sex"
                                    value="Nam"
                                    checked={user.sex === 'Nam'}
                                    onChange={handleChange}
                                />
                                Nam
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="sex"
                                    value="Nữ"
                                    checked={user.sex === 'Nữ'}
                                    onChange={handleChange}
                                />
                                Nữ
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Chức vụ:</label>
                        <select
                            name="role"
                            value={user.role}
                            onChange={handleChange}
                        >
                            <option value="Khách hàng">Khách hàng</option>
                            <option value="Nhân viên">Nhân viên</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <div className="form-action">
                        <button type="submit" className="btn btn-capnhat">Cập nhật</button>
                        <button type="button" className="btn btn-huy" onClick={handleCancel}>Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
