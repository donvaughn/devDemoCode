import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  // TODO: 10b) Variable erstellen, die im Kompilat gesucht werden kann. Dann einen Skript (npm oder shell) schreiben,
  //  den diesem Code sucht und CI Build verhindert, wenn gefunden
  static readonly demoCodeExists = 'EVIL DEMO CODE';

  constructor() { }

  ngOnInit(): void {
  }

}
