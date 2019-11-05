import { Component } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UnStickyNotes';

  constructor(protected noteService: NoteService) {
  }

  get notes() {
    return this.noteService.notes;
  }

  handleClicked(note: Note) {
    this.noteService.beingToFront(note);
  }

  handleChanged(note: Note) {
    this.noteService.updateNote(note);
  }

  handleAdd(note: Note) {
    this.noteService.addNote();
  }

  handleRemove(note: Note) {
    this.noteService.removeNote(note);
  }
}
