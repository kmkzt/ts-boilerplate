const sample = query => {
  const ele = document.querySelector(query)
  ele.innerHTML = new Date().toLocaleTimeString()
}

export default sample
