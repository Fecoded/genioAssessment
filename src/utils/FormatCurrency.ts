export const formatAmount = (amount: any) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(
    +amount
  );
