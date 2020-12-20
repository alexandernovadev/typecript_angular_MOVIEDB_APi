import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  busqueda: any[];
  mostrarsearch = false;

  palabra: string = '';

  constructor(private moviservice: ThemoviedbService,
              private router: Router,
              private activerouter: ActivatedRoute) 
  {
    // Traemos el parametro de la ruta y hacemos la busqueda 
    // con ese parametro

    // El ngModel empareja el parametro y lo pone en la Caja
    activerouter.params.subscribe((parametro: any) =>{
      
    this.moviservice.buscarmovie(parametro['palabra']).subscribe(data=>{
      console.log('y esto que es: ', parametro['palabra'] );
      this.palabra = parametro['palabra']
      this.busqueda = data;
      this.mostrarsearch = true;
    });
    
    })
  }

  ngOnInit() {
  }

  busquedaapp()
  {
    if (this.palabra.length == 0) 
    {
      return;  
    }

    this.router.navigate(['buscar', this.palabra]);

    this.moviservice.buscarmovie(this.palabra).subscribe(data=>{
      console.log(data);

      this.busqueda = data;
      this.mostrarsearch = true;
    });
    
  }
}
