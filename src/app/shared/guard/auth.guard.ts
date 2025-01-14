 import { Injectable } from "@angular/core";
 import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, } from "@angular/router";
 import { AuthService } from "../services/auth.service";
 import { Observable } from "rxjs";  // subscribe -> seen

 @Injectable({
  providedIn: 'root',
 })

 export class AuthGuard {

  constructor(public authService: AuthService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in']);
    }
    return true;
  } 
}

// auth.guard.ts -> delete predefined-authGuard-files -> import, export..... -> delele