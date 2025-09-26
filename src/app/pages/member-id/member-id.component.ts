
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../commons/header/header.component';
import { FormsModule } from '@angular/forms';
import { MemberIdService } from '../../services/member-id.service';
import { environment } from '../../../environments/environment';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-member-id',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FormsModule, LoaderComponent ],
  templateUrl: './member-id.component.html',
  styleUrl: './member-id.component.css'
})
export class MemberIdComponent implements OnInit {

  activeTab: string = 'idcards';

  memberCardData: any;
  isLoading: boolean = false;

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
    this.isLoading = true
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
        this.isLoading = false;
        this.memberCardData = data.members[0].membersData;
        this.benefitData = data.members[0].benefitsData;
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

    if(!this.memberCardData) {
      this.isLoading = false;
      this.memberCardData = {
                "loggedInUser": {
                    "mrn": "60128042",
                    "regionCode": "08",
                    "regionOfCare": "Southern California",
                    "srcReferenceId": "08csu118042",
                    "firstName": "Docsubanfn",
                    "middleInitial": "",
                    "lastName": "Docsubanln",
                    "dateOfBirth": "01-13-1985",
                    "userRole": "M",
                    "guid": "",
                    "familyIndicator": {
                        "role": "SUBSCRIBER",
                        "familyCount": "4"
                    }
                },
                "products": [
                    {
                        "productName": "TRADITIONAL HMO SCR",
                        "productOptionalName": "TRADITIONAL HMO SCR",
                        "groupSubgroupIds": "104301-2",
                        "rxBin": "51060",
                        "rxPcn": "2725",
                        "rxGroup": "74356",
                        "contractUid": "36402800",
                        "groupSubgroupFetch": ""
                    }
                ],
                "proxyDetails": {}
            }
    }
  }

  onMemberChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log('Selected Member:', value);
    this.selectedMember = value;
  }

  formatName(fName?: string, mName?: string, lName?: string) {
    return fName+" "+mName + (mName ? " ":"")+ lName
  }

  getCardImage(imageUrl?: string) {
    if(!imageUrl) {
      return '/assets/maryland-logo.png';
    } else {
      return imageUrl;
    }
  }
}
