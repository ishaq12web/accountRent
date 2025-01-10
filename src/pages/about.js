import "./about.css";
function About() {
    return (
        <section className="about-us">
            <div className="about-content">
                <h1>About Us</h1>
                <p>Welcome to <strong>Your Company</strong>! We are a team of passionate professionals dedicated to delivering top-notch services and creating lasting relationships with our clients. Our mission is to provide innovative solutions that drive success and help our clients reach their full potential.</p>

                <h2>Our Mission</h2>
                <p>At <strong>Your Company</strong>, our mission is simple: to empower businesses by providing reliable and scalable solutions that help them grow. We believe that every company, regardless of size, deserves access to high-quality tools and services that support their success. We are committed to helping businesses of all types navigate the digital landscape with confidence and ease.</p>

                <h2>What We Do</h2>
                <p>We specialize in delivering custom solutions, offering products and services that are specifically tailored to meet the unique needs of our clients. Whether it’s creating a robust online platform, offering specialized consulting services, or providing exceptional customer support, we are here to help you every step of the way.</p>

                <h2>Our Values</h2>
                <ul>
                    <li><strong>Integrity:</strong> We conduct our business with the highest standards of integrity and professionalism.</li>
                    <li><strong>Innovation:</strong> We are constantly evolving to bring the latest and most effective solutions to our clients.</li>
                    <li><strong>Customer Focus:</strong> Our clients' satisfaction is our top priority, and we work hard to exceed their expectations.</li>
                    <li><strong>Collaboration:</strong> We believe in the power of teamwork, both within our company and with our clients.</li>
                </ul>

                <h2>Meet the Team</h2>
                <p>Our team is a diverse group of experts from various fields, united by a shared passion for creating impactful solutions. Each team member brings their unique skills and experiences, making us stronger and more capable of handling any challenge.</p>

                <div className="team-members">
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member 2" />
                        <h3>Jane Smith</h3>
                        <p>Chief Technology Officer</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member 3" />
                        <h3>Emily Johnson</h3>
                        <p>Marketing Director</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
