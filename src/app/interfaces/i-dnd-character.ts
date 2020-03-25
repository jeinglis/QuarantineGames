import { Variable } from '@angular/compiler/src/render3/r3_ast';

export interface IDndCharacter {
  avatar: string;
  name: string;
  level: number;
  experiencePoints: number;
  class: string;
  alignment: string;
  background: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}
