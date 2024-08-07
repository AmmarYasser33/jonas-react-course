import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput num={bill} onSetBill={setBill}>
        How much was the bill?
      </BillInput>

      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you feel about the service?
      </SelectPercentage>

      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend feel about the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip}></Output>
          <Reset onReset={handleReset}></Reset>
        </>
      )}
    </div>
  );
}

function BillInput({ children, num, onSetBill }) {
  return (
    <div>
      <label htmlFor="bill">{children}</label>
      <input
        type="number"
        id="bill"
        value={num}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h2>
      You pay {bill + tip}$ ({bill}$ + {tip}$ tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
