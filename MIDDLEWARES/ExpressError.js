class ExpressError extends Error{
     //ExpressError is a custom error class created by us , which xtends/inherit the default error class of the Express
     constructor(status , message){
          super(); //this helps to use the properties of parent class
          this.status = status;
          this.message = message;
     }
}

module.exports = ExpressError;