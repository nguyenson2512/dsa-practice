let n = 5;           // Decimal
console.log(n.toString(2)); // "101" → nhị phân của 5 là 101

let a = 5; // 0101
let b = 3; // 0011



//-----------------------


// Phép toán	        Ký hiệu	          Mô tả
// AND	              &	                So sánh từng bit, cả hai đều 1 → 1
// OR	                |	                Một trong hai là 1 → 1
// XOR	              ^	                Hai bit khác nhau → 1
// NOT	              ~	                Đảo tất cả bit
// Shift left       	<<	              Dịch bit sang trái (nhân với 2^n)
// Shift right	      >>	              Dịch bit sang phải (chia nguyên 2^n)
// Unsigned right shift	>>>	            Dịch bit sang phải không giữ dấu âm
console.log(a & b);  // 1 (0001)
console.log(a | b);  // 7 (0111)
console.log(a ^ b);  // 6 (0110)
console.log(~a);     // -6 (đảo bit, theo kiểu 2's complement)

console.log(a << 1); // 10 (dịch trái: 1010)
console.log(a >> 1); // 2 (dịch phải: 0010)
console.log(a >>> 1);// 2 (unsigned shift)


//------------
// Mục đích	                                    Cách làm
// Kiểm tra bit thứ i có là 1 không	            (n >> i) & 1
// Bật bit thứ i lên (set to 1)	                 `n
// Tắt bit thứ i (set to 0)	                     n & ~(1 << i)
// Đảo bit thứ i	                                n ^ (1 << i)
// Đếm số lượng bit 1 trong n                   	while (n !== 0) { count += n & 1; n >>>= 1; }
// Xóa bit 1 thấp nhất	                          n = n & (n - 1)