import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icorreo } from '../types/correo';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  private apiUrl = 'https://app.enervym.com/api/correo';

  constructor(private http: HttpClient) { }

  public enviarCorreo(fd: FormData): Observable<Icorreo> {

    return this.http.post<Icorreo>(`${this.apiUrl}`, fd);

  }

}
