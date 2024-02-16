import React from 'react'

const HighLights = ({prop}) => {
  return (
    <span className='highlights'>{prop}</span>
  )
}

const UserCard = ({ info }) => {
  const { name, country, charge, img, company, summary } = info

  return (
    <div className='user-card'>
      <div>
        <img src={img} alt={name} className='user-card-img' />
      </div>
      <div className='user-info'>
        <p>
          Hi, I'm <HighLights prop={charge} />,
          currently living in <HighLights prop={country} />
          {!company === 'None' ? (
            <p>
              and my current charge is <HighLights prop={company} />.
            </p>
          ) : '.'}
          <br/>
          <br/>
          <HighLights prop="Summary" />
          <hr/>
          {summary}
        </p>
      </div>
    </div>
  )
}

export default UserCard