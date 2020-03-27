import { Component, OnInit } from '@angular/core';
import { IDndCharacter } from 'src/app/interfaces/i-dnd-character';



@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})


export class DndComponent implements OnInit {
  characters: IDndCharacter[];
  constructor() {
    this.characters = [
      {
        avatar: '..\..\assets\dwarf-cleric.jpg',
        name: 'Drax',
        level: 1,
        experiencePoints: 0,
        class: 'Cleric',
        alignment: 'Neutral',
        background: 'just a bro doing brow stuff',
        strength: 2,
        dexterity: 13,
        constitution: 20,
        intelligence: 15,
        wisdom: 19,
        charisma: 14
      },
      {
        avatar: 'path',
        name: 'Brit',
        level: 1,
        experiencePoints: 0,
        class: 'Fighter',
        alignment: 'good',
        background: 'just a bro doing brow stuff',
        strength: 12,
        dexterity: 13,
        constitution: 10,
        intelligence: 18,
        wisdom: 19,
        charisma: 14
      },
      {
        avatar: 'path',
        name: 'Tom',
        level: 1,
        experiencePoints: 0,
        class: 'Rogue',
        alignment: 'Chaotic',
        background: 'just a bro doing brow stuff',
        strength: 20,
        dexterity: 13,
        constitution: 12,
        intelligence: 15,
        wisdom: 19,
        charisma: 14
      },
      {
        avatar: 'path',
        name: 'Dave',
        level: 1,
        experiencePoints: 0,
        class: 'Bard',
        alignment: 'neutral',
        background: 'just a bro doing brow stuff',
        strength: 14,
        dexterity: 3,
        constitution: 13,
        intelligence: 15,
        wisdom: 9,
        charisma: 14
      },
      {
        avatar: 'path',
        name: 'Scott',
        level: 1,
        experiencePoints: 0,
        class: 'Fighter',
        alignment: 'neutral',
        background: 'just a bro doing brow stuff',
        strength: 20,
        dexterity: 13,
        constitution: 10,
        intelligence: 13,
        wisdom: 11,
        charisma: 4
      },
      {
        avatar: 'path',
        name: 'Adam',
        level: 1,
        experiencePoints: 0,
        class: 'Rogue',
        alignment: 'neutral',
        background: 'just a bro doing brow stuff',
        strength: 15,
        dexterity: 13,
        constitution: 13,
        intelligence: 5,
        wisdom: 9,
        charisma: 14,
      },
    ];


  }

  ngOnInit(): void {
  }

}
