var num = document.getElementById('numlist');

for (var i = 0; i <= 100; i++, value = '') {

    if (i % 5 == 0 && i % 3 == 0)
    value ="Fizzbuzz"

    else if (i % 3 == 0) 
    value = "Fizz";

    else if (i % 5 == 0)
    value = "Buzz"

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(i + " = " + value));
    li.setAttribute("class", value);
    num.appendChild(li);
}


