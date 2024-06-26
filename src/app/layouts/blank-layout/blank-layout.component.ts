import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from 'src/app/components/nav-blank/nav-blank.component';
import { FooterComponent } from './../../components/footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule , RouterOutlet , NavBlankComponent , FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {

  ///button using for go back to top
  goUp():void{
    window.scrollTo(0,0);
  }


}
