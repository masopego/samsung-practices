import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import Contact, { Genre } from 'src/app/Class/Contact/contact.component';

const INITIAL_CONTACTS: Contact[] = [
  {
    firstName: 'Marisol',
    lastName: 'Peña',
    age: 26,
    genre: Genre.Woman,
    color: '#1fcd4d',
    dni: '12345678E',
    birthday: new Date('05/02/1982'),
  },
];

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashBoardComponent implements OnInit {
  form: FormGroup;
  contacts: Contact[];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age',
    'dni',
    'birthday',
    'color',
    'genre',
    'actions',
  ];
  dataSource: MatTableDataSource<Contact>;

  contactToEdit: boolean;
  elementToModify: number;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(125),
      ]),
      dni: new FormControl('', [Validators.required, Validators.maxLength(9)]),
      birthday: new FormControl('', [Validators.required]),
      color: new FormControl('#000', [
        Validators.minLength(3),
        Validators.required,
      ]),
      genre: new FormControl('', Validators.required),
    });

    this.contacts = INITIAL_CONTACTS;
    this.contactToEdit = false;
    this.elementToModify = -1;
    this.dataSource = new MatTableDataSource<Contact>(this.contacts);
  }

  addContacts() {
    let newContact = this.form.value;
    let exitsContactWithSameDNI = this.contacts.some(
      (contact) => contact.dni === newContact.dni
    );

    if (!exitsContactWithSameDNI) {
      this.contacts.push(this.form.value);
    } else {
      alert('El contacto introducido ya ha había sido añadido');
    }
    this.form.reset();

    this.dataSource.data = this.contacts;
  }

  removeContact(elementSelected: Contact) {
    let elementToRemove = this.contacts.findIndex(
      (contact) => contact.dni === elementSelected.dni
    );

    let elementRemoved = this.contacts.splice(elementToRemove, 1);

    alert('Has eliminado un contacto con DNI ' + elementRemoved[0].dni);

    this.dataSource.data = this.contacts;
  }

  modifyContact(elementSelected: Contact) {
    this.elementToModify = this.contacts.findIndex(
      (contact) => contact.dni === elementSelected.dni
    );

    this.form.setValue(elementSelected);

    this.contactToEdit = true;
  }

  updateContact($event: any, elementToModify: number) {
    $event.preventDefault();
    this.contacts[elementToModify] = this.form.value;

    this.dataSource.data = this.contacts;

    this.form.reset();
    this.elementToModify = -1;
    this.contactToEdit = false;
  }

  ngOnInit(): void {}
}
