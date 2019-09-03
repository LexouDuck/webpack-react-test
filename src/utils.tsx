
/*
** keeps value between 'min' & 'max'
*/
function bindValue(value : number, min : number, max : number)
{
	if (max < min)
	{
		console.log("bindValue: incoherent min and max: undefined behavior");
	}

	if (value < min)
		return min;
	if (value > max)
		return max;
	return value;
}

/*
** Needs object argument to pass by reference
*/
function swap<T>(pair: {val1 : T, val2 : T})
{
	let tmp : T;

	tmp = pair.val1;
	pair.val1 = pair.val2;
	pair.val2 = tmp;
}

export {
	bindValue,
	swap
};
