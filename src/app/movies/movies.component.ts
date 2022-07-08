import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movielist:any;
  constructor(private ser:ServiceService) { }
  getmovies(){}

  ngOnInit(): void {
    this.ser.getmovies().subscribe(data=>{
      this.movielist=data
      
    });
    
  }

}
