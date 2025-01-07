
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useContext } from 'react'
import AuthPage from './pages/auth'
import InstructorDashboardpage from './pages/instructor'
import RouteGuard from './components/route-guard'
import { AuthContext } from './context/auth-context'
import StudentViewCommonLayout from './components/student-view/commonLayout'
import StudentHomePage from './pages/student/home'
import AddNewCoursePage from './pages/instructor/add-new-course'
function App() {
  const { auth } = useContext(AuthContext);
  return (
    <><Routes>
        <Route
        path="/auth"
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/instructor"
        element={
          <RouteGuard
            element={<InstructorDashboardpage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
       <Route
        path="/instructor/create-new-course"
        element={
          <RouteGuard
            element={<AddNewCoursePage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
       <Route
        path="/"
        element={
          <RouteGuard
            element={<StudentViewCommonLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      >
        <Route path="" element={<StudentHomePage />} />
        <Route path="home" element={<StudentHomePage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
