import {Component, Pipe, PipeTransform} from '@angular/core';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent {
    list = {
        georgeWashington: 1789,
        johnAdams: 1796,
        thomasJefferson: 1800,
        jamesMadison: 1808,
        jamesMonroe: 1812,
    };

    constructor() {}
}

@Pipe({
  name: 'keyValue'
})
export class ObjectToList implements PipeTransform {
  transform(obj, args?: string[]): any {
    let list = [];
    for (let key in obj) {
      list.push({ key: key, value: obj[key]});
    }
    return list;
  }
}


@Pipe({
  name: 'unCamelCase'
})
export class UnCamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 	value
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      .replace(/^./, function(str){ return str.toUpperCase(); })
  }

}
