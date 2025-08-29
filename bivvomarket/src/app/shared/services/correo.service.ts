import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icorreo, IcorreoRes } from '../types/correo';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  private apiUrl = 'https://app.enervym.com/api/Correo';

  constructor(private http: HttpClient) { }

  public enviarCorreo(body: Partial<Icorreo>): Observable<IcorreoRes> {

    return this.http.post<IcorreoRes>(`${this.apiUrl}`, body);

  }

}
