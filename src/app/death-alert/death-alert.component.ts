import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-death-alert',
  templateUrl: './death-alert.component.html',
  styleUrls: ['./death-alert.component.scss']
})
export class DeathAlertComponent implements OnInit {
  @Input() enemyDeath: boolean = false;
  @Input() playerDeath: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
