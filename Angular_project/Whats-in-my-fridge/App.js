angular.module('myApp', [])
  .controller('MainController', function($scope, $http) {
    $scope.title = "What's in my fridge?";
    $scope.showRecipes = false;
    $scope.recipes = [];

    $http.get('dish.json').then(function(response) {
      $scope.allRecipes = response.data;
    });

    $scope.searchRecipes = function() {
      $scope.recipes = [];
      var ingredients = $scope.ingredientInput.toLowerCase().split(',');
      angular.forEach($scope.allRecipes, function(recipe) {
        var hasAllIngredients = true;
        angular.forEach(ingredients, function(ingredient) {
          if (recipe.ingredients.indexOf(ingredient.trim()) === -1) {
            hasAllIngredients = false;
          }
        });
        if (hasAllIngredients) {
          $scope.recipes.push(recipe);
        }
      });
      $scope.showRecipes = true;
    };
  });
