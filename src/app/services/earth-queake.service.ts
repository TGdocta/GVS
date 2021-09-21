import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EarthQueakeService {

  path:string = 'https://earthquake.usgs.gov/';
  baseUrl:string ='earthquakes/feed/v1.0/summary/all_month.geojson'
  coordinates:any=[]

  constructor( private http:HttpClient) { }

  

  browseEarthQuakes(){
    return this.http.get(`${this.path}${this.baseUrl}`).pipe(
      map( (resp:any) =>
      resp.features.map( (eq:any) => {
        const data = {
          id:eq.id,
          coordinates:eq.geometry.coordinates,
          title: eq.properties.title,
          status:eq.properties.status,
          edit:false

        }
          return data
        })
      )
      )
  }


}
