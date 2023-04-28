// day 1
// console.log('hello world');
// let age: number= 21;
// console.log(age);
// const add = (a:number, b:number)=>{
//     if(a<5)
//     return "cannot add this"
//     return a += b;
// };
// console.log(add(10,8));


// day 2 * 
// let firstName: string = 'pami';
// firstName= 'loggy'      //i cannot give it a non-string value because it's type is explicit as string .
// // but if i haven't declared the type then it will again throw an error  
// let lastName = 'Singh'
// // lastName = 69;    //this is again throwing an error .
// let a:any = 'boom'
// a = 69;
// a = true;

// let b: unknown= 'hello'
// b=69;
// b=['hello', 1, 'world']

// const run = (num:number, str:string= 'hello')=>{
//     return num + str
// };
// console.log(run(60))

// type Rule = {
//     name: String,
//     age: Number,
//     profession: String
// };

// type Favs = {
//     num: Number,
// }

// let student1:Rule & Favs = {
//     name: 'Abhishek',
//     age: 21,
//     profession: 'developer',
//     num:69
// };
// console.log(student1)
    

//Day 3

// let arr: readonly string[] = ['hello','ji','sir ji']
// console.log(typeof(arr));;


// let arr2 = [1,2,3,4,5];
// arr2.push(69);

// let tuples: readonly [number, string, boolean] = [69,'Abhishek Kumar', true];

// // tuples.push('hello');
// console.log(tuples);

// let graph: [number, number] = [44,44]

// let [a,b]= graph
// console.log([a,b]);

// // for day 4 = TS objectType
