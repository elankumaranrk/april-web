import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprilContainerComponent } from './april-container/april-container.component';
import { AprilSettingsComponent } from './april-settings/april-settings.component';
import {AprilEmailComponent} from './april-email/april-email.component'

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: AprilContainerComponent
    },
    {
        path: 'settings', component: AprilSettingsComponent
    },
    {
        path:'email', component:AprilEmailComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AprilWebRoutingModule { }
