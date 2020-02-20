import React from 'react';

function Compare({ isCompareOpen, onToggleCompareOpen }) {
    return (
        <>
            {isCompareOpen ? (
                <div id="wrap_compare">
                    <div class="wrap_compare_item">
                        <h2>Jonny Bravo</h2>
                        <div id="wrap_table">
                            <div id="wrap_table_tax">
                                <h3>Components - Taxable</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>name</td>
                                            <td>units</td>
                                            <td>rate</td>
                                            <td>taxable</td>
                                            <td>type</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Normal</td>
                                            <td>15</td>
                                            <td>25</td>
                                            <td>true</td>
                                            <td>addition</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="wrap_table_non_tax">
                                <h3>Components - Non Taxable</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>name</td>
                                            <td>units</td>
                                            <td>rate</td>
                                            <td>taxable</td>
                                            <td>type</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Child Support</td>
                                            <td>1</td>
                                            <td>48</td>
                                            <td>false</td>
                                            <td>deduction</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="wrap_cal">
                            <div id="cal_tax">
                                <h3>Calculation - Taxable</h3>
                                <div>
                                    <div className="totalBTA">
                                        <p>totalBefore TaxAdditions</p>
                                        <p>375</p>
                                    </div>
                                    <div className="totalBTD">
                                        <p>totalBefore TaxDeductions</p>
                                        <p>0</p>
                                    </div>
                                    <div className="tax">
                                        <p>calculatedTax</p>
                                        <p>75</p>
                                    </div>
                                </div>
                            </div>
                            <div id="cal_non_tax">
                                <h3>Calculation - Non Taxable</h3>
                                <div>
                                    <div className="totalBTA">
                                        <p>totalAfter TaxAdditions</p>
                                        <p>0</p>
                                    </div>
                                    <div className="totalBTD">
                                        <p>totalAfter TaxDeductions</p>
                                        <p>48</p>
                                    </div>
                                </div>
                            </div>
                            <div id="calc_result">
                                <h3>Result</h3>
                                <div>Addition</div>
                                <div>Deduction</div>
                            </div>
                        </div>
                    </div>
                    <div class="wrap_compare_item">
                        <h2>Jonny Bravo</h2>
                        <div id="wrap_table">
                            <div id="wrap_table_tax">
                                <h3>Components - Taxable</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>name</td>
                                            <td>units</td>
                                            <td>rate</td>
                                            <td>taxable</td>
                                            <td>type</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Normal</td>
                                            <td>15</td>
                                            <td>25</td>
                                            <td>true</td>
                                            <td>addition</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="wrap_table_non_tax">
                                <h3>Components - Non Taxable</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>name</td>
                                            <td>units</td>
                                            <td>rate</td>
                                            <td>taxable</td>
                                            <td>type</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Child Support</td>
                                            <td>1</td>
                                            <td>48</td>
                                            <td>false</td>
                                            <td>deduction</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="wrap_cal">
                            <div id="cal_tax">
                                <h3>Calculation - Taxable</h3>
                                <div>
                                    <div className="totalBTA">
                                        <p>totalBefore TaxAdditions</p>
                                        <p>375</p>
                                    </div>
                                    <div className="totalBTD">
                                        <p>totalBefore TaxDeductions</p>
                                        <p>0</p>
                                    </div>
                                    <div className="tax">
                                        <p>calculatedTax</p>
                                        <p>75</p>
                                    </div>
                                </div>
                            </div>
                            <div id="cal_non_tax">
                                <h3>Calculation - Non Taxable</h3>
                                <div>
                                    <div className="totalBTA">
                                        <p>totalAfter TaxAdditions</p>
                                        <p>0</p>
                                    </div>
                                    <div className="totalBTD">
                                        <p>totalAfter TaxDeductions</p>
                                        <p>48</p>
                                    </div>
                                </div>
                            </div>
                            <div id="calc_result">
                                <h3>Result</h3>
                                <div>Addition</div>
                                <div>Deduction</div>
                            </div>
                        </div>
                        <button id="close" onClick={onToggleCompareOpen}>
                            CLOSE
                        </button>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Compare;
