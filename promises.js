//like a real promise
const result =new Promise((resolve, reject) => {
    const gift= "watch";
    if (gift.startsWith("watch")) {
        resolve("thank you for the gift");         //you fulfill your promise
    } else {
        reject("i want watch as a gift");          //you didnot fulfill promise
    }
    });

    result
    .then((data) => console.log(data))     //console data if you fulfill your promise
    .catch((err) => console.log(err, "error"))   //console error if you didnot fulfill your promise
    .finally(() => console.log("successful promise operation!"));     //check if promise execute is success