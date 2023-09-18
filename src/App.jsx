import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Bill from "./Components/BIll";
import TipSelect from "./Components/TipSelect";
import Count from "./Components/Count";
import Reset from "./Components/Reset";

const App = () => {
  const [bill, setAmount] = useState("");

  const handleBillChange = (event) => {
    const billAmount = event.target.value;
    setAmount(billAmount);
  };

  const [tip, setTip] = useState("");

  const handleTipChange = (percent) => {
    setTip(percent);
  };

  const [person, setPerson] = useState(null);

  const handlePersonChange = (event) => {
    const people = event.target.value;
    setPerson(people);
  };

  const reset = () => {
    setTip("");
    setAmount("");
    setPerson("");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner-ctn">
          <div className="new-div">
            {/* Bill Amount */}
            <Bill handleBillChange={handleBillChange} bill={bill} />
            {/* Tip Select */}
            <TipSelect handleTipChange={handleTipChange} tip={tip} />
            {/* People Count */}
            <Count
              handlePersonChange={handlePersonChange}
              person={person}
              setPerson={setPerson}
              tip={tip}
              reset={reset}
            />
          </div>
          <div className="second-new-div">
            {/* Reset */}
            <Reset
              reset={reset}
              bill={Number(bill)}
              person={Number(person)}
              tip={Number(tip)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
