function Pagination({
    currentPage,
    totalPages,
    onPageChange,
})
{
    return (
    <div className="flex justify-center items-center gap-4 mt-8 ">
        <button
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500text-white rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        >
            Previous
        </button>

        <span>
            Page {currentPage} of {totalPages}
        </span>

        <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
            Next
        </button>
    </div>
    );
}

export default Pagination;