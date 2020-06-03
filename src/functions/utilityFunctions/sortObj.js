
function sortObj(obj, key, order, type) {

    if (type === "num" && order === true) {
    
     return obj.sort((a,b)=>{
        return +a.data()[key] - +b.data()[key]
      })
    }
    if (type === "num" && order === false) {
      return obj.sort((a,b)=>{
        return +b.data()[key] - +a.data()[key]
      })
    }
  
    if (type === "str" && order === true) {
        return obj.sort((a, b) => {
          if (a.data()[key] > b.data()[key])
            return -1;
          if (a.data()[key] < b.data()[key]) 
              return 1;
         else return 0
          })
        }
  
        if (type === "str" && order === false) {
          return obj.sort((a, b) => {
            if (a.data()[key] < b.data()[key])
              return -1;
            if (a.data()[key] > b.data()[key]) 
                return 1;
           else return 0
            })
          }
    
  
  }

  export default sortObj;