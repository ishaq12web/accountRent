import "./search.css";
import SearchBar from "../components/search";
import { useNavigate } from 'react-router-dom';

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
            title: "Net",
            price: "105 naira",
            imgSrc: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            title: "prime",
            price: "10 naira",
            imgSrc: "https://via.placeholder.com/150",
        },
    ];

        // Navigate
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate('/card', { state: { title: item.title, price: item.price } });
    console.log(item)
  };

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
                        <p>${item.price}</p>
                        <button className="rent-button" onClick={() => handleNavigate(item)}>Rent Now</button>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
