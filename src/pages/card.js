import { useLocation } from 'react-router-dom';
import "./card.css";
import SearchBar from "../components/search";
import { useNavigate } from 'react-router-dom';

function Card() {

      // Navigate
  const navigate = useNavigate();
    const handleNavigate = (item) => {
        navigate('/payment', { state: { price: item.price } });
        console.log(item)
      };

      const location = useLocation();
      const { title, price } = location.state || {};
  
     

    const items = [
        {
            id: 1,
            title: title,
            price: price,
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
                        <h3>{title}</h3>
                        <p>{price}</p>
                        <button className="payment-button" onClick={() => handleNavigate(item)}>Make Payment</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
