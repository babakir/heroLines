export function simpleDebounce(func, wait) {
  let timeout = null
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  }
}
