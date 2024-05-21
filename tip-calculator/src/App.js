
import './App.css';
import { useState } from 'react';

function App() {
  const [tip, setTip] = useState(0.05);
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  function handleRadioChange(event) {
    const selectedTip = parseFloat(event.target.value);
    setTip(selectedTip);
    updateAmounts(bill, selectedTip, numberOfPeople);
  }

  function handleBillChange(event) {
    const enteredBill = parseFloat(event.target.value);
    setBill(enteredBill);
    updateAmounts(enteredBill, tip, numberOfPeople);
  }

  function handlePeopleChange(event) {
    const peopleCount = parseInt(event.target.value, 10);
    setNumberOfPeople(peopleCount);
    updateAmounts(bill, tip, peopleCount);
  }

  function updateAmounts(bill, tip, numberOfPeople) {
    if (numberOfPeople === 0) {
      setTipAmount(0);
      setTotalAmount(0);
      return;
    }
    const calculatedTip = (bill * tip) / numberOfPeople;
    const calculatedTotal = (bill + bill * tip) / numberOfPeople;
    setTipAmount(calculatedTip);
    setTotalAmount(calculatedTotal);
  }

  function reset() {
    setTip(0);
    setBill(0);
    setNumberOfPeople(1);
    setTipAmount(0);
    setTotalAmount(0);
  }

  return (
    <>
      <div id="card">
        <div id="bill">
          <label htmlFor="amount">
            Bill: <p class={bill === 0 ? "error" : "hidden"}>* cant be zero</p>
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={bill}
            onChange={handleBillChange}
          />
        </div>

        <div id="tip-procent">
          <input
            type="radio"
            id="5"
            name="tip"
            className="hidden"
            value={0.05}
            onChange={handleRadioChange}
          />
          <label htmlFor="5" className={tip === 0.05 ? "active-tip" : "tip"}>
            5%
          </label>

          <input
            type="radio"
            id="10"
            name="tip"
            className="hidden"
            value={0.1}
            onChange={handleRadioChange}
          />
          <label htmlFor="10" className={tip === 0.1 ? "active-tip" : "tip"}>
            10%
          </label>

          <input
            type="radio"
            id="15"
            name="tip"
            className="hidden"
            value={0.15}
            onChange={handleRadioChange}
          />
          <label htmlFor="15" className={tip === 0.15 ? "active-tip" : "tip"}>
            15%
          </label>

          <input
            type="radio"
            id="25"
            name="tip"
            className="hidden"
            value={0.25}
            onChange={handleRadioChange}
          />
          <label htmlFor="25" className={tip === 0.25 ? "active-tip" : "tip"}>
            25%
          </label>

          <input
            type="radio"
            id="50"
            name="tip"
            className="hidden"
            value={0.5}
            onChange={handleRadioChange}
          />
          <label htmlFor="50" className={tip === 0.5 ? "active-tip" : "tip"}>
            50%
          </label>
        </div>

        <div id="people">
          <label htmlFor="people">
            Number of people:{" "}
            <p class={numberOfPeople === 0 ? "error" : "hidden"}>
              * cant be zero
            </p>
          </label>
          <input
            type="number"
            id="people"
            name="people"
            min="1"
            step="1"
            placeholder="1"
            value={numberOfPeople}
            onChange={handlePeopleChange}
          />
        </div>

        <div id="space-around">
          <div id="result">
            <div id="a">
              <h4>Tip Amount</h4>
              <h6>/ person</h6>
              <p>${tipAmount.toFixed(2)}</p>
            </div>

            <div id="b">
              <h4>Total Amount</h4>
              <h6>/ person</h6>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <button id="reset" onClick={reset}>
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
