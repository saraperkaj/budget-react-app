import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function TransactionEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTrans] = useState({
    itemName: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${URL}/transactions/${index}`).then((response) => {
      setTrans({
        itemName: response.data.itemName,
        amount: response.data.amount,
        date: response.data.date,
        from: response.data.from,
        category: response.data.category,
      });
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/transactions/${index}`, transaction)
      .then(() => navigate(`/transactions/${index}`));
  };

  const handleTextChange = (event) => {
    setTrans({ ...transaction, [event.target.id]: event.target.value });
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="zero"
          required
        />

        <label htmlFor="itemName">What your $ is going towards</label>
        <input
          id="itemName"
          value={transaction.itemName}
          type="text"
          onChange={handleTextChange}
          placeholder="Chipotle? Shoes? Tell us here..."
          required
        />

        <label htmlFor="amount">$Amount$</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="1000.00"
          required
        />

        <label htmlFor="from">Where'd this $ come from? 🤔</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="Did you use this money from your check? From the 20 you got for your Birthday? Where's it from???"
        />

        <label htmlFor="category">Category</label>
        <input
          id="category"
          value={transaction.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Food, Hygiene, Necessities..."
        />

        <input type="submit" />
      </form>
      <div className="buttons">
        <Link to={`/transactions/${index}`}>
          <button>Nevermind!</button>
        </Link>
      </div>
    </div>
  );
}

export default TransactionEditForm;
