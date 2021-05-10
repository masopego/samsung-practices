export enum Genre {
  Man = "Hombre",
  Woman = "Mujer",
  Other = "Otro",
  NotSpecify = "No Especificado",
}

export default class Contact {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  dni: string;
  birthday: Date;
  color: string;
  genre: Genre;

  constructor(
    _id: string,
    firstName: string,
    lastName: string,
    age: number,
    dni: string,
    birthday: Date,
    color: string,
    genre: Genre
  ) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dni = dni;
    this.birthday = birthday;
    this.color = color;
    this.genre = genre;
  }
}
