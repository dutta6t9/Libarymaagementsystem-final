class AppError extends Error {
    constructor(message, statusCode) {
        super(message);  // Call the parent class constructor with the message
        this.statusCode = statusCode;  // Assign the statusCode as a property

        // Capture stack trace and associate it with the correct constructor
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;