/*
 * File: app.js
 * Author: Szabó Sándor Péter
 * Copyright: 2022, Szabó Sándor Péter
 * Group: Szoft I/2
 * Date: 2022-04-06-
 * Github: https://github.com/szabosandorpeter
 * Licenc: GNU GPL
 */

$("#formBMR").validate();
const testZsirElem = document.querySelector("#testZsir");
const testTomegElem = document.querySelector("#testTomeg");
const kaloriaElem = document.querySelector("#kaloria");
const kaloriaGomb = document.querySelector("#szamitKaloria");

kaloriaGomb.addEventListener("click", () => {
  let testzsirszazalek = Number(testZsirElem.value);
  let testtomeg = Number(testTomegElem.value);
  let osszKaloria = kaloriaCalc(testzsirszazalek, testtomeg);
  kaloriaElem.value = osszKaloria;
});

const kaloriaCalc = (zsir, suly) => 370 + 21.6 + Math.abs(1 - zsir) * suly;
