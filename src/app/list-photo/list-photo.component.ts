import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.css']
})
export class ListPhotoComponent implements OnInit {
  imageList: any = [];
  baseUrl = "http://localhost:51003/api/";
  imgUrl = 'http://localhost:51003/External/Photo/';
  constructor(private http: HttpClient) { }


  ngOnInit() {

    this.list();
  }


  list() {
    return this.http.get(this.baseUrl + 'Photo').subscribe(
      (list: any) => {
        this.imageList = list;        
        console.table(this.imageList);
      },
      error => {
        console.log(error);
      }
    );

  }
}
