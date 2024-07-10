import React from "react";
import { useState, useEffect } from 'react'
import  { useParams, useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

function TransactionDetails () {
    const [transaction, setTransaction] = useState({ "type": "", "dailyTransaction": 0, "amountSpent": 0, "date": ""})
    let {id } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        fetch (` ${API}/ transactions/${ID}`)
        .then((res)=> {
            return res.json()
        })
        .then(resJSON => {
            console.log(resJSON)
            setTransaction(resJSON)
        })
            .catch(()=> {
                navigate("/notfound")
            })
    }, [id,navigate]) 

    return (
        
        <div>
            <h1>TransactionDetails</h1>
            <p>{transaction.type}</p>
            <p>{transaction.dailyTransaction}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default TransactionDetails