
const tail = function(arr) {
  const tail = [];
  for (let i = 1; i <arr.length; i++){
    tail.push(arr[i])
  }
  console.log(tail);
  return tail;
}

module.exports = tail;