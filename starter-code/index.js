class SortedList {
  constructor() {
    (this.items = []), (this.length = 0);
  }

  add(item) {
    const arr = this.items;
    arr.push(item);

    this.items = arr.sort((a, b) => {
      return a > b;
    });
    this.length = arr.length;
  }

  get(pos) {
    if (pos <= this.length - 1) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b);
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return parseInt(
        Math.ceil(this.items.reduce((a, b) => (b + a) / this.length))
      );
    }
  }
}

module.exports = SortedList;
