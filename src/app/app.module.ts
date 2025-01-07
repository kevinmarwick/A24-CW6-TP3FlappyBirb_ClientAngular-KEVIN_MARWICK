import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';
import { ScoreComponent } from './score/score.component';
import { Round_00Pipe } from './pipes/round_00.pipe';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [			
    AppComponent,
      LoginComponent,
      PlayComponent,
      ScoreComponent,
      Round_00Pipe
     
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
	   FormsModule,
     MaterialModule 
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
