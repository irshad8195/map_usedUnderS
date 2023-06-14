import "bootstrap/dist/css/bootstrap.min.css";
const Employee = ({ employees }) => {
  return (
    <>
                     {" "}
      <table style={{ width: "60%" }} className="table">
                               {" "}
        <thead className="thead-light">
                                         {" "}
          <tr key={employees.empId}>
                                                    <th>EmpID</th>             
                                      <th>Name</th>                             
                      <th>Designation</th>                               {" "}
          </tr>
                                 {" "}
        </thead>
                               {" "}
        <tbody>
                                         {" "}
          {employees.map((employee) => {
            return (
              <tr>
                                                               {" "}
                <td>{employee.empId}</td>                                       
                        <td>{employee.name}</td>                               
                                <td>{employee.designation}</td>                 
                                     {" "}
              </tr>
            );
          })}
                                 {" "}
        </tbody>
                       {" "}
      </table>
      <br />
      <br />
             {" "}
    </>
  );
};
export default Employee;

// const Employess = ({employess}) => {
//   return (
//     <>
//     <thead>
//       <tr>
//         <th>Emp Id</th>
//         <th>Name</th>
//         <th>Designation</th>
//       </tr>
//     </thead>
// {employess.map(e)=>{
//   return(
//     <tr>
//       <td>
//         {e.empId}
//       </td>
//       </tr>
//   )
// }}
//     <tbody>
//       </tbody>
//       </>
//   );
// };
// export default Employess;
