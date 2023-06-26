export const formatNumbers = (number: number) =>
  number.toString().replace(/\d+?(?=(?:\d{3})+$)/gim, '$& ');
