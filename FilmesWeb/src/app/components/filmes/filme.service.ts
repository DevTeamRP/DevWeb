import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from './filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private readonly API = 'https://localhost:5001/filme';

  constructor(private http: HttpClient) { }

  listar(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.API);
  }

  criar(filme: Filme): Observable<Filme>{
    return this.http.post<Filme>(this.API, filme)
  }

  editar(filme: Filme): Observable<Filme>{
    const url = `${this.API}/${filme.id}`;
    return this.http.put<Filme>(url, filme);
  }

  excluir(id: number): Observable<Filme> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Filme>(url);
  }

  buscarPorId(id: number): Observable<Filme> {
    const url = `${this.API}/${id}`;
    return this.http.get<Filme>(url);
  }

}
