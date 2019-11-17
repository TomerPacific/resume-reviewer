import { Component, OnInit } from '@angular/core';
import {  AngularFireStorage, 
          AngularFireStorageReference, 
          AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fileToUpload: File = null;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(this.fileToUpload);
    this.uploadProgress = this.task.percentageChanges();
  }

}
