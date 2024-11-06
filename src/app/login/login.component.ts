import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
      this.router.navigateByUrl('/work-force-dashboard');
    }
  }
  ngOnInit(){
 
}
}
