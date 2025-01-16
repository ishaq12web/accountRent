import { useState } from "react";
import "./payment.css";
import { useLocation } from 'react-router-dom';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [cryptoAddress, setCryptoAddress] = useState("");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send the payment details to the server here
    // For demo purposes, we just show a success message
    setIsPaymentSuccessful(true);
  };
  
  const location = useLocation();
  const { price } = location.state || {};
  const totalAmount = price || 100; // Default to 100 if no price provided


  

  return (
    <section className="payment-page">
      <div className="payment-container">
        <h1>Payment Page</h1>
        <p>Please review your details and complete the payment to proceed.</p>

        <div className="payment-summary">
          <h2>Order Summary</h2>
          <p><strong>Total Amount:</strong> {totalAmount}</p>        </div>

        {/* Payment Method Selection */}
        <div className="payment-method-selection">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="accountTransfer"
              checked={paymentMethod === "accountTransfer"}
              onChange={() => setPaymentMethod("accountTransfer")}
            />
            Account Transfer
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="crypto"
              checked={paymentMethod === "crypto"}
              onChange={() => setPaymentMethod("crypto")}
            />
            Cryptocurrency
          </label>
        </div>

        {/* Form for Card Payment */}
        {paymentMethod === "card" && (
          <form className="payment-form" onSubmit={handlePaymentSubmit}>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                placeholder="Enter your card number"
                maxLength="16"
              />
            </div>

            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                placeholder="MM/YY"
                maxLength="5"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                placeholder="Enter CVV"
                maxLength="3"
              />
            </div>

            <button type="submit" className="pay-btn">Pay Now</button>
          </form>
        )}

        {/* Form for Account Transfer */}
        {paymentMethod === "accountTransfer" && (
          <form className="payment-form" onSubmit={handlePaymentSubmit}>
            <div className="form-group">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
                placeholder="Enter your account number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                required
                placeholder="Enter your bank name"
              />
            </div>

            <button type="submit" className="pay-btn">Transfer Now</button>
          </form>
        )}

        {/* Form for Crypto Payment */}
        {paymentMethod === "crypto" && (
          <form className="payment-form" onSubmit={handlePaymentSubmit}>
            <div className="form-group">
              <label htmlFor="cryptoAddress">Crypto Address</label>
              <input
                type="text"
                id="cryptoAddress"
                name="cryptoAddress"
                value={cryptoAddress}
                onChange={(e) => setCryptoAddress(e.target.value)}
                required
                placeholder="Enter your crypto wallet address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cryptoType">Crypto Type</label>
              <select id="cryptoType" name="cryptoType" required>
                <option value="btc">Bitcoin</option>
                <option value="eth">Ethereum</option>
                <option value="usdt">USDT</option>
              </select>
            </div>

            <button type="submit" className="pay-btn" >Pay with Crypto</button>
          </form>
        )}

        {isPaymentSuccessful && (
          <div className="payment-success">
            <h3>Payment Successful!</h3>
            <p>Your payment has been processed successfully.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default PaymentPage;
