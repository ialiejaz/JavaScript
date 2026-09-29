// Imediately Invoked Function Expressions (IIFE)
// Used to protect function from problems caused by pollution of global scope

(function alpha(){ //this is also a named iife
    console.log("db_connected");
    
})();

// ; (semi colon) is very important between two iife's to separate them or to stop one code and run the one after it 

// (function defination)(function execution)

( () => { // this is also an unnamed iife
    console.log("second_db_connected");
    
} )();

// passing variable

( (name) => {
    console.log(`second_db_connected to ${name} `);
    
} )("oracle")