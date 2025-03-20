import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'environment/environment';
import { Comment } from '../interfaces/comment';
import { Response } from '../interfaces/response';
@Injectable({
  providedIn: 'root',
})
export class ComentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private httpClient: HttpClient) {}

  createComment(data: Comment): Observable<Response<Comment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.httpClient.post<Response<Comment>>(url, data);
  }
}
