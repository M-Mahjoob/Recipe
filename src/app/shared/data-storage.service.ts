// // import { Injectable } from '@angular/core';
// // import {HttpClient, HttpResponse} from '@angular/common/http';
// //
// // import 'rxjs/add/operator/map';
// //
// // import { RecipeService } from '../recipes/recipe.service';
// // import { Recipe } from '../recipes/recipe.model';
// //
// //
// //
// // @Injectable()
// // export class DataStorageService {
// //   constructor(private http: HttpClient, private recipeService: RecipeService) {
// //   }
// //
// //   storeRecipes() {
// //     return this.http.put('https://recipeproject-57021.firebaseio.com',
// //       this.recipeService.getRecipes());
// //   }
// //
// //   getRecipes() {
// //     this.http.get('https://recipeproject-57021.firebaseio.com').subscribe(
// //       (recipes: Recipe[]) => {
// //         this.recipeService.setRecipes(recipes);
// //         map(
// //           (response: HttpResponse) => {
// //             const recipes: Recipe[] = response.body();
// //             for (let recipe of recipes) {
// //               if (!recipe['ingredients']) {
// //                 recipe['ingredients'] = [];
// //               }
// //             }
// //             return recipes;
// //           )
// //           };
// //   }
//
//
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse  } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import { RecipeService } from '../recipes/recipe.service';
// import { Recipe } from '../recipes/recipe.model';
// import {AuthService} from '../auth/auth.service';
// import {tokenKey} from '@angular/core/src/view';
//
//
// @Injectable()
// export class DataStorageService {
//   constructor(private http: HttpClient,
//               private recipeService: RecipeService,
//               private authService: AuthService
//               ) {
//   }
//   storeRecipes() {
//     return this.http.put('https://recipeproject-57021.firebaseio.com/recipes.json',
//       this.recipeService.getRecipes());
//   }
//   getRecipes() {
//     const token = this.authService.getToken();
//
//     this.http.get('https://recipeproject-57021.firebaseio.com/recipes.json?auth=' + token)
//       .map(
//         (response: HttpResponse <any>) => {
//           const recipes: Recipe[] = response.body;
//           for (const recipe of recipes) {
//             if (!recipe['ingredients']) {
//               recipe['ingredients'] = [];
//             }
//           }
//           return recipes;
//         }
//       )
//       .subscribe(
//         (recipes: Recipe[]) => {
//           this.recipeService.setRecipes(recipes);
//         }
//       );
//   }
// }





import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Recipe } from '../recipes/recipe.model';

import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
// import {map} from 'rxjs/operator/map';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put('https://recipeproject-57021.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  getRecipes() {
    return this.http.get<Recipe[]>('https://recipeproject-57021.firebaseio.com/recipes.json?auth=' + this.authService.token)
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
  getRecipesMap() {
    return this.http.get ('https://recipeproject-57021.firebaseio.com/recipes.json?auth=' + this.authService.token)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      );
  }
  // getRecipes() {
  //   const token = this.authService.getToken();
  //
  //   this.http.get('https://recipeproject-57021.firebaseio.com/recipes.json?auth=' + token)
  //     .map(
  //       (response: HttpResponse <any>) => {
  //         const recipes: Recipe[] = response.body;
  //         for (const recipe of recipes) {
  //           if (!recipe['ingredients']) {
  //             recipe['ingredients'] = [];
  //           }
  //         }
  //         return recipes;
  //       }
  //     )
  //     .subscribe(
  //       (recipes: Recipe[]) => {
  //         this.recipeService.setRecipes(recipes);
  //       }
  //     );
  // }
}
