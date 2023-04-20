candidates = [
    {sno:1,name:"shyam",score:56},
    {sno:2,name:"soorya",score:78},
    {sno:3,name:"sandy",score:99},
    {sno:4,name:"rithik",score:13},
    {sno:5,name:"subjct",score:88},]
let student=candidates.reduce((candidate1,candidate2)=>{
    return candidate1.score>candidate2.score?candidate1:candidate2
})
console.log(student)