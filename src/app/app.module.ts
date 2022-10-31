import { ButtonModule } from './components/button/button.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { MyrtexLibModule } from 'myrtex-lib';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,   
    BrowserAnimationsModule, 
    AppRoutingModule,
    ButtonModule,
    MyrtexLibModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
