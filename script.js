/*Potrebno je napraviti JavaScript program koji će računati zapreminu valjka.

Potrebna formula za obračunavanje zapremine valjka je:

V = r2 * π * H

r – poluprečnik osnove valjka
H – visina
π – konstanta Pi, približno 3,14
*/
'use strict' //Ovo znam šta znači i stvorio sam naviku sebi da ovo koristim, korisno je zaista 
var poluprečnik = parseInt(prompt("Unesite poluprečnik (r)"));
var visina = parseInt(prompt("Unesite visinu (H)"));
const konstanta = parseInt("3,14");
var rezultat = poluprečnik * poluprečnik * konstanta * visina;
document.write(`Zapremina valjka iznosi ${rezultat}`);//Ovdje takođe koristim ES6 jer mi je lakše

