import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const commonComponent: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: commonComponent,
  exports: commonComponent,
})
export class CommonComponentModule {}
