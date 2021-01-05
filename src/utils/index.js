export function numberFormat(number) {
  return new Intl.NumberFormat('ru-RU').format(number);
}

export function formateDate(date) {
  var dateFormated = new Date(date);
  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  };
  return dateFormated.toLocaleString('ru', options);
}