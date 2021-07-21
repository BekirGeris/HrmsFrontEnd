import React from 'react'
import { Grid } from 'semantic-ui-react'
import CvList from '../pages/CV/CvList'
import EmployerList from '../pages/Employer/EmployerList'
import JobAdvertisementList from '../pages/JobAdvertisement/JobAdvertisementList'
import JobPositionList from '../pages/JobPosition/JobPositionList'
import JobSeekerList from '../pages/JobSeeker/JobSeekerList'
import UserList from '../pages/User/UserList'
import Categories from './Categories'
export default function Dashboard() {

    return (
        <div> 
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                       <Categories/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <CvList/>
                        <EmployerList/>
                        <JobSeekerList/>
                        <JobAdvertisementList/>
                        <JobPositionList/>
                        <UserList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
