function sum(...numbers) {
  console.log(numbers); // 진짜 배열
  console.log(Array.isArray(numbers)); // true

  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

sum(1, 2, 3);

console.log(sum(1, 2, 3, 4, 5)); // 15

// 배열 메서드 사용 가능
function sumWithReduce(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumWithReduce(1, 2, 3, 4)); // 10
