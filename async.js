async function getresult(){
    const result = new Promise(function (res, rej) {
        const gift ="watch";

    if (gift.startsWith("watch")) {
        resolve("thank you for the gift");         
    } else {
        reject("i want watch as a gift");          
    }
    });

    try{
        const message = await result;
        console.log(message);
    }  catch (error) {
        console.log("Error:", error);
    } finally{
        console.log("successful promise operation!");
    }
 }
 getresult();
