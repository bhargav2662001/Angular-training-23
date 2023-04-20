function filterThis(candidateFilter,student)
{
    result=[]
    for( x of student)
        if(candidateFilter(x))
            result.push(x)
    return result 
}
student = [
    {sno:1,name:"shyam",percentage:56},
    {sno:2,name:"soorya",percentage:78},
    {sno:3,name:"sandy",percentage:99},
    {sno:4,name:"rithick",percentage:13},
    {sno:5,name:"pooja",percentage:88},]
result=filterThis(function(candidate){
        if(candidate.percentage>70)
          return true
        return false  
},student)
console.log(result)