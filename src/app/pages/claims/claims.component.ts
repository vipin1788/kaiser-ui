import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../commons/footer/footer.component';
import { HeaderComponent } from '../../commons/header/header.component';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent implements OnInit {
  pageTitle: string = 'Claims';
  backButton: boolean = true;
  data: any;

  ngOnInit(): void {
    sessionStorage.setItem('hasNavigated', 'true');
    this.data = JSON.parse(sessionStorage.getItem('claimData') ?? '{}')
    if(Object.keys(this.data).length == 0) {
      this.data = {
                "claimsAdminInformation": {
                    "claimsEdiPayorIdLabel": "EDI Payor ID:",
                    "payorIdDetails": {
                        "line1": "P.O.Box 30767",
                        "city": "Salt Lake City",
                        "state": "UT",
                        "zipCode": "84130",
                        "ediPayorId": "03081"
                    }
                },
                "claimsOutOfKaiserInformation": [
                    {
                        "claimsOutOfKaiserTitle": "Cigna Medical Claims",
                        "claimsOutOfKaiserSubtitle": "For Cigna Healthcare Providers",
                        "payorIdDetails": {
                            "line1": "P.O.Box 188061",
                            "city": "Chattanooga",
                            "state": "TN",
                            "zipcode": "37422",
                            "ediPayorId": "62308"
                        }
                    }
                ],
                "claimsMemberServicesContact": [
                    {
                        "title": "Member Services",
                        "number": "1-800-432-5250"
                    }
                ]
            }
    }
  }
}
