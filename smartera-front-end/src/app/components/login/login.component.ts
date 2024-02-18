import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  authorizationLevel: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit(): void {}

  login() {
    console.log('Login metoduna giriş yapti');
    this.authService
      .login(this.email, this.password, this.authorizationLevel)
      .subscribe((response: any) => {
        if (true) {
          this.handleSuccessfulLogin();
          console.log('Giriş başarılı');
        } else {
          console.log('Giriş BAŞARIZ');
          // Giriş başarısız, hata işlemleri burada yapılabilir
        }
        return true;
      });
    console.log(
      `Login attempt with email: ${this.email}, password: ${this.password}, authorizationLevel : ${this.authorizationLevel}`
    );
  }

  handleSuccessfulLogin() {
    console.log(this.router)
    let result = this.router.navigate(['customers']);
    console.log(result);
  }
}
