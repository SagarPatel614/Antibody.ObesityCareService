import { Injectable, Inject, ErrorHandler, Injector } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { map, catchError, throwIfEmpty, tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Guid } from "guid-typescript";
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthService  {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;



  rootUrl;
  readonly authcookie = 'Antibody.ObesityCare.Auth';

  constructor(private router: Router,
    private http: HttpClient,
    private cookieService: CookieService,
    private toasterService: ToastrService,
    @Inject('BASE_URL') baseUrl: string,
    private injector: Injector) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.rootUrl = baseUrl;
  }

    public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }

    public get isAuthCookieExists(): boolean {
      return this.cookieService.check(this.authcookie);
  }

    login(username: string, password: string): boolean {

     //if(username == "test" && password == "test"){
      if(username == environment.username && environment.password){
      localStorage.setItem('currentUser', JSON.stringify(username));
      this.currentUserSubject.next(username);
      this.cookieService.set(this.authcookie, Guid.create().toString(), 0.02083);
      return true;
    }
    else{
      this.toasterService.error("Incorrect username or password");
      return false;
    }
  }

  tryLogin(returnUrl: string){

    const currentUser = this.currentUserSubject.value;
    const authCookie = this.isAuthCookieExists;

    if(authCookie && currentUser === environment.username){
      this.router.navigate([returnUrl]);
      return;
    }
    this.logout();
    this.router.navigate(['/login']);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.cookieService.delete(this.authcookie);
    this.currentUserSubject.next(null);
  }
}
