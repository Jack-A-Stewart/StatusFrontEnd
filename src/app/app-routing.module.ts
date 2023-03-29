import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseStatusBooleanComponent} from "./course-status-boolean/course-status-boolean.component";
import {FileCheckComponent} from "./file-check/file-check.component";
import {NavComponent} from "./nav/nav.component";


const routes: Routes = [
  {path: 'boolean', component: CourseStatusBooleanComponent},
  {path: 'file', component: FileCheckComponent},
  {path: 'nav', component: NavComponent},
  {path: '', redirectTo: 'boolean', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
