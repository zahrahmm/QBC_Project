export const persianDateFormatter = new Intl.DateTimeFormat("fa-IR", {
  calendar: "persian",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  // You can add more options if needed, e.g., 'weekday: 'long''
});

export const persianNumberFormatter = new Intl.NumberFormat("fa-IR", {});

export const persianCurrencyFormatter = new Intl.NumberFormat("fa-IR", {
  style: "currency",
  currency: "IRR",
});
