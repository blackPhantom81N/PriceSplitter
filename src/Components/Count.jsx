const Count = ({ handlePersonChange, person, tip, reset }) => {
  const styles = {
    border: person > 0 ? "none" : "1px solid red",
  };
  return (
    <div className="main-bill">
      {(person > 0 || tip === 0) && reset ? (
        <p className="bill">Number of People</p>
      ) : (
        <p className="bill" id="number-error">
          Can't be zero
        </p>
      )}
      <div className="input-wrapper" style={styles}>
        <span>
          <img src="./images/icon-person.svg" alt="" />
        </span>
        <input
          type="text"
          className="input-field"
          placeholder="0"
          required
          value={person}
          onChange={handlePersonChange}
        />
      </div>
    </div>
  );
};

export default Count;
