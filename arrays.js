
var chocolateBars = ["snickers", "hundred grand", "kitkat"];

function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return  array.slice(array)
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(-1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop(array)
}
function removeElementFromEndOfArray(array) {
  return array.slice(0)
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift(0)
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return 
}
  







