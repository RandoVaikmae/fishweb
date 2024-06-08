import { Component, Input, input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCommonModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatCommonModule, CommonModule, MatIconModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() isLoading = true;
  @Input() save = false;
  clicked: boolean | undefined;

  public onClick() {
    this.clicked = false;
    this.save = true;
  }


}
