export function getInfo() {
  const saved = localStorage.getItem('checkout');
  let initialValue = {};
  try {
    initialValue = JSON.parse(saved);
  } catch {
    initialValue = {};
  }
  if (initialValue === null) {
    initialValue = {};
  }

  console.log(initialValue.firstName);
  return initialValue;
}
