const emailValidation = (email) => {
  const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  return !isValid ? { email: "Email is invalid" } : "";
};

const passwordValidation = (password) => {
  const isValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  return !isValid ? { password: "Password is invalid" } : "";
};


const requiredFieldValidation = (field) => {
    // const isValid =  /^\S.*$/.test(
    //     field
    // );
  return field?.length <= 0 ? { fullname: "Name is required" } : "";
}

export const checkFieldValidation = (field) => {
  switch (field.name) {
    case "email":
      return emailValidation(field.value);

    case "password":
      return passwordValidation(field.value);

    case "fullname":
      return requiredFieldValidation(field.value);

    default:
      break;
  }
};
