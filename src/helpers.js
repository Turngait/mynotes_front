export function formateDate(date) {
  var dateFormated = new Date(date);
  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  };
  return dateFormated.toLocaleString('ru', options);
}