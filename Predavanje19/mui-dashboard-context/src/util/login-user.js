export const dummyUser = {
  name: "Viktor",
  email: "user@creativehub.mk",
  role: "Admin",
  routes: ["Notifications", "Issues", "Users", "Services"],
};

const waitOneSecond = () => {
  return new Promise((resolver) => setTimeout(resolver, 3000));
};

const loginUser = async () => {
  await waitOneSecond();
  return dummyUser;
};

export default loginUser;
