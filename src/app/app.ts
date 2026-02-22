import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NamesList } from "./components/names-list/names-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NamesList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('baby-names-picker');
}
