import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdaugaProdusComponent } from './components/adauga-produs/adauga-produs.component';
import { ListaProduseComponent } from './components/lista-produse/lista-produse.component';
import { ProdusComponent } from './components/produs/produs.component';
import { PrimaPaginaComponent } from './components/prima-pagina/prima-pagina.component';
import { CosulMeuComponent } from './components/cosul-meu/cosul-meu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdaugaProdusComponent,
    ListaProduseComponent,
    ProdusComponent,
    PrimaPaginaComponent,
    CosulMeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
