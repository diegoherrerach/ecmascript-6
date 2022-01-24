const button = document.getElementById("btn");
button.addEventListener("click", async function(){
    const module =await import("./file.js")
    module.hello();
});

const aBigNumber = 90071999923213n;
const anotherBigNumber=BigInt(90071999923213);
console.log(aBigNumber);
console.log(anotherBigNumber);

const promiseOne = new Promise((resolve, reject) => reject("reject"));
const promiseTwo = new Promise((resolve, reject) => resolve("resolve"));
const promiseThree = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promiseOne, promiseTwo, promiseThree])
.then(response=>console.log(response));

console.log(window);
console.log(globalThis);

const fooo = null ?? 'default string';
console.log(fooo);

const user ={};
console.log(user?.profile?.email);
if(user?.profile?.email){
    console.log(email);
}else{
    console.log('fail');
}
