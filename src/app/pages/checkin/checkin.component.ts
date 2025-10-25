import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../commons/header/header.component';
import { LoaderComponent } from '../../commons/loader/loader.component';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [HeaderComponent, LoaderComponent, QRCodeModule],
  templateUrl: './checkin.component.html',
  styleUrl: './checkin.component.css'
})
export class CheckinComponent implements OnInit {

  pageTitle: string = 'Check in'
  backButton: boolean = true;
  data: any;
  isLoading: boolean = false;


  ngOnInit(): void {
    sessionStorage.setItem('hasNavigated', 'true');
    this.isLoading = true;
    this.data = sessionStorage.getItem('memberCheckinData');
    if (!this.data) {
      this.data = {
        "mrn": "8469051",
        "firstName": "Weddik",
        "middleInitial": "",
        "lastName": "Jessian",
        "dateOfBirth": "12-23-1991",
        "careRegion": "",
        "photoImage": null,
        "qrcodeMrn": "0008469051"
      }
    }
    this.isLoading = false;
  }

  formatName(fName?: string, mName?: string, lName?: string) {
      return fName+" "+mName + (mName ? " ":"")+ lName
  }

  getProfileImage(imageUrl?: string) {
      if(!imageUrl) {
        return '/assets/jenifer.jpg';
      } else {
        return imageUrl;
      }
  }

  formatDate(dateString: string): string {
  const parts = dateString.split('-');
  if (parts.length !== 3) {
    throw new Error('Invalid date format. Use MM-DD-YYYY');
  }

  const month = parseInt(parts[0], 10);
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (isNaN(month) || isNaN(day) || isNaN(year)) {
    throw new Error('Date contains invalid numbers');
  }

  return `${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year}`;
}
}
