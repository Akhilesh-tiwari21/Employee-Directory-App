import { Link } from "react-router-dom";

function EmployeeCard({ employee }) {
    return (
    <Link to={`/employees/${employee.id}`}>
        <div
        className="  bg-gray-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
        >

            <img
            src={employee.image}
            alt={employee.firstName}
            className=" w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto"
            />

            <h3 className="text-xl font-bold text-gray-800 mb-2">
                Name:{employee.firstName} {employee.lastName}
            </h3>

            <p className="text-smtext-gray-500 break-all mb-2">
                Email:{employee.email}
            </p>

            <p
            className="inline-block px-3 py-1 rounded-full bg-violet-100
            text-violet-700 text-sm font-medium"
            >
                Department:{employee.company.department}
            </p>
        </div>
    </Link>
  );
}

export default EmployeeCard;