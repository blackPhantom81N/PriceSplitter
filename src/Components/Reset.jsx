import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Reset = ({ reset, tip, bill, person }) => {
  const [amount, setAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    if (tip && bill && person) {
      let tipAmount = (bill * tip) / 100;
      let totalAmount = bill + tipAmount;
      setAmount((tipAmount / person).toFixed(2));
      setTotal((totalAmount / person).toFixed(2));
    } else {
      setAmount("0.00");
      setTotal("0.00");
    }
  }, [tip, bill, person]);

  return (
    <div className="footer-ctn">
      <div>
        <div className="tip-amount">
          <div>
            Tip Amount
            <br />
            <small className="small">/ Person</small>
          </div>
          <p className="tip-value">${amount}</p>
        </div>
      </div>
      <div>
        <div className="tip-amount">
          <div>
            Total
            <br />
            <small className="small">/ Person</small>
          </div>
          <p className="tip-value">${total}</p>
        </div>
      </div>
      <button className="reset-btn" onClick={reset}>
        RESET
      </button>
    </div>
  );
};

export default Reset;
