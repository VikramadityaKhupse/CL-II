angular.module('myApp', [])
  .controller('MainController', function($scope, $http, $interval) {
    $scope.title = 'I am Hungry! :(';
    $scope.showRecipes = false;
    $scope.recipes = [];


    $http.get('dishes.json').then(function(response) {
      $scope.allRecipes = response.data;
    });

    // Titles to rotate
    var titles = ["What's in my fridge!?", "Feeling hungry?", "What's cooking?", "Looking for recipes?"];

    // Function to update title every 3 seconds
    var updateTitle = function() {
      $scope.title = titles[Math.floor(Math.random() * titles.length)];
    };

    // Call the updateTitle function every 3 seconds
    $interval(updateTitle, 3000);

    $scope.searchRecipes = function() {
      $scope.recipes = [];
      var ingredients = $scope.ingredientInput.toLowerCase().split(',');
      
      // Remove extra spaces and handle extra comma
      ingredients = ingredients.filter(function(ingredient) {
        return ingredient.trim() !== '';
      });

      angular.forEach($scope.allRecipes, function(recipe) {
        var ingredientCertainty = 0;

        angular.forEach(ingredients, function(ingredient) {
          var matches = recipe.ingredients.filter(function(item) {
            return item.trim().indexOf(ingredient.trim()) !== -1;
          });

          if (matches.length > 0) {
            ingredientCertainty++;
          }
        });

        // Check if the dish contains at least 3 ingredients
        if (ingredientCertainty >= 3) {
          $scope.recipes.push(recipe);
        }
      });
      $scope.showRecipes = true;
    };
  });
