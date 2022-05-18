// import pushListItem from "./push.js";
import userCreateObj from "./create.js";

let form = document.getElementById("form");
let username = document.getElementById("name");
let surname = document.getElementById("surname");
let group = document.getElementById("group");
let gender = document.getElementById("gender");
let list = document.querySelector(".list")

let counter = 1;
let array;

if (localStorage.getItem("item")) {
  array = JSON.parse(localStorage.getItem("item"));

  for (const obj of array) {
    username.value = obj.username;
    surname.value = obj.surname;
    group.value = obj.group;
    gender.value = obj.gender;
    counter = obj.counter;

    pushListItem()

    username.value = "";
    surname.value = "";
    group.value = "";
    gender.value = "gender";
  }

} else {
  array = []
}

function pushListItem() {
  let Holder = document.createElement("tr");
  let numHolder = document.createElement("th");
  let nameHolder = document.createElement("td");
  let surnameHolder = document.createElement("td");
  let groupHolder = document.createElement("td");
  let genderHolder = document.createElement("td");

  nameHolder.textContent = username.value;
  surnameHolder.textContent = surname.value;
  groupHolder.textContent = group.value;
  genderHolder.textContent = gender.value;
  numHolder.textContent = counter;

  Holder.append(numHolder)
  Holder.append(nameHolder)
  Holder.append(surnameHolder)
  Holder.append(groupHolder)
  Holder.append(genderHolder)
  list.append(Holder)
}

form.addEventListener("submit", function (event) {
  event.preventDefault()

  pushListItem();

  let newUserObj = new userCreateObj(
    username.value,
    surname.value,
    group.value,
    gender.value,
    counter
  )

  array.push(newUserObj);

  localStorage.setItem("item", JSON.stringify(array))

  username.value = "";
  surname.value = "";
  group.value = "";
  gender.value = "gender";
  counter++;
})