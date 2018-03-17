import { Component } from '@angular/core';

// import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import {HttpResponse} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

// import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService ,
              protected authService: AuthService) {
  }
  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpResponse <any>) => {
          console.log(response);
        }
      );
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
    this.dataStorageService.getRecipesMap();
  }
  onLogout() {
    this.authService.logout();
  }
}




