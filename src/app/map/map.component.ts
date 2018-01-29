import { Component, OnInit, AfterViewInit, ViewChild, Directive, ElementRef } from '@angular/core';
import { Map } from '../map.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('areaMap') areaMap: ElementRef;

  map = new Map(
    64, //tile size of 64px
    'location of tilset image',
    10, //number of cols in the map
    10, //number of rows in the map
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]
  );

  constructor() { }

  ngOnInit() {
    let ctx: CanvasRenderingContext2D = this.areaMap.nativeElement.getContext('2d');

    ctx.clearRect(0, 0, 640, 640);
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 12, 50, 64);
  }

  drawStuff(){
    let ctx: CanvasRenderingContext2D = this.areaMap.nativeElement.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(0, 0, 640, 640);
  }

}
