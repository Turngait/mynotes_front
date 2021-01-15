export function numberFormat(number) {
  return new Intl.NumberFormat('ru-RU').format(number);
}

export function formateDate(date, month = 'numeric') {
  var dateFormated = new Date(date);
  var options = {
    year: 'numeric',
    month: month,
    day: 'numeric'
  };
  return dateFormated.toLocaleString('ru', options);
}

export function formatMonth(date) {
  var dateFormated = new Date(date);
  var options = {
    year: 'numeric',
    month: 'long',
  };
  return dateFormated.toLocaleString('ru', options);
}