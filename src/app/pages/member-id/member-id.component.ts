
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../commons/footer/footer.component';
import { HeaderComponent } from '../../commons/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-id',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent, FormsModule ],
  templateUrl: './member-id.component.html',
  styleUrl: './member-id.component.css'
})
export class MemberIdComponent {
  activeTab: string = 'idcards';

  pageTitle: string = 'Member Id';
  backButton: boolean = false;

   members: string[] = [
    'Jennifer M Contreras',
    'John D Smith',
    'Maria R Gomez'
  ];

   setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  selectedMember: string = this.members[0];

  onMemberChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    console.log('Selected Member:', value);

    // You can perform any logic here:
    this.selectedMember = value;
    // e.g., emit value to parent, fetch data, etc.
  }
}
