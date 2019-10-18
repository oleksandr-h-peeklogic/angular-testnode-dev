import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  id = '';
  
  constructor( private route: ActivatedRoute,
    private location: Location ) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
