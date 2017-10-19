import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'ng2-ui-auth';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // this will be passed from the route config
    // on the data property
    const expectedRoles = next.data.expectedRoles;

    // decode the token to get its payload
    const tokenPayload = this.auth.getPayload();
    if ( !this.auth.isAuthenticated() || !this.hasAnyRole(expectedRoles, tokenPayload.roles) ) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }

  hasAnyRole(expectedRoles: any[], roles: any[]) {
    const roleSize = expectedRoles.filter(rx => this.hasRole(rx, roles)).length;
    if (roleSize > 0) {
      return true;
    }
    return false;
  }

  hasRole(expectedRoles: String, roles: any[]) {
    const roleSize = roles.filter(r => r.authority === expectedRoles).length;
    if (roleSize > 0) {
      return true;
    }
    return false;
  }
}
