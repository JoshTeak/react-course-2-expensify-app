// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({					// action function which sets action.type and action.text //// it is a stupid function that doesn't know if it is changing anything in expenses or filter
	type: 'SET_TEXT_FILTER',	
	text
});

// SORT_BY_DATE
export const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});