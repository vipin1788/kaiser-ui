import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../commons/header/header.component';
import { LoaderComponent } from '../../commons/loader/loader.component';

@Component({
    selector: 'app-claims',
    standalone: true,
    imports: [HeaderComponent, LoaderComponent],
    templateUrl: './claims.component.html',
    styleUrl: './claims.component.css'
})
export class ClaimsComponent implements OnInit {
    pageTitle: string = 'Claims';
    backButton: boolean = true;
    data: any;
    isLoading: boolean = false

    ngOnInit(): void {
        sessionStorage.setItem('hasNavigated', 'true');
        this.isLoading = true;
        this.data = JSON.parse(sessionStorage.getItem('claimData') ?? '{}')
        this.isLoading = false;
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
