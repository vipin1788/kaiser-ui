import { Component } from '@angular/core';
import { FooterComponent } from '../../commons/footer/footer.component';
import { HeaderComponent } from '../../commons/header/header.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  pageTitle: string = 'Contacts';
  backButton: boolean = true;
}
