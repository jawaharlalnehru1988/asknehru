import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProfileComponent } from './profile/profile.component';
import { CodedocComponent } from './codedoc/codedoc.component';
import { AutocompleteComponent } from './material/material/autocomplete/autocomplete.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "userlist", component: UserlistComponent},
  {path: "toolbar", component: ToolbarComponent},
  {path: "profile", component: ProfileComponent},
  {path: "codedoc", component: CodedocComponent},
  {path: "yoga", component: AutocompleteComponent},
  {path: "javascript", loadChildren: ()=>import('./javascript/javascript.module').then(m => m.JavascriptModule)},
  {path: "angular", loadChildren: ()=>import('./angular/angular.module').then(m => m.AngularModule) },
  {path: 'html', loadChildren: ()=>import('./html/html.module').then(m=>m.HtmlModule)},
  {path: 'gymwebpage', loadChildren: ()=>import('./css/css.module').then(m=> m.CssModule)},
  {path: 'ecommerce', loadChildren: ()=> import('./bootstrap/bootstrap.module').then(m=> m.BootstrapModule)},
  {path: 'typescript', loadChildren: ()=> import('./typescript/typescript.module').then(m => m.TypescriptModule)},
  {path: 'fashion', loadChildren: ()=> import('./material/material.module').then(m => m.MaterialModule)},
  {path: 'projectStudio', loadChildren: ()=> import('./fxlayout/fxlayout.module').then(m => m.FxlayoutModule)},
  {path: 'harekrishna', loadChildren: ()=> import('./aggrid/aggrid.module').then(m=>m.AggridModule)},
  {path: 'techexpert', loadChildren: ()=> import('./rxjs/rxjs.module').then(m => m.RxjsModule)},
  {path: 'food', loadChildren: ()=>import('./git/git/git.module').then(m => m.GitModule)},
  {path: 'productshop', loadChildren: ()=> import('./karmajasmin/karmajasmin/karmajasmin.module').then(m => m.KarmajasminModule)},
  {path: "spotify", loadChildren: ()=> import('./spotify/spotify/spotify.module').then(m => m.SpotifyModule)},
  {path: "audiovideo", loadChildren: ()=>import('./audiovideo/audiovideo.module').then(m => m.AudiovideoModule)},
  {path: "", component: HomeComponent},
  {path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
