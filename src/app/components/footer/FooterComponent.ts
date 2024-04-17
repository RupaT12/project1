import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // @ViewChild('skillsSection') skillsSection!: ElementRef;

    youtubeLink = 'https://www.youtube.com/watch?v=suInSt9h44Q&t=2568s';
    emailAddress = 'rupa123.t@gmail.com';
  
  constructor(public router: Router) {}

    onHome(): void{
        window.scrollTo ({ top:0, behavior: 'smooth' });
        this.router.navigate(['/home']);
      }
    onAbout(): void {
        this.router.navigate(['/about']);
      }
    
      onContact(): void {
        this.router.navigate(['/contact']);
 }
//  scrollToSkills(): void {
//   if (this.skillsSection) {
//     this.skillsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
//   }
// }
}
  


// function onHome() {
//     throw new Error('Function not implemented.');
// }
// }
