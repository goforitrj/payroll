import React from 'react';

function Register({ isRegisterOpen, onToggleRegister }) {
    console.log(isRegisterOpen);
    return (
        <>
            {isRegisterOpen ? (
                <div id="wrap_register">
                    <div>
                        <h2>Personal Information</h2>
                        <div id="personal_info">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="First name"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    id="email"
                                    type="text"
                                    placeholder="E-mail"
                                />
                            </div>
                        </div>
                    </div>
                    {/* name	units	rate	taxable	type */}
                    <div>
                        <h3>Components</h3>
                        <div className="component_form">
                            <div>
                                <label htmlFor="componentName">
                                    Component Name
                                </label>
                                <select id="componentName" name="componentName">
                                    <option value="Normal">Normal</option>
                                    <option value="UnionFees">
                                        Union fees
                                    </option>
                                    <option value="Expenses">Expenses</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="units">Units</label>
                                <input
                                    id="units"
                                    type="text"
                                    placeholder="Units"
                                />
                            </div>
                            <div>
                                <label htmlFor="rate">rate</label>
                                <input
                                    id="rate"
                                    type="text"
                                    placeholder="rate"
                                />
                            </div>
                            <div>
                                <label htmlFor="taxableType">
                                    Taxable Type
                                </label>
                                <select id="taxableType" name="taxableType">
                                    <option value="taxable">taxable</option>
                                    <option value="nonTaxable">
                                        nonTaxable
                                    </option>
                                </select>
                            </div>
                            <div>
                                <button>
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button id="close" onClick={onToggleRegister}>
                        CLOSE
                    </button>
                </div>
            ) : null}
        </>
    );
}

export default Register;
