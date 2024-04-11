import "./Header.css"

function Header () {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__row">
                    <div className="header__logo-and-title">
                        <img src="/logo.jpg" alt="Logo" className="header__logo"/>
                        <h1 className="header__title">K&S WebDev</h1>
                    </div>
                    <div className="header__search-and-btns">
                        <div className="header__search">
                            <div>
                                <input type="text" placeholder="Search . . ." />
                            </div>
                        </div>
                        <button className="header__notifications-btn">
                            <img src="/notifications.svg" alt="Notification"/>
                        </button>
                        <button className="header__settings-btn">
                            <img src="/settings.svg" alt="Settings"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;