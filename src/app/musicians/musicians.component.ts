import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { createSelector, Store } from '@ngrx/store';
import { LetModule } from '@ngrx/component';
import { MusicianListComponent } from './components/musician-list.component';
import { SearchBoxComponent } from '../shared/search-box.component';
import { musiciansPageActions } from './actions/musicians-page.actions';
import { musiciansFeature } from './musicians.state';

const selectMusiciansPageViewModel = createSelector({
  filteredMusicians: musiciansFeature.selectFilteredMusicians,
  isLoading: musiciansFeature.selectIsLoading,
  query: musiciansFeature.selectQuery,
});

@Component({
  selector: 'app-musicians',
  standalone: true,
  imports: [CommonModule, LetModule, SearchBoxComponent, MusicianListComponent],
  template: `
    <ng-container *ngrxLet="vm$ as vm">
      <h1>Find Your Favorite Musicians</h1>
      <app-search-box
        [query]="vm.query"
        (search)="onSearch($event)"
      ></app-search-box>
      <app-musician-list
        [musicians]="vm.filteredMusicians"
        [isLoading]="vm.isLoading"
      ></app-musician-list>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusiciansComponent implements OnInit {
  private readonly store = inject(Store);
  readonly vm$ = this.store.select(selectMusiciansPageViewModel);

  ngOnInit() {
    this.store.dispatch(musiciansPageActions.opened());
  }

  onSearch(query: string): void {
    this.store.dispatch(musiciansPageActions.queryChanged({ query }));
  }
}
