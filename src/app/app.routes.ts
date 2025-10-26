import { Routes } from '@angular/router';
import { MemberIdComponent } from './pages/member-id/member-id.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { ClaimsComponent } from './pages/claims/claims.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CareComponent } from './pages/care/care.component';
import { MobMemberIdComponent } from './pages/mob-member-id/mob-member-id.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { FullviewcardComponent } from './pages/fullviewcard/fullviewcard.component';

export const routes: Routes = [
  {
    path: '',
    component: MobMemberIdComponent
  },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'care', component: CareComponent},
  { path: 'check-in', component: CheckinComponent},
  { path: 'view-full-card', component: FullviewcardComponent}
  
];
