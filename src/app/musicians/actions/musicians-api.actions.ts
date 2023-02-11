import { createActionGroup, props } from '@ngrx/store';
import { Musician } from '../musician.model';

export const musiciansApiActions = createActionGroup({
  source: 'Musicians API',
  events: {
    'Musicians Loaded Success': props<{ musicians: Musician[] }>(),
    'Musicians Loaded Failure': props<{ message: string }>(),
  },
});
