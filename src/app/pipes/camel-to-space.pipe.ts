import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelToSpace',
  standalone: true
})
export class CamelToSpacePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if (!value) return '';
    return String(value)            // cast unknown to string
               .replace(/([A-Z])/g, ' $1')
               .trim();
  }

}
