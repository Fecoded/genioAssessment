import { formatAmount } from "./FormatCurrency";

let purchasePrice: number;
let productPrice: number;
let salesPrice: number;

export const ReducePurchase = (purchases: any) => {
  purchasePrice =
    purchases &&
    purchases.reduce(
      (accumulatedAmt: any, purchase: any) => accumulatedAmt + +purchase.amount,
      0
    );
  return formatAmount(purchasePrice);
};

export const ReduceProduct = (products: any) => {
  productPrice =
    products &&
    products.reduce(
      (accumulatedAmt: any, product: any) =>
        accumulatedAmt + +product.costPrice,
      0
    );
  return formatAmount(productPrice);
};

export const ReduceSales = (sales: any) => {
  salesPrice =
    sales &&
    sales.reduce(
      (accumulatedAmt: any, product: any) =>
        accumulatedAmt + +product.sellingPrice,
      0
    );
  return formatAmount(salesPrice);
};

export const CalculateProfit = (sales: any) => {
  const costPrice =
    sales &&
    sales.reduce(
      (accumulatedAmt: any, product: any) =>
        accumulatedAmt + +product.costPrice,
      0
    );
  return formatAmount(salesPrice - costPrice);
};

export const ProductAlert = (products: any) => {
  const alert = products.filter(
    (product: any) => +product.inStock <= +product.reorderLevel
  );

  return alert.length;
};

export const RemainingInventory = (products: any) =>
  products &&
  products.reduce(
    (accumulatedAmt: any, product: any) => accumulatedAmt + +product.inStock,
    0
  );

export const TotalInventory = (products: any) =>
  products &&
  products.reduce(
    (accumulatedAmt: any, product: any) => accumulatedAmt + +product.quantity,
    0
  );
