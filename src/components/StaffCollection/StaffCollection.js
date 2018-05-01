// @flow

import * as React from 'react'
// do misc import statements here from other components
import StaffCard from '../StaffCard'
import './StaffCollection.scss'

type PropsType = {
  executive: Array<MemberDataType>,
  members: Array<MemberDataType>,
  representatives: Array<MemberDataType>
}

export default (props: PropsType): React.Element<*> => {
  const { executive, members, representatives } = props

  return (
    <div className="staff-collection">
      {executive.map(m => (
        <StaffCard
          key={`${m.name.first}_${m.name.last}`}
          images={m.images}
          name={m.name.first}
          position={m.position}
          involvement={m.involvement}
          restaurant={m.restaurant}
          major={m.major}
          description={m.description}
          links={m.links}
        />
      ))}

      {members.map(m => (
        <StaffCard
          key={`${m.name.first}_${m.name.last}`}
          images={m.images}
          name={m.name.first}
          position={m.position}
          involvement={m.involvement}
          restaurant={m.restaurant}
          major={m.major}
          description={m.description}
          links={m.links}
        />
      ))}

      {representatives.map(m => (
        <StaffCard
          key={`${m.name.first}_${m.name.last}`}
          images={m.images}
          name={m.name.first}
          position={m.position}
          involvement={m.involvement}
          restaurant={m.restaurant}
          major={m.major}
          description={m.description}
          links={m.links}
        />
      ))}
    </div>
  )
}
