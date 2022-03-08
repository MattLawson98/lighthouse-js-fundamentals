function rollDice(num){
  let diceVal = [];
  for(let i = 0; i < Number(num); i++){
    roll = Math.random() * 6 + 1;
    roll = Math.floor(roll);
    diceVal += roll;
    if(i < Number(num) - 1){
      diceVal += ", "
    }
  }
  return diceVal;
}
console.log(rollDice(3))