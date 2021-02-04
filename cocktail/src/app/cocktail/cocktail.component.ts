import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CocktailSandboxService } from './sandbox/cocktail-sandbox.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [];


@Component({
  selector: 'cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  displayedColumns: string[] = ['strDrink', 'strCategory', 'strIngredient1'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(public sandbox: CocktailSandboxService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.sandbox.getList().subscribe((val: any) => {
      this.dataSource = new MatTableDataSource(val.drinks);
      this.dataSource.sort = this.sort;
    });
  }

  public search(value) {
    if (value) {
      this.sandbox.search(value).subscribe(([data1, data2, data3]) => {
        const res1 = data1 ? data1['drinks'] ?? [] : [];
        const res2 = data2 ? data2['drinks'] ?? [] : [];
        const res3 = data3 ? data3['drinks'] ?? [] : [];
        const result = [...res1, ...res2, ...res3]
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
      });
    } else {
      this.getData();
    }

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
