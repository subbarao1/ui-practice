import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormBuilder,Validators,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterOutlet,RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import {WorkForceDashboardComponent} from './work-force-dashboard/work-force-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,NgFor,RouterOutlet,RouterModule,CommonModule,WorkForceDashboardComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workforceAI';
  userForm: FormGroup;

  isFormSubmitted:boolean=false;

  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private router: Router){
    this.userForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      address:this.formBuilder.group({
        street:['',Validators.required],
        city:['',Validators.required],
      }),
    })
  }
  submitForm(){
    if(this.userForm.valid){
      this.isFormSubmitted=true;
      console.log(this.userForm.value)
      this.router.navigateByUrl('/app-work-force-dashboard');
    }
  }
  ngOnInit(){
 
}
}
