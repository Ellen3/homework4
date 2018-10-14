
//problem 2
 
const space = function (a,b){
	
    let str = "";

const func = function(symbol, num) {
       
      let symbols = '';
      

        while(num>0) {
         num -= 1;
         symbols += symbol;
       }
       return symbols;
     }

const triangleStars = function(h) {
   
let parameter = h;

   while (parameter > 0) { 
   
const star = func('*', parameter * 2 - 1);
   
const space = func(' ', h - parameter);
    
console.log(space + star);
   
 parameter -= 1;
 
   };
 };

triangleStars(4);



//problem 3

const multiToSingle = function(arr){
 
     var oppositeArr = [];
 
     a = 0;

 while(a < arr.length){
     b = 0;

     while(b <arr[a].length){
         
             oppositeArr[oppositeArr.length] = arr[a][b];
         
             b= b+1;

     }
     
            a= a+1;
 }
 return oppositeArr;
}

console.log(multiToSingle([[1,2,3],[4,5,6],[2,8,6,5],[2,1]]));





//problem 4

const findMinMax = function (a,b) {
let i = 1;
if (b) {
 
 let largest = a[0];
 
while (i < a.length) {
   if (largest < a[i]) {
     largest = a[i];
     
   }
   i++;
 }  
 console.log(largest);

}

  else { 
 
let  smallest =  a[0];

while ( i < a.length) {
 
if(smallest > a[i]) {
    smallest = a[i];
  }
  i++;
}
console.log(smallest);
 }
};

console.log (findMinMax ([25,40,8,60],false));







//problem 5

const forEach = function (a,b) {

 let i = 0 ;
while (i<a.length) {
   b(a[i]);
   i++;

 };
};
const array = [1,2,3,4];
const value = function (number) {
 console.log(number);
 };
forEach(array, value);



//problem 6


const funkSum = function (arr){
let i = 0;
let all = 0;
while(i<arr.length) {
 all = arr[i] + all;
 i = i + 1;
} 
return all;
};


console.log(funkSum([4,4,8]))




//problem 7

const reverse= function (letters) {
  
  let i = letters.length-1;
    let change = "";
  
    while (i >= 0) {
      change = change + letters;
      i = i - 1;
    }
    return change;
  };
  console.log(reverse("program"));
  
  
  
  //problem 8
  
  
  const rectangle = function (let,num)
  {
    str = "";
    while(num > 0){
      
  string = string + let;
      num = num - 1;
    }
    return str;
  };
  
  const line= function(num, count){
    if (count%2===1){
      console.log(" "+ rectangle ("*",1*(num)));
    }
    if (count%2==0){
        console.log(triangle("*",1*(num)));
   }
  };
  
  const last = function(z){
  
  let num = 0;
   while (num<z){
    
  line(z,num);
     num++; 
   }
  
  };
  
  
  
  
  
  
  