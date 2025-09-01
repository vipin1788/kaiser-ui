import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';  

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() headerTitle: string | undefined;
  @Input() showBackButton: boolean | undefined;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();  // 👈 goes to previous page
  }
}
