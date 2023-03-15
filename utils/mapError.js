const errors = {
  TOKEN_ALREADY_EXISTS: "The token already exists.",
  TOKEN_IS_NOT_A_STRING: "The token must have only letters.",
  BALANCE_IS_NOT_A_NUMBER: "The balance must have only numbers.",
  TOKEN_IS_REQUIRED: "Token field is required.",
  BALANCE_IS_REQUIRED: "Balance field is required.",
  TOKEN_MUST_HAVE_THREE: "Token field must be have three characters"
};

export default function mapError(error) {
  return errors[error];
};

