// function convert(){

//     var ConvertBase = function (num) {
//         return {
//             from : function (baseFrom) {
//                 return {
//                     to : function (baseTo) {
//                         return parseInt(num, baseFrom).toString(baseTo);
//                     }
//                 };
//             }
//         };
//     };
// }
//     var num = parseInt(document.getElementById("input").value)
//     // binary to decimal
//     ConvertBase.bin2dec = function (num) {
        
//         bin =  ConvertBase(num).from(2).to(10);
//         document.getElementById("result").innerHTML = "Result: " + bin;
//     };
    
//     // binary to hexadecimal
//     ConvertBase.bin2hex = function (num) {
//         return ConvertBase(num).from(2).to(16);
//     };
    
//     // decimal to binary
//     ConvertBase.dec2bin = function (num) {
//         return ConvertBase(num).from(10).to(2);
//     };
    
//     // decimal to hexadecimal
//     ConvertBase.dec2hex = function (num) {
//         return ConvertBase(num).from(10).to(16);
//     };
    
//     // hexadecimal to binary
//     ConvertBase.hex2bin = function (num) {
//         return ConvertBase(num).from(16).to(2);
//     };
    
//     // hexadecimal to decimal
//     ConvertBase.hex2dec = function (num) {
//         return ConvertBase(num).from(16).to(10);
//     };
    
//     this.ConvertBase = ConvertBase;
    
// })(this);
const convert = {
    bin2dec : s => parseInt(s, 2).toString(10),
    bin2hex : s => parseInt(s, 2).toString(16),
    bin2oct : s => parseInt(s, 2).toString(8),
    dec2bin : s => parseInt(s, 10).toString(2),
    dec2hex : s => parseInt(s, 10).toString(16),
    hex2bin : s => parseInt(s, 16).toString(2),
    hex2dec : s => parseInt(s, 16).toString(10),
    hex2oct : s => parseInt(s, 16).toString(8),
    oct2dec : s => parseInt(s, 8).toString(10),
    oct2bin : s => parseInt(s, 8).toString(2),
    oct2hex : s => parseInt(s, 8).toString(16),
  };


document.getElementById("result").innerHTML = "Result: " + 0;
document.getElementById("base").innerHTML = "Convert to base 10 (decimal)";
document.getElementById("num").innerHTML = "Number Entered: " + 0;
function toBin() {
  var num = parseInt(document.getElementById("input").value)
  var bin = num.toString(2);
  document.getElementById("num").innerHTML = "Number Entered: " + num;
  document.getElementById("base").innerHTML = "Convert to base 2 (binary)";
  document.getElementById("result").innerHTML = "Result: " + bin;
}
function toHex() {
  var num = parseInt(document.getElementById("input").value)
  var hex = num.toString(16);
  document.getElementById("num").innerHTML = "Number Entered: " + num;
  document.getElementById("base").innerHTML = "Convert to base 16 (hexadecimal)";
  document.getElementById("result").innerHTML = "Result: " + hex;
}
function toOct() {
  var num = parseInt(document.getElementById("input").value)
  var oct = num.toString(8);
  document.getElementById("num").innerHTML = "Number Entered: " + num;
  document.getElementById("base").innerHTML = "Convert to base 8 (octal)";
  document.getElementById("result").innerHTML = "Result: " + oct;
}
function BintoOct() {
    var num = parseInt(document.getElementById("input").value)
    var num1 =  (num >>> 0).toString(2)
    var oct = convert.bin2oct(num1); 
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 8 (octal)";
    document.getElementById("result").innerHTML = "Result: " + oct;
  }
  function Bintodec() {
    var num = parseInt(document.getElementById("input").value)
    
    var oct =convert.bin2dec(num); 
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 10 (decimal)";
    document.getElementById("result").innerHTML = "Result: " + oct;
  }
  function Bintohex() {
    var num = parseInt(document.getElementById("input").value)
    var num1 =  (num >>> 0).toString(2)
    var hexa = convert.bintohex(num)
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 16 (Hexadecimal)";
    document.getElementById("result").innerHTML = "Result: " + hexa;
  }
  function hextoDec() {
    var num = parseInt(document.getElementById("input").value)
    // var hexa = num.toString(16);
    // var num1 =  (num >>> 0).toString(2)
    var hex = convert.hex2dec(hexa);
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 16 (Hexadecimal)";
    document.getElementById("result").innerHTML = "Result: " + hex;
  }
  function hextoBin() {
    var num = parseInt(document.getElementById("input").value)
    var hexa = num.toString(16);
    // var num1 =  (num >>> 0).toString(2)
    var hex = convert.hex2bin(hexa);
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 16 (Hexadecimal)";
    document.getElementById("result").innerHTML = "Result: " + hex;
  }
  function hextoOct() {
    var num = parseInt(document.getElementById("input").value)
    var hexa = num.toString(16);
    // var num1 =  (num >>> 0).toString(2)
    var hex = convert.hex2oct(hexa);
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 8 (octal)";
    document.getElementById("result").innerHTML = "Result: " + hex;
  }
  function Octtodec() {
    var num = parseInt(document.getElementById("input").value)
    var hexa = num.toString(8);
    // var num1 =  (num >>> 0).toString(2)
    var hex = convert.oct2dec(hexa);
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 10 (decimal)";
    document.getElementById("result").innerHTML = "Result: " + hex;
  }
  function Octtohex() {
    var num = parseInt(document.getElementById("input").value)
    var oct = num.toString(8);
    // var num1 =  (num >>> 0).toString(2)
    var octa = convert.oct2hex(oct);
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 16 (Hexadecimal)";
    document.getElementById("result").innerHTML = "Result: " + octa;
  }
  function Octtobin() {
    var num = parseInt(document.getElementById("input").value)
    var hexa = num.toString(8);
    // var num1 =  (num >>> 0).toString(2)
    var hex = convert.oct2bin(hexa);
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 2 (binary)";
    document.getElementById("result").innerHTML = "Result: " + hex;
  }


