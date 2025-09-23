import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../commons/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../commons/header/header.component';
import { CamelToSpacePipe } from '../../pipes/camel-to-space.pipe';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CamelToSpacePipe],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent implements OnInit {
  pageTitle: string = 'Benefits';
  backButton: boolean = true;
  data: any[]= [];

  ngOnInit(): void {
    sessionStorage.setItem('hasNavigated', 'true');
    this.data = JSON.parse(sessionStorage.getItem('benefitData') ?? '[]')
    if(this.data.length == 0) {
      this.data = [
    {
      "micrositeContent": "For more information, visit",
      "microSiteLink": "https://my.kp.org/maryland",
      "benefitsPagePlanNameTitle": "Health Plan Name",
      "benefitsPagePlanNameTitleAdaLabel": "Health Plan Name",
      "planName": "TRADITIONAL HMO SCR",
      "benefitInformation": [
        {
          "title": "Out-of-Pocket Max",
          "titleAdaLabel": "Out-of-Pocket Max",
          "tierOneLabel": null,
          "tierOneAdaLabel": null,
          "tierOneValue": "$1500/$3000"
        },
        {
          "title": "Deductible",
          "titleAdaLabel": "Deductible",
          "tierOneLabel": null,
          "tierOneAdaLabel": null,
          "tierOneValue": "0"
        }
      ]
    }
  ]
    }
  }
}
