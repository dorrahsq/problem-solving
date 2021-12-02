function findSenior(list) {
    let max = list[0].age
      list.forEach((ele)=>{
  if (ele.age > max) {
  max= ele.age
  }
      
      
      })
   let newArray = []  ;
    list.filter((ele)=>{
      if (ele.age == max )
        newArray.push(ele)
    })
    
    return newArray  ;
  }