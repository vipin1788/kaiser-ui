import { Component } from '@angular/core';
import { FooterComponent } from '../../commons/footer/footer.component';
import { HeaderComponent } from '../../commons/header/header.component';

@Component({
  selector: 'app-care',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './care.component.html',
  styleUrl: './care.component.css'
})
export class CareComponent {

   pageTitle: string = 'Care';
   backButton: boolean = true;
}
