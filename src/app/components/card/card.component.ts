import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() productName!: string;
  @Input() productDescription!: string;
  @Input() productValue!: string;
  @Input() productImg!: string;
}
