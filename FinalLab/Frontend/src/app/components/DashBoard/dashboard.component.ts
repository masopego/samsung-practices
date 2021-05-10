import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import Contact, { Genre } from "src/app/Class/Contact/contact.component";
import { UsersDataSource } from "src/app/DataSource/users.data-source";
import UserService from "../../Services/user.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashBoardComponent implements OnInit {
  form: FormGroup;
  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "age",
    "dni",
    "birthday",
    "color",
    "genre",
    "actions",
  ];
  dataSource: UsersDataSource;

  contactToEdit: boolean;
  elementToModify?: string;

  constructor(private UserService: UserService) {
    this.form = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      age: new FormControl("", [
        Validators.required,
        Validators.min(0),
        Validators.max(125),
      ]),
      dni: new FormControl("", [Validators.required, Validators.maxLength(9)]),
      birthday: new FormControl("", [Validators.required]),
      color: new FormControl("#000", [
        Validators.minLength(3),
        Validators.required,
      ]),
      genre: new FormControl("", Validators.required),
    });
    this.contactToEdit = false;
    this.elementToModify = undefined;
    this.dataSource = new UsersDataSource(this.UserService);
  }

  addContacts($event: any) {
    $event.preventDefault();
    $event.stopPropagation();
    let newContact = this.form.value;
    this.UserService.createUser(newContact)
      .toPromise()
      .then(() => {
        alert("Has añadido un contacto");
        this.dataSource.loadUsers();
        this.form.reset();
      })
      .catch(() => {
        alert("Ha ocurrido un error. Inténtelo de nuevo más tarde");
      });
  }

  removeContact(elementSelected: Contact) {
    this.UserService.deleteUser(elementSelected._id)
      .toPromise()
      .then(() => {
        alert("Has eliminado un contacto");
        this.dataSource.loadUsers();
      })
      .catch(() => {
        alert("Ha ocurrido un error. Inténtelo de nuevo más tarde");
      });
  }

  modifyContact(elementSelected: Contact) {
    this.elementToModify = elementSelected._id;

    this.form.setValue({
      firstName: elementSelected.firstName,
      lastName: elementSelected.lastName,
      age: elementSelected.age,
      dni: elementSelected.dni,
      birthday: elementSelected.birthday,
      color: elementSelected.color,
      genre: elementSelected.genre,
    });

    this.contactToEdit = true;
  }

  updateContact($event: any) {
    $event.preventDefault();
    $event.stopPropagation();
    let updateData = this.form.value;
    this.UserService.updateUser(this.elementToModify as string, updateData)
      .toPromise()
      .then(() => {
        alert("Has actualizado un contacto");
        this.dataSource.loadUsers();
        this.form.reset();
        this.elementToModify = undefined;
        this.contactToEdit = false;
      })
      .catch(() => {
        alert("Ha ocurrido un error. Inténtelo de nuevo más tarde");
      });
  }

  ngOnInit(): void {
    this.dataSource.loadUsers();
  }
}
