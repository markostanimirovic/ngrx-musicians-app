import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { musiciansPageActions } from './actions/musicians-page.actions';
import { musiciansApiActions } from './actions/musicians-api.actions';
import { MusiciansService } from './musicians.service';

export const loadAllMusicians = createEffect(
  (actions$ = inject(Actions), musiciansService = inject(MusiciansService)) => {
    return actions$.pipe(
      ofType(musiciansPageActions.opened),
      exhaustMap(() => {
        return musiciansService.getAll().pipe(
          map((musicians) =>
            musiciansApiActions.musiciansLoadedSuccess({ musicians })
          ),
          catchError(({ message }: { message: string }) =>
            of(musiciansApiActions.musiciansLoadedFailure({ message }))
          )
        );
      })
    );
  },
  { functional: true }
);
