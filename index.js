function saturdayFun(activity = "roller-skate") {
	return `This Saturday, I want to ${activity}!`;
}
// saturdayFun(`bathe my dog`);

const mondayWork = function (activity = "go to the office") {
	return `This Monday, I will ${activity}.`;
};

let wrapAdjective = function (valueAdjective = "*") {
	return function (emphatic = "a hard worker") {
		return `You are ${valueAdjective}${emphatic}${valueAdjective}!`;
	};
};