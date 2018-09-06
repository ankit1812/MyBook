import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preetyDate'
})
export class PreetyDatePipe implements PipeTransform {

  transform(joined:string): any {
    return new Date(joined).toDateString();
  }

}
