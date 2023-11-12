import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Note } from '../models/note.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() notes: Note[] | undefined;
  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note> | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  // ngAfterViewInit(): void {
  //   // if (this.paginator != undefined) {
  //   //   this.dataSource!.paginator = this.paginator;
  //   // }
  //   // if (this.sort != undefined) {
  //   //   this.dataSource!.sort = this.sort;
  //   // }
  // }

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
    console.log(this.dataSource);
    console.log(this.notes);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLocaleLowerCase();
  }
}
