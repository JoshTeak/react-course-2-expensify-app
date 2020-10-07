export default (expenses) => {
	if(expenses.length !== 0)
	{
	const amounts = expenses.map((expense) => expense.amount);
	const reducer = (accumulator, currentScore) => accumulator + currentScore;
	const totalAmount = amounts.reduce(reducer);

	return totalAmount;
	} else {
		return 0;
	}

}