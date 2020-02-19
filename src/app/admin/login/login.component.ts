import { Component, OnInit } from '@angular/core';
import { login_model } from '../../models/login-model';
import { curdService } from '../../services/crud-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login_info: login_model[];
  error = '';
  success = '';


  get_admin_info(): void {
    this.info_service.getAll().subscribe(
      (res: login_model[]) => {
        this.login_info = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  constructor(private info_service: curdService) { }

  ngOnInit(): void {
    this.get_admin_info();
  }

}
