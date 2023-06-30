import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Todos{
  name:string;
  address:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url='https://jsonplaceholder.typicode.com/todos';
  httpData:any;

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.callApi();
  }

  callApi(){
    this.http.get<Todos[]>(this.url).subscribe((data)=>{
      this.httpData=data;
    })
  }
}
