import React from "react";
import './Header.css'

const Header = ({black})=>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
            <a href="/">
                <img src="./logo.png" alt="logo" />
            </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-759-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4" alt="User" />
                </a>
            </div>
        </header>
    )
}

export default Header