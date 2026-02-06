interface PaginationProps {
  page: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  total,
  onPageChange,
}: PaginationProps) {
  if (total <= 1) return null;

  return (
    <div>
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>

      <span>
        {page} / {total}
      </span>

      <button
        disabled={page === total}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
