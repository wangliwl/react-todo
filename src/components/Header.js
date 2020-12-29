import React from "react";
import Logo from "../logo.svg";

const Header = () => {
    return (
        <div>
            <div className="logo-container">
                <img src={Logo} width={64} alt="Todo" />
            </div>
            <div className="title">待办</div>
        </div>
    );
};

export default Header;
