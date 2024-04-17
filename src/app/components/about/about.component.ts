  import { Component } from '@angular/core';
  // import { NavbarComponent } from '../navbar/navbar.component';
  // import { FooterComponent } from '../footer/FooterComponent';
import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-about',
    // standalone: true,
    // imports: [NavbarComponent,CommonModule],
    // // exports: [AboutComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
  })
  export class AboutComponent {
    showEducation:boolean=true
    showProjects:boolean=true

    Projects = [
      {name:'Project1', description: 'description of project1'},
      {name:'Project2', description: 'description of project2'},
      {name:'Project3', description: 'description of project3'},
    ];


  }
