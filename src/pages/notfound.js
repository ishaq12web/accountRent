import "./notfound.css";

function NotFound() {
    return (
        <div className="container">
            <h1>404</h1>
            <h2>Oops! Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist or has been moved.</p>
            <a href="/" className="home-btn">Go to Homepage</a>

            <div className="image-container">
                <img src="https://via.placeholder.com/400x200" alt="404 Illustration" />
            </div>
        </div>
    );
}
export default NotFound;
