const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 }
];

// 1. for
let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}
console.log(`Total Price = ${totalPrice}`);

// 2. forEach
totalPrice = 0;
cart.forEach(a => {
    totalPrice += a.price * a.quantity;
});
console.log(`Total Price = ${totalPrice}`);

// 3. reduce 
totalPrice = cart.reduce((sum, goods) => sum + goods.price * goods.quantity, 0);
console.log(`Total Price = ${totalPrice}`);

// 4. map 
const itemTotals = cart.map(goods => ({
    item: goods.item,
    total: goods.price * goods.quantity
}));

console.log("제품별 금액:", itemTotals);

function a() {
    return {name: 'ksd', aff: 'hansung'};
}
console.log(a())


const names = ['alice', 'bob', 'charlie'];

const uppercasedNames = names.map(name => name.toUpperCase());
console.log(`upper cased names : ${uppercasedNames}`);

const capitalStartNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(`upper cased names : ${capitalStartNames}`);
