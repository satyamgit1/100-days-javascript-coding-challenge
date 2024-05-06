const chart = (newArr) =>{

  const newArr = arr.map((curElem, index) => {
  ;et star = "";
    let number = 0;
    while(number<curElem){
      star = star + "*";
      number++;
    }
    return `${index+1}: ${star}`;
  });
  console.log(newArr.join("\n"));
};
