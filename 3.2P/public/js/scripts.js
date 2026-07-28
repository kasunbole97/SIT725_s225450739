const recipeSection = document.getElementById("recipe-section");
const loadingMessage = document.getElementById("loading-message");

const createRecipeCard = (recipe) => {
    return `
        <div class="col s12 m6 l4">
            <div class="card medium recipe-card">

                <div class="card-image waves-effect waves-block waves-light">
                    <img
                        class="activator"
                        src="${recipe.image}"
                        alt="${recipe.title}"
                    >
                </div>

                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        ${recipe.title}
                        <i class="material-icons right">more_vert</i>
                    </span>

                    <p class="recipe-meta">
                        <i class="material-icons tiny">public</i>
                        ${recipe.category}
                    </p>

                    <p class="recipe-meta">
                        <i class="material-icons tiny">schedule</i>
                        ${recipe.cookingTime}
                    </p>
                </div>

                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                        ${recipe.title}
                        <i class="material-icons right">close</i>
                    </span>

                    <p>${recipe.description}</p>

                    <p>
                        <strong>Category:</strong>
                        ${recipe.category}
                    </p>

                    <p>
                        <strong>Cooking time:</strong>
                        ${recipe.cookingTime}
                    </p>
                </div>

            </div>
        </div>
    `;
};

const displayRecipes = (recipes) => {
    recipeSection.innerHTML = recipes
        .map(createRecipeCard)
        .join("");
};

const displayError = () => {
    recipeSection.innerHTML = `
        <div class="col s12">
            <div class="error-message center-align">
                <i class="material-icons">error_outline</i>

                <p>
                    The recipes could not be loaded.
                    Please check that the server is running.
                </p>
            </div>
        </div>
    `;
};

const loadRecipes = async () => {
    try {
        const response = await fetch("/api/recipes");

        if (!response.ok) {
            throw new Error(
                `Request failed with status ${response.status}`
            );
        }

        const result = await response.json();

        displayRecipes(result.data);
    } catch (error) {
        console.error("Unable to load recipes:", error);
        displayError();
    } finally {
        loadingMessage.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    loadRecipes();
});