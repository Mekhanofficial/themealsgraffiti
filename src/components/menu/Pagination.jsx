import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) return null;

  const pageNumbers = [];
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
      className="flex items-center justify-center gap-2 mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg transition-all ${
          currentPage === 1
            ? "text-zinc-600 cursor-not-allowed"
            : "text-white hover:bg-zinc-800"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Show first page if not in range */}
      {startPage > 1 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className={`w-10 h-10 rounded-lg font-medium transition-all ${
              currentPage === 1
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            1
          </button>
          {startPage > 2 && (
            <span className="text-zinc-600 px-2">...</span>
          )}
        </>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`w-10 h-10 rounded-lg font-medium transition-all ${
              currentPage === number
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Show last page if not in range */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="text-zinc-600 px-2">...</span>
          )}
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`w-10 h-10 rounded-lg font-medium transition-all ${
              currentPage === totalPages
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg transition-all ${
          currentPage === totalPages
            ? "text-zinc-600 cursor-not-allowed"
            : "text-white hover:bg-zinc-800"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </motion.div>
  );
}