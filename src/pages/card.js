import "./card.css";
import SearchBar from "../components/search";

function Card() {
    const items = [
        {
            id: 1,
            title: "Netflix",
            price: "1000 naira",
            imgSrc: "https://via.placeholder.com/150"
        },
        // Add more items as needed
    ];

    return (
        <div className="card-container">
            {/* Search Bar Section */}
            <SearchBar />

            {/* Items Section */}
            <div className="items-container">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={item.imgSrc} alt={`${item.title} logo`} />
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <button className="payment-button">Make Payment</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
