const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
  ];
  
  const modifiedNames = users.map(user => {
    return user.name.startsWith('A') ? 'Anacleto' : user.name;
  });
  
  console.log("Modified Names Array:", modifiedNames);
  