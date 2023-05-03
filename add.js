const add = (numString) => {
  let add = 0;
  let negatives = [];
  let arr = [];
  if (numString.startsWith("//")) {
    const delimter = numString[2];
    numString = numString.slice(numString.indexOf("\n") + 1);
    arr = numString.split(String(delimter));
  } else {
    arr = numString.split(/[\n, ]+/);
  }
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < 0) {
      negatives.push(arr[i]);
    }
    add = add + Number(arr[i]);
  }
  if (negatives.length > 0) {
    throw `negatives not allowed , ${negatives}`;
  }
  return add;
};

// try {
//   console.log(add("//;\n1;2"));
// } catch (e) {
//   console.log(e);
// }

module.exports = add;
