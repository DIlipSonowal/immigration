import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComnComponent } from '../../components/comn/comn.component';
import { ProvincialComponent } from './provincial.component';
import { B1afswComponent } from './b1afsw/b1afsw.component';
import { B1bcecComponent } from './b1bcec/b1bcec.component';
import { B1cfstComponent } from './b1cfst/b1cfst.component';
import { B2pnpComponent } from './b2pnp/b2pnp.component';
import { CareGiverComponent } from './care-giver/care-giver.component';

const routes: Routes = [
    { path: '', component: ProvincialComponent, children:[
         { path: 'coming-soon', component: ComnComponent},
         { path: 'b1afsw', component: B1afswComponent},
         { path: 'b1bcec', component: B1bcecComponent},
         { path: 'b1cfst', component: B1cfstComponent},
         { path: 'b2pnp', component: B2pnpComponent},
         { path: 'care-giver', component: CareGiverComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProvincialRoutingModule { }