import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthActiveGuard, AuthDeactiveGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/auth/role.guard';

import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ManageComponent } from './components/manage/manage.component';
import { DashboardComponent } from './components/manage/dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { InitComponent } from './components/reset-password/init/init.component';
import { FinishComponent } from './components/reset-password/finish/finish.component';
import { ManagePostComponent } from './components/manage/manage-post/manage-post.component';
import { ManagePostDetailComponent } from './components/manage/manage-post-detail/manage-post-detail.component';
import { ManageTagsComponent } from './components/manage/manage-tags/manage-tags.component';
import { ManageTagsDetailComponent } from './components/manage/manage-tags-detail/manage-tags-detail.component';
import { ManageUsersComponent } from './components/manage/manage-users/manage-users.component';
import { ManageUsersDetailComponent } from './components/manage/manage-users-detail/manage-users-detail.component';
import { ManageApiComponent } from './components/manage/manage-api/manage-api.component';
import { ProfileComponent } from './components/manage/profile/profile.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignupConfirmComponent } from './components/auth/signup-confirm/signup-confirm.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/posts', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/home/posts', pathMatch: 'full' },
      { path: 'posts',      component: PostsComponent },
      { path: 'posts/:id',  component: PostDetailComponent },
    ]
  },
  {
    path: 'manage',
    component:  ManageComponent,
    canActivate: [AuthActiveGuard],
    children: [
      { path: '', redirectTo: '/manage/dashboard', pathMatch: 'full' },
      { path: 'dashboard',  component: DashboardComponent },
      { path: 'posts',      component: ManagePostComponent },
      { path: 'posts/:id',  component: ManagePostDetailComponent },
      { path: 'tags',       component: ManageTagsComponent },
      { path: 'tags/:id',   component: ManageTagsDetailComponent },
      { path: 'users',      component: ManageUsersComponent },
      { path: 'users/:id',  component: ManageUsersDetailComponent },
      { path: 'apis',       component: ManageApiComponent },
      { path: 'profile',    component: ProfileComponent }
    ]
  },
  {
    path: 'auth',
    component:  AuthComponent,
    children: [
      { path: 'login',                  component: LoginComponent },
      { path: 'logout',                 component: LogoutComponent },
      { path: 'signup',                 component: SignupComponent },
      { path: 'signup/confirm/:token',  component: SignupConfirmComponent }
    ]
  },
  {
    path: 'reset-password',
    component:  ResetPasswordComponent,
    children: [
      { path: '', redirectTo: '/reset-password/init', pathMatch: 'full' },
      { path: 'init',           component: InitComponent },
      { path: 'confirm/:token',  component: FinishComponent }
    ]
  },
  { path: '**', redirectTo: '/home/posts' }
  /**
   * guard permission with role
   */
  /*{
    path: 'admin',
    component:  ManageComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRoles: ['ROLE_ADMIN']
    },
    children: [
      { path: 'posts',      component: PostsComponent },
      { path: 'posts/:id',  component: PostDetailComponent }
    ]
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
