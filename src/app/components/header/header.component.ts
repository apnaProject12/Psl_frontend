import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideNavToggled =new EventEmitter<boolean>
  menustatus:boolean=false;
  sidenavtoggle(){
    this.menustatus=!this.menustatus;
    this.sideNavToggled.emit(this.menustatus);
  }

}
