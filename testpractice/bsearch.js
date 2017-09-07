Array.prototype.bsearch = function (target) {
  if(this.length <1 ) return -1;
  let mid = Math.floor(this.length/2);
  let left = this.slice(0,mid);
  let right = this.slice(mid);
  if (this[mid] === target) {
    return mid;
  }else if (target < this[mid]) {
    let leftsearch = (left).bsearch(target);
    if(leftsearch !== -1){
      return leftsearch;
    } else {
      return -1;
    }
  }else if (target > this[mid]) {
      let rightsearch = right.bsearch(target);
      if(rightsearch !== -1){
        return rightsearch + mid;
      } else {
        return -1;
      }
  }

};


console.log([1,2,3,4,5,6,7,8].bsearch(4));
