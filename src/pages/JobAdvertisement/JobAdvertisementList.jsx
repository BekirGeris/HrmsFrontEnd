import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../../services/JobAdvertisementService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function JobAdvertisementList() {
        
    const [jobAdvertisements, setjobAdvertisements] = useState([])

    useEffect(()=>{
        let jobAdvertisementService  = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result=>setjobAdvertisements(result.data.data))
    })

    return (
        <div className="Table">
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>State</Table.HeaderCell>
                    <Table.HeaderCell>Job Description</Table.HeaderCell>
                    <Table.HeaderCell>Min Salary-Max Salary</Table.HeaderCell>
                    <Table.HeaderCell>Number Of Open Positions</Table.HeaderCell>
                    <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                    <Table.HeaderCell>Listing Date</Table.HeaderCell>
                    <Table.HeaderCell>Employer Name</Table.HeaderCell>
                    <Table.HeaderCell>City</Table.HeaderCell>
                </Table.Row>
            </Table.Header>


            <Table.Body>
                {
                    jobAdvertisements.map(jobAdvertisement => (
                        <Table.Row key={jobAdvertisement.id}>
                            <Table.Cell>{jobAdvertisement.active}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.minSalary + "-" + jobAdvertisement.maxSalary}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.listingDate}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.jobPositions}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.employerUser}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.city}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='8'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    </div>
    )
}
