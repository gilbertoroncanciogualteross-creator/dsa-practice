const s = new Set();
s.add(3);
s.add(5);
s.add(3);
console.log(s.size); // 2
console.log(s.has(5)) // true
console.log(s.has(7)) // false