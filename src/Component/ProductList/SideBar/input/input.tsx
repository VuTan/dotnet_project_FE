import React from 'react';
import  './Input.scss'
interface InputProps {
    classnames: string;
    name: string;
    value: string;
    title: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ classnames, name, value, title, handleChange }) => {
    return (
        <label className={`label_sidebar ${classnames}`}>
            <input
                type="radio"
                className={classnames}
                name={name}
                value={value}
                title={title}
                onChange={handleChange}
            />
            <span className="choose"> </span>  {title}
        </label>
    );
};

export default Input;
