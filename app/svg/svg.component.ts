import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent {

  /**
   *svg symbol id
   *input property for svg symbol
   * type {string}
   * memberof ImScSvgiconComponent
   */
  @Input() public sIconId: string;

}
