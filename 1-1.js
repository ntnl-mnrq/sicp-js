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
    // ser op unario tiene mayor precencia
}


greater_or_equal(3+2, 4+1);

