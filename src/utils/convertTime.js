export default (time) => {
  return new Date(time * 1000).toLocaleString()
}