import React, { useEffect, useState } from 'react'
import JobPositionService from '../../services/JobPositionService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function JobPositionList() {

    const [jobPositions, setjobPositions] = useState([])

    useEffect(()=>{
        let jobPositionService  = new JobPositionService();
        jobPositionService.getJobPositions().then(result=>setjobPositions(result.data.data))
    })

    return (
        <div className="Table">
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Position Id</Table.HeaderCell>
                    <Table.HeaderCell>Job Name</Table.HeaderCell>
                </Table.Row>
            </Table.Header>


            <Table.Body>
                {
                    jobPositions.map(jobPosition => (
                        <Table.Row key={jobPosition.id}>
                            <Table.Cell>{jobPosition.positionId}</Table.Cell>
                            <Table.Cell>{jobPosition.jobName}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='9'>
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
