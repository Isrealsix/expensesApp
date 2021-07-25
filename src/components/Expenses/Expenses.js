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
	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{filteredExpenses.map(expense => (
				<ExpenseItem
					key={expense.id}
					date={expense.date}
					title={expense.title}
					amount={expense.amount}
				/>
			))}
		</Card>
	);
};

export default Expenses;
