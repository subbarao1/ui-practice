import { Component } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatAutocompleteModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
