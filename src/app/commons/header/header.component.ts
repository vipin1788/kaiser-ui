import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';  

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @Input() headerTitle: string | undefined;
  @Input() showBackButton: boolean | undefined;
  hasNavigated: boolean = false;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.hasNavigated = sessionStorage.getItem('hasNavigated') == 'true';
  }

  goBack() {
    this.location.back(); 
  }
}
