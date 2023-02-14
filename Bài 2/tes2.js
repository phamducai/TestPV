// Để giải quyết bài toán này, chúng ta có thể sử dụng cách giải thuật two pointer (hai con trỏ).
// Bắt đầu từ đầu và cuối của mảng, tìm hai con trỏ lớn nhất và tăng giá trị của hai con trỏ nếu giá trị bên trái nhỏ hơn giá trị bên phải.
// Sau đó, tính số lượng nước mà nó có thể giữ lại bằng cách tính khoảng cách giữa hai con trỏ và lấy giá trị nhỏ nhất trong hai giá trị mỗi cột.
// Khi hai con trỏ gặp nhau, chúng ta kết thúc vòng lặp và trả về kết quả tổng số nước mà nó có thể giữ lại.
function trappingRainWater(height) {
  let n = height.length;
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        trappedWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        trappedWater += rightMax - height[right];
      }
      right--;
    }
  }

  return trappedWater;
}
