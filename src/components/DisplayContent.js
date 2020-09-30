import React from 'react';
import '../styles/DisplayContent.css';

function DisplayContent() {
    return (
        <div class="main-col-2 col-7">
			<div class="info width-100">
                <div class="info-title-container d-flex">
                    <h1 class="info-title">Hi, Jeeyan</h1>
                </div>
                <div class="market d-flex">
                    <div class="equity">
                        <div class="pie-icon">
                            <ul><i class="fa fa-pie-chart icon-fonts">Equity</i></ul>
                        </div>
                        <div class="d-flex">
                            <div class="sub-div1-equity">
                                <ul>
                                    <li class="replace-img">0</li>
                                    <li>Margin available</li>
                                </ul>
                            </div>
                            <div class="sub-div2-equity">
                                <ul>
                                    <li>Margins used 0</li>
                                    <li>Opening balance 0</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="commodity">
                        <div class="droplet-icon">
                            <ul><i class="icon-droplet icon-fonts">Commodity</i></ul>
                        </div>
                        <div class="d-flex">
                            <div class="sub-div1-commodity">
                                <ul>
                                    <li class="replace-img">0.01</li>
                                    <li>Margin available</li>
                                </ul>
                            </div>
                            <div class="sub-div2-commodity">
                                <ul>
                                    <li>Margins used 0</li>
                                    <li>Opening balance 0</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="holdings">
                    <div class="briefcase-icon">
                        <ul><i className="fa fa-briefcase icon-fonts">Holdings (1)</i></ul>
                    </div>
                    <div class="d-flex">
                        <div class="sub-div1-holdings">
                            <ul>
                                <li class="replace">-254.4</li>
                                <li>P&L</li>
                            </ul>
                        </div>
                        <div class="sub-div2-holdings">
                            <ul>
                                <li>Current value<span class="bold-font">483.6</span></li>
                                <li>Investment<span class="bold-font">738</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="blue-box"></div>
                </div>
            </div>
		</div>
    )
}

export default DisplayContent
