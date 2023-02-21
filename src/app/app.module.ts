import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Task1Component } from './task1/task1.component';
import { TowWayBindingComponent } from './tow-way-binding/tow-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StyledComponent } from './styled/styled.component';
import { ClassComponent } from './class/class.component';
import { IfElseComponent } from './if-else/if-else.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Task1Component,
    TowWayBindingComponent,
    StyledComponent,
    ClassComponent,
    IfElseComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
