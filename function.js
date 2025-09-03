 function differnce(a,b)
{
    return a-b;
}
let result=differnce(4,3)
console.log(result);  

function start()
{
    return 10/5;
}
let resultt=start()
console.log(resultt);

let students = [
 { name:"rakesh",marks : 80},
 { name:"sai",marks : 60},
 { name:"abhi",marks : 70},
];
function cal(students)
{
    let total=0;
    for (let i=0;i<students.length;i++){
        total =total+students[i].marks;
}
return total / students.length;
}
 console.log(cal(students))


