import React, { useState } from 'react';
import SearchBar from '../components/search';
import './market.css';

function Market() {
    const accountData = [
        {
            title: "Gaming Account",
            type: "Premium Gaming Account",
            description: "High-level achievements and exclusive content.",
            price: "$50",
            days: "7 days",
            imgSrc: "https://via.placeholder.com/400x200"
        },
        {
            title: "Streaming Account",
            type: "Netflix Premium Account",
            description: "Access to all content in HD quality, no ads.",
            price: "$30",
            days: "15 days",
            imgSrc: "https://via.placeholder.com/400x200"
        },
        {
            title: "Social Media Account",
            type: "Instagram Account",
            description: "Influencer account with 100k+ followers and engagement.",
            price: "$150",
            days: "30 days",
            imgSrc: "https://via.placeholder.com/400x200"
        },
        {
            title: "Cloud Storage Account",
            type: "Google Drive Premium",
            description: "2TB cloud storage with unlimited file uploads.",
            price: "$20",
            days: "10 days",
            imgSrc: "https://via.placeholder.com/400x200"
        },
        // Add more account data here
    ];

    const itemsPerPage = 3; // Number of items to show per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate indices for slicing data
    const totalItems = accountData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const visibleAccounts = accountData.slice(startIndex, endIndex);

    // Event handlers for pagination
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="market-container">
            <SearchBar/>
            <h1>Account Rental Marketplace</h1>
            <div className="marketplace">
                {visibleAccounts.map((account, index) => (
                    <div key={index} className="account-card">
                        <img src={account.imgSrc} alt={`${account.title} Image`} />
                        <div className="card-body">
                            <h3>{account.title}</h3>
                            <p>Type: {account.type}</p>
                            <p>{account.description}</p>
                        </div>
                        <div className="card-footer">
                            <div className="price">{account.price}</div>
                            <div className="days">{account.days}</div>
                            <button className="rent-button">Rent Now</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                <button
                    className="pagination-button"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="page-info">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="pagination-button"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Market;
