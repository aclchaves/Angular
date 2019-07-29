import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})

export class StockStatusComponent implements OnChanges {
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';

  stockValueChanged(updatedstockvalue: number) {
    this.stockValueChange.emit(
      { 'id': this.productId, 'updatedstockvalue': updatedstockvalue });
  }

  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }

}
