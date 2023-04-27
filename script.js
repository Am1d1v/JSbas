/*let a = +prompt('First argument');
let b = +prompt('Second argument');


function sum(){
    let j = a * b;
    alert(j);
}

sum(a, b);

function ret() {
    let num = 50;
    return num;
}

let num = ret();


alert(num); */

/* 
let calc = (a, b) => {
    let d = a + b;
    alert(d);
};
calc(3, 3);
*/

/* 

let usdCurr = 3;
let discount = 0.9

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result){
    console.log(result * discount);
}

let res = convert(600, usdCurr);

promotion(res)


*/


/*

function test(){
    for (let i = 0; i < 10; i++){
        console.log(i);
        if(i === 3) {
            return;
        };
    }
}

test();

*/

/* 

function doNothing(){}

console.log(doNothing() === undefined);

*/

/* 

let str = 'test';

let array = [1, 2, 3];

let fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

*/

/* 

let logg = 'Hello World';

console.log(logg.slice(6));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

*/

/*

const num = 18.9;

console.log(Math.round(num));

const test = '19.8px';

console.log(parseInt(test));

console.log(parseFloat(test));

console.log(typeof(parseInt(test)));

*/

/* 

let trimTest = prompt('Your film');

console.log(trimTest.trim());

*/

/*

function First(){
    setTimeout(function(){
        alert('First');
    },3000);
}

function Second(){
    alert('Second');
}

First();
Second();

*/

/* Callback-функции */

/*

function learnJS(lang, callback) {
    alert(`I am learning ${lang}`);
    callback();
}

learnJS('JS', function(){
    alert('Hi');
})

*/

/*

function learnJS(lang, callback) {
    alert(`I am learning ${lang}`);
    callback();
}

function done() {
    alert('Hi');
}

learnJS('JS', done);

*/

/* Objects */

/*

console.log(options.name);

delete options.name; 

console.log(options);

/*

console.log(options['colors']['border']);

*/

/*

let options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'blue'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest();

let {border, bg} = options.colors;

console.log(border);
console.log(bg);

*/

/*

let counter = 0;

for (let key in options){
    if (typeof(options[key]) === 'object') {
        for(let i in options[key]) {
            console.log(`Value ${i} in ${options[key][i]} `);
        }
    } else {
    console.log(`Value ${key} in ${options[key]} `);
    counter++;
    }
}

console.log(counter);

console.log(Object.keys(options).length);

*/ 

/* Array */

