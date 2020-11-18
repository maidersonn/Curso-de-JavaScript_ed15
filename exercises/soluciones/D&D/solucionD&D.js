const skillModifier = (constitution) => Math.floor((constitution - 10) / 2);

class Character {
  static rollSkill() {
    return [0, 0, 0, 0]
      .map(() => Math.floor(Math.random() * 6) + 1)
      .sort()
      .slice(1)
      .reduce((acc, i) => acc + i, 0);
  }

  constructor() {
    this.strength = Character.rollSkill();
    this.dexterity = Character.rollSkill();
    this.constitution = Character.rollSkill();
    this.intelligence = Character.rollSkill();
    this.wisdom = Character.rollSkill();
    this.charisma = Character.rollSkill();
    this.hitpoint = 10 - skillModifier(this.constitution);
  }
}
