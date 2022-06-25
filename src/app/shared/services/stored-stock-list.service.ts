import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoredStockListService {
  STORED_KEY = 'stock-list';

  localStorageStockListSubject: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);
  localStorageStockList$: Observable<string[]> = this.localStorageStockListSubject.asObservable();

  constructor() {
    this.setStockList(this.getStockList());
  }

  setStockList(stockList: string[]): void {
    localStorage.setItem(this.STORED_KEY, JSON.stringify(stockList));
    this.localStorageStockListSubject.next([...stockList]);
  }

  getStockList(): string[] {
    const stockListFromLocalStorage = localStorage.getItem(this.STORED_KEY);
    return stockListFromLocalStorage ?
      JSON.parse(stockListFromLocalStorage) :
      [];
  }

  removeStock(stock: string): void {
    const newStockList = this.getStockList().filter((item) => item !== stock);
    this.setStockList(newStockList);
  }

  addStock(stock: string): void {
    const stockList = this.getStockList();
    if (!stockList.includes(stock)) {
      const newStockList = [...stockList, stock];
      this.setStockList(newStockList);
    }
  }
}
