import { CUSTOM_ELEMENTS_SCHEMA, NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component'; 
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddcontentComponent } from './addcontent/addcontent.component';
import { SharedModule } from './shared/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CodedocComponent } from './codedoc/codedoc.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    PagenotfoundComponent,
    AddcontentComponent,
    RegisterComponent,
    LoginComponent,
    UserlistComponent,
    ProfileComponent,
    CodedocComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatIconModule,
    MatFormField,
    NgbModule,
    MatMenuModule,
    NgbCarouselModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RegisterComponent),
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
