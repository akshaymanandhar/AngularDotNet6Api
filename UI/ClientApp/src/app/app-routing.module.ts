import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

const routes: Routes = [
  // Client Routes
  {
    path:'',
    component: ClientLayoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path:'home',
        loadChildren: () => import('./client/client.module').then(m=>m.ClientModule)
      }
    ]
  },

  // Admin Routes
  {
    path:'',
    component: AdminLayoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path:'dashboard',
        loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },

  // Auth Routes
  {
    path:'',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path:'login',
        loadChildren: () => import('./auth/auth.module').then(m=> m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
