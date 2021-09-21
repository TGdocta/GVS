import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEarthQuake'
})
export class SearchEarthQuakePipe implements PipeTransform {

  transform(value:any, args:any ): any {
    if ( args === '' || args === undefined) return value;
     return value.filter((data:any) => 
      data.title.toLowerCase().includes(args.toLowerCase())  
    )
  }

}
