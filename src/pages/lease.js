import "./lease.css";
import { useState } from "react";

function LeaserForm() {
  const [leaseAmount, setLeaseAmount] = useState(0);
  const [leaseDuration, setLeaseDuration] = useState(1);
  const [leaseCost, setLeaseCost] = useState(0);

  // Update lease cost when either amount or duration changes
  const handleInputChange = () => {
    setLeaseCost(leaseAmount * leaseDuration);
  };

  return (
    <section className="leaser-form">
      <div className="form-container">
        <h1>Lease Form</h1>
        <p>Fill out the form below to submit your leasing details.</p>

        <form className="lease-details-form">
          <div className="form-group">
            <label htmlFor="platformName">Platform Name</label>
            <input
              type="text"
              id="platformName"
              name="platformName"
              required
              placeholder="Enter platform name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accountType">Account Type</label>
            <select
              id="accountType"
              name="accountType"
              required
            >
              <option value="" disabled>
                Select Account Type
              </option>
              <option value="business">Business</option>
              <option value="personal">Personal</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="leaseDuration">Number of Days to Lease</label>
            <input
              type="number"
              id="leaseDuration"
              name="leaseDuration"
              required
              value={leaseDuration}
              onChange={(e) => {
                setLeaseDuration(e.target.value);
                handleInputChange();
              }}
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="leaseAmount">Lease Amount</label>
            <input
              type="number"
              id="leaseAmount"
              name="leaseAmount"
              required
              value={leaseAmount}
              onChange={(e) => {
                setLeaseAmount(e.target.value);
                handleInputChange();
              }}
              min="1"
              placeholder="Enter amount"
            />
          </div>

          <div className="form-group">
            <label htmlFor="leaseCost">Lease Cost</label>
            <input
              type="text"
              id="leaseCost"
              name="leaseCost"
              value={`$${leaseCost}`}
              readOnly
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Lease Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default LeaserForm;
