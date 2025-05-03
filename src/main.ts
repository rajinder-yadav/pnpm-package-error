/**
 * Data model of a person.
 */
interface IUser {
  name: string;
  surname: string;
  age: number;
  email: string;
}

const users: IUser[] = [
  { name: "John", surname: "Doe", age: 30, email: "john.doe@example.com" },
  { name: "Jane", surname: "Smith", age: 25, email: "jane.smith@example.com" },
  { name: "Alice", surname: "Johnson", age: 35, email: "alice.johnson@example.com" },
  { name: "Bob", surname: "Brown", age: 28, email: "bob.brown@example.com" },
  { name: "Charlie", surname: "Garcia", age: 40, email: "charlie.garcia@example.com" },
  { name: "Diana", surname: "Martinez", age: 22, email: "diana.martinez@example.com" },
  { name: "Ethan", surname: "Wilson", age: 31, email: "ethan.wilson@example.com" },
  { name: "Fiona", surname: "Miller", age: 29, email: "fiona.miller@example.com" },
  { name: "George", surname: "Davis", age: 45, email: "george.davis@example.com" },
  { name: "Hannah", surname: "Lee", age: 27, email: "hannah.lee@example.com" },
  { name: "Ian", surname: "White", age: 50, email: "ian.white@example.com" },
  { name: "Julia", surname: "Hall", age: 33, email: "julia.hall@example.com" },
  { name: "Kevin", surname: "Taylor", age: 26, email: "kevin.taylor@example.com" },
  { name: "Liam", surname: "Clark", age: 39, email: "liam.clark@example.com" },
  { name: "Mia", surname: "Walker", age: 24, email: "mia.walker@example.com" },
  { name: "Noah", surname: "Hill", age: 37, email: "noah.hill@example.com" },
  { name: "Olivia", surname: "Young", age: 32, email: "olivia.young@example.com" },
  { name: "Patrick", surname: "Allen", age: 41, email: "patrick.allen@example.com" },
  { name: "Queenie", surname: "King", age: 23, email: "queenie.king@example.com" },
  { name: "Ryan", surname: "Scott", age: 55, email: "ryan.scott@example.com" },
  { name: "Susan", surname: "Green", age: 48, email: "susan.green@example.com" }
];

/**
 * Filter users over a certain age.
 *
 * @param users - Array of users.
 * @param minAge - Minimum age to filter users.
 *
 * @returns An array of users who are over the minimum age.
 */
function filterUsersOver(users: IUser[], minAge: number) {
  return users.filter(user => user.age >= minAge);
}

// Filter users over the age of 30.
const filteredUsers = filterUsersOver(users, 30);

// Sort filtered Users by their age in ascending order.
filteredUsers
  .sort((a, b) => a.age - b.age)
  .forEach(
    user => console.log(`Name: ${user.name}, Surname: ${user.surname}, Age: ${user.age}`)
  );
