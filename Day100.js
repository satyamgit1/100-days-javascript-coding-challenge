//* You are given a 2D integer array logs where logs[i] = [idi, leaveTimei]:

// idi is the id of the employee that worked on the ith task.
// leaveTimei is the time at which the employee finished the ith task.
// Your task is to find the employee who worked on the task with the longest duration. If there is a tie between two or more employees, you will return the smallest id among them.

// Note that the ith task starts the moment right after the (i - 1)th task ends, and the 0th task starts at time 0.

function hardestWorker(n, logs) {
    let maxDuration = 0;
    let employeeId = Infinity;

    for (let i = 0; i < logs.length; i++) {
        let duration = (i === 0) ? logs[i][1] : logs[i][1] - logs[i - 1][1];
        if (duration > maxDuration) {
            maxDuration = duration;
            employeeId = logs[i][0];
        } else if (duration === maxDuration && logs[i][0] < employeeId) {
            employeeId = logs[i][0];
        }
    }

    return employeeId;
}

// Example usage:
const logs = [[0,3],[2,5],[0,9],[1,15]];
console.log(hardestWorker(4, logs)); // Output: 1
