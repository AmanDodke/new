
// let name = 'Aman'
// let section ='c'
// const born_year= 2004
// let graduate =false
// let post =undefined
// let salary=null

// console.log(typeof(name))5r
// console.log(typeof(section))
// console.log(typeof(born_year))
// console.log(typeof(graduate))
// console.log(typeof(post))
// console.log(typeof(salary))

// let aman= 23
// console.log (aman)
// console.log ("aman")
// console.log (aman)

//   let age=17
//   let eyesite=false
  
//   if((age>=18)&&(eyesite==true)){
//       console.log("yes, you are eligible to get license") 
//     }
//     if(age>=18){
//         if(eyesite==false){
//             console.log(" No,yourEyesite is weak so you are not eligible to get licence ") 
//         }
//     }
//     else{
//     let leftAge=18-age 
//     console.log("No, your age is "+ age  +" you have to weight "+ leftAge +"  year for getting licence") 
// }
//  console.log(typeof(Nan)) [Nan= not a number ,when we convert a number]
// let n='1'+1;
// n=n-1

// let height =  Number( prompt("enter your height"))
// let height = prompt("Enter your height")
//     if(height){
//         console.log(`your height is ${height}cm`);
//     }
//     else{
//         console.log("beta height dalo ");
//     }

// let age= Number(prompt('enter your age '))
// if(age ==='18'){
//     console.log(`bade hogye miya`)
// }
// else{
//     console.log(`hehehe`)
// // }
// const hasDrivinglicense =true;
// const goodVision= true;

// console.log( hasDrivinglicense&& goodVision);
// console.log(||goodVision);
// console.log();


  //
  
//   let averageOfDolphingame2= (96+108+89)/3;
//   let averageOfKoalasgame2= (86+91+110)/3;
//   console.log(averageOfDolphingame2);
//   console.log(averageOfKoalasgame2);
//   //
  
//   let averageOfDolphingame3= (96+108+89)/3;
//   let averageOfKoalasgame3= (86+91+110)/3;
//   console.log(averageOfDolphingame2);
//   console.log(averageOfKoalasgame2);


// let team1= (97+112+101)/3;
// let team2= (101+95+106)/3;
//  console.log(team1);
//  console.log(team2);

// if(team1>team2&&team1>100){
//     console.log(`team1 winner`)
// }
// else if(team2>100&&team2>100)
//     {
//         console.log("team2 is winner");
//     }
//    else if(team1==team2&&team1>100&&team2>100){
//                      console.log(`match is draw`)
//    }
// else{
//     console.log(`no result`);
// }


// switch  case 
// switch (day){
//        case `monday`:
//         console.log(`chestDay`);
        
//        case `tuesday`:
//         console.log(`chestDay`);
        
//        case `monday`:
//         console.log(`chestDay`);
        
//        case `monday`:
//         console.log(`chestDay`);
        
//        case `monday`:
//         console.log(`chestDay`);
        
//        case `monday`:
//         console.log(`chestDay`);
// }



//js--> loosely typed language
// console.log(`aman`)

// let glass1=fruitprocessor(2,3)
// console.log(glass1);

  // function fruitprocessor(apple,mango){
  //     console.log(`${apple}  apple and ${mango} mango`);
  //     let juice= `juice with ${apple} apple and ${mango} mango`
  //       return juice
  //   }

  // let glass1  = function(apple,orange){
  //   let juice=` Juice of ${apple} apples and ${orange} Oranges`
  //   return juice;
  // }
  // console.log(glass1(2,3))
  // let a= 8
  // let b=4
  // let glass2 =fruitProcessor(a,b);
  // console.log(fruitProcessor(2,3));
  // console.log(glass2);

  // function fruitProcessor(apple,orange){
  //   juice = `juice with ${apple} apple and ${orange} oranges`
  //     return juice
  // }  
          // function expression  vs arrow function (arrowfunction,callbackfunctiopn ,singlelinefunction  all are Same)
 
          // const calAge3= birthyear=>2024-birthyear;
          //       console.log(calAge3(2023))
          //  const retiremenrt= birthyear=> {
          //          let age= 2024-birthyear
          //          let remainingYearToRetire=65-age;
          //          return `remainingYearToRetire `;
          //  }
          //  console.log(retiremenrt(2000));
       
          // sample syntax for arrow function 
                // const sample =()=>{}
                 
                  //  const calAverage=(score1,score2,score3)=>{
                  //        return (score1+score2+score3)/3
                  //  }
                  //  let team1=calAverage(44,23,71)
                  //  let team2=calAverage(65,54,41)
                  // //  console.log(`Team1 is Winner${team1}`);
                   
                  //  const checkWinner = function(team1,team2){
                  //          if (team1>(team2*2)){
                  //           console.log(`Team1 is Winner${team1}`);
                  //          }
                  //          else if(team2>(team1*2)){
                  //            console.log(`Team2 is Winner${team2}`)
                  //          }
                  //          else {
                  //          console.log(` no one wins`);}
                            
                  //    }

                  // checkWinner(team1,team2);


                     //

//   const calAvg= (a,b,c)=>(a+b+c)/3;
// // console.log(calAvg);
// const csk=calAvg(144,164,85);
// const Mi=calAvg(65,54,49);

// const checkWinner=function(team1,team2){
//     if(team1 > team2 * 2){
//         console.log(`team1 ${team1} is the winner`);
//     }
//     else if(team2 > team1 *2){
//         console.log(`team2 ${team2} is the winner`);
//     }
//     else{
//         console.log("Draw!!!!!!")
//     }
// }

// checkWinner(Mi,csk);

                     


  // const calAvg = (a,b,c)=>{
  //             return(a+b+c)/2
  // }
  //  const team1=calAvg(144,164,85);
  //   const team2=calAvg(65,54,49);
       
  //   const checkWinner2=(team1,team2)=>{
  //                if(team1>(team2*2)){
  //                 console.log(`team1 is winner wirh(${team1} vs ${team2})`);
  //                }
  //                else if(team2>(team1*2)) {
  //                 console.log(`team2 is winner with(${team1} vs ${team2})`);
  //                }
  //                 else {
  //                    console.log(`No one Wins`);
  //                }
  //   }
  //      checkWinner2(team1,team2)
  
  //ternary Operator
    // let  myAge = Number(prompt(`enter my age`))
    // let yourAge = Number(prompt(`enter your age`))
    //    console.log(myAge);
    //    let Ages= myAge>=yourAge?"yes":"no";
    //     console.log(Ages);
    

        //type conversion type coersion

// let salary=Number(prompt("Enter Your salary"));
//                       console.log(salary);
// let updatedSalary=Number(salary)

// let bonus=1000
// console.log(salary+bonus)

// console.log(typeof(NaN));

// const birthYear='1991'
// console.log(Number(birthYear),birthYear)
// console.log(Number(birthYear)+18)
// console.log(Number(birthYear)+'18')


// globe scope & block scope  
  // let greeting =`jai shree ram`      //  Globe Scope 
  // function Scope (g){
  //      let message =`hello`            //Block Scope 
  //      console.log(greeting)
  //      return g+" "+message ;
  // }
  // console.log(Scope(greeting))        //for Globe and block Scope  
  // console.log(greeting)                //for Globe Scope  
  // console.log(message)                  //block Scope   

// const csk =[' ']
// const person=["Mahi",7,(2024-1985),true]
//  console.log(person)
// 'use Strict'
//


    // const  birthYear= [2001,2002,2003]
    //     function currentage(birthYear){
    //                let age =2024-birthYear;
    //                return age;
    //     }
    //   let age1=currentage(birthYear[0])
    //   let age2=currentage(birthYear[1])
    //   let age3=currentage(birthYear[2])

    //   let ageArray=[];
    //   ageArray[0]=age1
    //   ageArray[1]=age2
    //   ageArray[2]=age3
    //   console.log(ageArray);

      //Array Methods
      // const friends =[`aman`,`kartik`,`sumedh`]
      // console.log(friends);
      
      //  friends.push('rahul');
      // console.log(friends);

      // friends.pop();
      // console.log(friends);

      // friends.unshift();
      // console.log(friends);

      // friends.shift();
      // console.log(friends);

      // friends.indexOf('aman')
      //  console.log(friends.indexOf('kartik'));
      // console.log(friends.includes('aman'));

      // console.log(friends.includes('kartik'));

      // function CalcTip(billValues){
      //   let tip =((billValues>=50)&&(billValues<=300))?`the bill valueis${billValues} and tip is${(15/100)*billValues} total = ${((15/100)*billValues)+billValues}`:`the bill value is = ${billValues} and tip is =${(20/100)*billValues} total = ${((20/100)*billValues)+billValues}`
      //   return tip;
      // }
      // let Bills =[125,555,44];  
      // billvalue1= CalcTip(Bills[0])
      // billvalue2= CalcTip(Bills[1])
      // billvalue3= CalcTip(Bills[2])
      // console.log(billvalue1);
      // const Total=[]
      // Total.push(billvalue1);
      // Total.push(billvalue2);
      //  Total.push(billvalue3);
       
      //  console.log(Total);

      //
      
      //  let  billValues=200;
       
      //   let tip=(50<=billValues<=300)?'hae':`nhi hae`
      //   console.log(tip);

      // //Array practice

      //  const friends =['aman',`rahul`,` divyansh`,`harsh`]
      //  //random Access
      //    console.log(friends[1]);

      //  //  As a object with new Keyword
      //    const mitra = new Array('aman',`rahul`,`harsh`)
      //    console.log(mitra);

      //    //for length
      //    console.log(friends.length);
      //    console.log(mitra.length);
        
      //    // for knowing index
      //    console.log(friends.length-1);//becouse index Starts with 0
      //    console.log(mitra.length-1);

      //    //relacing using index
      //     friends[1]='pankaj'
      //     friends[2]='$ '
      //     console.log(friends);
          
      //     //array is mutable because we change the value of array after assigning(declaration) the value
      //     // Even const is also allow the Array to change its value forward

      //     //array is hetrogeneous => it can Store a mixture of Datatypes

      //      const Dost =['divyansh',21,true,2331,'2002']
      //       console.log(Dost)
         
      //       //Even we can Store Array in Array
      //        const dostKeDost=['aman','divyansh','Rahul',friends]
      //        //  console.log(dostKeDost);
      // //        console.log(dostKeDost[3][2]);

      //        // Array Method 
             
      //        //To Push
      //     const studentList=[`Aman`,'Divyansh',`rahul`,`harsh`]
      //     console.log(studentList);
      //     let a= studentList.push(`yash`)
      //      //a is for returning lenth of an Array or item removed in other method Cases
      //     // console.log(a);
      //         console.log(studentList);

      //     //For Unshift

      //     let removedItems=studentList.unshift('abhi')
      //     console.log(studentList);
      //     console.log(removedItems);

      //     //for pop
      //     let removedItems1=studentList.pop()
      //     console.log(studentList)
      //     console.log(removedItems1);

      //     //for shift
      //     let removedItems2=studentList.shift()
      //      console.log(studentList)
      //     console.log(removedItems2);
          
      //     // for Index of 
           
      //     // let index_of_aman=studentList.indexOf('rahul')
      //     let index_of_aman=studentList.indexOf('Rahul') // if it is not match with Array it shows -1
      //     console.log(index_of_aman);
          
    // ?   // agar hame array ke bich me se kuch Remove karna ho toh 
           

          // for include => to check a random dats is exist in array or not 
          //it gives a boolean value as output
          //   const check = studentList.includes('Aman');
          //   const check1 = studentList.includes('aman');
          // console.log(check);
          // console.log(check1);
         
          // console.log(check);
          // console.log(studentList.indexOf('Aman'));   
        //   console.log(studentList);   
        // studentList[2]=1;
        //   console.log(studentList);       

          // Object Key value ke sath pair hota hae

          // const employDetails1={
          //   name:'Aman',
          //   job :true,
          //   age:22,
          //   salary:2000
          // }
          // const employDetails2={
          //   name:'rahul',
          //   job :true,
          //   age:22,
          //   salary:2000
          // }
          // const employDetails3={
          //   name:'krish',
          //   age:22,
          //   job :true,
          //   salary:2000
          // }
          // const employ=[employDetails1,employDetails2,employDetails3]
          // console.log(employ)
 
          // let str = `JavaScript`

          // // for in -> use for object
          //  let student ={
          //   name :'chotu',
          //   age:50,
          //   cgpa:6,
          //   isPass:true,
          //  };
            
          // for(let key in student){
          //         console.log(key+' '+student[key]);
          // }
          

          // const student1={   name:"Aman",
          //                    age:21,
          //                    cgpa:6.30,
          //                     isPass:true,
          //                    job :false
          // }
          // const student2={   name:"Pankaj",
          //                    age:30,
          //                    cgpa:8.30,
          //                     isPass:true,
          //                    job :true
          // }
          // const student3={   name:"Kartik",
          //                    age:20,
          //                    cgpa:6,
          //                     isPass:true,
          //                    job :false
          // }
          // const student4={   name:"Sumedh",
          //                    age:22,
          //                    cgpa:7,
          //                     isPass:true,
          //                    job :false
          // }
          // console.log(student2);
          // console.log(student2.name);
          // console.log(student2['name']);
          // let key='age'
          // console.log(student2.key);
          // console.log(student2[key]);
          // student2.location='bhopal'
          // student2.instaid=`nahi hae`
          //  student2.kyaKarRahaHae=`kuch nahi`
          // student2[`height`]=`achi hae`
          //   student2.bike= prompt(`konsi bike chahiye`)
            // student2[car]=prompt(`konsi car chahiye`)
           
          // console.log(student2);

            
          // const students=[student1,student2,student3,student4]

          // console.log(students);
          // console.log(students[3]);
          // console.log(students[3]["name"]);

            
//L O O P S
//For of Loop,for in Loop,for each Loop
 // for of loop : this loop is used for String or Arrays  
        let str = `JavaScript`
                 
        for(let val of str){
           console.log(val);
        }
            

          const student1={   name:"Aman",
                             age:21,
                             cgpa:6.30,
                              isPass:true,
                             job :false
          }
          const student2={   name:"Pankaj",
                             age:30,
                             cgpa:8.30,
                              isPass:true,
                             job :true
          }
          const student3={   name:"Kartik",
                             age:20,
                             cgpa:6,
                              isPass:true,
                             job :false
          }
          const student4={   name:"Sumedh",
                             age:22,
                             cgpa:7,
                              isPass:true,
                             job :false
          }

          const students=[student1,student2,student3,student4]
        //   for(let name of students){
        //     console.log(name);
        //  }

        //for in Loop :it is used for objects 
        // for (let key in student1){
        //     console.log(`${key} : ${student1[key]}`);
        // }  

        //for each loop :it is for array
        
        students.forEach( student => {
          console.log("Name :"+" "+student.name);
          
        });