import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Names, babyName } from '../../services/names';

@Component({
  selector: 'app-names-list',
  imports: [ReactiveFormsModule],
  templateUrl: './names-list.html',
  styleUrl: './names-list.scss',
})
export class NamesList {
  names: babyName[] = [];
  loading=  false;
  error: string | null = null;

  newNameControl = new FormControl('');

  constructor(private namesService: Names) {
    this.loadNames();
  };

  // TODO REMPLIR LES FONCTIONS
  loadNames():void {
    console.log('loadNames ok')
  }

  addName():void {
    console.log('addnames ok')
  }

  toggleLike(name: babyName):void {
    console.log('toggleLike ok', name)
  }

  deleteName(id: number):void {
    console.log('deleteName ok', id)
  }
}
