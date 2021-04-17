var arr1 = [];
var arr2 = [];

const m1 = () => {
  var row1 = document.getElementById("r1").value;
  var col1 = document.getElementById("c1").value;
  var row2 = document.getElementById("r2").value;
  var col2 = document.getElementById("c2").value;

  for (let i = 1; i <= row1; i++) {
    for (let j = 1; j <= col1; j++) {
      var html = document.createElement("p");
      html.innerHTML =
        '<label for="rowcolval">Enter value for of Row ' +
        i +
        " column " +
        j +
        ' for matrix 1: </label><input type="number" id="row' +
        i +
        "col" +
        j +
        'v1"><br>';
      document.getElementById("pb").appendChild(html);
    }
  }
};

const m2 = () => {
  var row1 = document.getElementById("r1").value;
  var col1 = document.getElementById("c1").value;
  var row2 = document.getElementById("r2").value;
  var col2 = document.getElementById("c2").value;
  for (let i = 1; i <= row2; i++) {
    for (let j = 1; j <= col2; j++) {
      var html = document.createElement("p");
      html.innerHTML =
        '<label for="rowcolval">Enter value for of Row ' +
        i +
        " column " +
        j +
        ' for matrix 2: </label><input type="number" id="row' +
        i +
        "col" +
        j +
        'v2"><br>';
      document.getElementById("pa").appendChild(html);
    }
  }
  var okbutton = document.createElement("button");
  okbutton.innerHTML = "Enter Values";
  okbutton.setAttribute("onclick", "save1()");
  document.getElementById("fun").appendChild(okbutton);
};

function save1() {
  var row1 = document.getElementById("r1").value;
  var col1 = document.getElementById("c1").value;
  var row2 = document.getElementById("r2").value;
  var col2 = document.getElementById("c2").value;
  for (let k = 1; k <= row1; k++) {
    for (let l = 1; l <= col1; l++) {
      console.log(document.getElementById("row" + k + "col" + l + "v1").value);
      arr1.push(
        parseInt(document.getElementById("row" + k + "col" + l + "v1").value)
      );
    }
  }
  for (let k = 1; k <= row2; k++) {
    for (let l = 1; l <= col2; l++) {
      console.log(document.getElementById("row" + k + "col" + l + "v2").value);
      arr2.push(
        parseInt(document.getElementById("row" + k + "col" + l + "v2").value)
      );
    }
  }
  var tempmat1 = math.matrix(arr1);
  var tempmat2 = math.matrix(arr2);
  mat1 = math.reshape(tempmat1, [row1, col1]);
  mat2 = math.reshape(tempmat2, [row2, col2]);

  document.getElementById("run").innerHTML =
    "Your matrix first matrix is " +
    mat1 +
    " and second matrix is " +
    mat2 +
    "<br><br>";
  var options = document.createElement("p");
  options.innerHTML =
    '<button onclick="multiplyAB()">Multiply the first matrix with the second</button><br><button onclick="multiplyBA()">Multiply the second matrix with first</button><br><button onclick="additionAB()">Add both matrices</button><br><button onclick="suntractBA()">Subtract the first matrix from second</button><br><button onclick="subtractAB()">Subtract the second matrix from the first</button><br>';
  document.getElementById("run").appendChild(options);
}
function multiplyAB() {
  var row1 = document.getElementById("r1").value;
  var col1 = document.getElementById("c1").value;
  var row2 = document.getElementById("r2").value;
  var col2 = document.getElementById("c2").value;
  if (col1 != row2) {
    alert("error Column of first matrix should equal second row matrix");
  }

  var mulmat12 = document.createElement("p");
  mulmat12.innerHTML =
    "Multiplication of matrix 1 with matrix 2 is " +
    math.matrix(math.multiply(mat1._data, mat2._data));
  document.getElementById("run").appendChild(mulmat12);
}
function multiplyBA() {
  var row1 = document.getElementById("r1").value;
  var col1 = document.getElementById("c1").value;
  var row2 = document.getElementById("r2").value;
  var col2 = document.getElementById("c2").value;
  if (col2 != row1) {
    alert("error Column of first matrix should equal second row matrix");
  }

  var mulmat21 = document.createElement("p");
  mulmat21.innerHTML =
    "Multiplication of matrix 2 with matrix 1 is " +
    math.matrix(math.multiply(mat2._data, mat1._data));
  document.getElementById("run").appendChild(mulmat21);
}
function additionAB() {
  var row1 = document.getElementById("r1").value;
  var col1 = document.getElementById("c1").value;
  var row2 = document.getElementById("r2").value;
  var col2 = document.getElementById("c2").value;
  if (col1 != col2 && row1 != row2) {
    alert("Addtion erro due to column and row");
  }

  var addmat = document.createElement("p");
  addmat.innerHTML =
    "Sum of both matrices is " + math.matrix(math.add(mat1._data, mat2._data));
  document.getElementById("run").appendChild(addmat);
}
function subtractAB() {
  var row1 = document.getElementById("r1").value;
  var col1 = document.getElementById("c1").value;
  var row2 = document.getElementById("r2").value;
  var col2 = document.getElementById("c2").value;
  if (col1 != col2 && row1 != row2) {
    alert("error due to column and row");
  }
  var sub12 = document.createElement("p");
  sub12.innerHTML =
    "Subtraction of matrix 2 from matrix 1 is " +
    math.matrix(math.subtract(mat1._data, mat2._data));
  document.getElementById("run").appendChild(sub12);
}
function suntractBA() {
  var row1 = document.getElementById("r1").value;
  var col1 = document.getElementById("c1").value;
  var row2 = document.getElementById("r2").value;
  var col2 = document.getElementById("c2").value;
  if (col1 != col2 && row1 != row2) {
    alert("error due to column and row");
  }

  var sub21 = document.createElement("p");
  sub21.innerHTML =
    "Subtraction of matrix 1 from matrix 2 is " +
    math.matrix(math.subtract(mat2._data, mat1._data));
  document.getElementById("run").appendChild(sub21);
}
