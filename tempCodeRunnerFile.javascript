// const skills = ['html', 'css', 'js', 'react', 'sql'];

// const [x, ...rest] = skills;

// console.log(x, rest);

// const pcRam = navigator.deviceMemory;

// console.log(`this computer ram is ${pcRam}`);

const array1 = [0, 1, 2];
const array2 = [3, 4, 5];

const array3 = [...array1, ...array2];  // arraymerge işlemi

console.log(array3);

const array4 = [..."ahmet"]; //herhangi bir arrayin colonunu almaya yarıyor

console.log(array4);

const [firstarray, ...rest] = array1;

console.log(rest);

const arrayfun = (name, surname, ...rest) => console.log(name,surname,rest); //refactoring + spread operator

arrayfun("ahmet", "yılmaz", "istanbul", "ankara", "izmir", 2023);

const total = (...rest) => {
    let total = 0;
    rest.forEach(item => {
        total += item;
    });
    return total;
}

console.log(total(1,2,3,4,5,6,7,8,9,10,54));

