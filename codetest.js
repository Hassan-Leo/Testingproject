let data=require("../Testingproject/Ecert.postman_collection.json");


for (i=0;i<data.item.length;i++){
console.log(data.item[i].name)
console.log(data.item[i].request.method)
console.log(i)
console.log("Next")
}
