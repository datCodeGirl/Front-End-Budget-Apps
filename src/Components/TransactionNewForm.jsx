import React, { useState } from "react";


function TransactionNewForm() {
    const [transaction, setTransactionDetails] = useState({})
    return (
        <div>TransactionNewForm
        <form>
            <label>Type:</label>
            <input id= 'type' type='text' value={transaction.type} required/>
            <label>Daily Transaction</label>
            <input id='dailyTransaction' type='number' value= {transaction.dailyTransaction}
             required/>
             <label>Amount Spent</label>
             <input id='amountSpent' type='number' value={transaction.amountSpent} required />
             <button>Submit</button>
        </form>
        </div>
    )
}

export default TransactionNewForm