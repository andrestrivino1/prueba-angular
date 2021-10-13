import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/';
import { AuthService } from 'app/auth/service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authServi: AuthService, private router: Router) { }

  async onLogout(){
    try {
     await this.authServi.logout();
     this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
    
  }
}
