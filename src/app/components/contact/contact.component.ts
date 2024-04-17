import { Component } from '@angular/core';
import { EmailService } from '../../email.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.component.html',
  // styleUrls: ['./contact.component.css'] ,
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
userForm:any;

  // formData = { name: '', email: '', message: '' };

  constructor( public formbuilder: FormBuilder) {}

  ngOnInit(){
    this.userForm = this.formbuilder.group({
      name: [null],
      email: [null],
      message: [null],

    })
  }


onSubmit(){
  console.log("Form Submitted", this.userForm.value);
}

  // sendEmail(): void {
  //   if (this.formData.name && this.formData.email && this.formData.message) {
  //     this.emailService.sendEmail(this.formData).subscribe(
  //       (response: any) => {
  //         console.log('Email sent successfully:', response);
  //         alert('Email sent successfully');
  //         // Optionally, reset the form
  //         this.formData = { name: '', email: '', message: '' };
  //       },
  //       (error: any) => {
  //         console.error('Error sending email:', error);
  //         alert('Error sending email. Please try again.');
  //       }
  //     );
  //   } else {
  //     alert('Please fill in all fields.');
  //   }
  // }
}
