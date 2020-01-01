import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare let alertify: any;
@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  registerForm: FormGroup;

  baseUrl = "http://localhost:51003/api/";
  tags: any[] = [];
  constructor(private http: HttpClient, private route: Router
  ) { }
  imageFile: any;
  ngOnInit() {
    this.registerForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      url: new FormControl(),
      tag: new FormControl()
    });
  }

  public onSelect(item) {
    console.log('tag selected: value is ' + item);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    this.imageFile = file;
  }


  save() {
    const formData = new FormData();

    const datas = this.registerForm.value;

    datas.tag.forEach(element => {
      formData.append('tag', element.display);
    });

    Object.keys(datas).forEach(prop => {
      if (datas[prop] != null && prop !== 'tag') {
        formData.append(prop, datas[prop]);
      }
    });

    formData.append('url', this.imageFile);


    console.log(formData);

    this.http.post(this.baseUrl + 'Photo/photoSave', formData).subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

    alertify.success("saved");
    setTimeout(() => {
      this.route.navigate(['/app-list-photo']);

    }, 2000);
  }
}
