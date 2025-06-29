 // operadores.js
// 50 ejercicios para practicar operadores en funciones

// 1. Suma: retorna la suma de a y b
function suma(a, b) {
    return a + b;
  }
  
  // 2. Resta: retorna la resta de a y b
  function resta(a, b) {
    return a - b;
  }
  
  // 3. Multiplicación: retorna el producto de a y b
  function multiplicacion(a, b) {
    return a * b;
  }
  
  // 4. División: retorna el cociente de a y b
  function division(a, b) {
    return a / b;
  }
  
  // 5. Módulo: retorna el resto de la división de a y b
  function modulo(a, b) {
    return a % b;
  }
  
  // 6. Incremento: incrementa x en 1 y retorna el resultado (post-incremento)
  function incremento(x) {
    return ++x;
  }
  
  // 7. Decremento: decrementa x en 1 y retorna el resultado (pre-decremento)
  function decremento(x) {
    return --x;
  }
  
  // 8. Suma con asignación: suma n a x usando operador compuesto y retorna resultado
  function sumaAsignacion(x, n) {
    x += n;
    return x;
  }
  
  // 9. Resta con asignación: resta n a x usando operador compuesto y retorna resultado
  function restaAsignacion(x, n) {
    x -= n;
    return x;
  }
  
  // 10. Igualdad no estricta: retorna true si a == b, false si no
  function igualNoEstricto(a, b) {
    return a == b;
  }
  
  // 11. Igualdad estricta: retorna true si a === b, false si no
  function igualEstricto(a, b) {
    return a === b;
  }
  
  // 12. Diferente estricta: retorna true si a !== b, false si no
  function distintoEstricto(a, b) {
    return a !== b;
  }
  
  // 13. Mayor que: retorna true si a > b, false si no
  function mayorQue(a, b) {
    return a > b;
  }
  
  // 14. Menor o igual que: retorna true si a <= b, false si no
  function menorIgual(a, b) {
    return a <= b;
  }
  
  // 15. AND lógico: retorna true si a y b son true, false si no
  function andLogico(a, b) {
    return a && b;
  }
  
  // 16. OR lógico: retorna true si a o b son true, false si no
  function orLogico(a, b) {
    return a || b;
  }
  
  // 17. NOT lógico: retorna la negación lógica de a
  function notLogico(a) {
    return !a;
  }
  
  // 18. Doble negación: retorna booleano de a
  function dobleNegacion(a) {
    return !!a;
  }
  
  // 19. Operador ternario: retorna "Mayor" si a > b, "Menor o igual" si no
  function operadorTernario(a, b) {
    return a > b ? "Mayor" : "Menor o igual";
  }
  
  // 20. Comparar tipo y valor con ternario: retorna "Iguales" o "Distintos"
  function compararTernario(a, b) {
    return a === b ? "Iguales" : "Distintos";
  }
  
  // 21. Sumar y verificar si resultado es par (usar módulo)
  function esSumaPar(a, b) {
    return ((a + b) % 2) === 0;
  }
  
  // 22. Multiplicar y verificar si resultado es múltiplo de 5
  function esMultiploDeCinco(a, b) {
    return ((a * b) % 5) === 0;
  }
  
  // 23. Incrementar si es menor que 10, sino devolver igual
  function incrementarSiMenorQue10(x) {
    return x < 10 ? x + 1 : x;
  }
  
  // 24. Decrementar si es mayor que 0, sino devolver igual
  function decrementarSiMayorQue0(x) {
    return x > 0 ? x - 1 : x;
  }
  
  // 25. Asignar valor usando operador OR lógico (valor por defecto)
  function asignarPorDefecto(valor) {
    return valor || "Valor por defecto";
  }
  
  // 26. Concatenar string usando operador de suma
  function concatenarStrings(s1, s2) {
    return s1 + s2;
  }
  
  // 27. Verificar si un número es positivo
  function esPositivo(n) {
    return n > 0;
  }
  
  // 28. Verificar si un número es negativo
  function esNegativo(n) {
    return n < 0;
  }
  
  // 29. Verificar si un número es cero
  function esCero(n) {
    return n === 0;
  }
  
  // 30. Evaluar si un string está vacío
  function esStringVacio(str) {
    return str.length === 0;
  }
  
  // 31. Operador AND lógico con booleanos
  function operadorAndBooleanos(a, b) {
    return a && b;
  }
  
  // 32. Operador OR lógico con booleanos
  function operadorOrBooleanos(a, b) {
    return a || b;
  }
  
  // 33. Verificar si dos strings son iguales (no estricta)
  function stringsIgualesNoEstrictas(s1, s2) {
    return s1 == s2;
  }
  
  // 34. Verificar si dos strings son iguales (estricta)
  function stringsIgualesEstrictas(s1, s2) {
    return s1 === s2;
  }
  
  // 35. Retornar valor negado con operador NOT lógico
  function negarValor(valor) {
    return !valor;
  }
  
  // 36. Uso de operador condicional para evaluar edad para votar
  function puedeVotar(edad) {
    return edad >= 18 ? true : false;
  }
  
  // 37. Asignación con operador AND lógico
  function asignarConAnd(valor, defecto) {
    return valor && defecto;
  }
  
  // 38. Asignación con operador OR lógico
  function asignarConOr(valor, defecto) {
    return valor || defecto;
  }
  
  // 39. Uso de operador de comparación para cadenas
  function compararCadenas(c1, c2) {
    return c1 > c2;
  }
  
  // 40. Operador NOT doble para asegurar booleano
  function booleanoSeguro(valor) {
    return !!valor;
  }
  
  // 41. Sumar 10 a x usando operador suma y asignación
  function sumarDiez(x) {
    x += 10;
    return x;
  }
  
  // 42. Restar 5 a x usando operador resta y asignación
  function restarCinco(x) {
    x -= 5;
    return x;
  }
  
  // 43. Multiplicar x por 3 usando operador y asignación
  function multiplicarPorTres(x) {
    x *= 3;
    return x;
  }
  
  // 44. Dividir x entre 2 usando operador y asignación
  function dividirEntreDos(x) {
    x /= 2;
    return x;
  }
  
  // 45. Usar operador módulo para saber si número es impar
  function esImpar(n) {
    return n % 2 !== 0;
  }
  
  // 46. Operador ternario para devolver "Par" o "Impar"
  function parOImpar(n) {
    return n % 2 === 0 ? "Par" : "Impar";
  }
  
  // 47. Incrementar variable y retornar con pre-incremento
  function preIncremento(x) {
    return ++x;
  }
  
  // 48. Decrementar variable y retornar con post-decremento
  function postDecremento(x) {
    return x--;
  }
  
  // 49. Operador ternario para verificar string no vacío
  function stringNoVacio(str) {
    return str ? true : false;
  }
  
  // 50. Operador ternario para evaluar si número es positivo, negativo o cero
  function evaluarNumero(n) {
    return n > 0 ? "Positivo" : (n < 0 ? "Negativo" : "Cero");
  }
  
  // Exportar todas las funciones para usar en tests
  module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    modulo,
    incremento,
    decremento,
    sumaAsignacion,
    restaAsignacion,
    igualNoEstricto,
    igualEstricto,
    distintoEstricto,
    mayorQue,
    menorIgual,
    andLogico,
    orLogico,
    notLogico,
    dobleNegacion,
    operadorTernario,
    compararTernario,
    esSumaPar,
    esMultiploDeCinco,
    incrementarSiMenorQue10,
    decrementarSiMayorQue0,
    asignarPorDefecto,
    concatenarStrings,
    esPositivo,
    esNegativo,
    esCero,
    esStringVacio,
    operadorAndBooleanos,
    operadorOrBooleanos,
    stringsIgualesNoEstrictas,
    stringsIgualesEstrictas,
    negarValor,
    puedeVotar,
    asignarConAnd,
    asignarConOr,
    compararCadenas,
    booleanoSeguro,
    sumarDiez,
    restarCinco,
    multiplicarPorTres,
    dividirEntreDos,
    esImpar,
    parOImpar,
    preIncremento,
    postDecremento,
    stringNoVacio,
    evaluarNumero
  };
  