import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY > 20){
      this.navbarfixed = true
    } else {
      this.navbarfixed = false;
    }
  }
}
