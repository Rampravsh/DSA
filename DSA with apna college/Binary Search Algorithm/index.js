var searchInsert = function (nums, target) {
  let st = 0;
  let end = nums.length - 1;
  while (st <= end) {
    let md = Math.round((st + end) / 2);
    if (nums[md] < target) {
      st = md + 1;
    } else if (nums[md] > target) {
      end = md - 1;
    } else {
      return md;
    }
  }
  return st;
};

let nums = [1, 3, 5, 6, 34, 37, 48, 50, 57, 60, 72, 100, 256, 345, 455, 634];
let target = 35;

console.log(searchInsert(nums, target));

function searchInsert2(nums, target, st, end) {
  st = st || 0;
  end = end || nums.length - 1;
  if (st <= end) {
    let md = Math.round(st + (end - st) / 2);
    if (nums[md] > target) {
      searchInsert2(nums, target, st, md - 1);
    } else if (nums[md] < target) {
      searchInsert2(nums, target, md + 1, end);
    } else {
      return md;
    }
  } else {
    return st;
  }
//   return st;
}
console.log(searchInsert2(nums, target));
