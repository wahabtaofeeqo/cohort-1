import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.toUpperCase().substring(0, args[0]);
  }

}
