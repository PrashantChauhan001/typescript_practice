class Student {
  id: number;
  name: string;
  address: string;
  optionalParam!: string;
  #priv01?: number;
  private priv02?: string;
  protected priv03?: boolean;

  constructor(
    id: number,
    name: string,
    address: string,
    totalScore: number = 0,
    keyword: string = "none",
    isTopper: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.#priv01 = totalScore;
    this.priv02 = keyword;
    this.priv03 = isTopper;
  }

  getDetails(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

const student091 = new Student(
  10001,
  "Prashant",
  "674, Any street, no-way, world.",
  897,
  "abt",
  false
);

const student092 = new Student(
  10001,
  "Prashant",
  "674, Any street, no-way, world."
);

console.log(student091.getDetails());

class FootballTeam extends Student {
  constructor(
    id: number,
    name: string,
    address: string,
    totalScore: number,
    keyword: string,
    isTopper: boolean
  ) {
    super(id, name, address, totalScore, keyword, isTopper);
  }
}

// created class
// created properies and constructor
// class methods
// created instance
// member visibility
// # private protected static
// static members
// getter and setter
