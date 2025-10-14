import React from 'react'
import { useSearchParams } from 'react-router-dom';

interface PaginationProps {
    page: number;
    pageSize: number;
    totalProducts: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, pageSize, totalProducts }) => {
    const hasPrev = page > 1
    const hasNext = totalProducts > page * pageSize
    const [searchParams, setSearchparams] = useSearchParams()

    const onPageChange = (page: number) => {
        searchParams.set('page', `${page}`)
        setSearchparams(searchParams)
    }

    const totalPages = Math.ceil(totalProducts / pageSize)
    const totalPagesArray = new Array(totalPages).fill(0).map((num, index) => index + 1)

    return (
        <div className='flex items-center gap-2 justify-center text-gray-400 mt-8'>
            <button
                disabled={!hasPrev}
                onClick={() => onPageChange(+page - 1)}
                className={`px-3 py-1 rounded border ${hasPrev ? "hover:bg-orange-200" : "opacity-50 cursor-not-allowed"}`}
            >
                previous
            </button>

            {totalPagesArray && totalPagesArray.map(num => (
                <button onClick={() => onPageChange(num)} key={num} className={`px-3 py-1 rounded border hover:bg-orange-100 ${page === num && 'bg hover:bg-orange-400 text-gray-500'}`}>
                    {num}
                </button>
            ))}

            <button
                disabled={!hasNext}
                onClick={() => onPageChange(+page + 1)}
                className={`px-3 py-1 rounded border ${hasNext ? "hover:bg-orange-200" : "opacity-50 cursor-not-allowed"}`}
            >
                next
            </button>
        </div>
    )
}

export default Pagination
