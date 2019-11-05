import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService { 
  notes: Note[] = [];
  maxZ: number = -1;

  constructor() {
    if (this.isEmpty) {
      this.internalAddNote(new Note("Note 1", "contents asas saksjkasa sas sa ", 10, 10));
      this.internalAddNote(new Note("Note 2", "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch", 10, 100));
      this.internalAddNote(new Note("Another one", "entore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat v", 100, 200));
      this.internalAddNote(new Note("And another one", "mus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et", 200, 150));
      this.internalAddNote(new Note("Note 4??", "mus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et", 400, 200));
      this.internalAddNote(new Note("Last one", "ajskaksjasjkaskj jkasjk ajskajsk jaksj kajskajks jaksjaksjkj akjthe grey fox jumps over some lazy dog maybe", 200, 50));
    } else {
      this.notes = this.getNotes();
      this.maxZ = this.getMaxZ();
    }
  }

  get isEmpty() {
    return !this.getNotes();
  }

  private getNotes(): Note[] {
    return JSON.parse(window.localStorage.getItem("notes"));
  }

  private setNotes(value: Note[]) {
    window.localStorage.setItem("notes", JSON.stringify(value));
  }

  private getMaxZ(): number {
    return JSON.parse(window.localStorage.getItem("maxZ"));
  }

  private setMaxZ(value: number) {
    window.localStorage.setItem("maxZ", JSON.stringify(value));
  }

  private internalAddNote(note: Note): Note {
    note.z = ++this.maxZ;
    this.notes.push(note);
    this.setNotes(this.notes);
    this.setMaxZ(this.maxZ);
    return note;
  }

  addNote(): Note {
    return this.internalAddNote(new Note("Note title", "Note text", 100, 100));
  }

  updateNote(note: Note) {
    this.setNotes(this.notes);
  }

  removeNote(note: Note) {
    console.log("removing note");
    console.log(note);
    this.notes = this.notes.filter(n => n != note);
    this.setNotes(this.notes);
  }

  beingToFront(note: Note) {
    if (note.z == this.maxZ) return;
    note.z = ++this.maxZ;
    this.setNotes(this.notes);
  }
}
