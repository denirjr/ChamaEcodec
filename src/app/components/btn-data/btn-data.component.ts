import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-data',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './btn-data.component.html',
  styleUrl: './btn-data.component.scss',
})
export class BtnDataComponent {
  @Input({ required: true })
  public text: string = '';

  @Input({ required: true })
  public logoImg: string = '';

  @Output() onClick = new EventEmitter<never>();

  public btnClick(): void {
    this.onClick.emit();
  }
}
