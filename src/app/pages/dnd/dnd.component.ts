import { Component, OnInit } from '@angular/core';
import { IDndCharacter } from 'src/app/interfaces/i-dnd-character';
import { characters } from '../../../assets/dnd-characters.json';


@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})


export class DndComponent implements OnInit {
  characters: IDndCharacter[];
  constructor() {
    console.log(characters);
    this.characters = characters;
  }

  ngOnInit(): void {
  }

}
