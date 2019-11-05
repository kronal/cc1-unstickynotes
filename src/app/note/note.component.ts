import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  @Output() changed = new EventEmitter<Note>();
  @Output() clicked = new EventEmitter<Note>();
  @Output() remove = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  handleMouseDown(e) {
    this.clicked.emit(this.note);
  }

  handleDragEnded(e) {
    var pos = e.source.getFreeDragPosition();
    this.note.x = pos.x;
    this.note.y = pos.y;
    this.changed.emit(this.note);
  }

  handleModelChanged(e) {
    this.changed.emit(this.note);
  }

  handleRemove(e) {
    console.log("handleRemove()");
    this.remove.emit(this.note);
  }
}
