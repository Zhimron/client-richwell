export const registerAdmin = async (credentials) => {
  const response = await fetch(
    'https://richwellcolleges.edu.ph/api/registrationEmployee.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    },
  );

  return await response.json();
};
