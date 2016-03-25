import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'highlight'})
export class HighlightPipe implements PipeTransform {
  transform(value:string, names: string[]) : string {
    if (!value) return '';
    let result = value;
    names.forEach(name => {
      result = result.replace(name, `<strong>${name}</strong>`);;
    });
    return result;
  }
}
