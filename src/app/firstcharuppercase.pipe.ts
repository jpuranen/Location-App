
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'firstcharuppercase'})
export class FirstCharUpperCasePipe implements PipeTransform {
  transform(giventext: string): string {
      let texttobereturned : string;
      
    return texttobereturned = giventext.charAt(0).toUpperCase() + giventext.slice(1);
  }
}