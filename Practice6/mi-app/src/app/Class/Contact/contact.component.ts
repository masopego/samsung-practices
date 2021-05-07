export enum Genre {
  Man = 'Hombre',
  Woman = 'Mujer',
  Other = 'Otro',
  NotSpecify = 'No Especificado',
}

export default class Contact {
  firstName: string;
  lastName: string;
  age: number;
  dni: string;
  birthday: Date;
  color: string;
  genre: Genre;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    dni: string,
    birthday: Date,
    color: string,
    genre: Genre
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dni = dni;
    this.birthday = birthday;
    this.color = color;
    this.genre = genre;
  }
}
