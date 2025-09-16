import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../commons/footer/footer.component';
import { HeaderComponent } from '../../commons/header/header.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  pageTitle: string = 'Contacts'; 
  backButton: boolean = true;
  data: any[] = [];
  alertBox = {
    message: 'Call 911 or go to the nearest emergency room',
    buttonText: 'Call 911'
  };

  ngOnInit(): void {
    sessionStorage.setItem('hasNavigated', 'true');
    this.data = JSON.parse(sessionStorage.getItem('contactData') ?? '[]')
    if(this.data.length == 0) {
      this.data = [
                {
                    "title": "Member Services",
                    "numbers": [
                        {
                            "type": "voice",
                            "number": "1-800-432-5250"
                        },
                        {
                            "type": "tty",
                            "number": "711"
                        }
                    ]
                },
                {
                    "title": "If you are unsure of your condition and require immediate medical advice",
                    "numbers": [
                        {
                            "type": "voice",
                            "number": "1-800-677-1112"
                        },
                        {
                            "type": "tty",
                            "number": "711"
                        }
                    ]
                },
                {
                    "title": "Appointments, 24/7 Medical Advice, Urgent Care & Pharmacy (Washington D.C. Metro Area)",
                    "numbers": [
                        {
                            "type": "voice",
                            "number": "1-800-777-7904"
                        },
                        {
                            "type": "tty",
                            "number": "711"
                        }
                    ]
                },
                {
                    "title": "Appointments, 24/7 Medical Advice, Urgent Care & Pharmacy (Hawaii)",
                    "numbers": [
                        {
                            "type": "voice",
                            "number": "1-833-833-3333"
                        }
                    ]
                }
            ]
    }
  }
}
