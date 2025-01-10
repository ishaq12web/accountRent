import React, { useState } from 'react';
import "./account.css";

function Account() {
    const [activePage, setActivePage] = useState('leasers');

    return (
        <div className="container">
            {/* Toggle Buttons */}
            <div className="toggle-btns">
                <button 
                    onClick={() => setActivePage('leasers')} 
                    className={activePage === 'leasers' ? 'active-btn' : ''}
                >
                    Leasers
                </button>
                <button 
                    onClick={() => setActivePage('renters')} 
                    className={activePage === 'renters' ? 'active-btn' : ''}
                >
                    Renters
                </button>
            </div>

            {/* Leasers Page */}
            {activePage === 'leasers' && (
                <div className="page">
                    <h2>Leasers' Account</h2>
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> johndoe@example.com</p>
                    <p><strong>Available Accounts for Rent:</strong> 5</p>

                    <div className="transaction-history">
                        <h3>Transaction History:</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Account Rented</th>
                                    <th>Amount Earned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2025-01-01</td>
                                    <td>Account A</td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td>2025-01-02</td>
                                    <td>Account B</td>
                                    <td>$70</td>
                                </tr>
                                <tr>
                                    <td>2025-01-05</td>
                                    <td>Account C</td>
                                    <td>$65</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Renters Page */}
            {activePage === 'renters' && (
                <div className="page">
                    <h2>Renters' Account</h2>
                    <p><strong>Name:</strong> Jane Smith</p>
                    <p><strong>Email:</strong> janesmith@example.com</p>
                    <p><strong>Accounts Rented:</strong> 3</p>

                    <div className="transaction-history">
                        <h3>Transaction History:</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Account Rented</th>
                                    <th>Amount Paid</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2025-01-02</td>
                                    <td>Account A</td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td>2025-01-04</td>
                                    <td>Account B</td>
                                    <td>$70</td>
                                </tr>
                                <tr>
                                    <td>2025-01-06</td>
                                    <td>Account C</td>
                                    <td>$65</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Account;
