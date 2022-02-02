import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { ProhibitedWordsComponent } from './pages/works/prohibited-words/prohibited-words.component';
import { TaskListComponent } from './pages/works/task-list/task-list.component';
import { UsersListComponent } from './pages/works/users-list/users-list.component';
import { ChildComponent } from './pages/works/users-list/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProhibitedWordsComponent,
    TaskListComponent,
    UsersListComponent,
    ChildComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
