import { Block } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  [x: string]: any;

  constructor( public router: Router){

  }
  onHome(): void {
    this.router.navigate(['/home']);
  }

  onSkills(): void {
    const skillSelection = document.getElementById('skills-section')
    if(skillSelection){
      skillSelection.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }
// Method to scroll to the skills section
scrollToSkills() {
  this['skillsSection'].nativeElement.scrollIntoView({ behavior: 'smooth' });
}


  onAbout(): void {
    this.router.navigate(['/about']);
  }

  onContact(): void {
    this.router.navigate(['/contact']);
  }
}
