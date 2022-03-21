import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from 'react-router-dom'

import LayoutDefault from '../layouts/layoutDefault/LayoutDefault'
import PageNotFound from '../pages/pageNotFound/PageNotFound'
import Home from '../pages/home/Home'
import Discover from '../pages/discover/Discover'
import NewRecord from '../pages/newRecord/NewRecord'
import Inbox from '../pages/inbox/Inbox'
import Profile from '../pages/profile/Profile'

function index() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LayoutDefault />}>
            <Route path='*' element={<PageNotFound />} />
            <Route index element={<Home />} />
            <Route path='discover' element={<Discover />} />
            <Route path='new-record' element={<NewRecord />} />
            <Route path='inbox' element={<Inbox />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
        <Outlet />
      </Router>
    </>
  )
}

export default index
