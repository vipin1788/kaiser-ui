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
                    "copaymentAmount": {
                        "IN": "$150/$3000",
                        "OUT": "60",
                        "PPO": "0"
                    },
                    "deductibleAmount": {
                        "IN": "60",
                        "OUT": "60",
                        "PPO": "60"
                    },
                    "planName": "TRADITIONAL HMO SCR"
                }
            ]
    }
  }

  isJsonObject(value: any): boolean {
    console.log(value)
  return value && typeof value === 'object' && Object.keys(value).length >0;
}

getKeyValueArray(obj: any) {
  return Object.keys(obj).map(key => ({ key, value: this.checkForDollar(obj[key]) }));
}

checkForDollar(value: string) {
  return value.toString().startsWith('$') ? value : ('$' + value)
}
}
