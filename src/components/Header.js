import React from 'react';

function Header() {
    return (
        <>
            <div id="header">
                <h1>Rock Fast Payroll Service</h1>
                <div id="toggleViewArea">
                    <input
                        type="radio"
                        id="table"
                        name="viewmode"
                        value="table"
                        checked
                    />
                    <label htmlFor="table">Table</label>
                    <input
                        type="radio"
                        id="chart"
                        name="viewmode"
                        value="chart"
                    />
                    <label htmlFor="chart">Chart</label>
                </div>
            </div>
        </>
    );
}

export default Header;
