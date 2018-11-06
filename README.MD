<a name="ArrayDeque"></a>

## ArrayDeque
Array-backed implementation of a deque. Supports O(1) random access, and amortized O(1) insertion and removal at the front and back of the deque

**Kind**: global class  

* [ArrayDeque](#ArrayDeque)
    * [new ArrayDeque(initSize, x)](#new_ArrayDeque_new)
    * [.push_front(x)](#ArrayDeque+push_front)
    * [.set(i, x)](#ArrayDeque+set) ⇒ <code>\*</code>
    * [.push_back(x)](#ArrayDeque+push_back)
    * [.pop_front()](#ArrayDeque+pop_front) ⇒ <code>\*</code>
    * [.pop_back()](#ArrayDeque+pop_back) ⇒ <code>\*</code>
    * [.toArray()](#ArrayDeque+toArray) ⇒ <code>Array.&lt;any&gt;</code>

<a name="new_ArrayDeque_new"></a>

### new ArrayDeque(initSize, x)
Creates a new deque with size = initSize, and initializes elements to x. If no initSize is provided, returns a deque with size = 0


| Param |
| --- |
| initSize | 
| x | 

<a name="ArrayDeque+push_front"></a>

### arrayDeque.push\_front(x)
Inserts x at the front / beginning of the deque

**Kind**: instance method of [<code>ArrayDeque</code>](#ArrayDeque)  

| Param |
| --- |
| x | 

<a name="ArrayDeque+set"></a>

### arrayDeque.set(i, x) ⇒ <code>\*</code>
Sets the ith element to x, returns the previous ith element. Returns undefined if index is out of range ( i < 0 || i >= deque.size)

**Kind**: instance method of [<code>ArrayDeque</code>](#ArrayDeque)  
**Returns**: <code>\*</code> - Previous element at i  

| Param | Description |
| --- | --- |
| i | Index of the element to set |
| x | The value that should be set |

<a name="ArrayDeque+push_back"></a>

### arrayDeque.push\_back(x)
Inserts x at the back / end of the deque

**Kind**: instance method of [<code>ArrayDeque</code>](#ArrayDeque)  

| Param |
| --- |
| x | 

<a name="ArrayDeque+pop_front"></a>

### arrayDeque.pop\_front() ⇒ <code>\*</code>
Removes and returns the first element in the deque or undefined if there aren't any elements in the deque

**Kind**: instance method of [<code>ArrayDeque</code>](#ArrayDeque)  
**Returns**: <code>\*</code> - First element in the deque  
<a name="ArrayDeque+pop_back"></a>

### arrayDeque.pop\_back() ⇒ <code>\*</code>
Removes and returns the last element in the deque or undefined if there aren't any elements in the deque

**Kind**: instance method of [<code>ArrayDeque</code>](#ArrayDeque)  
**Returns**: <code>\*</code> - Last element in the deque  
<a name="ArrayDeque+toArray"></a>

### arrayDeque.toArray() ⇒ <code>Array.&lt;any&gt;</code>
Returns an array containing the elements of the deque

**Kind**: instance method of [<code>ArrayDeque</code>](#ArrayDeque)  
