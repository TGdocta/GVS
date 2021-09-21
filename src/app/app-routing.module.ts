import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarthQueakeComponent } from './pages/earth-queake/earth-queake.component';

const routes: Routes = [
  { path:'', redirectTo:'earth-quekes', pathMatch:'full' },
  { path:'earth-quekes' , component: EarthQueakeComponent  },
  { path:'**' , redirectTo:"earth-quekes" , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
