import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { Router } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// import: [MatCardModule,];

export class HomeComponent {
  @ViewChild('skillsSection')
  skillsSection!: ElementRef;
  constructor(private router: Router) { }

  
  // Method to scroll to the skills section
  scrollToSkills() {
    this.skillsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  openLink() {
    window.open('https://www.geeksforgeeks.org/introduction-to-angularjs/', '_blank');
  }
  openLink1() {
    window.open('https://www.netguru.com/glossary/node-js', '_blank');
  }
  openLink2() {
    window.open('https://www.mysql.com/', '_blank');
  }
}
