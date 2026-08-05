const recipeSection =
    document.getElementById("recipe-section");

const loadingMessage =
    document.getElementById("loading-message");

const createRecipeCard = (recipe) => {
    const dietaryLabel = recipe.vegetarian
        ? "Vegetarian"
        : "Non-vegetarian";

    return `
        <div class="col s12 m6 l4">
            <div class="card medium recipe-card">

                <div class="card-image waves-effect waves-block waves-light">
                    <img
                        class="activator"
                        src="${recipe.imagePath}"
                        alt="${recipe.name}"
                    >
                </div>

                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        ${recipe.name}
                        <i class="material-icons right">
                            more_vert
                        </i>
                    </span>

                    <p class="recipe-meta">
                        <i class="material-icons tiny">
                            public
                        </i>
                        ${recipe.cuisine}
                    </p>

                    <p class="recipe-meta">
                        <i class="material-icons tiny">
                            schedule
                        </i>
                        ${recipe.preparationMinutes} minutes
                    </p>
                </div>

                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                        ${recipe.name}
                        <i class="material-icons right">
                            close
                        </i>
                    </span>

                    <p>${recipe.description}</p>

                    <p>
                        <strong>Cuisine:</strong>
                        ${recipe.cuisine}
                    </p>

                    <p>
                        <strong>Preparation time:</strong>
                        ${recipe.preparationMinutes} minutes
                    </p>

                    <p>
                        <strong>Difficulty:</strong>
                        ${recipe.difficulty}
                    </p>

                    <p>
                        <strong>Diet:</strong>
                        ${dietaryLabel}
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

const displayError = (message) => {
    recipeSection.innerHTML = `
        <div class="col s12">
            <div class="error-message center-align">
                <i class="material-icons">
                    error_outline
                </i>

                <p>${message}</p>
            </div>
        </div>
    `;
};

const loadRecipes = async () => {
    try {
        const response =
            await fetch("/api/recipes");

        if (!response.ok) {
            throw new Error(
                `Request failed with status ${response.status}`
            );
        }

        const result = await response.json();

        if (!Array.isArray(result.data)) {
            throw new Error(
                "The server returned an invalid data format."
            );
        }

        displayRecipes(result.data);
    } catch (error) {
        console.error(
            "Unable to load recipes:",
            error
        );

        displayError(
            "The recipes could not be loaded. Please confirm that MongoDB and the Express server are running."
        );
    } finally {
        loadingMessage.style.display = "none";
    }
};

document.addEventListener(
    "DOMContentLoaded",
    () => {
        loadRecipes();
    }
);