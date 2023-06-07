import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  CLOUD_NAME: string = "dxzlnojyv";
  PRESET_NAME: string = "demo-upload";
  FOLDER_NAME: string = "demo-upload";

  constructor(private http: HttpClient) { }
  uploadFile(file: File) {
    console.log(file);


    const formData = new FormData();
    formData.append("upload_preset", this.PRESET_NAME);
    formData.append("folder", this.FOLDER_NAME);
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'multipart/form-data');
    formData.append('file', file);
    return this.http.post<any>(`https://api.cloudinary.com/v1_1/${this.CLOUD_NAME}/image/upload`, formData, {
      // responseType: 'text' 
      headers: headers
    });
  }

}
