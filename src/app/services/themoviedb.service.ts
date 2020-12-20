import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  private apikey = 'd45abdd2695eb2f5c82092890ee7a3dd';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getDiscover()
  {
    let url = `${this.urlMoviedb}/discover/movie`+
    `?sort_by=popularity.desc`+
    `&api_key=${ this.apikey}`+
    `&language=es`;

    return this.http.get(url)
                    .pipe(map((moviesdiscover: any) => moviesdiscover.results));
  }

  getCartelera()
  {
    let url = `${this.urlMoviedb}/movie/now_playing`+
    `?sort_by=popularity.desc`+
    `&api_key=${ this.apikey}`+
    `&language=es`;

    return this.http.get(url)
               .pipe(map((lastmovies: any) => lastmovies.results));
  }

  getForchildrens()
  {
    let url = `${this.urlMoviedb}/discover/movie`+
    `?sort_by=popularity.desc`+
    `&api_key=${ this.apikey}`+
    `&page=2`+
    `&language=es`+
    `&certification=APTA`;

    // ESO DE .RESULT es porque filtre la info, segun la api de ellos
    // Los result son son resultados de las peliculas,
    // porque sin eso me vota un objeto mas detallado de la informacion 
    // como paginas, tipo de data etc, y solo necesito la info 
    // o el array de la pelicula
    return this.http.get(url)
               .pipe(map((moviesninos: any) => moviesninos.results));
  }

  infopeli(id: number)
  {
    let url = `${this.urlMoviedb}/movie/${id}`+
    `?sort_by=popularity.desc`+
    `&api_key=${ this.apikey}`+
    `&page=2`+
    `&language=es`;

    return this.http.get(url)
               .pipe(map((innfopeli: any) => innfopeli));
  }

  buscarmovie(palabra: string)
  {

    let url = `${this.urlMoviedb}/search/movie`+
    `?api_key=${ this.apikey}`+
    `&language=en-US`+
    `&query=${palabra}`+
    `&page=1`+
    `&include_adult=false`;

    console.log('palabra desde service',palabra);

    return this.http.get(url)
               .pipe(map((busqueda: any) => busqueda.results));
    
  }

}
