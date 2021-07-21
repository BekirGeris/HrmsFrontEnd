import React, { useEffect, useState } from 'react'
import UserService from '../../services/UserService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function UserList() {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        let userService  = new UserService();
        userService.getUsers().then(result=>setUsers(result.data.data))
    })

    return (
        <div className="Table">
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>e-mail</Table.HeaderCell>
                    <Table.HeaderCell>Password</Table.HeaderCell>
                </Table.Row>
            </Table.Header>


            <Table.Body>
                {
                    users.map(user => (
                        <Table.Row key={user.id}>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.Password}</Table.Cell>
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
