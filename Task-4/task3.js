str=["shyam","hi","bhargav"]
let result=str.reduce(function(element1,element2){
          return element1.length>element2.length?element1:element2
    })
console.log(result)