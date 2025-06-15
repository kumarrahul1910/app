interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

// Mock user database
const users: User[] = [
  {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    password: 'password123',
  },
];

export const authService = {
  login: async (email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      return { success: true, user };
    }
    
    return { success: false, error: 'Invalid credentials' };
  },

  signup: async (name: string, email: string, phone: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (users.some(u => u.email === email)) {
      return { success: false, error: 'Email already exists' };
    }

    if (users.some(u => u.phone === phone)) {
      return { success: false, error: 'Phone number already registered' };
    }

    const newUser: User = {
      id: String(users.length + 1),
      name,
      email,
      phone,
      password,
    };

    users.push(newUser);
    return { success: true, user: newUser };
  },
}; 