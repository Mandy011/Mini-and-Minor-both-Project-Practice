const submitBtn = document.querySelector('.btn-submit');
const inputBtn = document.querySelector('.input-btn');
const Containt = document.querySelector('.containt');

// Define recipeContainer where the recipes will be appended
const recipeContainer = document.createElement('div');
recipeContainer.classList.add('recipe-container');
document.body.appendChild(recipeContainer);

// Async function to fetch recipe data
const recipeFatchdata = async (value) => {
    try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
        const response = await data.json();

        // Clear the container before appending new recipes
        recipeContainer.innerHTML = '';

        if (response.meals) {
            response.meals.forEach(meal => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');
                recipeDiv.innerHTML = `
                
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <h3>${meal.strMeal}</h3>
                    <p>${meal.strInstructions.slice(0, 100)}...</p>
                `;
                recipeContainer.appendChild(recipeDiv);
            });
        } else {
            recipeContainer.innerHTML = `<p>No recipes found for "${value}"</p>`;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        recipeContainer.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
};

// Event listener for the submit button
submitBtn.addEventListener('click', () => {
    const inputVal = inputBtn.value.trim(); // Use value to get the input content
    if (inputVal) {
        recipeFatchdata(inputVal); // Call the function with the input value
    } else {
        console.log('Please enter a search term'); // Error handling for empty input
    }
});
