// Write a program that contains 3 sides of a rectangle in variables (numbers).
// The program will print the surface area and volume of the solid in this form:
//
// Surface area: 600
// Volume: 1000

type sidesLength = number;

function cuboid(a: sidesLength, b: sidesLength, c: sidesLength) {
  const A = 2 * (a * b + a * c + c * b);

  const V = a * b * c;
  
  
  return `Volume: ${V}, Surface area: ${A}`
}

cuboid(4,5, 6);
