//Challenge one//
// const sayHello = () => {
//         console.log("Hello Code Nation");
//     }
    
//     const sayHelloX5 = (parameter) => {
//         for (let i = 0; i <= 4; i++)
//             parameter();
//     }
    
//     sayHelloX5(sayHello);

    //Challenge Two//

//     const numbers = [1, 2, 3, 4, 5];
// const mapMethod = numbers.map(i => 1 *3);
// console.log(mapMethod);

    //Challenge Three//
    const add = (a,b) => {
        return a+b;
    }
    const subtract = (a,b) => {
        return a - b;
    }
    const multiply = (a,b) => {
        return a*b;
    }
    const divide = (a,b) => {
        return a/b;
    }
    const doMaths = (num1) => {
        return (num2, fn) => {
            return fn(num1, num2);
        }
    }
    console.log(doMaths(5)(5,add))
    console.log(doMaths(5)(6,multiply))
