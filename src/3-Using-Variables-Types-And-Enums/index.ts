// string, number, boolean, array, undefined, null, any

let firstName: string | null; // Union Type
firstName = 'Dan';

let age: number; // Number
age = 45;

let hasPurchased = true; // Boolean

let productNames: string[] = []; // String Array
productNames.push('Basketball');

let petCount: number[] = []; // Number Array
petCount.push(5);

let anyParam: any[] = []; // Any Array
anyParam.push(5);
anyParam.push("Sunil");

console.log(firstName, age, hasPurchased, productNames, petCount, anyParam);

let productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Using Enums
enum ProductType { // const enum, if you only care about comparision not values since it uses index of enums
  Sports,  // Sports="sports",
  HomeGoods, // HomeGoods="homeGoods",
  Groceries // Groceries="groceries",
}
let pt = ProductType.Sports;
if (pt === ProductType.Sports) {
  console.log('Its Value inside :: ',ProductType.Sports);
  console.log('Found sports product type.');
}

// Type Interferance
let fName = "Sunil"; // Based on Value

let dfName: string;
dfName="Sunil" 

let productNamesArray = [] // Default is any[], not recommended.