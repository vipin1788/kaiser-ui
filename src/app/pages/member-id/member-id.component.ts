
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../commons/header/header.component';
import { FormsModule } from '@angular/forms';
import { MemberIdService } from '../../services/member-id.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-member-id',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FormsModule ],
  templateUrl: './member-id.component.html',
  styleUrl: './member-id.component.css'
})
export class MemberIdComponent implements OnInit {

  activeTab: string = 'idcards';

  memberCardData: any[] = [];

  pageTitle: string = 'Member Id';
  backButton: boolean = true;

  benefitData: any[] = [];
  contactData: any[] = [];
  claimData: any[] = [];
  careData: any[] = [];

   members: string[] = [
    'Jennifer M Contreras',
    'John D Smith',
    'Maria R Gomez'
  ];

  constructor(private memberService: MemberIdService) {}

   ngOnInit(): void {
    sessionStorage.setItem('hasNavigated', 'false');
    this.loadMembers();
  }

   setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  selectedMember: string = this.members[0];

  loadMembers(): void {
    const req = {
    appName: environment.appName,
    members: [
        {
            mrn: '61210042',
            mrnPrefix: '00'
        }
    ]
}
    this.memberService.getMemberIdCardApi(req).subscribe({
      next: (data) => {
        this.memberCardData = data.members[0].memberDetail;
        this.benefitData = data.members[0].benefitData;
        this.claimData = data.members[0].claimsData;
        this.contactData = data.members[0].contactsData;
        this.careData = data.members[0].contactsData;
        sessionStorage.setItem('memberCardData', JSON.stringify(this.memberCardData));
        sessionStorage.setItem('benefitData', JSON.stringify(this.benefitData));
        sessionStorage.setItem('claimData', JSON.stringify(this.claimData));
        sessionStorage.setItem('contactData', JSON.stringify(this.contactData));
        sessionStorage.setItem('careData', JSON.stringify(this.careData));
        sessionStorage.setItem('regularData', JSON.stringify(data.members[0].regulatoryData));
      },
      error: (err) => console.error('Error fetching members', err)
    });
  }

  onMemberChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log('Selected Member:', value);
    this.selectedMember = value;
  }
}
