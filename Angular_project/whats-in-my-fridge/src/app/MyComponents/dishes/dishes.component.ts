import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from "../../Dishes";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[] = [];
  ingredientsInput: string = '';
  filteredDishes: Dish[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Dish[]>('/assets/dishes.json').subscribe(data => {
      this.dishes = data;
    });
  }

  filterDishes() {
    const ingredients = this.ingredientsInput.toLowerCase().split(',');
    this.filteredDishes = this.dishes.filter(dish =>
      ingredients.every(ingredient =>
        dish.ingredients?.some(dishIngredient =>
          dishIngredient.trim().toLowerCase().includes(ingredient.trim())
        )
      )
    );
  }
}
