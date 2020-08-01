import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorYourFamilyComponent } from './sponsor-your-family/sponsor-your-family.component';
import { SponsorDependentChildComponent } from './sponsor-dependent-child/sponsor-dependent-child.component';
import { SponsorParentsGrandparentsComponent } from './sponsor-parents-grandparents/sponsor-parents-grandparents.component';
import { SponsorRelativesComponent } from './sponsor-relatives/sponsor-relatives.component';
import { AdoptedChildComponent } from './adopted-child/adopted-child.component';
import { FamilyComponent} from './family.component';
import { FamilySponsershipComponent } from './family-sponsership/family-sponsership.component';

const routes: Routes = [
    { path: '', component: FamilyComponent, children:[
        {path: 'sponsor-your-spouse', component:SponsorYourFamilyComponent },
        {path: 'sponsor-dependent-child', component:SponsorDependentChildComponent },
        {path: 'sponsor-parents-grandparents', component:SponsorParentsGrandparentsComponent },
        {path: 'sponsor-relatives', component:SponsorRelativesComponent },
        {path: 'adopted-child', component:AdoptedChildComponent },
        {path: 'familySponsership', component:FamilySponsershipComponent },
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FamilyRoutingModule { }