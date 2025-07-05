import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackToTopComponent } from "./components/back-to-top/back-to-top.component";


@NgModule({
  declarations: [BackToTopComponent],
  imports: [CommonModule],
  exports: [BackToTopComponent]
})
export class SharedModule { }