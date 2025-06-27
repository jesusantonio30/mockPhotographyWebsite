export const arrangeArr = (array, conditionFn) => {
    const item = array.find(conditionFn);
    return item ? [item, ...array.filter(e => e !== item)] : array;
  };