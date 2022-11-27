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
    // paréntesis necesarios porque ! al 
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

// test(0, p());


// 1.1.7

// function sqrt_iter(guess, x){
//     return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
// }

// function improve(guess, x){
//     return average(guess, x/guess);
// }

// function average(x, y){
//     return (x + y) / 2;
// }

// function is_good_enough(guess, x){
//     return abs(square(guess) - x) < 0.001;  // error absoluto entre guess cuadrado y x
// }

// function sqrt(x) {
//     return sqrt_iter(1, x);
// }

// sqrt(9);
// sqrt(100 + 37);
// sqrt(sqrt(2) + sqrt(3));
// square(sqrt(1000));


// 1.7

// is_good_enough();
// sqrt(0.001);
// square(sqrt(0.001));
// square(sqrt(0.0001));

// square(sqrt(10000000000000));  // infinite loop ?!?
// square(sqrt(math_pow(10, 13)));
// loop infinito para 10^(13+n) para n pares



// function sqrt_iter(guess, x){

//     // return is_good_enough(guess, improve(guess, x)) ? guess : sqrt_iter(improve(guess, x), x);
//     return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
// }

// function improve(guess, x){
//     return average(guess, x/guess);
// }

// function average(x, y){
//     return (x + y) / 2;
// }

// const error_threshold = 0.001;
// function is_good_enough(guess, x){
//     return abs(guess - improve(guess, x)) < error_threshold;
// }

// function relative_error(estimate, reference){
//     abs(estimate - reference) / reference;  // error relativo entre guess y improve(guess, x)
// }

// function sqrt(x) {
//     return sqrt_iter(1, x);
// }

// sqrt(math_pow(10,13));
// square(sqrt(math_pow(10, 13)));
// square(sqrt(0.0001));


// 1.8
function crt_iter(guess, x){

    // return is_good_enough(guess, improve(guess, x)) ? guess : sqrt_iter(improve(guess, x), x);
    return crt_is_good_enough(guess, x) ? guess : crt_iter(crt_improve(guess, x), x);
}

function crt_improve(guess, x){
    // return average(guess, x/guess);
    return (x / square(guess) + 2 * guess) / 3;
}

// function crt_average(x, y){
//     return (x + y) / 2;
// }

const crt_error_threshold = 0.001;
function crt_is_good_enough(guess, x){
    return abs(guess - crt_improve(guess, x)) < crt_error_threshold;
}

function crt_relative_error(estimate, reference){
    abs(estimate - reference) / reference;  // error relativo entre guess y improve(guess, x)
}

function crt(x) {
    return crt_iter(1, x);
}

crt(27);
crt(1000);
crt(.0001);


// function is_good_enough(guess, x) {
//     return abs(cube(guess) - x) < 0.001;
// }
// function div3(x, y) {
//      return (x + y) / 3;
// }
// function improve(guess, x) {
//     return div3(x / (guess * guess), 2 * guess);
// }
// function cube_root(guess, x) {
//     return is_good_enough(guess, x)
//           ? guess
//           : cube_root(improve(guess, x), x);
// }

// cube_root(3, 27);

// 1.1.8
function sq(x){
    return math_exp(double(math_log(x)));
}
function double(x){
    return x + x;
}

sq(5);

function average(x, y) {
    return (x + y) / 2;
}

// function sqrt(x) {
//     function is_good_enough(guess, x) {
//         return abs(square(guess) - x) < 0.001;
//     }
//     function improve(guess, x) {
//         return average(guess, x / guess);
//     }
//     function sqrt_iter(guess, x) {
//         return is_good_enough(guess, x)
//             ? guess
//             : sqrt_iter(improve(guess, x), x);
//     }
//     return sqrt_iter(1, x);
// }

// lexical scoping:
// Como x está bound en la declaración de sqrt
// entonces las funciones internas están en el scope de x
// de modo que no es necesario pasar a x explícitamente a las funciones,
// sino que permitimos a x ser un free name en las funciones internas.
function sqrt(x) {
    function is_good_enough(guess) {
        return abs(square(guess) - x) < 0.001;
    }
    function improve(guess) {
        return average(guess, x / guess);
    }
    function sqrt_iter(guess) {
        return is_good_enough(guess)
            ? guess
            : sqrt_iter(improve(guess));
    }
    return sqrt_iter(1);
}

sqrt(10000);