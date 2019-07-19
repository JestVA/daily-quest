let range = {
    from: 1,
    to: 5
  };
  
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function() {
  
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // now it works!



/* 

-- The console logs I tried --

  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5

    for (let n of range) {alert(n)}
undefined
for (let n of range) {console.log(n)}
VM1554:1 1
VM1554:1 2
VM1554:1 3
VM1554:1 4
VM1554:1 5
undefined
range.from = "A"
"A"
range.to = "Z"
"Z"
for (let alphabet of range) { console.log(alphabet) }
VM2064:1 NaN
undefined
range.from = "A".charCodeAt()
65
range.to = "Z".charCodeAt()
90
for (let charCodesAtoZ of range) {
console.log(data)
VM2477:2 Uncaught SyntaxError: Unexpected end of input
for (let charCodesAtoZ of range) {
console.log(data)
}
VM2500:2 Uncaught ReferenceError: data is not defined
    at <anonymous>:2:13
(anonymous) @ VM2500:2
for (let charCodesAtoZ of range) {
console.log(...charCodesAtoZ)
}
VM2587:2 Uncaught TypeError: Found non-callable @@iterator
    at <anonymous>:2:9
(anonymous) @ VM2587:2
f

or (let charCodesAtoZ of range) {
console.log(charCodesAtoZ)
}


VM2648:2 65
VM2648:2 66
VM2648:2 67
VM2648:2 68
VM2648:2 69
VM2648:2 70
VM2648:2 71
VM2648:2 72
VM2648:2 73
VM2648:2 74
VM2648:2 75
VM2648:2 76
VM2648:2 77
VM2648:2 78
VM2648:2 79
VM2648:2 80
VM2648:2 81
VM2648:2 82
VM2648:2 83
VM2648:2 84
VM2648:2 85
VM2648:2 86
VM2648:2 87
VM2648:2 88
VM2648:2 89
VM2648:2 90
undefined


for (let charCodesAtoZ of range) {
console.log(String.fromCharCode(charCodesAtoZ))
}

VM3098:2 A
VM3098:2 B
VM3098:2 C
VM3098:2 D
VM3098:2 E
VM3098:2 F
VM3098:2 G
VM3098:2 H
VM3098:2 I
VM3098:2 J
VM3098:2 K
VM3098:2 L
VM3098:2 M
VM3098:2 N
VM3098:2 O
VM3098:2 P
VM3098:2 Q
VM3098:2 R
VM3098:2 S
VM3098:2 T
VM3098:2 U
VM3098:2 V
VM3098:2 W
VM3098:2 X
VM3098:2 Y
VM3098:2 Z
undefined

*/