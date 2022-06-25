import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StoredStockListService } from '../../shared/services/stored-stock-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [],
})
export class SearchComponent {
  searchForm = this.formBuilder.group({
    symbol: [
      '', 
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]{1,5}$/)
      ]
    ],
  });

  get symbol() { return this.searchForm.controls['symbol']; }

  constructor(
    private formBuilder: FormBuilder,
    private localStorageStockList: StoredStockListService
  ) {}

  onSubmit(): void {
    if (!this.searchForm.invalid) {
      this.localStorageStockList.addStock(this.searchForm.value.symbol as string);
      this.searchForm.reset();
    }
  }
}
