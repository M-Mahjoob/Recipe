// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
//
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// import { DropdownDirective } from './shared/dropdown.directive';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { AppRoutingModule } from './app-routing.module';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipeService } from './recipes/recipe.service';
// import { DataStorageService } from './shared/data-storage.service';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     RecipesComponent,
//     RecipeListComponent,
//     RecipeDetailComponent,
//     RecipeItemComponent,
//     ShoppingListComponent,
//     ShoppingEditComponent,
//     DropdownDirective,
//     RecipeStartComponent,
//     RecipeEditComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//     HttpModule,
//     AppRoutingModule
//   ],
//   providers: [ShoppingListService, RecipeService, DataStorageService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import {HttpClientModule} from '@angular/common/http';
//
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
//
//
// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { AppRoutingModule } from './app-routing.module';
//
// import { RecipeService } from './recipes/recipe.service';
// import { DataStorageService } from './shared/data-storage.service';
//
//
// import {AuthService} from './auth/auth.service';
// import {AuthGuard} from './auth/auth-guard.service';
// import {RecipesModule} from './recipes/recipes.modules';
// import {SharedModule} from './shared/shared.module';
// // import {ShoppingListModule} from './shopping-list/shopping-list.module';
// // import {AuthModule} from './auth/auth.modules';
// import {ShoppingListComponent} from './shopping-list/shopping-list.component';
// import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
//
//
//
//
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     ShoppingListComponent,
//     ShoppingEditComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//     AppRoutingModule,
//     HttpClientModule,
//     RecipesModule,
//     SharedModule,
//     // AuthModule
//     ],
//   providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }