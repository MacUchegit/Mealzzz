const APP_ID = '7b7c759b';
const APP_key = 'ea2680d30357d0d835d0c017f6c8f66c';

const Api = {
  fetchRecipesByCategory: async (category) => {
    const base_url = `https://api.edamam.com/api/recipes/v2?type=public&q=${category}&app_id=${APP_ID}&app_key=${APP_key}&to=40`;
    const response = await fetch(base_url);
    const data = await response.json();
    return data.hits.map(hit => hit.recipe);
  }
};

export default Api;
