function UsCurrencyFormater(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export default UsCurrencyFormater;