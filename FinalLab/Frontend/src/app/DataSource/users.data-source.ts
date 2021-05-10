import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import Contact from "../Class/Contact/contact.component";
import UserService from "../Services/user.service";
import { catchError, finalize } from "rxjs/operators";

export class UsersDataSource implements DataSource<Contact> {
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private UserService: UserService) {}

  connect(collectionViewer: CollectionViewer): Observable<Contact[]> {
    return this.contactsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.contactsSubject.complete();
    this.loadingSubject.complete();
  }

  loadUsers() {
    this.loadingSubject.next(true);

    this.UserService.getUsers()
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((users) => this.contactsSubject.next(users as Contact[]));
  }
}
