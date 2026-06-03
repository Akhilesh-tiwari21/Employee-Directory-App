
export const paginateEmployees = (
    employees,
    currentPage,
    employeesPerPage
) => {
    const startIndex =
    (currentPage - 1) * employeesPerPage;

    const endIndex = startIndex + employeesPerPage;

    return employees.slice(
        startIndex,
        endIndex
    );
};