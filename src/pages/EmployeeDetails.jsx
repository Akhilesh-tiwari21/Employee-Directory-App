import { useParams } from "react-router-dom";
import { useEmployees } from "../hooks/useEmployees";

function EmployeeDetails() {
    const { id } = useParams();

    const { employees, loading } = useEmployees();

    if (loading) {
        return <h2>Loading...</h2>;
    }

    const employee = employees.find(
        (emp) => emp.id === Number(id)
    );

    if (!employee) {
        return <h2>Employee not found</h2>;
    }

    return (
    <div  className=" max-w-xs mx-auto bg-gray-200 rounded-2xl shadow-lg p-6">
        <img src={employee.image} alt={employee.firstName}
        className=" w-32 h-32 rounded-full mx-auto mb-6"
        />

        <h1 className="text-2xl font-bold">
            {employee.firstName} {employee.lastName}
        </h1>

        <p>Email: {employee.email}</p>
        <p>Phone: {employee.phone}</p>
        <p>Age: {employee.age}</p>
        <p>Gender: {employee.gender}</p>

        <p>
            Department:{" "}
            {employee.company.department}
        </p>

        <p>
            Company:{" "}
            {employee.company.name}
        </p>

        <p>
            Address:
            {" "}
            {employee.address.address}
        </p>
    </div>
  );
}

export default EmployeeDetails;