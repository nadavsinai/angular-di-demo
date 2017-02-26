import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarsComponent} from "./cars/cars.component";
import {BikesComponent} from "./bikes/bikes.component";

const routes: Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'bikes', component: BikesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
