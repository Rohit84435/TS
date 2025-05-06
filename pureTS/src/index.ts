class User {
  email: String;
  name: String;
  readonly city: string = "Gaya";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

let usr = new User("xyz@gmail.com", "rohit");
