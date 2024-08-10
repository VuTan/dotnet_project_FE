import React, { useState, useEffect } from 'react';
import './Header.scss';
import MiddleHeader from "./MiddleHeader/middleHeader";
import NavBar from "./NavBar/navbar";

const Header = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
            setIsScrollingUp(true);
        } else {
            setIsScrollingUp(false);
        }
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={"header-hidden"}>
            <MiddleHeader />
            <NavBar />
        </header>
    );
};

export default Header;
