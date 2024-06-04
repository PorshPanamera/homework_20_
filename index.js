class Recipe {
  constructor(name, ingredients, instructions, cookingTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.cookingTime = cookingTime;
  }

  isValid() {
    return (
      this.name &&
      this.ingredients.length > 0 &&
      this.instructions &&
      this.cookingTime
    );
  }
}

class RecipeBook {
  constructor() {
    this.recipes = [];
  }

  addRecipe(recipe) {
    if (recipe.isValid()) {
      this.recipes.push(recipe);
    }
  }

  findRecipesByTime(maxTime) {
    return this.recipes.filter((recipe) => recipe.cookingTime <= maxTime);
  }

  findRecipesByIngredients(searchIngredients) {
    return this.recipes.filter((recipe) =>
      searchIngredients.every((ingredient) =>
        recipe.ingredients.includes(ingredient)
      )
    );
  }
}
const recipe1 = new Recipe(
  "Салат с картошкой и морковью",
  ["картофель", "морковь", "огурец", "лук", "майонез"],
  "Отварите картофель и морковь, нарежьте, смешайте с другими ингредиентами.",
  30
);

const recipe2 = new Recipe(
  "Тушеная курица с картошкой",
  ["курица", "картофель", "морковь", "лук", "чеснок", "бульон"],
  "Обжарьте курицу, добавьте овощи и тушите.",
  60
);

const recipe3 = new Recipe(
  "Говядина, тушеная с овощами",
  [
    "говядина",
    "лук",
    "болгарский перец",
    "помидоры",
    "чеснок",
    "вино",
    "бульон",
  ],
  "Обжарьте говядину, добавьте овощи, тушите с вином и бульоном.",
  120
);

const recipe4 = new Recipe(
  "Салат из огурцов и помидоров",
  ["огурец", "помидор", "лук", "зелень", "оливковое масло"],
  "Нарежьте все ингредиенты, смешайте, заправьте маслом.",
  15
);

const recipe5 = new Recipe(
  "Запеканка с картошкой и морковью",
  ["картофель", "морковь", "лук", "сыр", "молоко", "яйца"],
  "Выложите овощи в форму, залейте яично-молочной смесью, запекайте.",
  60
);

const invalidRecipe = new Recipe("", [], "", 0);

const recipeBook = new RecipeBook();

const recipes = [recipe1, recipe2, recipe3, recipe4, recipe5, invalidRecipe];
recipes.forEach((recipe) => recipeBook.addRecipe(recipe));

const recipesByTime = recipeBook.findRecipesByTime(60);
console.log("Рецепты с временем приготовления до 60 минут:");
recipesByTime.forEach((recipe) => console.log("-", recipe.name));

const recipesByIngredients = recipeBook.findRecipesByIngredients([
  "картофель",
  "морковь",
]);
console.log("\nРецепты с картошкой и морковью:");
recipesByIngredients.forEach((recipe) => console.log("-", recipe.name));
