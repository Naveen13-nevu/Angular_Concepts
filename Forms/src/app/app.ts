import { Component, signal } from '@angular/core';
import { TemplateForm } from './template-form/template-form';

@Component({
  selector: 'app-root',
  imports: [TemplateForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Forms');
}
