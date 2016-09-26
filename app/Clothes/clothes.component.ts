import { Component } from '@angular/core';
import {SearchComponent} from './search.component';

@Component({
  moduleId: module.id,
  selector: 'clothes',
  templateUrl: 'clothes.component.html',
  styleUrls:['clothes.component.css']

})
export class ClothesComponent {
  title = 'Clothes';
}
