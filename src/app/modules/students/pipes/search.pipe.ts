import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allStudents:any[],searchTerm:string,property:string): any[] {
    let result:any = [] 
    if(!allStudents || searchTerm==="" || property===""){
      return allStudents
    }
    allStudents.forEach((item:any)=>{
      if(item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
