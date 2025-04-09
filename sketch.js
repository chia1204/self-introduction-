function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#F7CFD8");

  // 設定文字樣式
  textAlign(CENTER, CENTER); // 文字置中
  textSize(24); // 設定文字大小
  text("淡江大學 教育科技學系", width / 2, height / 2); // 在畫布中央顯示文字

  // 顯示學號與姓名
  textSize(18); // 調整文字大小
  text("學號:413730754 姓名: 邱佳儀", width / 2, height / 2 + 30); // 在畫布中央下方顯示文字
}
