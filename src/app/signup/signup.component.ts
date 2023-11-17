import { Component, ElementRef, ViewChild } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpModel!: {email: string, password: string};
  @ViewChild('emailInput', {static: false}) emailInput!: ElementRef;
  @ViewChild('passwordInput', {static: false}) passwordInput!: ElementRef;

  constructor(private backendService: BackendService) {}

  onSubmit() {
    let email = this.emailInput.nativeElement.value;
    let password = this.passwordInput.nativeElement.value;
    this.backendService.postRequest(email, password);
  }
}
