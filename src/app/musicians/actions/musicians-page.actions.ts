import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const musiciansPageActions = createActionGroup({
  source: 'Musicians Page',
  events: {
    opened: emptyProps(),
    queryChanged: props<{ query: string }>(),
  },
});
