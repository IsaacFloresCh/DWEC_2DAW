function addElement() {
  const numOfHours = parseFloat(document.getElementById("numOfHours").value); //total de horas
  const numOfHoursDay = parseFloat(document.getElementById("numOfHoursDay").value); //horas por dia

  const start = new Date(); //fecha inicio
  let end = new Date(); //fecha final
  end.setTime(end.getTime() + numOfHours * 60 * 60 * 1000); //fecha de fin
  let days = numOfHours / numOfHoursDay; //total dias a trabajar

  localStorage.setItem("endDate", end);
  const endDate = localStorage.getItem("endDate");

  const date = document.getElementById("date");
  date.innerHTML = "Fecha Final: " + endDate + "</br> Total Dias Para Completar: " + days;

  for (let i = 0; i < Math.ceil(days); i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    let newDate = start;
    newDate.setDate(newDate.getDate());
    const newContent = document.createTextNode(newDate.getMonth() + 1 + "/" + newDate.getDate() + "/" + newDate.getFullYear());// se añande 1 al mes porque va del 0 al 12
    newDiv.appendChild(newContent);
    container.appendChild(newDiv);
    newDate.setDate(newDate.getDate() + 1);
  }

}

function clear() {

}