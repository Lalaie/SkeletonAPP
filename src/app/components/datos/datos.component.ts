import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent  implements OnInit {
  @Input() dato1: string = '';
  @Input() dato2: string = '';
  constructor() { }

  ngOnInit() {}

}
