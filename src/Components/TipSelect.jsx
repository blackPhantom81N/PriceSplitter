const TipSelect = ({ handleTipChange, tip }) => {
  const tipValues = [5, 10, 12, 25, 50];

  return (
    <div className="main-bill-ctn">
      <p className="tip-header">Select Tip %</p>
      <div className="tip-percent-list">
        {tipValues.map((value) => {
          return (
            <button
              className="list-item"
              key={value}
              onClick={() => handleTipChange(value)}
            >
              {value}%
            </button>
          );
        })}
        <input
          type="text"
          placeholder="Custom"
          className="list-item"
          id="item"
          value={tip}
          onChange={(e) => handleTipChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TipSelect;
