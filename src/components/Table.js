import React from 'react';

function Table() {
    return (
        <>
            <div id="total_table_wrap">
                <table id="total_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>first name</th>
                            <th>last name</th>
                            <th>email</th>
                            <th>totalBefore TaxAdditions</th>
                            <th>totalBefore TaxDeductions</th>
                            <th>calculatedTax</th>
                            <th>totalAfter TaxAdditions</th>
                            <th>totalAfter TaxDeductions</th>
                            <th>totalNet</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Johnny</td>
                            <td>Bravo</td>
                            <td>whoamomma@acme.com</td>
                            <td>375</td>
                            <td>0</td>
                            <td>300</td>
                            <td>0</td>
                            <td>48</td>
                            <td>177</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Johnny</td>
                            <td>Bravo</td>
                            <td>whoamomma@acme.com</td>
                            <td>375</td>
                            <td>0</td>
                            <td>300</td>
                            <td>0</td>
                            <td>48</td>
                            <td>177</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Johnny</td>
                            <td>Bravo</td>
                            <td>whoamomma@acme.com</td>
                            <td>375</td>
                            <td>0</td>
                            <td>300</td>
                            <td>0</td>
                            <td>48</td>
                            <td>177</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Johnny</td>
                            <td>Bravo</td>
                            <td>whoamomma@acme.com</td>
                            <td>375</td>
                            <td>0</td>
                            <td>300</td>
                            <td>0</td>
                            <td>48</td>
                            <td>177</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Johnny</td>
                            <td>Bravo</td>
                            <td>whoamomma@acme.com</td>
                            <td>375</td>
                            <td>0</td>
                            <td>300</td>
                            <td>0</td>
                            <td>48</td>
                            <td>177</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Johnny</td>
                            <td>Bravo</td>
                            <td>whoamomma@acme.com</td>
                            <td>375</td>
                            <td>0</td>
                            <td>300</td>
                            <td>0</td>
                            <td>48</td>
                            <td>177</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Johnny</td>
                            <td>Bravo</td>
                            <td>whoamomma@acme.com</td>
                            <td>375</td>
                            <td>0</td>
                            <td>300</td>
                            <td>0</td>
                            <td>48</td>
                            <td>177</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>BLANK</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                            <td>TOTAL</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
}

export default Table;
