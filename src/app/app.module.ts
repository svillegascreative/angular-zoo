import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AnimalService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
