import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComnComponent } from '../../components/comn/comn.component';
import { StudyComponent } from './study.component';

import { OnCampusWorkComponent } from './on-campus-work/on-campus-work.component';
import { CoopWorkPermitComponent } from './coop-work-permit/coop-work-permit.component';
import { StudentDirectStreamComponent } from './student-direct-stream/student-direct-stream.component';

const routes: Routes = [
    { path: '', component: StudyComponent, children:[
         { path: 'coming-soon', component: ComnComponent},
         { path: 'student-direct-stream', component: StudentDirectStreamComponent},
         { path: 'oncampus-work', component: OnCampusWorkComponent},
         { path: 'coop-work-permit', component: CoopWorkPermitComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudyRoutingModule { }
