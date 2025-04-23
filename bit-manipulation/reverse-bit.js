var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    // Lấy bit cuối cùng của n (0 hoặc 1)
    let bit = n & 1;

    // Dời bit của result sang trái 1 vị trí để thêm bit mới vào cuối
    result = result << 1;

    // Thêm bit vừa lấy vào result
    result = result | bit;

    // Dịch phải n 1 bit để chuẩn bị cho vòng lặp tiếp theo
    n = n >>> 1; // dùng >>> để đảm bảo shift unsigned
  }

  return result >>> 0; // đảm bảo kết quả là unsigned 32-bit
};

const input = 0b00000010100101000001111010011100;
const result = reverseBits(input);
console.log(result); // Output: 


// Giả sử n = 5 (trong 8-bit cho dễ nhìn): 00000101

// Lặp qua từng bit:
// Bit 0: 1 → result = 0 << 1 | 1 = 1

// Bit 1: 0 → result = 1 << 1 | 0 = 2

// Bit 2: 1 → result = 2 << 1 | 1 = 5

// Bit 3: 0 → result = 5 << 1 | 0 = 10

// ...

// Kết quả cuối cùng sẽ là: 10100000 = 160