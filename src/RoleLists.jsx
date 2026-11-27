export const RoleLists = () => {
  const roles = [
    {
      id: 0,
      name: "IT Support",
      salary: 30000,
    },
    {
      id: 1,
      name: "Software Developer",
      salary: 45000,
    },
    {
      id: 2,
      name: "Service Desk Engineer",
      salary: 50000,
    },
  ];

  const roleElements = roles.map((designation) => {
    return (
      <div>
        <h3>Role: {designation.name}</h3>
        <p>Salary: {designation.salary}</p>
      </div>
    );
  });

  return (
    <div>
      <h3>Different roles in our company:</h3>
      {roleElements}
    </div>
  );
};
