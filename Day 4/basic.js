// console.log("hello world");
// let a=122;
// let b=23;
// console.log(a+b);
// let x;
// let y;

//  function  add(x,y){
//    console.log(x+y);
//  }
// add(4,8);
// let name;
// function hello(name){
//  console.log("hello welcome to tcs" +name);
// }
// hello("tamil");



// let coursename;
// let studentname;

// function assign(coursename,studentname){
//           console.log("student name : "+studentname);
//           console.log("course name : "+coursename);
// }
// assign("mernstack","manjunath");
let arr =[1,2,3];
let doubled = arr.map(n=>n*2);
console.log(doubled);

let ages=[10,12,18,22];
let adults=ages.filter(a=>a>=18);
console.log(adults); 


let nums = [1,2,3];
let sum = nums.reduce((acc,val)=>acc+val,0);
console.log(sum);
let a,b;
const add=(a,b)=>a+b;
console.log(add(7,5));

let data = {
          name : "kirit",
          age : 18,
          city : "avinashi",
          hello:function(){
                    console.log(`hello user ${this.city}`);
          }

};
console.log(data);
console.log(data["age"]);
data.hello();
data.age=22;
console.log(data);
delete data.city;
console.log(data);
let updated={...data, num:9345566};
console.log(updated);

const car={
          make :"hi",
          model:"2003"
};

for(let key in car)
{
          console.log(`${key}:${car[key]}`)
}