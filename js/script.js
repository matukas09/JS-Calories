const addButton = document.getElementById('add');
const foodName = document.querySelector('#item-name');
const foodCalories = document.querySelector('#item-calories');
let total = 0;

addButton.addEventListener('click', (event)=> {
    let mealName = foodName.value; //get the food name from the input file
    let mealCalories = parseInt(foodCalories.value); // get the calories form the input field
    total = total + mealCalories; //calculates the total calorie intake

    console.log('Food:', typeof(mealName));
    console.log('Calories:', typeof(mealCalories));
    console.log('Total:', total);

    event.preventDefault();
});