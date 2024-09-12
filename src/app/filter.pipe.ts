import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: any): unknown {

    if (searchText === "") {
      return value
    }
    else {
      const filteredItem = value.filter(((item : any) => item.name.toLowerCase().includes(searchText.toLowerCase())))
      return filteredItem;
    }
  }
}
