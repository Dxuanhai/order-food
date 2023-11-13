export function setSearchMeals(state, payload) {
  state.searchedMeals = payload || [];
}
export function setMealsByLetter(state, payload) {
  state.mealsByLetter = payload || [];
}
export function setMealsByIngredients(state, payload) {
  state.mealsByIngredient = payload || [];
}
