import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galerias',
  templateUrl: './galerias.component.html',
  styleUrls: ['./galerias.component.css']
})
export class GaleriasComponent implements OnInit {

  @Input() movies;
  // Aqui recibe el parametro, o la lista de peliculas que se desea ver 

  // funciona como un Ngfor esta etiqueta o algo asi jajaj ,/
  // La vaina es que muestra dependiendo la lista que quiero enviar

  constructor(private router: Router) { }

  ngOnInit() {
  }

  infopelicula(id: number)
  {
    console.log('Este es el id: ',id);
    //this.router.navigateByUrl('/buscar');
    this.router.navigate(['/pelicula', id]);
  }

}
