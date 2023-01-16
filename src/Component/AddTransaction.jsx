import React, {useContext, useState} from 'react'
import { Globalcontext } from '../context/GlobalState'

export function AddTransaction() {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useContext(Globalcontext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    }

    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form 
      onSubmit={onSubmit}
      >
        <div className="form-control">
          <label htmlFor="label">Label</label>
          <input type="text" placeholder="Enter label.." 
          onChange={(e) => {setText(e.target.value)}}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"> <b>+</b>/<b>-</b>Amount &nbsp; &nbsp; [-expense, +income] </label>
          <input type="number" placeholder="Enter amount.." 
          onChange={(e) => {setAmount(e.target.value)}}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
