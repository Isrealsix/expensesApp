import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const inputChangeHandler = ev => {
		console.log(ev.target.value);

		// setUserInput((prevState) => {
		//     return {
		//         ...prevState,
		//         enteredTitle: ev.target.value
		//     }
		// })

		setEnteredTitle(ev.target.value);
	};

	const amountChangeHandler = ev => {
		console.log(ev.target.value);
		setEnteredAmount(ev.target.value);
	};

	const dateChangeHandler = ev => {
		console.log(ev.target.value);
		setEnteredDate(ev.target.value);
	};

	const submitHandler = ev => {
		ev.preventDefault();

		const expensesData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		console.log(expensesData);
		props.onSaveExpenseData(expensesData);
		setEnteredTitle('');
		setEnteredDate('');
		setEnteredAmount('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={inputChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<input type="button" value="Cancel" onClick={props.onCancel} />
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
