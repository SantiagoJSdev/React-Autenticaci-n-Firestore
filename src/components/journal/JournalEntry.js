import React from 'react'

import moment  from 'moment'
import { useDispatch } from 'react-redux'
import { notesAction } from '../../actions/notes'

export const JournalEntry = ({id, date, title, body, url}) => {

    const noteData = moment(date)
    const dispatch = useDispatch();

const handleEntryClick =()=>{
    const nota = {date, title, body, url}
    dispatch(notesAction(id, nota))
}

    
    return (
        <div 
        onClick={handleEntryClick}
        className="journal__entry pointer animate__animated animate__fadeIn">
            
            {
                url &&
                <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${ url })`
                }}
            ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteData.format('dddd')}</span>
                <h4>{noteData.format('Do')}</h4>
            </div>

        </div>
    )
}
