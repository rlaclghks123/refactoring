import { readJSON } from '../../fileController.js';
import { PriceData, Products, ShippingMethod } from './리팩토링전1.js';

const products = readJSON('ch6/11-products.json');

const shippingMethod = {
  discountFee: 0.1,
  feePerCase: 0.03,
  discountThreshold: 0.12,
};

const applyShipping = (priceData: PriceData, shippingMethod: ShippingMethod) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
};

function calculatePricingData(product: Products, quantity: number) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
  return { basePrice, quantity, discount };
}

const priceOrder = (product: Products, quantity: number, shippingMethod: ShippingMethod) => {
  const priceData = calculatePricingData(product, quantity);
  return applyShipping(priceData, shippingMethod);
};

products.forEach((product: Products) => {
  console.log(priceOrder(product, 10, shippingMethod));
});
