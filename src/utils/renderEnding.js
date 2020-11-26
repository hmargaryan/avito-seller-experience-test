export default (value, ending) => {
  return value === 1 ? ending : `${ending}s`
}