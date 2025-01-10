import "./search.css";
import SearchBar from "../components/search";

function SearchPage() {
    const items = [
        {
            id: 1,
            title: "Netflix",
            price: "1000 naira",
            imgSrc: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            title: "Netflix",
            price: "1000 naira",
            imgSrc: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            title: "Netflix",
            price: "1000 naira",
            imgSrc: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="search-page">
            {/* Search Bar */}
            <SearchBar />

            {/* Items Section */}
            <div className="items-container">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={item.imgSrc} alt={`${item.title} logo`} />
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
