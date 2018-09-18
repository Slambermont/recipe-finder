const APP_KEY = '881905b94637ca383422d5f34594d279';
const APP_ID = 'fcc1a3cd';
const API = 'https://api.edamam.com/search?app_id=' + APP_ID + '&app_key=' + APP_KEY;

export const RecipeAPI = {
  search: (ingredient) => {

    return (
      fetch(API + '&q=' + ingredient)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong!');
        }
      })
      .then(data => data.hits)
      .catch(error => console.log(error))
    )
  }
}
