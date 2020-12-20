import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit 
{

  populares: any[];
  cartelera: any[];
  popularesNinos: any[];
  

  // MUY PRACTICO ESTOS SERVICIO, HE APRENDIDO DEMASIADO
  // CON ESTOS CURSOS MUY PRACTICOS Y MUY ORGANIZADO
  constructor(
    movieservice: ThemoviedbService,
    private router: Router) 
  {
    movieservice.getDiscover().subscribe((data: any) =>
    {
      // Este slice corta el array, puedo hacerlo con un pipe
      // desde el html pero asi tambien sirve

      console.log(data.slice(0,9));
      this.populares = data.slice(0,9);
    });

    movieservice.getCartelera().subscribe((data: any) =>
    {
      console.log(data.slice(0,9));
      this.cartelera = data.slice(0,9);
    });

    movieservice.getForchildrens().subscribe((data: any) =>
    {
      console.log(data.slice(0,9));
      this.popularesNinos = data.slice(0,9);
    });
  }

  ngOnInit() 
  {

  }

}
