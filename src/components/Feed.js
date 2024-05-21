import React from 'react'
import Thread from './Thread'

const Feed = ({user, filteredThreads, setOpenPopUp}) => {
  return (
    <div className='feed'>
        {filteredThreads?.map(filteredThread => <Thread key={filteredThread.id} user={user} filteredThread={filteredThread} setOpenPopUp={setOpenPopUp}/>)}
    </div>
  )
}

export default Feed