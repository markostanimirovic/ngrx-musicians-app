import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const musiciansPageActions = createActionGroup({
  source: 'Musicians Page',
  events: {
    Opened: emptyProps(),
    'Query Changed': props<{ query: string }>(),
  },
});
