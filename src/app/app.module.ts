import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserXhr, HttpModule, JsonpModule} from '@angular/http';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatDialogModule, MatTabsModule,
          MatTooltipModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { RecaptchaModule } from 'ng-recaptcha';
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';

import { AuthConfig } from './app-config.module';
import { RoleGuard } from './guards/auth/role.guard';
import { AuthActiveGuard, AuthDeactiveGuard } from './guards/auth/auth.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/home/post-detail/post-detail.component';
import { PostsComponent } from './components/home/posts/posts.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignupConfirmComponent } from './components/auth/signup-confirm/signup-confirm.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/manage/manage-dashboard/dashboard.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { InitComponent } from './components/reset-password/init/init.component';
import { FinishComponent } from './components/reset-password/finish/finish.component';
import { ManageHeaderComponent } from './components/common/manage-header/manage-header.component';
import { ManageComponent } from './components/manage/manage.component';
import { ManagePostComponent } from './components/manage/manage-post/manage-post.component';
import { ManagePostDetailComponent } from './components/manage/manage-post-detail/manage-post-detail.component';
import { ManageTagsDetailComponent } from './components/manage/manage-tags-detail/manage-tags-detail.component';
import { ManageUsersDetailComponent } from './components/manage/manage-users-detail/manage-users-detail.component';
import { ManageUsersComponent } from './components/manage/manage-users/manage-users.component';
import { ManageTagsComponent } from './components/manage/manage-tags/manage-tags.component';
import { ManageApiComponent } from './components/manage/manage-api/manage-api.component';
import { ProfileComponent } from './components/manage/manage-profile/profile.component';

import { PostService } from './services/post/post.service';
import { SignupService } from './services/signup/signup.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostDetailComponent,
    PostsComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    ManageHeaderComponent,
    ManageComponent,
    DashboardComponent,
    ResetPasswordComponent,
    InitComponent,
    FinishComponent,
    ManagePostComponent,
    ManagePostDetailComponent,
    ManageTagsDetailComponent,
    ManageUsersDetailComponent,
    ManageUsersComponent,
    ManageTagsComponent,
    ManageApiComponent,
    ProfileComponent,
    AuthComponent,
    SignupConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule, JsonpModule,

    NgProgressModule,

    // flex-layout module
    FlexLayoutModule,

    // supper route module
    AppRoutingModule,

    // material module
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    Ng2UiAuthModule.forRoot(AuthConfig),
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    PostService, SignupService, UserService,
    AuthActiveGuard, AuthDeactiveGuard, RoleGuard,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
