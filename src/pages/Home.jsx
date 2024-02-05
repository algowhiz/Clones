import React from 'react'
import Body from '../components/Body'
import Row from '../components/Row'
import requests from '../req'

const Home = () => {
  return (
    <div>
        <Body />
        <Row row_id='1' title='upcoming' fetchUrl={requests.requestUpcoming} />
        <Row row_id='2' title='popular' fetchUrl={requests.requestPopular} />
        <Row row_id='3' title='trending' fetchUrl={requests.requestTrending} />
        <Row row_id='4' title='toprated' fetchUrl={requests.requestTopRated} />
        <Row row_id='5' title='horror' fetchUrl={requests.requestHorror} />
    </div>
  )
}

export default Home