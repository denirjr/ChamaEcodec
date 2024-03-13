import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { MatButtonModule } from '@angular/material/button';


export interface CardValue {
  title: string;
  subtitle?: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatListModule, IconComponent, CommonModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true })
  public card: CardValue = { title: '', subtitle: '' };

  @Input()
  public isBtnAction: boolean = true

  @Output() edit = new EventEmitter<never>();
  @Output() delete = new EventEmitter<never>();

  public onEdit(): void {
    this.edit.emit();
  }

  public onDelete(): void {
    this.delete.emit();
  }
}
