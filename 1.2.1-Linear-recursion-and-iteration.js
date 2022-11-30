// 1.2.1

// n!

// There are many ways to compute factorials. 


// function factorial(n) {
//     return n === 1
//           ? 1
//           : n * factorial(n - 1);
// }

/*  A linear recursive process for computing 6!

factorial(6);
6 * factorial(5);
6 * (5 * factorial(4));
6 * (5 * (4 * factorial(3)));
6 * (5 * (4 * (3 * factorial(2))));
6 * (5 * (4 * (3 * (2 * factorial(1)))));
6 * (5 * (4 * (3 * (2 * 1))));
6 * (5 * (4 * (3 * 2)));
6 * (5 * (4 * 6));
6 * (5 * 24);
6 * 120;
720

A través del modelo de sustitución puede verse la forma del proceso:
 - Expansión -> el proceso va armando una cadena de operaciones diferidas
 seguido de
 - Contracción -> las operaciones van siendo llevadas a cabo
 
Este tipo de proceso caracterizado por una cadena de operaciones 
diferidas se llama Proceso Recursivo.
Para llevarlo a cabo, es necesario que el intérprete lleve cuenta de las
operaciones a realizar posteriormente.
En el cómputo de n!, el largo de la cadena de multiplicaciones diferidas,
y por lo tanto la cantidad de información necesara para llevar cuenta de
éstas, crece linealmente con n, al igual que el número de pasos. Este tipo
de proceso se denomina Proceso Recursivo Lineal.

*/


function factorial(n) {
    return fact_iter(1, 1, n);
}
function fact_iter(product, counter, max_count) {
    return counter > max_count
          ? product
          : fact_iter(counter * product,
                      counter + 1,
                      max_count);
}

// function factorial(n) {
//     function iter(product, counter) {
//         return counter > n
//               ? product
//               : iter(counter * product,
//                       counter + 1);
//     }
//     return iter(1, 1);
// }

/*  A linear iterative process for computing 6!

factorial(6);
fact_iter(1, 1, 6);
fact_iter(1, 2, 6);
fact_iter(2, 3, 6);
fact_iter(6, 4, 6);
fact_iter(24, 5, 6);
fact_iter(120, 6, 6);
fact_iter(720, 7, 6);
720

Este proceso no crece ni decrece.
Se trata de un Proceso Iterativo: su estado
puede ser resumido por un número fijo de variables de estado, junto a una
regla fija que describe cómo las variables dde estado deben actualizarse
mientras el proceso se mueve de estado a estado, y (opcionalmente) una prueba
final que especifica condiciones bajo las cuales el proceso debe terminar.
Calculando n!, el número de pasos requeridos crece linealmente con n. Este
tipo de proceso se llama Proceso Iterativo Lineal.

*/

/*
Otra forma de ver el contraste entre estos dos tipos de procesos:

En el caso iterativo, las variables de estado proveen una descripción completa
del estado del proceso en un momento dado. Si el cómputo de detuviera entre
pasos, todo lo que haría falta para reanudarlo sería proveer al intérprete con
valores de las variables de estado.

Por otra parte, esto no es posible para un proceso recursivo. En este caso hay
una cierta información "oculta" mantenida por el intérprete y no contenida en
las variables de estado, que indica "donde está el proceso" en la negociación
de la cadena de operaciones diferidas. Cuanto más larga sea la cadena, más
información debe ser mantenida.
*/

/*
Al contrastar iteración y recursión debe tenerse la precacución de no confundir
la noción de un PROCESO RECURSIVO con la noción de una FUNCIÓN RECURSIVA.

Cuando describimos una función como recursiva, nos referimos al hecho sintáctico
de que la función hace referencia (directa o indirectamente) a sí misma como
función.

Cuando describimos un proceso como siguiendo un patrón, por ejemplo, recursivo
lineal, estamos hablando de cómo el proceso evoluciona, no de la sintaxis de una
función.

Puede resultar perturbador referirse a una función recursiva como fact_iter
generadora de un proceso iterativo. Sin embargo, el proceso es realmente
iterativo: su estado está capturado completamente por sus tres variables de
estado, y un intérprete solo necesita llevar cueta de tres nombres para ejecutar
el proceso.
*/

/*
Una implementación que ejecute un proceso iterativo en espacio constante,
inclusive si el proceso iterativo es descrito mediante una función recursiva
se denomina tail-recursive.

La mayoría de la implementaciones de lenguajes comunes como C, Java y Python
están diseñadas de modo que la interpretación de cualquier función recursiva
consume una cantidad de memoria que crece con el número de llamadas, aún si el
proceso descrito es, en principio, iterativo. En consecuencia, estos lenguajes
pueden describir procesos iterativos solo mediante "looping constructs"
especiales, tales como do, repeat, until, for, y while.

Con una omplementación tail-recursive, las iteraciones pueden expresarse
mediante los mecanismos ordinarios de llamadas de funciones, de modo que los 
constructos especiales de iteración solo sirven de syntactic sugar.
*/

