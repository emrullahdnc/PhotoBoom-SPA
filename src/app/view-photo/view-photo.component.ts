import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare let alertify: any;

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css']
})
export class ViewPhotoComponent implements OnInit {
  id: any;
  viewPhoto: any;
  baseUrl = "http://localhost:51003/api/";
  imgUrl = 'http://localhost:51003/External/Photo/';
  constructor(private routeData: ActivatedRoute, private http: HttpClient, private route: Router

  ) { }

  ngOnInit() {
    this.routeData.params.subscribe(data => {
      this.id = data['id'];
      this.getPhoto(this.id);
    });
  }


  getPhoto(id) {
    return this.http.get(this.baseUrl + 'Photo/' + this.id).subscribe(
      (data: any) => {
        this.viewPhoto = data;
      },
      error => {
        console.log(error);
      }
    );
  }


  delete() {

    this.http.delete(this.baseUrl + 'Photo/deletePhoto/' + this.id).subscribe(
      (data: any) => {
        alertify.warning('deleted');
        this.route.navigate(['/app-list-photo']);
      },
      error => {
        console.log(error);
      }
    );

  }





}
