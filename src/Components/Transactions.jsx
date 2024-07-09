import React from "react";
import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL

function Transactions() {
   const [transactions,setTransactions] =useState([])
      useEffect(() => {
            fetch(`${API}/transactions`)
            .then((res)=> {
            return res.json() 
            })
            .then(resJSON => {
               console.log(resJSON)
               setTransactions(resJSON)
            })
          .catch((error)=> console.error(error))
         }, [])
      
   return (
          <div>
            <h1>Transactions</h1>
            {transactions.map(transaction => {
               return <p key={transaction.id}>{transaction.type}</p>
   })}
        </div>
     )
}

export default Transactions