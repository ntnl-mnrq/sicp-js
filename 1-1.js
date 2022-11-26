// Type your program in here!
const size = 2;

5 * size; 

const pi = 3.14159;
const radius = 10;
pi * radius * radius;

const circumference = 2 * pi * radius;
circumference;


function square(x) {
    return x * x;
    
}

square(10+1);

square(square(3));

function sum_of_squares(x, y) {
    return square(x) + square(y);
}

sum_of_squares(3, 4);

function f(a){
    return sum_of_squares(a + 1, a * 2);
}

f(5);

function abs(x){
    return x > 0 ? x : x === 0 ? 0 : -x ; 
}

abs(15);


// function greater_or_equal(x, y){
//     return x > y || x === y;
// }

function greater_or_equal(x, y){
    return ! (x < y);  
    // paréntesis secesarios porque ! al 
    // ser op unario tiene mayor precedencia
}


greater_or_equal(3+2, 4+1);


// 1.2
(5 + 4 + (2 - ( 3 - ( 6 + 4/5)))) / (3 * (6 - 2) * (2 - 7));

// 1.3
function e13(x, y, z){
    return x > y && x > z 
    ? y > z 
        ? sum_of_squares(x, y)
        : sum_of_squares(x, z)
    : x > z
        ? sum_of_squares(y, x)
        : sum_of_squares(y, z);
}

e13(1, 2, 3);


// 1.4
function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a,b);
}

a_plus_abs_b(2, 20);
a_plus_abs_b(2, -20);


// 1.5
function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}

test(0, p());
