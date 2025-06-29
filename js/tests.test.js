// js/tests.test.js

const ops = require('./operadores');

describe('Tests para funciones operadores.js', () => {
  test('1. suma', () => {
    expect(ops.suma(3, 2)).toBe(5);
  });
  test('2. resta', () => {
    expect(ops.resta(10, 4)).toBe(6);
  });
  test('3. multiplicacion', () => {
    expect(ops.multiplicacion(4, 5)).toBe(20);
  });
  test('4. division', () => {
    expect(ops.division(20, 4)).toBe(5);
  });
  test('5. modulo', () => {
    expect(ops.modulo(10, 3)).toBe(1);
  });
  test('6. incremento', () => {
    expect(ops.incremento(5)).toBe(6);
  });
  test('7. decremento', () => {
    expect(ops.decremento(5)).toBe(4);
  });
  test('8. sumaAsignacion', () => {
    expect(ops.sumaAsignacion(10, 5)).toBe(15);
  });
  test('9. restaAsignacion', () => {
    expect(ops.restaAsignacion(10, 3)).toBe(7);
  });
  test('10. igualNoEstricto', () => {
    expect(ops.igualNoEstricto(5, "5")).toBe(true);
  });
  test('11. igualEstricto', () => {
    expect(ops.igualEstricto(5, 5)).toBe(true);
    expect(ops.igualEstricto(5, "5")).toBe(false);
  });
  test('12. distintoEstricto', () => {
    expect(ops.distintoEstricto(5, "5")).toBe(true);
    expect(ops.distintoEstricto(5, 5)).toBe(false);
  });
  test('13. mayorQue', () => {
    expect(ops.mayorQue(7, 3)).toBe(true);
    expect(ops.mayorQue(2, 4)).toBe(false);
  });
  test('14. menorIgual', () => {
    expect(ops.menorIgual(3, 5)).toBe(true);
    expect(ops.menorIgual(7, 3)).toBe(false);
  });
  test('15. andLogico', () => {
    expect(ops.andLogico(true, false)).toBe(false);
    expect(ops.andLogico(true, true)).toBe(true);
  });
  test('16. orLogico', () => {
    expect(ops.orLogico(false, false)).toBe(false);
    expect(ops.orLogico(true, false)).toBe(true);
  });
  test('17. notLogico', () => {
    expect(ops.notLogico(false)).toBe(true);
    expect(ops.notLogico(true)).toBe(false);
  });
  test('18. dobleNegacion', () => {
    expect(ops.dobleNegacion(0)).toBe(false);
    expect(ops.dobleNegacion(1)).toBe(true);
  });
  test('19. operadorTernario', () => {
    expect(ops.operadorTernario(5, 3)).toBe("Mayor");
    expect(ops.operadorTernario(2, 4)).toBe("Menor o igual");
  });
  test('20. compararTernario', () => {
    expect(ops.compararTernario(5, 5)).toBe("Iguales");
    expect(ops.compararTernario(5, 4)).toBe("Distintos");
  });
  test('21. esSumaPar', () => {
    expect(ops.esSumaPar(2, 4)).toBe(true);
    expect(ops.esSumaPar(3, 4)).toBe(false);
  });
  test('22. esMultiploDeCinco', () => {
    expect(ops.esMultiploDeCinco(5, 3)).toBe(true);
    expect(ops.esMultiploDeCinco(4, 4)).toBe(false);
  });
  test('23. incrementarSiMenorQue10', () => {
    expect(ops.incrementarSiMenorQue10(8)).toBe(9);
    expect(ops.incrementarSiMenorQue10(10)).toBe(10);
  });
  test('24. decrementarSiMayorQue0', () => {
    expect(ops.decrementarSiMayorQue0(3)).toBe(2);
    expect(ops.decrementarSiMayorQue0(0)).toBe(0);
  });
  test('25. asignarPorDefecto', () => {
    expect(ops.asignarPorDefecto("Hola")).toBe("Hola");
    expect(ops.asignarPorDefecto(null)).toBe("Valor por defecto");
  });
  test('26. concatenarStrings', () => {
    expect(ops.concatenarStrings("Hola", " mundo")).toBe("Hola mundo");
  });
  test('27. esPositivo', () => {
    expect(ops.esPositivo(5)).toBe(true);
    expect(ops.esPositivo(-3)).toBe(false);
  });
  test('28. esNegativo', () => {
    expect(ops.esNegativo(-5)).toBe(true);
    expect(ops.esNegativo(3)).toBe(false);
  });
  test('29. esCero', () => {
    expect(ops.esCero(0)).toBe(true);
    expect(ops.esCero(2)).toBe(false);
  });
  test('30. esStringVacio', () => {
    expect(ops.esStringVacio("")).toBe(true);
    expect(ops.esStringVacio("texto")).toBe(false);
  });
  test('31. operadorAndBooleanos', () => {
    expect(ops.operadorAndBooleanos(true, false)).toBe(false);
    expect(ops.operadorAndBooleanos(true, true)).toBe(true);
  });
  test('32. operadorOrBooleanos', () => {
    expect(ops.operadorOrBooleanos(false, false)).toBe(false);
    expect(ops.operadorOrBooleanos(true, false)).toBe(true);
  });
  test('33. stringsIgualesNoEstrictas', () => {
    expect(ops.stringsIgualesNoEstrictas("5", 5)).toBe(true);
    expect(ops.stringsIgualesNoEstrictas("5", "5")).toBe(true);
  });
  test('34. stringsIgualesEstrictas', () => {
    expect(ops.stringsIgualesEstrictas("5", 5)).toBe(false);
    expect(ops.stringsIgualesEstrictas("5", "5")).toBe(true);
  });
  test('35. negarValor', () => {
    expect(ops.negarValor(true)).toBe(false);
    expect(ops.negarValor(false)).toBe(true);
  });
  test('36. puedeVotar', () => {
    expect(ops.puedeVotar(20)).toBe(true);
    expect(ops.puedeVotar(17)).toBe(false);
  });
  test('37. asignarConAnd', () => {
    expect(ops.asignarConAnd("Hola", "Mundo")).toBe("Mundo");
    expect(ops.asignarConAnd("", "Mundo")).toBe("");
  });
  test('38. asignarConOr', () => {
    expect(ops.asignarConOr("", "Mundo")).toBe("Mundo");
    expect(ops.asignarConOr("Hola", "Mundo")).toBe("Hola");
  });
  test('39. compararCadenas', () => {
    expect(ops.compararCadenas("b", "a")).toBe(true);
    expect(ops.compararCadenas("a", "b")).toBe(false);
  });
  test('40. booleanoSeguro', () => {
    expect(ops.booleanoSeguro(null)).toBe(false);
    expect(ops.booleanoSeguro(123)).toBe(true);
  });
  test('41. sumarDiez', () => {
    expect(ops.sumarDiez(5)).toBe(15);
  });
  test('42. restarCinco', () => {
    expect(ops.restarCinco(15)).toBe(10);
  });
  test('43. multiplicarPorTres', () => {
    expect(ops.multiplicarPorTres(4)).toBe(12);
  });
  test('44. dividirEntreDos', () => {
    expect(ops.dividirEntreDos(20)).toBe(10);
  });
  test('45. esImpar', () => {
    expect(ops.esImpar(3)).toBe(true);
    expect(ops.esImpar(4)).toBe(false);
  });
  test('46. parOImpar', () => {
    expect(ops.parOImpar(4)).toBe("Par");
    expect(ops.parOImpar(5)).toBe("Impar");
  });
  test('47. preIncremento', () => {
    expect(ops.preIncremento(5)).toBe(6);
    expect(ops.preIncremento(-1)).toBe(0);
  });

  test('48. postDecremento', () => {
    expect(ops.postDecremento(5)).toBe(5);
    expect(ops.postDecremento(0)).toBe(0);
  });

  test('49. stringNoVacio', () => {
    expect(ops.stringNoVacio("hola")).toBe(true);
    expect(ops.stringNoVacio("")).toBe(false);
    expect(ops.stringNoVacio(" ")).toBe(true);
  });

  test('50. evaluarNumero', () => {
    expect(ops.evaluarNumero(10)).toBe("Positivo");
    expect(ops.evaluarNumero(-3)).toBe("Negativo");
    expect(ops.evaluarNumero(0)).toBe("Cero");
  });
});
