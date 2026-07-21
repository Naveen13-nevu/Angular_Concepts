import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppDirectives } from './app-directives/app-directives';
import { Signals } from './signals/signals';
import { LinkedSignal } from './linked-signal/linked-signal';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { NgForVsFor } from './ng-for-vs-for/ng-for-vs-for';
import { PageNotFound } from './page-not-found/page-not-found';
import { User } from './user/user';


export const routes: Routes = [
    {path:'', component:User},
    {path:'user', component:User},
    {path:'signal', component:Signals},
    {path:'linked', component:LinkedSignal},
    {path:'attribute', component:AttributeDirectives},
    {path:"**", component:PageNotFound}
];

