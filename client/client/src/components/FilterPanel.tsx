import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useSearchParams } from 'react-router-dom'
import { tryGettingCategoryNames } from '@/services/api/category'

const FilterPanel = () => {
    const [searchParams, setSearchparams] = useSearchParams()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await tryGettingCategoryNames()
                setCategories(response)
            } catch (err) {
                console.log("Error: ", err);
            }
        }

        fetchCategories()
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target
        const { name, value, type } = target

        if (type === 'checkbox') {
            if (target.checked) {
                searchParams.set(name, 'true')
            } else {
                searchParams.delete(name)
            }
        } else if (value) {
            searchParams.set(name, value)
        } else {
            searchParams.delete(name)
        }

        setSearchparams(searchParams)
    }

    const handleReset = () => {
        searchParams.delete('search')
        searchParams.delete('category_name')
        searchParams.delete('minPrice')
        searchParams.delete('maxPrice')
        searchParams.delete('onlySales')
        setSearchparams(searchParams)
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className='flex items-center justify-between mb-4'>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">Filter</h3>
                <Button variant="ghost" size="sm" onClick={handleReset}>Trash</Button>
            </div>

            <form className='space-y-4'>
                <Input
                    placeholder='Search product'
                    value={searchParams.get('search') || ''}
                    name="search"
                    onChange={handleInputChange}
                />

                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Category</label>
                    <select
                        name="category_name"
                        value={searchParams.get('category_name') || ''}
                        onChange={handleInputChange}
                        className='block w-full rounded-lg border border-gray-300 px-3 py-2.5  focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
                    >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Price</label>
                    <div className='grid grid-cols-2 gap-2'>
                        <Input
                            type="number"
                            name="minPrice"
                            placeholder='Min price'
                            value={searchParams.get('minPrice') || ''}
                            onChange={handleInputChange}
                        />
                        <Input
                            type="number"
                            name="maxPrice"
                            placeholder='Max price'
                            value={searchParams.get('maxPrice') || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className='flex items-center'>
                    <input
                        type="checkbox"
                        id="onlySales"
                        name="onlySales"
                        checked={searchParams.get('onlySales') === 'true'}
                        onChange={handleInputChange}
                        className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                    />
                    <label htmlFor="onlySales" className='ml-2 text-sm text-gray-700'>Sales</label>
                </div>
            </form>
        </div>
    )
}

export default FilterPanel

