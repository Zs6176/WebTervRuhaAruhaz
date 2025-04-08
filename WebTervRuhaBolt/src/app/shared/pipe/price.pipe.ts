import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: false
})
export class PricePipe implements PipeTransform {

  transform(price: number): string {
    return price.toString() + ' Ft';
  }

}
