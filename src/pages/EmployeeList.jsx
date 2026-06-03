import { useState } from "react";
import { useEmployees } from "../hooks/useEmployees";

import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import Pagination from "../components/Pagination";


function EmployeeList() {
    const { employees, loading, error } = useEmployees();

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const employeesPerPage = 10;

    const filteredEmployees = employees.filter((employee) => {
        const fullName = `${employee.firstName} ${employee.lastName}`;

        return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const start = (currentPage - 1) * employeesPerPage;

    const end = start + employeesPerPage;

    const paginatedEmployees = filteredEmployees.slice(start, end);

    const totalPages = Math.ceil(
        filteredEmployees.length /employeesPerPage
    );

    if (loading) {
        return <LoadingState />;
    }

    if (error) {
        return (
        <ErrorState message={error} />
        );
    }

    return (
    <div className="min-h-screen p-4">

    {/* Search Bar */}
    <div className="flex justify-center mb-8">
        <SearchBar
        value={searchTerm}
        onChange={(value) => {
            setSearchTerm(value);
            setCurrentPage(1);
        }}
        />
    </div>

    {/* Empty State */}
    {filteredEmployees.length === 0 ? (
        <EmptyState />
    ) : (
    <>
        {/* Cards Grid */}
        <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
            {paginatedEmployees.map((employee) => (
                <EmployeeCard
                key={employee.id}
                employee={employee}
                />
            ))}
        </div>

        {/* Pagination */}
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        />
    </>
    )}
  </div>
  );
}

export default EmployeeList;