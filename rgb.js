// RGB To Hex Conversion
/* The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
 */
// 나의 풀이
function rgb(r, g, b) {
  if (r > 255) {
    r = 255;
  }
  if (g > 255) {
    g = 255;
  }
  if (b > 255) {
    b = 255;
  }
  if (r < 0) {
    r = 0;
  }
  if (g < 0) {
    g = 0;
  }
  if (b < 0) {
    b = 0;
  }
  let r16 = r.toString(16);
  let g16 = g.toString(16);
  let b16 = b.toString(16);
  if (r16.length === 1) {
    r16 = "0" + r16;
  }
  if (g16.length === 1) {
    g16 = "0" + g16;
  }
  if (b16.length === 1) {
    b16 = "0" + b16;
  }
  return (r16 + g16 + b16).toUpperCase();
}

// 다른사람

function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
}

//

function rgb(r, g, b) {
  return [r, g, b]
    .map(function(x) {
      return ("0" + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    })
    .join("")
    .toUpperCase();
}
