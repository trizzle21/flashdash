
// To be filled in with real authentication
const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};
  
export default fakeAuth;