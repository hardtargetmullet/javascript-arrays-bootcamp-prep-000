var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
    var newArray = [element, ...array]
    
    return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
    var newArray = [...array, element]
    
    return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
    return array.push(element)
}

function accessElementInArray(array, index) {
  return array[index];
}


function destructivelyRemoveElementToBeginningOfArray(array, element) {
   return array.shift(element)
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.lenght - 1)
  return newArray
}