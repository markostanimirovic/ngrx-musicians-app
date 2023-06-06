import { createActionGroup, props } from '@ngrx/store';
import { Musician } from '../musician.model';

export const musiciansApiActions = createActionGroup({
  source: 'Musicians API',
  events: {
    musiciansLoadedSuccess: props<{ musicians: Musician[] }>(),
    musiciansLoadedFailure: props<{ message: string }>(),
  },
});
