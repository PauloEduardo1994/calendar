import React, { useContext, useEffect, useState } from 'react'

import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

import CalendarHeader from './components/CalendarHeader'
import EventModal from './components/EventModal'
import Month from './components/Month'
import Sidebar from './components/Sidebar'
import GlobalContext from './context/GlobalContext'
import { getMonth } from './util'

export function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])
  return (
    <Flex flex align="center" justify="center">
      <Text size="2xl">{"It's not complete yet"}</Text>
    </Flex>
    // <React.Fragment>
    //   {showEventModal && <EventModal />}

    //   <div className="h-screen flex flex-col">
    //     <CalendarHeader />
    //     <div className="flex flex-1">
    //       <Sidebar />
    //       <Month month={currenMonth} />
    //     </div>
    //   </div>
    // </React.Fragment>
  )
}
