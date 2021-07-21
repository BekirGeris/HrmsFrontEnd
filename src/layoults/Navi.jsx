import React from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import Search from './Search'

export default function Navi() {
    return (
        <div>
            <Menu inverted size='large' fixed="top">
                <Menu.Item name='home' />
                <Menu.Item name='messages' />

                <Menu.Item>
                    <Search />
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
