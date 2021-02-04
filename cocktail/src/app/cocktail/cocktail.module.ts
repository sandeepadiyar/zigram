import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CocktailComponent } from './cocktail.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CocktailSandboxService } from './sandbox/cocktail-sandbox.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: CocktailComponent
  }
];

@NgModule({
  declarations: [
    CocktailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [CocktailSandboxService]
})
export class CocktailModule { }
