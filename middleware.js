// All middkeware will be defined here

//
const sampleMiddleware1 = (req,res,next) => {
    console.log('Sample Middleware Executed!');
    next();
}
module.exports = sampleMiddleware1;
