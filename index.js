// linear space complexity

const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetProduct / num;
    
    if (complement in previousNums) return [ previousNums[complement], i ];
    
    previousNums[num] = i;
  }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8))