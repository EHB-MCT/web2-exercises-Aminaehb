"use strict";



class Team {
    constructor(title) {
        this._teamName = 'Default team';
        this._trainer = 'Ash';
        this._roster = [];
    }
    described() {
        let pokemon = retur `Team ${this._teamName} with trainer ${this._trainer} 
        has the following pokemon: $({...this._roster})`;
    }
}
let team = new Team();
export default Team;