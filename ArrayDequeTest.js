const assert = require('assert');
const Deque = require('./ArrayDeque');

describe('Deque', function(){
  describe('new Deque(n, x)', function(){
    it('Creates a new deque intialized with n copies of x', function(){
      let deque = new Deque();
    })
  });

  describe('get(i)', function(){
    it('Returns undefined if index is out of range (i < 0 || i >= deque.size)', function(){

      let deque = new Deque();
      let expected = undefined;
      let actual1 = deque.get(-1, 0);
      let actual2 = deque.get(0, 0);

      assert.equal(actual1, expected, 'Assert undefined');
      assert.equal(actual2, expected, 'Assert undefined');
    })
  });

  describe('set(i, x)', function(){
    it('Sets the ith element in the deque to x', function(){

      let deque = new Deque(8);
      let expected = [];

      for(let i = 0; i < 8; i++){
        expected.push(i);
        deque.set(i,i);
      }

      let actual = [];
      for(let i = 0; i < deque.size; i++){
        actual.push(deque.get(i));
      }

      assert.deepEqual(actual, expected);
    });

    it('Returns previous element', function(){

      let deque = new Deque(1,0);
      let expected = 0;
      let actual =deque.set(0, 1);

      assert.equal(actual, expected, 'Assert previous element is returned');
    });

    it('Returns undefined if index is out of range (i < 0 || i >= deque.size)', function(){

      let deque = new Deque();
      let expected = undefined;
      let actual1 = deque.set(-1, 0);
      let actual2 = deque.set(0, 0);

      assert.equal(actual1, expected, 'Assert undefined');
      assert.equal(actual2, expected, 'Assert undefined');
    })
  });

  describe('push_back(x)', function(){
    it('Pushes element x at the back of the queue', function(){

      let deque = new Deque();
      let arr = [];
      for(let i = 0; i < 16; i++){
        deque.push_back(i);
        arr.push(i);
      }

      for(let i = 0; i < arr.length; i++){
        assert.equal(deque.get(i), arr[i], 'Elements are inserted at the back of the queue');
      }
    })
  });

  describe('push_front(x)', function(){
    it('Pushes element x at the front of the queue', function(){

      let deque = new Deque();
      let expected = [];
      for(let i = 0; i < 16; i++){
        deque.push_front(i);
        expected.push(i);
      }

      let actual = [];
      for(let i = 0; i < deque.size; i++){
        actual.push(deque.get(deque.size - i - 1));
      }

      assert.deepEqual(actual, expected, 'Assert elements are inserted at the front of the queue');
    });
  });

  describe('_grow()', function(){
    it('Doubles the capacity of the deque while preserving element ordering', function(){
      let deque = new Deque();

      let expected = [];
      for(let i = 0; i < 15; i++){
        expected.push(i);
        deque.push_back(i);
      }

      deque._grow();
      let actual = [];
      for(let i =0; i < expected.length; i++){
        actual.push(deque.get(i));
      }

      assert.deepEqual(actual, expected, 'Assert element ordering is preserved');
    });
  });

  describe('_shrink()', function(){
    it('Shrinks the capacity of the deque by 2 / 3 while preserving element ordering', function(){
      let deque = new Deque(32);
      let expected = [];
      for(let i = 0; i < 15; i++){
        expected.push(i);
        deque.set(i, i);
      }

      deque._shrink();
      let actual = [];
      for(let i =0; i < expected.length; i++){
        actual.push(deque.get(i));
      }

      assert.deepEqual(actual, expected, 'Assert element ordering is preserved');
    });
  });

  describe('pop_front()', function(){
    it('Removes element at the front of the queue and returns it', function(){

      let deque = new Deque();
      let expected =1;
      deque.push_front(expected);
      let actual = deque.pop_front();

      assert.equal(deque.size, 0, 'Assert size is decremented by 1');
      assert.equal(expected, actual, 'Assert pop front returns the correct element');
    });

    it('Queue capacity is shrunk if size < capacity / 3', function(){


      let initialSize = 60;
      let deque = new Deque(initialSize);
      let expected = 2 *initialSize / 3;
      while(deque.size >= 20){
        deque.pop_front();
      }

      let actual = deque._buffer.length;
      assert.equal(actual, expected, 'Assert capacity is shrunk by 2 / 3');
    });
  });

  describe('pop_back()', function(){
    it('Removes element at the back of the queue and returns it', function(){

      let deque =new Deque();
      let expected = 1;
      deque.push_back(expected);
      let actual = deque.pop_back();

      assert.equal(deque.size, 0, 'Assert size is decremented by 1');
      assert.equal(actual, expected, 'Assert pop_back returns the correct element');
    });
  });
});