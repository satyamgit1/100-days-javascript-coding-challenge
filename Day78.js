//* Create a lab to implement time-limited asynchronous functions, 
//* which allows you to set a time limit in milliseconds for the given asynchronous function to be executed.
//*  If the function takes more time than the specified time limit, it should be rejected with the string "Time Limit Exceeded".

function timeLimitedAsyncFunction(asyncFunction, timeLimit) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject("Time Limit Exceeded");
        }, timeLimit);

        asyncFunction()
            .then((result) => {
                clearTimeout(timeout);
                resolve(result);
            })
            .catch((error) => {
                clearTimeout(timeout);
                reject(error);
            });
    });
}