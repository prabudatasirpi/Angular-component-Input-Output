import { ThisReceiver } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit(){
  }
//  mail ="";

title= "Top 5 Movies";

movies:Movie [] =[
  {title:'Captain america', director:'Anthony Russo', hero:'Chris Evans', releaseDate:'29/2011'},
  {title:'X-men', director:'Simon', hero:'Hugh Jackman', releaseDate:'29/2012'},
  {title:'Batman', director:'Matt Reeves', hero:'Christian Bale', releaseDate:'29/2013'},
  {title:'Superman', director:'Zack Snyder', hero:'Christopher Reeve', releaseDate:'29/2014'},
  {title:'spiderman', director:'Anthony Russo', hero:'Tom Holland', releaseDate:'29/2015'},
  

]

trackByFn(index, item){
  return item.title;
}
 
}

class Movie {
  title!: string;
  director!: string;
  hero!:string;
  releaseDate!: string; 
  

}
