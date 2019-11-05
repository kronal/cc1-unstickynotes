export class Note {
    constructor(
        public title: string,
        public text: string,
        public x: number,
        public y: number,
        public z: number = 0,
        public r: number = 0)
    { }
}
