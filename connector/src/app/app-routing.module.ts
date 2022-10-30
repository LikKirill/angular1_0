import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path:'', title: 'Edit', component:AppComponent },
  { path:'music', title: 'Listen', component:AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
