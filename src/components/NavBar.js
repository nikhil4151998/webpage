import React from 'react';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <div class="container-header">
            <div class="header">
                <div class="left-header col-5">
                    <ul>
                        <li><b>NIFTY 50</b></li>
                        <li class="red"><b>11312.20</b></li>
                        <li class="grey">-0.84 %</li>
                    </ul>

                    <ul>
                        <li><b>SENSEX</b></li>
                        <li class="red"><b>38220.39</b></li>
                        <li class="grey">-1.02 %</li>
                    </ul>
                </div>

                <div class="mid-part-header col-6">
                    <img src="" class="logo" alt="" />
                    <ul>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/holdings">Holdings</a></li>
                        <li><a href="/positions">Positions</a></li>
                        <li><a href="/funds">Funds</a></li>
                        <li><a href="/apps">Apps</a></li>
                    </ul>
                </div>

                <div class="right-header">
                    <span class="fa fa-user-circle-o fa-2x"></span><span class="ml-2 fontsize">YC8757</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar
