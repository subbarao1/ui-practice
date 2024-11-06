import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-work-force-dashboard',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './work-force-dashboard.component.html',
  styleUrl: './work-force-dashboard.component.css'
})
export class WorkForceDashboardComponent {

}
