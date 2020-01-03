function compareTriplets(a, b) {
  let aPoints = 0;
  let bPoints = 0;
  let pointsArray;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    } else if (b[i] > a[i]) {
      bPoints++;
    }
    pointsArray = [aPoints, bPoints];
  }
document.querySelectorAll('a-points').textContent = aPoints;
document.getElementsByClassName('b-points').textContent = bPoints;
  return pointsArray;
}

let a = [5, 6, 7];
let b = [3, 6, 10];
compareTriplets(a, b);
