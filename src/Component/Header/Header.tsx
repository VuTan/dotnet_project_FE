import React, {useState, useEffect} from 'react';
import './Header.scss';
import MiddleHeader from "./MiddleHeader/middleHeader";
import NavBar from "./NavBar/navbar";

const Header = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsScrollingUp(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={`header ${isScrollingUp ? 'header-show' : 'header-hide'}`}>
            <MiddleHeader/>
            <NavBar/>
        </header>
    );
};

export default Header;
