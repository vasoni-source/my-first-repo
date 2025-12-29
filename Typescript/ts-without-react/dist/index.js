"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isChaiOrder(obj) {
    return typeof obj === "object" &&
        obj !== null && typeof obj.type === "string" && typeof obj.sugar === "number";
}
function serveOrder(order) {
    if (isChaiOrder(order)) {
        return `Serving a ${order.type} chai with ${order.sugar} spoons of sugar.`;
    }
    else {
        return `serving default chai.`;
    }
}
const obj = {
    type: "Masala",
    sugar: 2
};
console.log(serveOrder(obj));
function makeChai(order) {
    switch (order.type) {
        case "Masala":
            return `Making Masala Chai with spice level ${order.spiceLevel}.`;
        case "Ginger":
            return `Making Ginger Chai with ${order.gingerSlices} slices of ginger.`;
        case "Elaichi":
            return `Making Elaichi Chai with aroma level ${order.aromaLevel}.`;
        default:
            return `Making default chai.`;
    }
}
const order1 = {
    type: "Masala",
    spiceLevel: 5
};
console.log(makeChai(order1));
//# sourceMappingURL=index.js.map