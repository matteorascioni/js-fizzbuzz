var numbers = [];
var numbers = document.getElementById("number");
var items = '';

for (var i = 1; i <= 100; i++, valore = "") {

    item = numbers[i];

    // FIZZBUZZ
   if (i % 5 == 0 && i % 3 == 0)
    valore = "valore3-5";
    
    // FIZZ
    else if (i % 3 == 0)
    valore = "valore-3";

    // BUZZ
    else (i % 5 == 0)
    valore = "valore-5";

    items += '<li>' + item + '<li>';

    // OUTPUT
    document.getElementById('number').innerHTML = '<li>' + items + '<li>';
}


