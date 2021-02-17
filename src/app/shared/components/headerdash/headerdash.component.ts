import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderDashService } from './headerdash.service';

@Component({
  selector: 'app-headerdash',
  templateUrl: './headerdash.component.html',

})
export class HeaderDashComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService, private headerService: HeaderDashService) { }

    @Input() message = ""

    now = new Date();
    nome:string=""
    updateIcon = '../../../../assets/img/svg/update.svg'
    logoutIcon = '../../../../assets/img/svg/logout.svg'

    ngOnInit(): void {
      this.nome = localStorage.getItem('nome')!
      this.message = `Olá ${this.nome}, seja bem vind! ;)`
    }

    doLogout(){
      this.authService.doLogout();
      this.router.navigate(['login']);
    }

    reload(){
      this.headerService.reloadOnClick();
    }
}
