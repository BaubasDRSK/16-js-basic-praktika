console.clear();
console.log('************ 01 ******************');

function addition(skaicius){
    return skaicius=skaicius + 1;
} 

const sk =[0, 10, -3];
for(let i=0; i<sk.length; i++){
console.log(`addition(${sk[i]} ➞ ${addition(sk[i])})`);
}
console.log('\n\r');
console.log('**************** 02 ***************');

function howManySeconds(h){
    let s=h*3600;
    return s;
}
const h = [2,10,24];
for(let i=0; i<h.length; i++){
    console.log(`howManySeconds(${h[i]}) ➞ ${howManySeconds(h[i])}`);
}

console.log('\n\r');
console.log('**************** 03 *****************');

function basketballPoints (p1, p2, p3){
    const sum = p1 + (p2*2) + (p3*3);
    return sum;
}

const points=[[5, 25, 10], [1, 1, 1], [10, 20, 5]];
for (let i=0; i<points.length; i++){
    console.log(`basketballPoints(${points[i][0]}, ${points[i][1]}, ${points[i][2]}) ➞ ${basketballPoints(points[i][0], points[i][1], points[i][2])}`)
}

console.log('\n\r');
console.log('**************** 04 *****************');

function lessThan100(n1, n2){
    if((n1+n2)<100){ return true; } else { return false; }
}

const nr = [[22, 15], [83, 34], [3, 77]];
for(let i=0; i<nr.length; i++){
    console.log(`lessThan100(${nr[i][0]},${nr[i][1]}) ➞ ${lessThan100(nr[i][0], nr[i][1])}`);
}

console.log('\n\r');
console.log('**************** 05 ***************');

function isSameNum(n1, n2){
    if (n1 === n2){
        return true;
    } else { 
        return false;
    }
}

const  skaiciukai=[[4, 8], [2, 2], [2, '2']];
let narys = [0, 0];

for (let i=0; i<skaiciukai.length; i++){
    
    for (let p=0; p<skaiciukai[i].length; p++){
        if(typeof skaiciukai[i][p]=== 'string'){
            narys[p] = `"${skaiciukai[i][p]}"`;
        } else { narys[p] = `${skaiciukai[i][p]}`;}
    }

    console.log(`isSameNum(${narys[0]}, ${narys[1]}) ➞ ${isSameNum(skaiciukai[i][0], skaiciukai[i][1])} `);
}

console.log('\n\r');
console.log('**************** 06 ***************');

function comparisonNum(numb1, numb2){
    let rez = '';
    if (numb1 === numb2){
        rez = `${numb1} lygus ${numb2}`;
    } else if(numb1 >numb2){
        rez = `${numb1} yra didesnis skaičius`;
    } else {
        rez = `${numb2} yra didesnis skaičius`;
    }
    return rez;
}

const numbers = [[10, 20],[2, -1],[10, 10]];

for (let i=0; i<numbers.length; i++){
    console.log(`comparisonNum(${numbers[i][0]}, ${numbers[i][1]}) ➞ ${comparisonNum(numbers[i][0], numbers[i][1])}`);
}

console.log('\n\r');
console.log('**************** 07 ***************');

function multiplication(x){
    let rezultatas = '';
    for(let i=1; i<=10; i++){
        rezultatas = rezultatas + `${i} * ${x} = ${i*x} \n\r`;
    }
    return rezultatas;
}

console.log(multiplication(3));