import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SearchComponent } from '../../components/search/search.component';
import { BtnDataComponent } from '../../components/btn-data/btn-data.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, SearchComponent, BtnDataComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {}
