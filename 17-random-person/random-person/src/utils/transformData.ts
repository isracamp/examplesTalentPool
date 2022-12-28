export const transformData = (person: any) => {
  const newPerson = {
    image: person.picture.large,
    phone: person.phone,
    email: person.email,
    password: person.login.password,
    age: person.dob.age,
    street: `${person.location.street.number} ${person.location.street.name}`,
    name: `${person.name.first} ${person.name.last}`,
  };
  return newPerson;
};
