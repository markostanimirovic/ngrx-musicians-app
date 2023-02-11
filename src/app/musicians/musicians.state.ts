import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Musician } from './musician.model';
import { musiciansPageActions } from './actions/musicians-page.actions';
import { musiciansApiActions } from './actions/musicians-api.actions';

interface State {
  musicians: Musician[];
  isLoading: boolean;
  query: string;
}

const initialState: State = {
  musicians: [],
  isLoading: false,
  query: '',
};

const reducer = createReducer(
  initialState,
  on(musiciansPageActions.opened, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(musiciansPageActions.queryChanged, (state, { query }) => ({
    ...state,
    query,
  })),
  on(musiciansApiActions.musiciansLoadedSuccess, (state, { musicians }) => ({
    ...state,
    musicians,
    isLoading: false,
  })),
  on(musiciansApiActions.musiciansLoadedFailure, (state) => ({
    ...state,
    isLoading: false,
  }))
);

export const musiciansFeature = createFeature({
  name: 'musicians',
  reducer,
  extraSelectors: ({ selectMusicians, selectQuery }) => ({
    selectFilteredMusicians: createSelector(
      selectMusicians,
      selectQuery,
      (musicians, query) =>
        musicians.filter(({ name }) => name.toLowerCase().includes(query))
    ),
  }),
});
