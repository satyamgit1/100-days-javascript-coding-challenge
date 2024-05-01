const isEmptyObject = (obj) => {
    if (Object.keys(obj).length === 0) {
        return "it's empty";
    } else {
        return "it's not empty";
    }
};

console.log(isEmptyObject({ name: "vinod" })); // Output: "it's not empty"
console.log(isEmptyObject({})); // Output: "it's empty"

