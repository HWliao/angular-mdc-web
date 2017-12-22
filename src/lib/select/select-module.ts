import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MdcSelect,
  MdcSelectBottomLine,
  MdcSelectItem,
  MdcSelectItems,
  MdcSelectLabel,
  MdcSelectMenu,
  MdcSelectSelectedText,
  MdcSelectSurface,
} from './select';

export const SELECT_COMPONENTS = [
  MdcSelect,
  MdcSelectBottomLine,
  MdcSelectItem,
  MdcSelectItems,
  MdcSelectLabel,
  MdcSelectMenu,
  MdcSelectSelectedText,
  MdcSelectSurface,
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [SELECT_COMPONENTS],
  declarations: [SELECT_COMPONENTS],
})
export class MdcSelectModule { }
