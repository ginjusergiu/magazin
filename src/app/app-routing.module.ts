import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdaugaProdusComponent } from './components/adauga-produs/adauga-produs.component';
import { CosulMeuComponent } from './components/cosul-meu/cosul-meu.component';
import { ListaProduseComponent } from './components/lista-produse/lista-produse.component';
import { PrimaPaginaComponent } from './components/prima-pagina/prima-pagina.component';
import { ProdusComponent } from './components/produs/produs.component';

const routes: Routes = [
  {
    path: "adauga-produs", component: AdaugaProdusComponent
  },
  {
    path: "cosul-meu", component: CosulMeuComponent
  },
  {
    path: "lista-produse", component: ListaProduseComponent
  },
  {
    path: "produs/:id", component: ProdusComponent
  },
  {
    path: "", component: PrimaPaginaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
