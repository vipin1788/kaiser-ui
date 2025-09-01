import { Component } from '@angular/core';
import { FooterComponent } from '../../commons/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../commons/header/header.component';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  pageTitle: string = 'Benefits';
  backButton: boolean = true;
}
