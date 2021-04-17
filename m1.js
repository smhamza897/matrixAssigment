var arr1 = [];

const m1 = () => {
  var numR = document.getElementById("r").value;
  var numC = document.getElementById("c").value;

  var html = "";

  for (let i = 1; i <= numR; i++) {
    for (let j = 1; j <= numC; j++) {
      html += `<span class="badge badge-dark">Enter value of Row ${i} Column ${j} <input type="number" min="1" max="10" id="r${i}c${j}" /><br/></span>`;
      document.getElementById("print").innerHTML = html;
    }
  }
  html += `<button type="button" class="btn btn-success" onclick="save()">Enter</button>`;
  document.getElementById("print").innerHTML = html;
};

const save = () => {
  var numR = document.getElementById("r").value;
  var numC = document.getElementById("c").value;
  for (let k = 1; k <= numR; k++) {
    for (let l = 1; l <= numC; l++) {
      console.log(document.getElementById(`r${k}c${l}`).value);
      arr1.push(parseInt(document.getElementById(`r${k}c${l}`).value));
    }
  }
  var tempmat = math.matrix(arr1);
  mat1 = math.reshape(tempmat, [numR, numC]);
  console.log(mat1);

  document.getElementById("function").innerHTML =
    "Your matrix is " + mat1 + "<br><br>";
  var options = document.createElement("p");
  options.innerHTML =
    '<button type="button" class="btn btn-info" onclick="deter()">Find Determinent</button><br><button type="button" class="btn btn-info" onclick="transpose()">Transpose</button><br><button type="button" class="btn btn-info" onclick="inverse()">Inverse</button><br><button type="button" class="btn btn-info" onclick="addscalor()">Scalor Adition</button><br><button type="button" class="btn btn-info" onclick="multiplyscalor()">Multiply a scalor</button><br>';
  document.getElementById("function").appendChild(options);
};
function deter() {
  var numR = document.getElementById("r").value;
  var numC = document.getElementById("c").value;
  if (numR != numC) {
    var err = document.createElement("p");
    err.innerHTML = "Column and row should be equal";
    document.getElementById("function").appendChild(err);
  } else {
    var determinat = document.createElement("p");
    var d = math.det(mat1._data);
    determinat.innerHTML = "Determinent of given Matrix is " + d;
    document.getElementById("function").appendChild(determinat);
  }
}
function transpose() {
  var numR = document.getElementById("r").value;
  var numC = document.getElementById("c").value;

  var transpose = document.createElement("p");
  var trans = math.transpose(mat1._data);
  transpose.innerHTML = "Transpose of given Matrix is " + math.matrix(trans);
  document.getElementById("function").appendChild(transpose);
}
function inverse() {
  var numR = document.getElementById("r").value;
  var numC = document.getElementById("c").value;

  if (numR != numC) {
    var err = document.createElement("p");
    err.innerHTML = "Error: columns and rows should be same";
    document.getElementById("function").appendChild(err);
  } else {
    var inverse = document.createElement("p");
    var inv = math.inv(mat1._data);
    inverse.innerHTML = "Inverse of given Matrix is " + math.matrix(inv);
    document.getElementById("function").appendChild(inverse);
  }
}
function addscalor() {
  var numR = document.getElementById("r").value;
  var numC = document.getElementById("c").value;

  var scallerAdd = document.createElement("p");
  scallerAdd.innerHTML =
    '<label for="scallerAdd">Enter scalor number to add to the matrix: </label><input type="number" name="" id="scallerAdd"><button onclick="sumscalor()">OK</button>';
  document.getElementById("function").appendChild(scallerAdd);
}
function sumscalor() {
  var numR = document.getElementById("r").value;
  var numC = document.getElementById("c").value;

  var sumsc = document.createElement("p");
  sumsc.innerHTML =
    "Sum is " +
    math.matrix(
      math.add(
        mat1._data,
        parseInt(document.getElementById("scallerAdd").value)
      )
    );
  document.getElementById("function").appendChild(sumsc);
}
function multiplyscalor() {
  var numR = document.getElementById("r").value;
  var numC = document.getElementById("c").value;

  var multiplyScalar = document.createElement("p");
  multiplyScalar.innerHTML =
    '<label for="multiplyScalar">Enter scalor number to Multiply to the matrix: </label><input type="number" name="" id="multiplyScalar"><button onclick="mulscalor()">OK</button>';
  document.getElementById("function").appendChild(multiplyScalar);
}
function mulscalor() {
  var numR = document.getElementById("r").value;
  var numC = document.getElementById("c").value;

  var multiplyScalar = document.createElement("p");
  multiplyScalar.innerHTML =
    "Product is " +
    math.matrix(
      math.multiply(
        mat1._data,
        parseInt(document.getElementById("multiplyScalar").value)
      )
    );
  document.getElementById("function").appendChild(multiplyScalar);
}
