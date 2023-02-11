import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Musician } from '../musician.model';

@Component({
  selector: 'app-musician-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p *ngIf="isLoading">Loading...</p>
    <p *ngIf="!isLoading && musicians.length === 0">No Musicians Found.</p>

    <section class="card-container">
      <article class="card" *ngFor="let musician of musicians">
        <img [src]="musician.photoUrl" [alt]="musician.name + ' Photo'" />
        <h3>{{ musician.name }}</h3>
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicianListComponent {
  @Input() musicians: Musician[] = [];
  @Input() isLoading = false;
}
