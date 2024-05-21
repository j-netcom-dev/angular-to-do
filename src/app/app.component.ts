import { Component } from '@angular/core';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  imports: [AddComponent, ListComponent],
})
export class AppComponent {
  title = 'angular-todos';
}

