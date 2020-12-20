import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productor'
})
export class ProductorPipe implements PipeTransform {

  transform(productor: any, args?: any): any {


    console.log("test2",productor.production_companies[0] === undefined);
  
    // Este if se saco mirando la api, y haciendo test 
    // de que pasaria si no hibueera info de resultados
    if(productor.production_companies[0] === undefined)
    {
      return 'Sin informacion del productora !'
    }
    else
    {
      // Esto lo hize porque lo que recibo es un Objeto
      // entonces lo recorri con forin y retorne .production_companies[iterator].name
      // que segun la API es en nombre de la productara
      //  PERO QUE PASA SI HAY MAS PORDUCTORAS ????? QUE HARA
            // Lo que pasa es que siempre coje el primero,
            // ya que en la primera iteracion hay un return 
            // entonces se sale jajajaj 
      for (const iterator in productor.production_companies)
      {
        // Podria hacer colocado en la pos [0], pero me votaba
        // error entonces lo meti dentro de un for in y SANTO REMEDIO 
        return productor.production_companies[iterator].name;  
      }
    
    }
  }

}
