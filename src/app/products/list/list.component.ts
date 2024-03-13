import { Component } from '@angular/core';
import { CardComponent, CardValue } from '../../components/card/card.component';
import { SearchComponent } from '../../components/search/search.component';
import { BtnDataComponent } from '../../components/btn-data/btn-data.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MainTitleComponent } from '../../components/main-title/main-title.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CardComponent,
    SearchComponent,
    BtnDataComponent,
    MainTitleComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  constructor(private route: Router) {}

  public cards: CardValue[] = [
    {
      title: 'Ceres Chair',
      subtitle:
        'he HON seating model XYZ123 is a great option for offices where',
    },
    {
      title: 'Another Chair',
      subtitle:
        'The HON seating model XYZ123 is a great option for offices where',
    },
    {
      title: 'Bla bla Bla',
      subtitle:
        'The HON seating model XYZ123 is a great option for offices where',
    },
    {
      title: 'ABC Desk',
      subtitle:
        'The HON seating model XYZ123 is a great option for offices where',
    },
    {
      title: 'Panel XYZ large',
      subtitle:
        'he HON seating model XYZ123 is a great option for offices where',
    },
  ];

  public deleteItem(idx: number): void {
    console.log(idx);
    // should call service to delete
  }

  public editItem(idx: number): void {
    this.route.navigate([`/item/${idx}`]);
  }
}
