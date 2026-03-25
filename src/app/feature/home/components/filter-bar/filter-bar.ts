import { Component, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';
import { SelectButton } from 'primeng/selectbutton';
import { ServiceCategoryType } from '../../../../shared/enums/service-category-type.enum';

@Component({
  selector: 'app-filter-bar',
  imports: [
    InputGroup,
    InputGroupAddon,
    InputText,
    Button,
    SelectButton
  ],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss',
})
export class FilterBar {
  protected categories = signal<SelectButtonData[]>(
    [
      {
        label: 'Stomotologiya',
        value: ServiceCategoryType.Dentist
      },
      {
        label: 'Sartoroshxona',
        value: ServiceCategoryType.BarberShop
      }
    ]
  );

}

export interface SelectButtonData {
  label: string;
  value: string | number;
}
