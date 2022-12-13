function addElement() {
  const numOfHours = parseFloat(document.getElementById("numOfHours").value); //total de horas
  const numOfHoursMonday = parseFloat(document.getElementById("numOfHoursMonday").value); //horas por dia
  const numOfHoursTuesday = parseFloat(document.getElementById("numOfHoursTuesday").value); //horas por dia
  const numOfHoursWednesday = parseFloat(document.getElementById("numOfHoursWednesday").value); //horas por dia
  const numOfHoursThursday = parseFloat(document.getElementById("numOfHoursThursday").value); //horas por dia
  const numOfHoursFriday = parseFloat(document.getElementById("numOfHoursFriday").value); //horas por dia
  const numOfHoursSaturday = parseFloat(document.getElementById("numOfHoursSaturday").value); //horas por dia
  const numOfHoursSunday = parseFloat(document.getElementById("numOfHoursSunday").value); //horas por dia

  const promedioHours = (numOfHoursMonday + numOfHoursTuesday + numOfHoursWednesday +numOfHoursThursday+numOfHoursFriday+numOfHoursSaturday+ numOfHoursSunday)/7; //;
  console.log(promedioHours);


  const start = new Date(); //fecha inicio
  let end = new Date(); //fecha final
  end.setTime(end.getTime() + promedioHours * 60 * 60 * 1000); //fecha de fin
  let days = numOfHours / promedioHours; //total dias a trabajar

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
