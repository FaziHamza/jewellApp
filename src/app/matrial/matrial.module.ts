import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatDialogModule,
    Material.MatButtonModule,
    Material.MatDialogModule

  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatDialogModule,
    Material.MatButtonModule,
    Material.MatDialogModule ,

  ],
  declarations: []
})
export class MatrialModule { }
