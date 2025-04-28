import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CompoComponent } from './compo/compo.component';
import { CatalogComponent } from './compo/catalog/catalog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './compo/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoComponent,
    CatalogComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
