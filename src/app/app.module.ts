import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {environment} from '../environments/environment.prod';
import { ListarPostsComponent } from './listar-posts/listar-posts.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsState} from '../state/post/posts.state';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarPostsComponent,
    NuevoPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([PostsState], {developmentMode: !environment.production}),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    //{disabled: environment.production}
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
