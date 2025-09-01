import { Component } from '@angular/core';
import { FooterComponent } from '../../commons/footer/footer.component';
import { HeaderComponent } from '../../commons/header/header.component';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent {
  pageTitle: string = 'Claims';
  backButton: boolean = true;

}
