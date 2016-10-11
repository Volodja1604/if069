import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app/app.component';

import {SubjectComponent} from "./app/subjects/subject.component";
import { SubjectService }          from './app/shared/services/subject.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        SubjectComponent
    ],
    providers:[
        SubjectService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }