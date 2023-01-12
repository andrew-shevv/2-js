function task1() {
    var num1 = parseInt(prompt("input number 1"), 10);
    console.log(`number 1 = ${num1}`);
    var num1Check = num1 <= 1 ? "yes" : "no"

    var num2 = parseInt(prompt("input number 2"), 10);
    console.log(`number 2 = ${num2}`);
    var num2Check = num2 >= 3 ? "yes" : "no"

    console.log(`is number 1 less than or equal to 1? = ${num1Check}`);
    console.log(`is number 2 greater than or equal to 3? = ${num2Check}`);

    console.log("task 1 over.");
}

function task2() {
    let test = true;
    let check = test ? "+++" : "---";
    console.log(check);

    console.log("task 2 over.");
}

function task3() {
    var day = new Date().getDate();
    
    console.log(`today's date is ${day}`);

    if (day <= 10) {
        console.log("this day in the first decade of the month");
    }
    else if (day <= 20) {
        console.log("this day in the second decade of the month");
    }
    else {
        console.log("this day in the third decade of the month");
    }

    console.log("task 3 over.");
}

function task4() {
    var num = parseInt(prompt("input any positive number"), 10);

    if (num > 0) {
        var numHundreds = Math.floor(num / 100 % 10);
        var numTens = Math.floor(num / 10 % 10);
        var numUnits = Math.floor(num % 10);
    
        console.log (`the number ${num} contains ${numHundreds} hundreds, ${numTens} tens and ${numUnits} units`);
    }
    else console.log(`${num} is not a positive number`);   

    console.log("task 4 over.");
}