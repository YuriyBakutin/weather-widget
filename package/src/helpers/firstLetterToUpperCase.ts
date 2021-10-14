export default (str: string) => {
  if (!str || str.length === 0) {
    return ''
  }

  let str_ = str[0].toUpperCase()
  str_ += str.slice(1)

  return str_
}
