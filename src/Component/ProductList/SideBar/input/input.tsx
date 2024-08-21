import React from 'react';
import './Input.scss'

interface InputProps {
    id: string;
    classnames: string;
    name: string;
    title: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({id,classnames, name, title, handleChange}) => {
    return (
        <label className={`label_sidebar ${classnames}`}>
            <input
                type="radio"
                id={id}
                className={classnames}
                name={name}
                title={title}
                onChange={handleChange}
            />
            <span className="choose"> </span>
            <div className={"title-menu"}>{title}</div>
        </label>
    );
};

export default Input;
