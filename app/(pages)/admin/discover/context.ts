import React, { useContext } from 'react'
import { SearchResultType } from './types'

interface ContextType {
    searchResults: SearchResultType[]
    setSearchResults: React.Dispatch<React.SetStateAction<SearchResultType[]>>
    selectedResults: SearchResultType[]
    setSelectedResults: React.Dispatch<React.SetStateAction<SearchResultType[]>>
    
}

export const SearchResultContext = React.createContext<ContextType | undefined>(undefined)

export const useSearchResultContext = () => {
    const context = React.useContext(SearchResultContext)

    if(context === undefined)
        throw new Error(' SearchResultContext is undefined')

    return context
}