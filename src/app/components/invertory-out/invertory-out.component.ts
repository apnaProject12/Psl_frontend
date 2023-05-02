import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invertory-out',
  templateUrl: './invertory-out.component.html',
  styleUrls: ['./invertory-out.component.css']
})
export class InvertoryOutComponent implements OnInit{
  
  constructor(private router:Router){ }

  ngOnInit(): void {
    
  }
  
}
