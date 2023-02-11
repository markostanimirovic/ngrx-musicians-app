import { bootstrapApplication } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { musiciansFeature } from './app/musicians/musicians.state';
import * as musiciansEffects from './app/musicians/musicians.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideState(musiciansFeature),
    provideEffects(musiciansEffects),
  ],
});
