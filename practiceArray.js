

class PracticeArray {
  constructor() {
    this.data = {}
    this.length = 0
  }

  push(item) {
    this.data[this.length]= item;
    this.length++;
  }

  pop() {
    //removes the last item from the end
    //reduce the length
    //return the last element
    const lastEl = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastEl;
  }

  get(index) {
    return this.data[index];

  }

  shift(index) {

    for (var i = index; i < this.length-1; i++) {

      this.data[i] = this.data[i+1];


    }

    // delete this.data.length-1

  }

  delete(index) {


    this.shift(index);
    // this.length--;
    delete this.data[this.length-1];
    this.length--;
    // this.shift(index)


  }

}





const arr = new PracticeArray;
arr.push('tomato');
arr.push('lettuce');
arr.push('cabbage');
console.log(arr.get(1));
// console.log(arr.shift(1))
console.log(arr.delete(1));

console.log(arr)




// const obj = {};

// obj['item1'] = 'tomato';
// obj['item2']= 'lettuce';

// console.log(obj)
// console.log(obj['item1'])


// var arr = [];
// arr.push('tomato');
// arr.push('lettuce');
// console.log(arr)

// console.log(arr[0])