import { Component } from '@angular/core';

@Component({
  selector: 'app-tow-way-binding',
  templateUrl: './tow-way-binding.component.html',
  styleUrls: ['./tow-way-binding.component.scss'],
})
export class TowWayBindingComponent {
  title = 'some text';

  onInputChange(event: any) {
    this.title = event.target.value;
  }
}
