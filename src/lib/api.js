const FIREBASE_DOMAIN = 'https://expense-tracker-bfbd6-default-rtdb.firebaseio.com';

export async function getAllExpenses() {
  const response = await fetch(`${FIREBASE_DOMAIN}/expenses.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch expenses.');
  }

  const transformedExpenses = [];

  for (const key in data) {
    const expenseObj = {
      id: key,
      ...data[key],
    };

    transformedExpenses.push(expenseObj);
  }
  console.log(transformedExpenses);
  return transformedExpenses;
}


export async function addExpense(expenseData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/expenses.json`, {
    method: 'POST',
    body: JSON.stringify(expenseData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create expense.');
  }
  return null;
  // return { expenseId: data.id };
}

