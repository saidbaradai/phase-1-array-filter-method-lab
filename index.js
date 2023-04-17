// Code your solution here
function findMatching(drivers,name){
    return drivers.filter(n=>n.toUpperCase()===name.toUpperCase())
}


function fuzzyMatch(drivers, letters) {

    return drivers.filter(n => n.slice(0, letters.length).toUpperCase() == letters.toUpperCase())
  
  }

  function matchName(drivers,name){
    return drivers.filter(d=>d.name==name)
  }