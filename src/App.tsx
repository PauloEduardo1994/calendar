import React, { useContext, useEffect, useState } from 'react'

import dayjs from 'dayjs'

import { Card } from '@siakit/card'
import { Flex, Grid } from '@siakit/layout'
import { Text } from '@siakit/text'

import CalendarHeader from './components/CalendarHeader'
import EventModal from './components/EventModal'
import Month from './components/Month'
import Sidebar from './components/Sidebar'
import GlobalContext from './context/GlobalContext'
import { getMonth } from './util'

// const days = {
//   day =
// }

export function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  const NewDate = dayjs()

  console.log(NewDate)

  return (
    <Flex flex>
      <Flex width={256}>teste</Flex>
      <Flex flex direction="column">
        <Flex align="center" justify="center" height={64}>
          Header
        </Flex>
        <Grid gap flex padding rows={5} columns={7}>
          <Card align="center" justify="center">
            {/* {for()} */}
          </Card>
        </Grid>
      </Flex>
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
