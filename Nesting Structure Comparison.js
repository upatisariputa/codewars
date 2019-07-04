//4kyu

//Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structure as the first array.

Array.prototype.sameStructureAS = function(other) {
  let nestArr = [...other];
  let thisArr = [...this];
  let result = true;
  while (other.length) {
    let otherNext = ohter.shift();
    let thisNext = this.shift();
    if (
      Array.isArray(otherNext) == Array.isArray(thisNext) &&
      Array.isArray(otherNext) == true
    ) {
      nestArr.push(...otherNext);
      thisArr.push(...thisNext);
    } else if (Array.isArray(otherNext) !== Array.isArray(thisNext)) {
      return (result = false);
    }
  }
  return result;
};

// 다른사람 풀이
Array.prototype.sameStructureAs = function(other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  if (this.length !== other.length) {
    return false;
  }
  for (var i = 0; i < this.length; i++) {
    if (isArray(this[i]) && isArray(other[i])) {
      if (!this[i].sameStructureAs(other[i])) {
        return false;
      }
    } else if (!isArray(this[i]) && isArray(other[i])) {
      return false;
    } else if (isArray(this[i]) && !isArray(other[i])) {
      return false;
    }
  }
  return true;
};
