import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavComponent } from './components/nav/nav.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { StudentsTableComponent } from './components/students/students-table/students-table.component';
import { StudentDetailPageComponent } from './pages/student-detail-page/student-detail-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// Own Components & Modules
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material-modules/material.module';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavComponent,
    StudentsPageComponent,
    CoursesPageComponent,
    CategoriesPageComponent,
    MenuItemComponent,
    LoginFormComponent,
    RegisterFormComponent,
    StudentsTableComponent,
    StudentDetailPageComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
