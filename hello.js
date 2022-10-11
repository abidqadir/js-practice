// let b = 5

// do {
//     console.log(b)
//     b++
// }
// while ( false )


// let mobile = {
//     name:"8plus",
//     model:'2018',
//     colors:['red','blue','white'],

//  wifi: () => 'hello',


// bluetoth(){
//     //ss
// },

// }

//  console.log(mobile.bluetoth(),mobile.colors,mobile.name,mobile.wifi())


/////for in loop


// obj = {
//     name:'abid',
//     cast:'umrani',
//     mob:'0300',

// }

// for (key in obj){
//     console.log(obj[key])
// }

// for off looop

// let game = ['pubg','igi','cs'];
// for( t of game ){
//     console.log(t)
// }

// let circkt = [{name:'abid',cast:"umrani"},{name:'hamyoon',cast:'khosa'},{name:"bilal",cast:'golo'}];

// for(tt of circkt){
//     console.log(tt.name,tt.cast)
// }
 
// let a = true
// for(b=1;b<=10; b++)
// {
//     if ( a==true ){
//         console.log('true')
//         a = false
//     }
// else
// {
//     console.log('false')
//     a = true
// }
// }

// for (let a =5;a>=1;a-- )
// {
//     if(a % 2 !==0) 
//     console.log(a);
// }

// function myFunction(a)
// {
//     if ( a >=  80 && a <=100 ){
//         console.log('A grade')
//     }
//     else if ( a >=70 && a< 80 ){
//         console.log("b grade")
//     }
    
//     else if ( a >=60 && a < 70 ){
//         console.log("c grade")
//     }
//     else if ( a >=50 && a <60 ){
//         console.log("d grade")
//     }
//     else 
//     {
//         console.log("fail")
//     }
// }

//  myFunction(66)


// function myFunction(a,b)
// {
    
//     if(a>b){
//         console.log( a+  " is greater number" )
//     }   
//     else if (a==b)
//     {
//         console.log(" both r equal")
//     }
//     else
//     {
//         console.log(b+ "  is greator number")
//     }
// }



// function tellgreater(a,b){
//     if(a>b)console.log(a +" is greater")
//     else if(a==b) console.log("both are eqaul")
//     else console.log(b +" is greater")
// }

// tellgreater(100,100)
// myFunction(1,4)




// function number(a)
// {
// if (a > 0 )
//  console.log(a+ "  postive")

// else if (a == 0)
// console.log( a +" zero")

// else console.log(a +" negitive")
// }
//  number(-1)

// function calculator (n1,n2,op)
// {
//     if (op =='+'){
//         console.log(n1+n2)
//     } 
//     else if (op =='-'){
//         console.log(n1-n2)
//     } 

//     if (op =='*'){
//         console.log(n1*n2)
//     } 
//     if (op =='/'){
//         console.log(n1/n2)
//     } 
// }


// calculator(2,2,"*")




// function GreaterNumber (n1,n2,n3)
// {
// if (n1>n2 && n1 >n3)console.log( n1 +" greater no")

// else if (n2>n1 && n2>n3)console.log( n2+ " greater no")

// else if(n3>n1 && n3> n2) console.log(n3 +" greater no")
 

// }

// GreaterNumber(99,5,7)

// function divisable(n1)
// {
//     if(n1/5 == 0 && n1/11==0) console.log("it is divisable")
//     else
//     {
//         console.log("it's not")
//     }

// }

// divisable(6)


// function even_and_odd (n1)
// {
//  if (n1/2 == 0)console.log("Even")
 
//  else
//  {
//     console.log("odd")

// }


// }

// even_and_odd(2)

 
// a = 0

// for(a  of numbers)
// {
//     console.log(a)
// }  
// let a = [2,4,5,7]

// let sum = 0
// //  console.log(a[1])

//    for (i = 0; i<a.length;i++)
//    {
//       sum+=a[i]
      
//    }
//    console.log(sum)
 
//  //console.log(sum)


// number(3)

//  for (i=5;i>=0;i--)
//  {
//    console.log(i)
//  }


        
// function sumArray(array) {
 
//    if(!array || array.length==0)
//    {
//      return 0
//      }
  
//    let smallest = array[0]; 
//    let biggest = array[0];
   
   
//    for (n1 of array)
//      {
//        if( n1 < smallest )
//          {
//            smallest = n1
//          }
//      }
   
//    for (n2 of array)
//      {
//        if (n2 > biggest)
//          {
//            biggest = n2
//          }
//      }
   
   
//    let sum = 0
   
//    for (let i = 0; i < array.length; i++)
//      {
//        if(array[i]==smallest || array[i]==biggest){ 
//          continue
//        }
//      else{
//        sum +=array[i] 
//      }
       
//      }
//   return sum
//  }

//    console.log(sumArray([ 1, 6, 10, 10 ]))

// function solution(str){
//    let New = " "
//    for ( let i = str.length-1;i>0;i-- )
//    {
//    New +=str[i]   
//    }
   
//  }
//  solution(hello)

// function reverseString(str) {
   
//    var newString = "";

  
//    for (var i = str.length - 1; i >= 0; i--) 
//    { 
//        newString += str[i];
//    }
//    return newString
 
// }
// let reverse =  reverseString("car")
// console.log(reverse)



// function arr (a)
// {
//     if (!a || a.length==0) {return ''}
// j = " "
//     for (i of a)
//     {
//         j+=i+" " ;
        
//     }
//     j = j .trim()
    
//     return j
 
// }
//  console.log(arr(["a","bvcs","wwe"]))

// function booleanToString(b){
  
//     if (b){
//       return 'true'
//     } 
//    else {
//      return 'false'
//    }
//    }

// function lovefunc(flower1, flower2){
  
//     return flower1 % 2 !== flower2 % 2
//   }


// function find_average(array) {
//     if (!array || array == 0){return 0}
//      let sum = 0
//      let total = 0
     
//      for (sum= 0;sum<array.length;sum++)
//      {
//      total += array[sum]  
//      }   
//      total = total / array.length
//      return total;
//    }
   
//function number()
//{
 // return - number
//}
//number(6)

function calculator ()
{
  let a 
  let b
  for (a=0; a <=11; )
  {
    a*b
  }

}
