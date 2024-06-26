interface User {
  _id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  password: string;
  address?: {
    street: string;
    city: string;
    country: string;
  };
}

export default User;
