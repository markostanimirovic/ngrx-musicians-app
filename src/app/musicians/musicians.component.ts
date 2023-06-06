import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { MusicianListComponent } from './components/musician-list.component';
import { SearchBoxComponent } from '../shared/search-box.component';
import { musiciansPageActions } from './actions/musicians-page.actions';
import { musiciansFeature } from './musicians.state';

@Component({
  selector: 'app-musicians',
  standalone: true,
  imports: [SearchBoxComponent, MusicianListComponent],
  template: `
    <h1>Find Your Favorite Musicians</h1>

    <app-search-box [query]="query()" (search)="onSearch($event)" />
    <app-musician-list [musicians]="musicians()" [isLoading]="isLoading()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusiciansComponent implements OnInit {
  private readonly store = inject(Store);

  readonly musicians = this.store.selectSignal(
    musiciansFeature.selectFilteredMusicians
  );
  readonly isLoading = this.store.selectSignal(
    musiciansFeature.selectIsLoading
  );
  readonly query = this.store.selectSignal(musiciansFeature.selectQuery);

  ngOnInit() {
    this.store.dispatch(musiciansPageActions.opened());
  }

  onSearch(query: string): void {
    this.store.dispatch(musiciansPageActions.queryChanged({ query }));
  }
}
