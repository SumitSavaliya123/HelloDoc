import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { passwordMatchValidator } from 'src/app/common/password-match';
import { ValidationMessageConstant } from 'src/app/constants/validation/validation-message';
import { ValidationPattern } from 'src/app/constants/validation/validation-pattern';
import { IResetPasswordInterface } from 'src/app/models/auth/reset-password';
import { ResetPasswordService } from 'src/app/services/auth/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  showPassword: boolean = false;
  passwordValidationMsg: string = ValidationMessageConstant.password;
  resetPasswordForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(ValidationPattern.password),
    ]),
    confirmPassword: new FormControl(
      '',
      [Validators.required],
      [passwordMatchValidator()]
    ),
  });

  constructor(
    private resetPasswordService: ResetPasswordService,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.titleService.setTitle('Reset Password');
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.resetPasswordForm.markAllAsTouched();
    if (this.resetPasswordForm.valid) {
      this.resetPasswordService.resetPassword(
        <IResetPasswordInterface>this.resetPasswordForm.value
      );
    }
  }
}
