import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ items }) => {
	if (!items.length) {
		return <h2 className="expenses-list__fallback">No expenses found!</h2>;
	}

	return (
		<ul className="expenses-list">
			{items.map(expense => (
				<ExpenseItem
					key={expense.id}
					date={expense.date}
					title={expense.title}
					amount={expense.amount}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
