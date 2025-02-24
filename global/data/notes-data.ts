async function noteData(userName: string, userEmail: string) {
  const categoriesOptions = ["Personal", "Home", "Work"];
  // // Randomly select a category from the array
  const randomIndex = Math.floor(Math.random() * categoriesOptions.length);
  const randomCategory = categoriesOptions[randomIndex];
  const title = `New User: ${userName}`;
  const description = `Hello, my name is ${userName} Please feel free to email me ${userEmail}`;

  return { randomCategory, title, description };
}

export default noteData;
