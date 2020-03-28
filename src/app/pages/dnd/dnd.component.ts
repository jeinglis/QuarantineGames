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
    //   {
    //     avatar: '../../../assets/dwarf-cleric.jpg',
    //     name: 'Drax',
    //     race: 'Dwarf',
    //     level: 1,
    //     experiencePoints: 0,
    //     class: 'Cleric',
    //     alignment: 'Neutral',
    //     background: 'just a bro doing brow stuff',
    //     strength: 2,
    //     dexterity: 13,
    //     constitution: 20,
    //     intelligence: 15,
    //     wisdom: 19,
    //     charisma: 14
    //   },
    //   {
    //     avatar: '../../../assets/Fighter.jpg',
    //     name: 'Brit',
    //     race: 'Human',
    //     level: 1,
    //     experiencePoints: 0,
    //     class: 'Fighter',
    //     alignment: 'good',
    //     background: 'just a bro doing brow stuff',
    //     strength: 12,
    //     dexterity: 13,
    //     constitution: 10,
    //     intelligence: 18,
    //     wisdom: 19,
    //     charisma: 14
    //   },
    //   {
    //     avatar: '../../../assets/rogue.jpg',
    //     name: 'Tom',
    //     race: 'Elf',
    //     level: 1,
    //     experiencePoints: 0,
    //     class: 'Rogue',
    //     alignment: 'Chaotic',
    //     background: 'just a bro doing brow stuff',
    //     strength: 20,
    //     dexterity: 13,
    //     constitution: 12,
    //     intelligence: 15,
    //     wisdom: 19,
    //     charisma: 14
    //   },
    //   {
    //     avatar: '../../../assets/bard.jpg',
    //     name: 'Dave',
    //     race: 'Elf',
    //     level: 1,
    //     experiencePoints: 0,
    //     class: 'Bard',
    //     alignment: 'neutral',
    //     background: 'just a bro doing brow stuff',
    //     strength: 14,
    //     dexterity: 3,
    //     constitution: 13,
    //     intelligence: 15,
    //     wisdom: 9,
    //     charisma: 14
    //   },
    //   {
    //     avatar: '../../../assets/fighter-bow.jpg',
    //     name: 'Scott',
    //     race: 'Human',
    //     level: 1,
    //     experiencePoints: 0,
    //     class: 'Fighter',
    //     alignment: 'neutral',
    //     background: 'just a bro doing brow stuff',
    //     strength: 20,
    //     dexterity: 13,
    //     constitution: 10,
    //     intelligence: 13,
    //     wisdom: 11,
    //     charisma: 4
    //   },
    //   {
    //     avatar: '../../../assets/rogue2.jpg',
    //     name: 'Adam',
    //     race: 'Dragon Born',
    //     level: 1,
    //     experiencePoints: 0,
    //     class: 'Rogue',
    //     alignment: 'neutral',
    //     background: 'just a bro doing brow stuff',
    //     strength: 15,
    //     dexterity: 13,
    //     constitution: 13,
    //     intelligence: 5,
    //     wisdom: 9,
    //     charisma: 14,
    //   },
    // ];


  }

  ngOnInit(): void {
  }

}
