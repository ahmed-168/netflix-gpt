export const checkSignInValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email ID is not Valid";

  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export const checkSignUpValidData = (email, password, fullName) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  const isFullNameValid = /^[A-Za-z][A-Za-z\s\-']{1,49}$/.test(fullName.trim());

  if (!isEmailValid) return "Email ID is not Valid";

  if (!isPasswordValid) return "Password is not valid";

  if (!isFullNameValid) return "Full Name is not valid";

  return null;
};
