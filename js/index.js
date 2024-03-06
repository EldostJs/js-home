// -----------------1----------------

// var num1 = +prompt(`Write your first number`)
 
// var num2 = +prompt(`Write your second number`)

// var maxnum; 

// if (num1 > num2) {
//     maxnum = num1;
// }else {
//     maxnum = num2;
// }
// console.log(`Your max num is ${maxnum}`);




//-------------------2------------------

// var num = +prompt(`Write number`)


// if (num < 0) {
//     console.log(`Operator this -`);
// }else {
//     console.log(`Operator this +`);
// }




//----------------3---------------

// var num1 = +prompt(`Write first number`)

// var num2 = +prompt(`Write second number`)

// var num3 = +prompt(`Write second number`)


// if (num1 >= num2 && num1 >= num3) {
//     if (num2 >= num3) {
//         console.log(`${num1}, ${num2}, ${num3}`);
//     }else{
//         console.log(`${num1}, ${num3}, ${num2}`);
//     }
// }else if (num2 >= num1 && num2 >= num3) {
//     if (num1 >= num3) {
//         console.log(`${num2}, ${num1}, ${num3}`);
//     } else {
//         console.log(`${num2}, ${num3}, ${num1}`);
//     }
// } else {
//     if (num1 >= num2) {
//         console.log(`${num3}, ${num1}, ${num2}`);
//     } else {
//         console.log(`${num3}, ${num2}, ${num1}`);
//     }
// }




//-----------------4------------------


// var num1 = +prompt(`Write first number`)

// var num2 = +prompt(`Write second number`)

// var num3 = +prompt(`Write second number`)

// var num4 = +prompt(`Write second number`)

// var num5 = +prompt(`Write second number`)

// var maxnum = Math.max (num1, num2, num3, num4, num5)

// console.log(num1, num2 , num3 , num4 ,num5);

// console.log(`Among the selected numbers, ${maxnum} number is the largest`);

// if (num1 > num2 || num1 > num3 || num1 > num4 || num1 > num5) {

//     maxnum = num1;
//     console.log(num1, num2 , num3 , num4 , num5);   
//     console.log(`Among the selected numbers, ${maxnum} number is the largest`);

// }else if (num2 > num1 || num2 > num3 || num2 > num4 || num2 > num5) {
    
//     maxnum = num2;
//     console.log(num1, num2 , num3 , num4 , num5);   
//     console.log(`Among the selected numbers, ${maxnum} number is the largest`);

// }else if (num3 > num1 || num3 > num2 || num3 > num4 || num3 > num5) {

//     maxnum = num3;
//     console.log(num1, num2 , num3 , num4 , num5);   
//     console.log(`Among the selected numbers, ${maxnum} number is the largest`);

// }else if (num4 > num1 || num4 > num2 || num4 > num3 || num4 > num5) {

//     maxnum = num4;
//     console.log(num1, num2 , num3 , num4 , num5);   
//     console.log(`Among the selected numbers, ${maxnum} number is the largest`);

// }else {

//     maxnum = num5;
//     console.log(num1, num2 , num3 , num4 , num5);   
//     console.log(`Among the selected numbers, ${maxnum} number is the largest`);

// }



//--------------5-------------

// for( var i = 0; i <= 10; i++ ) {
//     if (i % 2 === 0) {
//         console.log( i + " evenly number");
//     }else {
//         console.log( i + " oddenly number");
//     }
// }


//----------6---------------

var brands = ["Gucci , Dolce&Gabanna , Addidas , Nike , Puma , Versace"]

var cars = ["BMW , Audi , Mercedess , Opel , Lada , Jeep , Toyota"]

var books = ["Book N1, Book N2 , Book N3 , Book N4 , Book N5"]

var metro = ["28 May , 20 Yanuar , Koroglu , Ulduz , Narimanov"]

var cities = ["Baku , Nakhciav , Sumgait , Ganja , Shusa"]


for( var a = 0; a < brands.length; a++) {
    console.log(brands[a]);
}
console.log("----------");

for(var b = 0; b < cars.length; b++) {
    console.log(cars[b]);
}
console.log("----------");

for (let c = 0; c < books.length; c++) {
    console.log(books[c]);
}
console.log("----------");

for (let d = 0; d < metro.length; d++) {
    console.log(metro[d]);    
}
console.log("----------");

for (let e = 0; e < cities.length; e++) {
    console.log(cities[e]);    
}
console.log("----------");  
