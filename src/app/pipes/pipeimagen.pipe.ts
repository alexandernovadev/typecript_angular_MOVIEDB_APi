import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PipeimagenPipe implements PipeTransform {


// Bueno, he comprendido el pipe,
// En este pipe lo que hace es que pone imagen cover o de cartelera con un boolean
// Y yo add una nueva funcionalidad que es el tamaño de la imagen jajajaja
  transform(pelicula: any, backdrop: boolean = false , para?: number): any {

    // console.log('Bacjjjj ' , backdrop );
    // console.log('otroa mas ' , para );

    const img_base_url = `https://image.tmdb.org/t/p/w${para}/`;

    if (backdrop) {
        return img_base_url + pelicula.backdrop_path;
    }

    if (pelicula.poster_path) {
        return img_base_url + pelicula.poster_path;
    } else {
        if (pelicula.backdrop_path) {
            return img_base_url + pelicula.backdrop_path;
        } else {
            return 'assets/images/imagen-no-disponible.jpg';
        }
    }
}

}
