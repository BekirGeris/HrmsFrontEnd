import React from 'react'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import CvAdd from '../pages/CV/CvAdd'
import CvList from '../pages/CV/CvList'
import EmployerList from '../pages/Employer/EmployerList'
import JobAdvertisementAdd from '../pages/JobAdvertisement/JobAdvertisementAdd'
import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList'
import JobPositionList from '../pages/JobPosition/JobPositionList'
import JobSeekerList from '../pages/JobSeeker/JobSeekerList'
import UserList from '../pages/User/UserList'
import Categories from './Categories'
import Home from './Home'
export default function Dashboard() {

    return (
        <div className="dasboard"> 
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                       <Categories/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/CvList" component={CvList}/>
                        <Route exact path="/EmployerList" component={EmployerList}/>
                        <Route exact path="/JobSeekerList" component={JobSeekerList}/>
                        <Route exact path="/JobAdvertisementList" component={JobAdvertisementList}/>
                        <Route exact path="/JobPositionList" component={JobPositionList}/>
                        <Route exact path="/UserList" component={UserList}/>
                        <Route exact path="/JobAdvertisementAdd" component={JobAdvertisementAdd}/>
                        <Route exact path="/CvAdd" component={CvAdd}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
