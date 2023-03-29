import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CourseStatusBooleanComponent } from './course-status-boolean/course-status-boolean.component';
import { FileCheckComponent } from './file-check/file-check.component';
import { HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CourseStatusBooleanComponent,
    FileCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
