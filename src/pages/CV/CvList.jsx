import React, { useEffect, useState } from 'react'
import CVService from '../../services/CVService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function CvList() {

    const [cvs, setCv] = useState([])

    useEffect(()=>{
        let cvService  = new CVService();
        cvService.getCVs().then(result=>setCv(result.data.data))
    })

    return (
        <div className="Table">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Firs Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>e-mail</Table.HeaderCell>
                        <Table.HeaderCell>Birth Day</Table.HeaderCell>
                        <Table.HeaderCell>Schools</Table.HeaderCell>
                        <Table.HeaderCell>Cover Letter</Table.HeaderCell>
                        <Table.HeaderCell>Languages</Table.HeaderCell>
                        <Table.HeaderCell>Programming Skills</Table.HeaderCell>
                        <Table.HeaderCell>Job Experiences</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    {
                        cvs.map(cv => (
                            <Table.Row key={cv.id}>
                                <Table.Cell>{cv.firsName}</Table.Cell>
                                <Table.Cell>{cv.lastName}</Table.Cell>
                                <Table.Cell>{cv.email}</Table.Cell>
                                <Table.Cell>{cv.birthDay}</Table.Cell>
                                <Table.Cell>{cv.schools}</Table.Cell>
                                <Table.Cell>{cv.coverLetter}</Table.Cell>
                                <Table.Cell>{cv.languages}</Table.Cell>
                                <Table.Cell>{cv.programmingSkills}</Table.Cell>
                                <Table.Cell>{cv.jobExperiences}</Table.Cell>
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
