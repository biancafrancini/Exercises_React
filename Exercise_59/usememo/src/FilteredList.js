import React, { useState, useMemo } from "react";

export function FilteredList() {
  const users = [
    { id: 1, name: "Bianca", age: 30 },
    { id: 2, name: "Bob", age: 10 },
    { id: 3, name: "Sara", age: 62 },
    { id: 4, name: "Leyla", age: 13 },
    { id: 5, name: "Carlo", age: 19 },
  ];
  const [user, setUser] = useState(users);

  const filteredArray = useMemo(() => {
    return user.filter((item) => item.age > 18);
  }, [user]);

  return (
    <div>
      {filteredArray.map((person, index) => (
        <div key={`user${index}`}>
          <strong>Id:</strong> {person.id}, 
          <strong> Name: </strong>{person.name},   
          <strong> Age: </strong>{person.age}
          <br/>
        </div>

      ))}
    </div>
  );
}
