import React from 'react';
export default()=>(
    <div className="side-nav">
        <div className="logo">
            <i className="fa fa-tachometer"></i>
            <span>Brand</span>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <span><i className="fa fa-user"></i></span>
                        <span>Users</span>
                    </a>
                </li>
                <li>
                    <a href="/">

                        <span><i className="fa fa-envelope"></i></span>
                        <span>Messages</span>
                    </a>
                </li>
                <li className="active">
                    <a href="/">
                        <span><i className="fa fa-bar-chart"></i></span>
                        <span>Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span><i className="fa fa-credit-card-alt"></i></span>
                        <span>Payments</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
)