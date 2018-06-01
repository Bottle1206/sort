// 快速排序实现 sort方法
Array.prototype.mysort = function (fn){
  const defaultFn = (a, b) => a>b;
  fn = fn || defaultFn;
  function quickSort(list) {
    if (list.length <= 1) return list;

    const base = list[0];
    const left = [], right = [];
    for(let i=1; i<list.length; i++) {
      if(fn(base, list[i])) {
        left.push(list[i])
      } else {
        right.push(list[i])
      }
    }
    return quickSort(left).concat([base, ...quickSort(right)])
  }
  return quickSort(this)
}

const list = [8,5,2,6,9,3,1,4,0,7];

const list2 = list.mysort((a, b) => a > b);

console.log(list2)