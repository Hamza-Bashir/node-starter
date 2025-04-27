class CustomError extends Error{
    constructor(statusCode, message){
        super(message)
        this.statusCode = statusCode
        this.statusCode = statusCode >= 400 && statusCode < 500 ? "fails" : "error"
    }
}


module.exports = CustomError