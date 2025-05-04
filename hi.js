 function name(a,callback) {
  console.log(a);
  console.log(callback);


  setTimeout(() => {
    let end=" hi how are yut";
    console.log(end);
    
callback(end);  
  }, 2000);
  
 }

function child(a) {
  console.log(a);
  
  console.log("hi");

  setTimeout(() => {
    console.log("end");
    
    
  }, 2000);  
 
  
  
}


 name("hi",child);