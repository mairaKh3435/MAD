function Students() {
    const students = [
        {
             id: 1,
              name: "Alice",
              age: 25 },
        {
             id: 2,
              name: "Bob",
               age: 30 },
        { id: 3,
             name: "Charlie",
              age: 28 }
    ];

    return students.map(students=> `ID: ${students.id}, Name: ${students.name}, Age: ${students.age}`);}

// Calling the function
console.log(Students());
