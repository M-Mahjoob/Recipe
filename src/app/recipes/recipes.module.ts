// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
//
// import { RecipesComponent } from './recipes.component';
// import { RecipeStartComponent } from './recipe-start/recipe-start.component';
// import { RecipeListComponent } from './recipe-list/recipe-list.component';
// import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
// import { RecipesRoutingModule } from './recipes-routing.module';
// import { SharedModule } from '../shared/shared.module';
// import {DropdownDirective} from '../shared/dropdown.directive';
//
//
// @NgModule({
//   declarations: [
//     RecipesComponent,
//     RecipeStartComponent,
//     RecipeListComponent,
//     RecipeEditComponent,
//     RecipeDetailComponent,
//     RecipeItemComponent,
//     DropdownDirective
//   ],
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     RecipesRoutingModule,
//     SharedModule
//   ]
// })
// export class RecipesModule {}
//
import { NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';
// import {DropdownDirective} from '../shared/dropdown.directive';


@NgModule( {
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    // DropdownDirective
  ],
  /*imports for show which other module can we use in this module : eg. ReactiveModule*
  CommonModule : you have to import it to every Module ,Common module give acces to
  Common directives such as : ng class ng for ng if  *
  Suggestion import file of CommonModule and ReactiveFormModule in top of lists if modules.
  in appModule we don't have CommonModule but instead we have BrowserModule
  What's the difference between CommonModule & BrowserModule??
  BrowserModule contains all the fetures of CommonModules AND SOME ADDITIONAL FETURES which
  are only needed at the point of time the application starts ,
  therefore we need it ONLY INN APPMODULE
  */
  imports: [
    ReactiveFormsModule ,
    CommonModule,
    RecipesRoutingModule,
    SharedModule

  ]
})
export class RecipesModules {
}

