import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingState } from '../../models/Loader';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './loader.html',
  styleUrls: ['./loader.css'],
})
export class Loader {
  @Input() set loadingState(ls: LoadingState | null) {
    this.loadingStatus = ls || {
      isLoading: false,
      loadingMessage: '',
    };
  }

  loadingStatus: LoadingState = {
    isLoading: false,
    loadingMessage: '',
  };
}
