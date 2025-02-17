import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { SearchFoodPipe } from './pipes/search-food.pipe';
import { CheckImageUrlPipe } from './pipes/check-image-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    SearchFoodPipe,
    CheckImageUrlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
