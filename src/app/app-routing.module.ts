import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { ProhibitedWordsComponent } from './pages/works/prohibited-words/prohibited-words.component';
import { TaskListComponent } from './pages/works/task-list/task-list.component';
import { UsersListComponent } from './pages/works/users-list/users-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: 'prohibitedWords', component: ProhibitedWordsComponent },
    { path: 'taskList', component: TaskListComponent },
    { path: 'usersList', component: UsersListComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
