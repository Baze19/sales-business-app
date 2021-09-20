import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesdatalistComponent } from 'src/app/components/salesdatalist/salesdatalist.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'

const routes: Routes = [

  { path: "list", component: SalesdatalistComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
