function start() {

    // print your name to the name heading

    document.getElementById("name").innerHTML = "Aljeda Cepele"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let x = 20;
    let y = "15";
    let result = x + y;
    document.getElementById("add").innerHTML = result;


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let nr = 225;
    document.getElementById("to-string").innerHTML = nr.toString() + "<br>" + (225).toString() + "<br>" + (200 + 25).toString();


    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let nr2 = 2.3456;
    document.getElementById("exponent").innerHTML =
        nr2.toExponential() + "<br>" +
        nr2.toExponential(4) + "<br>" +
        nr2.toExponential(6) + "<br>" +
        nr2.toExponential(8);


    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let nr3 = 8.5673;
    document.getElementById("fixed").innerHTML =
        nr3.toFixed(0) + "<br>" +
        nr3.toFixed(2) + "<br>" +
        nr3.toFixed(4) + "<br>" +
        nr3.toFixed(6) + "<br>" +
        nr3.toFixed(8);


    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let nr4 = 1.123;
    document.getElementById("precision").innerHTML =
        nr4.toPrecision() + "<br>" +
        nr4.toPrecision(3) + "<br>" +
        nr4.toPrecision(4) + "<br>" +
        nr4.toPrecision(7);


    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML =
        parseFloat("22") + "<br>" +
        parseFloat("25.123") + "<br>" +
        parseFloat("12 6") + "<br>" +
        parseFloat("10 apples") + "<br>" +
        parseFloat("age 28");

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML =
        parseInt("-15") + "<br>" +
        parseInt("-10.20") + "<br>" +
        parseInt("13") + "<br>" +
        parseInt("10.50") + "<br>" +
        parseInt("15 6") + "<br>" +
        parseInt("10 apples") + "<br>" +
        parseInt("age 30");


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    /* <p>I have demonstrated the comperisons with some examples!</p> */
    let a = 10;
    let b = 20;
    let c = 'ten'
    let one = '1'
    let two = '2';
    document.getElementById("equals").innerHTML = (a === a) + "<br>" +
        (a === b) + "<br>" +
        (a === c) + "<br>" +
        (a == b) + "<br>" +
        (a == c) + "<br>" +
        (a != b) + "<br>" +
        (b !== c) + "<br>" +
        (c != a) + "<br>" +
        (one === 'one') + "<br>" +
        (one == '1') + "<br>" +
        (two != '1') + "<br>" +
        (two !== '2') + "<br>" +
        (two == '2');

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    let name1 = "Anna";
    let name2 = "Besa";
    let name3 = "Andi"
    document.getElementById("logic").innerHTML = (name1 === 'Anna' && name2 === 'Besa') + "<br>" +
        (name1 === 'Anna' && name2 === 'Gery') + "<br>" +
        (name1 === 'Anna' && name3 === 'Andi') + "<br>" +
        (name1 === 'Anna' && name2 === 'Besa' && name3 === "Dea") + "<br>" +
        (name1 === 'Anna' || name2 === 'Besa') + "<br>" +
        (name1 === 'Anna' || name3 === 'Mia') + "<br>" +
        (name1 === 'Anna' && name2 === 'Besa' || name3 === 'Mia') + "<br>" +
        (name1 === 'Anna' || name2 === 'Besa' && name3 === 'Andi');


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah

    let day = 5;
    let dayName;

    switch (day) {
        case 1:
            dayName = 'Sunday';
            break;
        case 2:
            dayName = 'Monday';
            break;
        case 3:
            dayName = 'Tuesday';
            break;
        case 4:
            dayName = 'Wednesday';
            break;
        case 5:
            dayName = 'Thursday';
            break;
        case 6:
            dayName = 'Friday';
            break;
        case 7:
            dayName = 'Saturday';
            break;
        default:
            dayName = 'Invalid day';
    }

    document.getElementById("switch").innerHTML = "Today is " + dayName;


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

    function HighMarks() {
        document.getElementById("ternary").innerHTML = "You pass the test!";
    }

    function LowMarks() {
        document.getElementById("ternary").innerHTML = "You fail, please try again!";
    }

    let testMarks = true;

    testMarks ? HighMarks() : LowMarks();

}