// 129. Moderní JavaScript - Ladíme detaily máme vždy používat šipkovou notaci

const sum = function(num1, num2){ // num1 a num2 tomu hovoríme PARAMETRE
    console.log(num1 + num2)
}
sum(5, 8) // konkrétne 5 a 8 tomu hovoríme ARGUMENTY

sum(5, 8, 10, 2)  // 10 a 2 neberiem do úvahy, pretože nemáme definované PARAMETRE vo funkcii a vyriešíme to nasledovne: dopíšeme do miesta zátvoriek za console.log slovíčko "arguments":





// použitie "arguments"
// 1. príklad
const sum2 = function(){ // nemusíme vypisovať parametre, cez argumenty sa tam automaticky dostaneme
    console.log(arguments)      // vypíše všetky argumenty
    console.log(arguments[0])   // vypíše prvý argument, index 0 lebo je to v poli
    console.log(arguments[1])   // vypíše druhý argument, index 1
    console.log(arguments[2])   // vypíše tretí argument, index 2
    console.log(arguments[3])   // vypíše štvrtý argument, index 3
}
 // vypísanie
sum2(5, 8, 10, 2)



//2. príklad prepísanie na šípkovú notáciu
const sum3 = () =>  arguments[0] // mal by vrátiť prvý argument s indexom 0, ale nič nám nevráti pretože v tomto prípade nemožno použíť šípkovú notáciu, šípková notácia pojem "arguments" NEPOZNÁ

 // vypísanie
console.log(sum3(5, 6, 7, 8)) // nevypíše => "arguments" NEPOZNÁ

