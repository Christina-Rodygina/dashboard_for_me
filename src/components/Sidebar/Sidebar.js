import "./Sidebar.css"

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="container">
                    <div className="sidebar__column">
                        <h2 className="sidebar__title">User Panel</h2>
                        <ul className="sidebar__list">
                            <li>
                                <button><img src="/Dashboard.svg" alt="Dashboard"/>
                                    <span>Dashboard</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="/Portfolio.svg" alt="Portfolio"/>
                                    <span>Portfolio</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="/Trading%20&%20Market.svg" alt="Trading&Market"/>
                                    <span>Trading & Market</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="/Reasearch%20Portal.svg" alt="Reasearch Portal"/>
                                    <span>Reasearch Portal</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="/Wallet%20Transfer%20Pay.svg" alt="Wallet Transfer Pay"/>
                                    <span>Wallet Transfer Pay</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="/Reporting%20&%20Transaction.svg" alt="Reporting&Transaction"/>
                                    <span>Reporting & Transaction</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src="/Tutorial.svg" alt="Tutorial"/>
                                    <span>Tutorial</span>
                                </button>
                            </li>
                        </ul>
                        <div className="sidebar__info">
                            <img src="/Group%201223.svg" alt="Thoughts Time"/>
                        </div>
                        <button className="sidebar__logout">
                            <img src="/Frame%201274.svg" alt="Logout"/>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar