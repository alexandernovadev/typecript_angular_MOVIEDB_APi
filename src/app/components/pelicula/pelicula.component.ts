import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit 
{

  data: any = {}
  loading= false;
  
  constructor(private peliservice: ThemoviedbService,
              private activatedRoute: ActivatedRoute,
              private _location: Location)
  {
    activatedRoute.params.subscribe((id: any)=>{
 
      peliservice.infopeli(id['id']).subscribe(datamovie =>{
       
        console.log(datamovie);

        this.data = datamovie;
        this.loading = true;
      });
    })

    
   }

  ngOnInit() 
  {
  }

  regresar()
  {
    this._location.back();
  }

}
