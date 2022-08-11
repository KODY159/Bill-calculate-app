//: declaration input
const priceInput = document.getElementById('Price_input');
const Numpeople = document.getElementById('people');
const percentInput = document.getElementById('Percen_input');
const Total = document.getElementById('TotalPrice');

//: realtime change of person
let Num_of_people = Number(Numpeople.innerText);

//: calculate function
const calculate = () => {
  const price = Number(priceInput.value)
  
  const percent = Number(percentInput.value) / 100

  //:cost of percent
  const percentResult = price * percent

  //:sum price
  const total = price + percentResult

  //:Divide the money according to the number of people
  const TotalPerPerson = total / Num_of_people

  //:display total
  Total.innerText = `${TotalPerPerson.toFixed(2)}`
}
//:increase number function 
const IncreasePeople = () => {
  Num_of_people += 1

  Numpeople.innerText = Num_of_people

  //:Run it every time when peoepe change
  calculate();
}

//:decrease number function
const DecrasePeople = () => {

  if(Num_of_people <= 1) {
    return 
  }

  Num_of_people -= 1

  Numpeople.innerText = Num_of_people

  //:Run it every time when peoepe change
  calculate();
}
