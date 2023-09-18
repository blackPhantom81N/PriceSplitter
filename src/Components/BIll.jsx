import { TextField, Typography } from "@mui/material";

const Bill = ({ bill, handleBillChange }) => {
  return (
    <div className="main-bill">
      <Typography className="bill">Bill</Typography>
      <div className="bill-wrapper">
        <span>
          <img src="./images/icon-dollar.svg" alt="" />
        </span>
        <TextField
          type="text"
          //   className="input-field"
          style={{
            fontSize: "medium",
            marginTop: "2px",
            width: "300px",
          }}
          placeholder="0"
          value={bill}
          onChange={handleBillChange}
        />
      </div>
    </div>
  );
};

export default Bill;
