function fairRations(B) {
  let lastID = -1;
  let count = 0;

  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 !== 0) {
      if (lastID === -1) {
        lastID = i;
      } else {
        count += Math.abs(i - lastID) * 2;
        lastID = -1;
      }
    }
  }

  
  return lastID === -1 ? count : `NO`;
}

console.log(fairRations([2, 3, 4, 5, 6]));
console.log(fairRations([7, 3, 1, 4, 8, 15, 18]));
console.log(fairRations([2, 3, 10, 12, 5, 8]));
