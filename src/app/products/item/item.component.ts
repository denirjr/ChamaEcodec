import { Component } from '@angular/core';
import { MainTitleComponent } from '../../components/main-title/main-title.component';
import { IconComponent } from '../../components/icon/icon.component';
import { CardComponent, CardValue } from '../../components/card/card.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MainTitleComponent, IconComponent, CardComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  public cardModel: CardValue =  {
    title: 'Ceres Chair',
  }

}
