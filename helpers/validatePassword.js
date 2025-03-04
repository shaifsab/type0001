const validatePassword = (password) => {
    if (password.length < 8 || password.length > 16) {
      return "Password must be between 8 and 16 characters.";
    }
  
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
  
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
  
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
  
    return false;
  };
  
  module.exports = validatePassword;
  