const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#f39c12",
    "#2C2C2C",
    "#2c3e50",
    "#616A6B",
    "#bdc3c7",
    "#4A235A",
    "#2F4F4F",
    "#27ae60",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#706fd3",
    "#800020",
    "#33d9b2",
    "#c0392b",
    "#ffb142",
    "#2c2c54"
  ];
  
  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
  
  btn.onclick = changeBackgroundColor;