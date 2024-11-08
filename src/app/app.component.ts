import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormBuilder,Validators,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterOutlet,RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import {WorkForceDashboardComponent} from './work-force-dashboard/work-force-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title="Angular"
}
