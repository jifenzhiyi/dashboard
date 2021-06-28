function getCirlPoint(x0, y0, r, angle) {
  const x1 = x0 + r * Math.cos(angle * Math.PI / 180);
  const y1 = y0 + r * Math.sin(angle * Math.PI / 180);
  return { x: x1, y: y1 };
}

export default getCirlPoint;
