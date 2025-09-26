import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../commons/header/header.component';
import { LoaderComponent } from '../../commons/loader/loader.component';

@Component({
  selector: 'app-care',
  standalone: true,
  imports: [HeaderComponent, LoaderComponent],
  templateUrl: './care.component.html',
  styleUrl: './care.component.css'
})
export class CareComponent implements OnInit {

   pageTitle: string = 'Care';
   backButton: boolean = true;
   data: any[] = [];
   regularData: string = '';
   isLoading: boolean = false;

   ngOnInit(): void {
    sessionStorage.setItem('hasNavigated', 'true');
    this.isLoading = true;
    this.data = JSON.parse(sessionStorage.getItem('careData') ?? '[]');
    this.isLoading = false;
    this.regularData = sessionStorage.getItem('regularData') ?? '';
    if(!this.regularData) {
      this.regularData = '<p>If you receive emergency care in a non-Plan hospital, please call us at\\n<a title=\\\"1-800-777-7904 (TTY 711)\\\" href=\\\"tel:1-800-777-7904\\\">1-800-777-7904 (TTY 711)</a>\\nas soon as your condition is stabilized so that a Kaiser Permanente doctor can provide further guidance. This policy is regulated by the Commissioner.<br>\\n<br>\\nThis card is for identification only. Use of this card is subject to the applicable agreement.\\n</p> <p> The Added Choice Plan In-Network Provider tier is underwritten by Kaiser Permanente Insurance Company, a subsidiary of Kaiser Foundation Health Plan, Inc.\\n</p>'
    }
    this.regularData = this.regularData.replace(/\\n/g, '<br>');
  }
}
