import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {

  user = {
    name: '',
    email: '',
    password: '',
    gender: '',
    city: '',
    acceptTerms: false
  };

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.resetForm();
  }

}