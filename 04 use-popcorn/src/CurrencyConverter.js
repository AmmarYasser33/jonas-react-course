import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [rates, setRates] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCurData() {
        setIsLoading(true);

        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();

        setRates(data.rates[toCur]);

        setIsLoading(false);
      }

      if (fromCur === toCur) return setRates(amount);
      fetchCurData();
    },
    [amount, fromCur, toCur]
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setAmount(+e.target.value)}
        value={amount}
        disabled={isLoading}
      />

      <select
        onChange={(e) => setFromCur(e.target.value)}
        value={fromCur}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        onChange={(e) => setToCur(e.target.value)}
        value={toCur}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{rates ? `${rates} ${toCur}` : "OUTPUT"}</p>
    </div>
  );
}
