import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router)
  {
    
  }

  ngOnInit() {
  }

  buscarmovie(termino: string)
  {
    console.log('desde navbar' , termino);

    // Aqui simplemente accedmos a buscar con un parametro
    // que sera leido con un params, y con el contructor de buscar
    // ejecuta la busqueda ?? Interesante como siempre
    this.router.navigate(['buscar', termino]);
  }

}
