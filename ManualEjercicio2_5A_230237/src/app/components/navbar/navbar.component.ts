import  {Component} from '@angular/core';
import  {MatToolbarModule} from '@angular/material/toolbar';
import  {MatButtonModule} from '@angular/material/button';
import  {MatIconModule} from '@angular/material/icon';
import  {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [MatButtonModule,MatIconModule,MatMenuModule,MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
