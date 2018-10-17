const sample = (id) => {
  const ele = document.querySelector(id)
  ele.innerHTML = new Date().toLocaleTimeString()
}

export default sample
