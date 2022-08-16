import React, { createContext, ReactNode, useContext, useState } from 'react';
import { setSyntheticLeadingComments } from 'typescript';

type CardContextProps = {
    children: ReactNode
}

type CardAddElements = {
    add : (id: number) => void
    remove : (id: number) => void
    AllofCards: CardId[]
}

type CardId = {
    id: number
}

const CardContext = createContext({} as CardAddElements);

export function useCardContext() {
    return useContext(CardContext);
}

export function CardStart({children}: CardContextProps){
    const [AllofCards, setCard] = useState<CardId[]>([])

    function add(id: number){
        setCard(cards => {
            return [...cards, {id}]
        })
    }

    function remove(id: number){
        setCard(cards => {
            return cards.filter(el => el.id !== id)
        })
    }

    return (
        <CardContext.Provider value={{add, remove, AllofCards}}>
            {children}
        </CardContext.Provider>
    );
}