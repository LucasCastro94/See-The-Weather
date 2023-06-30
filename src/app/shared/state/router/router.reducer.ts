import { Params, RouterStateSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';

//Classe responsavel por personalizar o retorno na story 

// Define a interface RouterState que representa a estrutura do estado da rota
export interface RouterState {
  url: string;
  params: Params;
  queryParams: Params;
  fragment: string;
}

// Classe que implementa a interface RouterStateSerializer para serializar o estado da rota
export class CustomRouterSerializer implements RouterStateSerializer<RouterState> {

  // Método serialize que recebe um RouterStateSnapshot e retorna o estado serializado
  serialize(routerState: RouterStateSnapshot): RouterState {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    const { fragment } = routerState.root;

    let route = routerState.root;
    const params: Params = {};
    do {
      if (!!route.params) {
       // Se houver parâmetros na rota atual, percorre cada chave e valor e adiciona ao objeto params
        Object.keys(route.params).forEach(key => {
          params[key] = route.params[key];
        });
      }
      route = route.firstChild;
    } while (!!route);

    return { url, params, queryParams, fragment };
  }
}
