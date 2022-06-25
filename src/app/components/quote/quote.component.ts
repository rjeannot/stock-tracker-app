import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quote } from '../../shared/models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: []
})
export class QuoteComponent {
  @Input() quote!: Quote;
  @Output() remove: EventEmitter<string> = new EventEmitter();

  constructor() { }

  removeStock(): void {
    this.remove.emit(this.quote.storedSymbol);
  }

}
