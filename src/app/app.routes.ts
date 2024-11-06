import { provideClientHydration } from '@angular/platform-browser';
import { WorkForceDashboardComponent } from './work-force-dashboard/work-force-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ConfirmationDashBoardComponent } from './confirmation-dash-board/confirmation-dash-board.component';

export const routes: Routes = [
    {path:"LoginPage", component:LoginComponent,},
    {path:"app-work-force-dashboard", component:WorkForceDashboardComponent},
   {path:"app-confirmation-dash-board", component:ConfirmationDashBoardComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutes {}