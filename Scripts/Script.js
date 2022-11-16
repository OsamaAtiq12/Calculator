var el1 = [];

var final;
function get1() {
  el1.push(1);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function get2() {
  el1.push(2);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function get3() {
  el1.push(3);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function get4() {
  el1.push(4);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function get5() {
  el1.push(5);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function get6() {
  el1.push(6);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function get7() {
  el1.push(7);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function get8() {
  el1.push(8);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function get9() {
  el1.push(9);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function get0() {
  el1.push(0);

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function getdot() {
  el1.push(".");
  if (el1[el1.length - 1] == "." && el1[el1.length - 2] == ".") {
    el1.pop();
  }

  if (el1[el1.length - 1] == "." && el1[el1.length - 2] == "*") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "." && el1[el1.length - 2] == "/") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "." && el1[el1.length - 2] == "+") {
    el1.pop();
  }

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function getadd() {
  let text = document.getElementById("4").innerText;

  el1.push(text);

  if (el1[el1.length - 1] == "+" && el1[el1.length - 2] == "+") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "+" && el1[el1.length - 2] == "-") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "+" && el1[el1.length - 2] == "*") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "+" && el1[el1.length - 2] == "/") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "+" && el1[el1.length - 2] == ".") {
    el1.pop();
  }

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function clearInput() {
  el1.pop();

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function Ac() {
  el1.length = 0;

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function equal() {
  let numbers = el1.toString();

  final = numbers.split(",").join("");

  try {
    const result = eval(final);
    el1.length = 0;
    el1.push(result);

    const f_val = result.toString();
    console.log(f_val);

    document.getElementById("input").value = f_val;
  } catch (err) {
    let msg = " Math Error";
    document.getElementById("input").value = msg;
  }
}

function getsub() {
  el1.push("-");
  if (el1[el1.length - 1] == "-" && el1[el1.length - 2] == "-") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "-" && el1[el1.length - 2] == "+") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "-" && el1[el1.length - 2] == "*") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "-" && el1[el1.length - 2] == "/") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "-" && el1[el1.length - 2] == ".") {
    el1.pop();
  }
  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function getmul() {
  el1.push("*");
  if (el1[el1.length - 1] == "*" && el1[el1.length - 2] == "*") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "*" && el1[el1.length - 2] == "-") {
    el1.pop();
  }

  if (el1[el1.length - 1] == "*" && el1[el1.length - 2] == "+") {
    el1.pop();
  }

  if (el1[el1.length - 1] == "*" && el1[el1.length - 2] == "/") {
    el1.pop();
  }
  if (el1[el1.length - 1] == "*" && el1[el1.length - 2] == ".") {
    el1.pop();
  }
  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}

function getdiv() {
  el1.push("/");

  if (el1[el1.length - 1] == "/" && el1[el1.length - 2] == "/") {
    el1.pop();
  }

  if (el1[el1.length - 1] == "/" && el1[el1.length - 2] == "+") {
    el1.pop();
  }

  if (el1[el1.length - 1] == "/" && el1[el1.length - 2] == "-") {
    el1.pop();
  }

  if (el1[el1.length - 1] == "/" && el1[el1.length - 2] == "*") {
    el1.pop();
  }

  if (el1[el1.length - 1] == "/" && el1[el1.length - 2] == ".") {
    el1.pop();
  }

  let numbers = el1.toString();

  final = numbers.split(",").join("");

  document.getElementById("input").value = final;
}
