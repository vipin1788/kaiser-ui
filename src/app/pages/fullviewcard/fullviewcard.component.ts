import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../commons/header/header.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../../commons/loader/loader.component';
import { MemberIdService } from '../../services/member-id.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-fullviewcard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FormsModule, LoaderComponent ],
  templateUrl: './fullviewcard.component.html',
  styleUrl: './fullviewcard.component.css'
})
export class FullviewcardComponent {

  activeTab: string = 'idcards';
     mrn: string ='';
     region: string ='';
    
      memberCardData: any;
      isLoading: boolean = false;
    
      pageTitle: string = 'View Full Card';
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

      showShareIcon = true;
    
      constructor(private memberService: MemberIdService, private route: ActivatedRoute,
        private router: Router
      ) {}
    
       ngOnInit(): void {
        sessionStorage.setItem('hasNavigated', 'true');
        this.route.queryParamMap.subscribe(params => {
        this.mrn = params.get('mrn') || '';
        this.region = params.get('region') || '';
        console.log('MRN:', this.mrn);
        console.log('Region:', this.region);
         const widthInPixels = window.innerWidth;
const heightInPixels = window.innerHeight;

console.log("Width (px):", widthInPixels);
console.log("Height (px):", heightInPixels);
      });
        this.isLoading = true
        this.loadMembers();
        window.addEventListener('resize', () => {
  console.log("Width (px):", window.innerWidth);
  console.log("Height (px):", window.innerHeight);
});
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
                mrn: this.mrn
                //mrnPrefix: '00'
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
                    },
                    
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
  
      goToCheckIn() {
        this.router.navigate(['/check-in'])
      }
}
