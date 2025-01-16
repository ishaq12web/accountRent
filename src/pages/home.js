import React, { useState } from "react";
import SearchBar from "../components/search";
import "./home.css";

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const slides = [
        "Rent a One-time account",
        "Lease a One-time account and earn",
    ];

    const items = [
        { id: 1, name: "Netflix", description: "Rent an Account" },
        { id: 2, name: "Hulu", description: "Stream all your favorites" },
        { id: 3, name: "Disney+", description: "Explore magical worlds" },
    ];

    const changeSlide = (index) => {
        setCurrentSlide(index);
    };

    const filteredItems = items.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home-container">
            <SearchBar
                placeholder="Search for accounts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Slideshow Section */}
            <div className="slideshow-container">
                {slides.map((text, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? "active" : "fade"}`}
                    >
                        <p>{text}</p>
                    </div>
                ))}
                <div className="dots-container">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            data-testid="dot"
                            role="button"
                            className={`dot ${index === currentSlide ? "active" : ""}`}
                            onClick={() => changeSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>

            {/* Item Section */}
            <div className="items-container">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div key={item.id} className="item">
                            <img
                                src="https://via.placeholder.com/150"
                                alt={`${item.name}`}
                            />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No items match your search query.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
