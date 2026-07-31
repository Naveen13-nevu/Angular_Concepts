import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppDirectives } from './app-directives/app-directives';
import { Signals } from './signals/signals';
import { LinkedSignal } from './linked-signal/linked-signal';
import { AttributeDirectives } from './attribute-directives/attribute-directives';
import { NgForVsFor } from './ng-for-vs-for/ng-for-vs-for';
import { PageNotFound } from './page-not-found/page-not-found';
import { User } from './user/user';
import { AddUser } from './add-user/add-user';
import { UpdateUser } from './update-user/update-user';
import { ViewUser } from './view-user/view-user';
import { Crud } from './crud';
import { CRUD } from './crud/crud';


export const routes: Routes = [
    {path:'', component:User},
    {path:'user', component:User},
    {path:'signal', component:Signals},
    {path:'linked', component:LinkedSignal},
    {path:'attribute', component:AttributeDirectives},
    {path:'crud', component:CRUD},
    {path:'adduser', component:AddUser},
    {path:'updateuser/:id', component:UpdateUser},
    {path:'viewuser', component:ViewUser},
    {path:"**", component:PageNotFound}
];

