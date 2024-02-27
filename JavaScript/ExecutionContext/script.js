var userName='Tom';
var userAge=10;
console.log(`userName:${userName}`);
console.log(`userAge:${userAge}`);

function greetUser(name){
    var greet=`I hope you're doing great!!!`;
    console.log(`Hello ${name}, ${greet}`);
    var currentDate=new Date();
    var currentYear=currentDate.getFullYear();
    const year=currentYear-userAge;
    return `your birth year is: ${year}`;
}

const birthYear=greetUser(userName);
console.log(`Hey ${userName} your birth year is: ${birthYear}`);
