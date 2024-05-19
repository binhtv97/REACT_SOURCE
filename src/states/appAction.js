export const setLoading = (payload) => {
  return {
    type: 'SHOW_LOADING',
    payload
  }
}

export const setTheme = (payload) => {
  return {
    type: 'SET_THEME',
    payload
  }
}

/*
immutable (bat bien) -> ko được thay đổi trực tiếp biến ban đầu

// immutable
const square = 10; // initialize value

// tien
function calcSquare(num) {
  const newSquare = square;
  newSquare = newSquare x num
  return newSquare;
}
calcSquare(5); // 50

function binhSum(x) {
  return square + x
}
binhSum(10); // 100
*/