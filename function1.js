//immediately invoked function expressions(IIFE)

(function chai(){
    console.log(`DB connected`);

})();

//() first for function defination
//() second for calling function or executing
//to remove pollution of global scope
//compulsory to end function with ; semicolon

((name) => {
   console.log(`DB connected two ${name}`);
})('hitesh')