import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BtnIconComponent } from '../btn-icon/btn-icon.component';


type item = {
  title: string;
  subtitle: string;
};

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatListModule, BtnIconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public items: item[] = [
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
}
