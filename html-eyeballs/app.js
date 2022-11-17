const leftAnchor = document.getElementsByClassName("left")[0];
const leftRekt = leftAnchor.getBoundingClientRect();
const leftAnchorX = leftRekt.left + leftRekt.width / 2;
const leftAnchorY = leftRekt.top + leftRekt.height / 2;

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const leftAngleDeg = angle(mouseX, mouseY, leftAnchorX, leftAnchorY);

  document
    .querySelectorAll(".box")
    .forEach((box) => box.classList.remove("pupil"));
  if (leftAngleDeg >= 20 && leftAngleDeg <= 90) {
    document.querySelectorAll(".box.a").forEach((eye) => {
      eye.classList.add("pupil");
    });
  } else if (leftAngleDeg > 90 && leftAngleDeg <= 180) {
    document.querySelectorAll(".box.b").forEach((eye) => {
      eye.classList.add("pupil");
    });
  } else if (-90 < leftAngleDeg && leftAngleDeg < 20) {
    document.querySelectorAll(".box.c").forEach((eye) => {
      eye.classList.add("pupil");
    });
  } else {
    document.querySelectorAll(".box.d").forEach((eye) => {
      eye.classList.add("pupil");
    });
  }
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
