import React, { useEffect, useState } from 'react'
import EmployerService from '../../services/EmployerService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(()=>{
        let employerService  = new EmployerService();
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
    })

    return (
        <div className="Table">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Web Site</Table.HeaderCell>
                        <Table.HeaderCell>Telephone Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.telephoneNumber}>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.webSite}</Table.Cell>
                                <Table.Cell>{employer.telephoneNumber}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
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
