//todo remove
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAllCards } from '../api/cards'

import { getAllLists } from '../api/lists'

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const FlexRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ImgWrapped = styled.img`
    width: 300px;
`

export const Board = () => {
    const [lists, setLists] = useState([])
    const [cards, setCards] = useState([])
    useEffect(() => {
        const fetchLists = async () => {
            try {
                const lists = await getAllLists()
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setLists(lists as any)
                const cards = await getAllCards()
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setCards(cards as any)
            } catch (e) {}
        }

        fetchLists()
    }, [])
    return (
        <div>
            Board
            <FlexColumn>
                <FlexRow>
                    <div>{lists.map((list: any) => list.name)}</div>
                </FlexRow>
                <FlexColumn>
                    {cards.map((card: any) => (
                        <FlexRow key={card.id}>
                            <p>{card.name}</p> <p>{card.labels.map((label: any) => label.color)}</p>
                            {card.attachments.length > 0 && <ImgWrapped src={card.cover.scaled[3].url} />}
                        </FlexRow>
                    ))}
                </FlexColumn>
            </FlexColumn>
        </div>
    )
}
