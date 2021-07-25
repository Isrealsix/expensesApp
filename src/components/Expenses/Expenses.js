import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = items.filter(
		expense => expense.date.getFullYear().toString() === filteredYear
	);
	let expensesContent = <p>No expenses found</p>;
	if (filteredExpenses)
		expensesContent = filteredExpenses.map(expense => (
			<ExpenseItem
				key={expense.id}
				date={expense.date}
				title={expense.title}
				amount={expense.amount}
			/>
		));
	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expensesContent}
		</Card>
	);
};

export default Expenses;
