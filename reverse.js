var input = process.argv[2];
var arr = input
arr += ' ';
function reverseList(original) {
  return original.split('').reverse().join('');
}
console.log(reverseList(arr));