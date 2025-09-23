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
        if (Object.keys(this.data).length == 0) {
            this.data = {
                "claimsAdminInformation": [
                    {
                        "claimsPageAddressSectionTitle": "",
                        "claimsPageAddressSectionTitleAdaLabel": "",
                        "claimsPageAddressSectionSubTitle": "",
                        "claimsPageAddressSectionSubTitleAdaLabel": "",
                        "claimsPageAddressLineOne": "P.O.Box 30766",
                        "claimsPageAddressLineTwo": "Salt Lake City, UT 84130",
                        "claimsPageEdiPayorIdLabel": "",
                        "claimsPageEdiPayorIdAdaLabel": "",
                        "claimsPageEdiPayorIdValue": "91051"
                    },
                    {
                        "claimsPageAddressSectionTitle": "For Cigna Healthcare Providers:",
                        "claimsPageAddressSectionTitleAdaLabel": "For Cigna Healthcare Providers:",
                        "claimsPageAddressSectionSubTitle": "Cigna Medical Claims",
                        "claimsPageAddressSectionSubTitleAdaLabel": "Cigna Medical Claims",
                        "claimsPageAddressLineOne": "P.O.Box 188061",
                        "claimsPageAddressLineTwo": "Chattanooga, TN 37422",
                        "claimsPageEdiPayorIdLabel": "",
                        "claimsPageEdiPayorIdAdaLabel": "",
                        "claimsPageEdiPayorIdValue": "62308"
                    }
                ],
                "claimsSupportContact": [
                    {
                        "title": "",
                        "number": "1-800-432-5250"
                    }
                ]
            }
        }
    }

    getContactSupportTitle(value: string) {
        if (value) {
            return value;
        } else {
            return 'Member Services';
        }
    }
}
