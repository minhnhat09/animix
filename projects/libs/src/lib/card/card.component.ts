import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'animix-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
