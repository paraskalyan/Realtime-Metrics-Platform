export const signup = async (data: Signup) => {
  const { email, name, username, password } = data;
  if (!email || !name || !username || !password) {
    throw new AppError("All fields are required", 400);
  }
  if (password.length < 8) {
    throw new AppError("Password must be 8 characters long", 400);
  }
  if (!isEmail(email)) {
    throw new AppError("Email address not valid", 400);
  }
  if (!isValidUsername(username)) {
    throw new AppError(
      "Username must be 3-20 chars, alphanumeric or underscore",
      400,
    );
  }
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });

  if (existingUser) {
    throw new AppError("Email or username already in use", 400);
  }

  const hashedPassword = await argon2.hash(password);

  const newUser = await prisma.user.create({
    data: {
      email: email,
      name: name,
      username: username,
      password: hashedPassword,
    },
  });
  const { password: _, ...safeUser } = newUser;
  return { message: "success", user: safeUser };
};

export const login = async (data: Login) => {
  const { username, password } = data;
  if (!username || !password) {
    throw new AppError("Username and password are required", 400);
  }
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  if (!user) {
    throw new AppError("Invalid Credentials", 401);
  }

  const verifyPassword = await argon2.verify(user?.password, password);
  if (!verifyPassword) {
    throw new AppError("Invalid Credentials", 401);
  }
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
    },
    JWT_SECRET,
    { expiresIn: "1d" },
  );
  return token;
};

export const logout = async () => {};
