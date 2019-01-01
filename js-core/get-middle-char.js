const getMiddle = word => word.length %2 == 0 ? word.slice((word.length/2) - 1, (word.length/2) + 1) : word.slice(word.length/2, (word.length/2) + 1)
