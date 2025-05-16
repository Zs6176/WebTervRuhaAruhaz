import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'igazHamis',
  standalone: false
})
export class IgazHamisPipe implements PipeTransform {

  transform(value: boolean): unknown {
    return value ? 'Igen' : 'Nem';
  }

}
