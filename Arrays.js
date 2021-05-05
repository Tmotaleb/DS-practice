
class TestArray {
  constructor() {
    this.data = {}
    this.length = 0
  }

  push(item) {
    this.data[this.length] = item;
    this.length++; //counts
  }

  pop() {
    //removes an element from the end
    //reduce the length
    //returns the last element

    const item = this.data[this.length-1]  //last element

    //remove the last property from the object using 'delete'
    delete this.data[this.length-1]
    this.length--; //counts

    return item;
  }

  get(index) {
    //return specific element
    //takes the key of the element and returns the value of that key
    return this.data[index]
  }

  delete(index) {   //delete method has an 0(n) complexity because it calls another method which has a for loop
    //removes a property from an object
    this.shift(index);
    // this.length--;
    delete this.data[this.length-1];
    this.length--;
  }

  /*
      arr = [1, 2, 3]
  indices = [0, 1, 2]

  Now, if we remove 2;
      arr = [1, undefined, 3]
  indices = [0, 1, 2]
    ** need to shift 3 over to the left, so the current index needs to equal the next index
     --> this.data[i] = this.data[i+1]

  Now, we have
     arr = [1, 3, 3]
  indices = [0, 1, 2] --> adjust the length (this.length--)
       we need to remove the last item since a copy was reassigned
       also need to adjust the length of the array
        --> delete this.data[this.data.length-1]
  */
  shiftIndex(index) {
      //want to go to the end of the array
    for (var i = index; i < this.length-1; i++) {
      this.data[i] = this.data[i+1];
    }
  }

}

const arr = new TestArray();
arr.push('first element');
arr.push('second element');
console.log(arr.delete(0));
console.log(arr)

/*
output: TestArray {data: {0: 'first element', 1: 'second element'}, length: 2}
*/

