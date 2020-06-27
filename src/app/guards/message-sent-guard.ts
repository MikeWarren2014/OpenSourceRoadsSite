import { MessageSentService } from "../services/message-sent.service";
import { RouterStateSnapshot, CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { first, map, tap, switchMap, last } from "rxjs/operators";
import { NEVER, of, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class MessageSentGuard implements CanActivate{

    constructor(private router: Router,
        private service : MessageSentService ) {
        }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<boolean> {
        return this.service.messageSent.pipe(
            first(),
            map((msg) => {
                return !!msg;
            }),
            switchMap(sent => {
                if (!sent) {
                    this.router.navigate(['/home']);
                }
                return of(sent);
            })
        );
    }
}
