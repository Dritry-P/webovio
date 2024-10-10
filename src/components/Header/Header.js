import { useState } from 'react';
import './_Header.scss';

const Header = () => {

    const [burgerState, setBurgerState] = useState(false)

    function handleClick() {
        setBurgerState(burgerState => !burgerState);
    }
    
    return (
        <header className={burgerState ? 'header open' : 'header'}>
            <div className="header__container">
                <div className="header__logo">
                    <a href="#" role="button"><img src="/img/header_logo.png" alt="Logo"/></a>
                </div>
                <button className="header__burger-btn" id="burger" onClick={() => (handleClick())}>
                    <span className="header__span"></span>
                </button>
                <nav className="header__nav">
                    <ul className="header__nav__list">
                        <li className="header__list__item">
                            <a className="header__list__item__link" href="#"><p>Home</p></a>
                        </li>
                        <li className="header__list__item">
                            <a className="header__list__item__link" href="#"><p>What we do</p></a>
                        </li>
                        <li className="header__list__item">
                            <a className="header__list__item__link" href="#"><p>The Awesome Project</p></a>
                        </li>
                        <li className="header__list__item">
                            <a className="header__list__item__link" href="#"><p>Product Idea</p></a>
                        </li>
                        <li className="header__list__item">
                            <a className="header__list__item__link" href="#"><p>More Info</p></a>
                        </li>
                    </ul>
                </nav>
                <div className="header__nav__bg-active"></div>
            </div>
        </header>
    )
}

export default Header;