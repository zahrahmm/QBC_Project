export const persianDateFormatter = new Intl.DateTimeFormat("fa-IR", {
  calendar: "persian", // Crucial for Jalali calendar
  year: "numeric",
  month: "numeric",
  day: "numeric",
  // You can add more options if needed, e.g., 'weekday: 'long''
});

export const persianNumberFormatter = new Intl.NumberFormat("fa-IR", {
  // For general numbers, 'fa-IR' locale usually defaults to 'arabext' (Persian) numerals.
  // If you explicitly need to ensure it, you can add:
  // numberingSystem: 'arabext',
});

export const persianCurrencyFormatter = new Intl.NumberFormat("fa-IR", {
  style: "currency",
  currency: "IRR", // Or 'AFN' for Afghan Afghani
  // numberingSystem: 'arabext', // Still useful for numeral type
});
