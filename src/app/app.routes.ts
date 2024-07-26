import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';

export const routes: Routes = [

   {path:'', redirectTo:'home',pathMatch:'full'} ,
   {path:'home', component: HeaderComponent} ,
   {path:'gallery', component: PortfolioComponent} ,
   {path:'about',component:AboutComponent},
   {path:'message',component:MessageComponent},
   {path:'**',component:NotFoundComponent}
];
