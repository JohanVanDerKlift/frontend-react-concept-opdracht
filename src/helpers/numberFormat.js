function numberFormat(number) {
  return new Intl.NumberFormat('nl-NL').format(number);
}

export default numberFormat;