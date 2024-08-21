import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'; // Import hook useNavigate
import '../AdminUserManager.scss';

const AddUser: React.FC = () => {
    const navigate = useNavigate(); // Khai báo useNavigate

    // Trạng thái cho thông tin người dùng
    const initialUserState = {
        fullName: '',
        userName: '',
        email: '',
        phoneNum: '',
        address: '',
        yearOfBirth: '',
        sex: '',
        role: 'Khách hàng'
    };

    const [newUser, setNewUser] = useState(initialUserState);
    // Xử lý thay đổi giá trị trường input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value, type} = e.target;
        if (type === 'date' && name === 'yearOfBirth') {
            setNewUser(prevUser => ({
                ...prevUser,
                [name]: value
            }));
        } else {
            setNewUser(prevUser => ({
                ...prevUser,
                [name]: value
            }));
        }
    };

    // Xử lý gửi form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Thông tin người dùng mới:', newUser);
        navigate('/admin/adminUserManager');
    };

    // Xử lý hủy
    const handleCancel = () => {
        setNewUser(initialUserState);
    };

    return (
        <div className="all-order-container">
            <div className="sc-epPVmt bvRKJa rdt_TableHeader">
                <div className="sc-fpSrms bRougq">Thêm người dùng mới</div>
            </div>
            <form className="add-user-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Họ và Tên:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={newUser.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Tên đăng nhập:</label>
                    <input
                        type="text"
                        name="userName"
                        value={newUser.userName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Số điện thoại:</label>
                    <input
                        type="text"
                        name="phoneNum"
                        value={newUser.phoneNum}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Địa chỉ:</label>
                    <input
                        type="text"
                        name="address"
                        value={newUser.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Ngày sinh:</label>
                    <input
                        type="date"
                        name="yearOfBirth"
                        value={newUser.yearOfBirth}
                        onChange={handleChange}
                        required
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
                                checked={newUser.sex === 'Nam'}
                                onChange={handleChange}
                            />
                            Nam
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="sex"
                                value="Nữ"
                                checked={newUser.sex === 'Nữ'}
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
                        value={newUser.role}
                        onChange={handleChange}
                    >
                        <option value="Khách hàng">Khách hàng</option>
                        <option value="Nhân viên">Nhân viên</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">Thêm</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>Hủy</button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
