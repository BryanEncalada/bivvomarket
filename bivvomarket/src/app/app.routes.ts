import { RouterModule, Routes } from '@angular/router';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';
import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeTwoComponent } from './home/home-two/home-two.component';

export const routes: Routes = [

 {
    path: '',
    pathMatch: 'full',
    component: HomeTwoComponent,
    title: 'component: HomeTwoComponent',

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  declarations: [], // Add ResourcesComponent to declarations
  providers: [provideClientHydration()],
})
export class AppRoutingModule {}