export default function(x) {
  if (x < 70) {
    return 'right'
  }

  if (x > 170) {
    return 'left'
  }

  return 'still'
}
