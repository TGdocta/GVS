import { Component, OnInit } from '@angular/core';
import { EarthQueakeService } from 'src/app/services/earth-queake.service';

@Component({
  selector: 'app-earth-queake',
  templateUrl: './earth-queake.component.html',
  styleUrls: ['./earth-queake.component.css']
})
export class EarthQueakeComponent implements OnInit {

  earhQuakes:any = [];
  earthQuake:any={}
  earhQuakesPerPage:number = 16;
  p:number = 1;
  searchString:any;
  isShow:boolean= false;
  bindingTitle:string = '';
  bindingId:string = '';


  constructor(private  earthQuakeSvc : EarthQueakeService ) {
   
    this.findEarthQueakes();
   }

  ngOnInit(): void {
  }

  findEarthQueakes(){
    this.earthQuakeSvc.browseEarthQuakes().subscribe(data => {
      this.earhQuakes = data;
      this.earhQuakes  = this.earhQuakes .filter((eq:any) => {
        return (eq.coordinates[0] >= -30 && eq.coordinates[0] < 160)
      });
      this.earhQuakes  = this.earhQuakes .filter((eq:any) => {
        return (eq.coordinates[1] >= -50 && eq.coordinates[1] < 50)
      });
      this.earhQuakes  = this.earhQuakes .filter((eq:any) => {
        return (eq.coordinates[2] >= 1 && eq.coordinates[2] < 400)
      }); 
      
    })
  }

  editEarthQuake(bindEQueake:any){
    if (bindEQueake.title !== '') {
      bindEQueake.title = bindEQueake.title
      bindEQueake.edit = false;
    }
 

  }

  editName(earhQuake:any){
    earhQuake.edit = true;
    
  }

  bindEarthQuake(bindEQueake:any){
    this.earthQuake = bindEQueake;
    
  }

  clearSearchBar(){
    this.searchString = '';
  }

  deleteEarthQuake(){
    this.isShow = true;
    this.earhQuakes = this.earhQuakes.filter((eq:any) => eq.id !== this.earthQuake.id);
    setTimeout(() =>  this.isShow = false , 2500);

  }

}
