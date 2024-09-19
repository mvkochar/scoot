import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import './VacanciesItem.css'

type VacanciesItemProps = {
    position: string
    location: string
}

const VacanciesItem = ({position, location}:VacanciesItemProps) => {
  return (
    <div className='vacancies-item d-f jc-sb align-center'>
        <div>
            <h4 className="vacancies-item-pos">{position}</h4>
            <p className="vacancies-item-location">{location}</p>
        </div>
        <CustomButton>Apply</CustomButton>
    </div>
  )
}

export default VacanciesItem