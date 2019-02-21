function jediName (firstName, lastName){
    return `${lastName.slice(0,3)} ${firstName.slice(0,2)}`;
}
jediName(Jonghyun, Lee);


function beyond (num) {
    if (num === Infinity || num === -Infinity) {
        console.log('And beyond');
    } else if (num > 0 && num !==Infinity) {
        console.log('To infinity');
    } else if (num < 0 && num !==-Infinity) {
        console.log('To negative infinity');
    } else {
        console.log('Staying home');
    }
}
beyond(0);


words = 'craft block argon meter bells brown croon droop';

function decode (word) {
  if (word[0]==='a') {
      return word[1];
  }
  if (word[0]==='b') {
      return word[2];
  }
  if (word[0]==='c') {
      return word[3];
  }
  if (word[0]==='d') {
      return word[4];
}
  else {
      return ' ';
  }
}

words = words.split(' ').map(word => decode(word)).join('');
console.log(words);


function howManyDays(month, leapYear){
    let numberOfDays;
    
    switch(month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
        numberOfDays=31;
        break; 

        case 'April':
        case 'June':
        case 'September':
        case 'November':
        numberOfDays=30;
        break;
        
        case 'February':
        numberOfDays = leapYear ?  29 : 28;
        break;

        default:
        console.log('Must provdie a valid month.');
    }

console.log(`${month} has ${numberOfDays}`);
}
howManyDays(January, false);


function game(number){
    let result;
    const randomNo = Math.floor(Math.random()*3 +1);
    if (randomNo === number) {
        result = 'tie'; 
    } 
    else if((randomNo === 1 && number === 2) ||
            (randomNo === 2 && number === 3) ||
            (randomNo === 3 && number === 1)) {
        result = 'computer won';
    }
    else if((randomNo === 1 && number === 3) ||
            (randomNo === 2 && number === 1) ||
            (randomNo === 3 && number === 2)) {
        result = 'you won';
    }
    else {
        throw new Error ('please pick a number between 1 and 3')
    }
return result;
}
console.log(game(3));



