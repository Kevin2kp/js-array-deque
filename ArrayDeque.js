const MIN_CAP = 16;
/**
 * Array-backed implementation of a deque. Supports O(1) random access, and amortized O(1) insertion and removal at the front and back of the deque
 * @class
 */
class ArrayDeque {

  /**
   * Creates a new deque with size = initSize, and initializes elements to x. If no initSize is provided, returns a deque with size = 0
   * @param initSize
   * @param x
   */
  constructor(initSize, x) {

    /**@private*/
    this._buffer = new Array(initSize || MIN_CAP);
    /**@private*/
    this._backBuffer = [];
    /**@private*/
    this._head = 0;
    this.size = initSize || 0;
    if (x !== undefined) {
      this._fill(x);
    }
  }

  _fill(x) {
    for (let i = 0; i <= this._buffer.length; i++) {
      this.set(i, x);
    }
  }

  /**
   * Inserts x at the front / beginning of the deque
   * @param x
   */
  push_front(x) {

    if (this.size + 1 > this._buffer.length) {
      this._grow();
    }

    //Wrap around
    this._head = ((this._head - 1) % this._buffer.length + this._buffer.length) %
        this._buffer.length;
    this._buffer[this._head] = x;
    this.size++;
  }

  _grow() {
    let backbuffer = this._backBuffer;
    backbuffer.length = this.size * 2;

    for (let i = 0; i < this.size; i++) {
      backbuffer[i] = this.get(i);
    }

    let temp = this._buffer;
    this._buffer = backbuffer;
    this._backBuffer = temp;
    this._head = 0;
  }

  _shrink() {
    let backbuffer = this._backBuffer;
    backbuffer.length = this.size * 2;

    for (let i = 0; i < this.size; i++) {
      backbuffer[i] = this.get(i);
    }

    let temp = this._buffer;
    this._buffer = backbuffer;
    this._backBuffer = temp;
    this._backBuffer.length = this.size * 2;
    this._head = 0;
  }

  get(i) {
    if(i < 0 || i >= this.size){
      return undefined;
    }

    i = (this._head + i) % this._buffer.length;
    return this._buffer[i];
  }

  /**
   * Sets the ith element to x, returns the previous ith element. Returns undefined if index is out of range ( i < 0 || i >= deque.size)
   * @param i Index of the element to set
   * @param x The value that should be set
   * @returns {*} Previous element at i
   */

  set(i, x) {
    if( i < 0 || i >= this.size){
      return undefined;
    }

    i = (this._head + i) % this._buffer.length;
    let old = this._buffer[i];
    this._buffer[i] = x;
    return old;
  }

  /**
   * Inserts x at the back / end of the deque
   * @param x
   */

  push_back(x) {
    if (this.size + 1 > this._buffer.length) {
      this._grow();
    }

    let i = (this._head + this.size) % this._buffer.length;
    this._buffer[i] = x;
    this.size++;
  }

  /**
   * Removes and returns the first element in the deque or undefined if there aren't any elements in the deque
   * @returns {*} First element in the deque
   */
  pop_front() {
    if (this.size === 0) {
      return;
    }

    if (this._buffer.length > MIN_CAP && 3 * this.size <= this._buffer.length) {
      this._shrink();
    }

    let front = this.get(0);
    this._head = (this._head + 1) % this._buffer.length;
    this.size--;

    return front;
  }

  /**
   * Removes and returns the last element in the deque or undefined if there aren't any elements in the deque
   * @returns {*} Last element in the deque
   */
  pop_back() {
    if (this.size === 0) {
      return;
    }

    if (this._buffer.length > MIN_CAP && 3 * this.size <= this._buffer.length) {
      this._shrink();
    }

    let back = this.get(this.size - 1);
    this.size--;

    return back;
  }

  /**
   * Returns an array containing the elements of the deque
   * @returns {any[]}
   */
  toArray(){
    let arr = new Array(this.size);
    for(let i = 0; i < this.size; i++){
      arr[i] = this.get(i);
    }
    return arr;
  }
}

export default ArrayDeque;