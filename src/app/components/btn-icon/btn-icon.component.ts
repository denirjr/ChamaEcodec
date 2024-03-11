import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-btn-icon',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './btn-icon.component.html',
  styleUrl: './btn-icon.component.scss',
})
export class BtnIconComponent {

  @Input({required: true})
  public icon: string = '';

  @Output() onClick = new EventEmitter<never>();

  public btnClick(): void {
    this.onClick.emit();
  }
}
