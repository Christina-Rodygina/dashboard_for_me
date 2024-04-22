import "./view";
import React, {useEffect, useState} from "react";

const Header = () => {
    const [bell, setBell] = useState(true)


    const scroll_header = () => {
        const section = document.querySelector(".header__container");
        if (window.scrollY > section.style.height) {
            section.style.backgroundColor = "rgba(2, 0, 36, 0.64)";
        } else {
            section.style.backgroundColor = "transparent"
        }
    }

    const bellOff = () => {
        setBell(!bell)
    }

    useEffect(() => {
        scroll_header()
        // Вызывается при скролле
        window.addEventListener("scroll", scroll_header);

        // Очистка слушателя при размонтировании
        return () => {
            window.removeEventListener("scroll", scroll_header);
        };
    })

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__row">
                    <div className="header__logo-and-title">
                        <img src="/logo.jpg" alt="Logo" className="header__logo"/>
                        <h1 className="header__title">KRIanSE Admin</h1>
                    </div>
                    <div className="header__search-and-btns">
                        <div className="header__search">
                             <div>
                                <input type="text" placeholder="Search . . ."/>
                            </div>
                        </div>
                        <button onClick={bellOff} className="header__notifications-btn">
                            {bell ? (
                                <img src="/bell-svgrepo-com.svg" alt="Notification"/>
                            ) : (
                                <img src="/bell-slash-svgrepo-com.svg" alt="Not notification"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;