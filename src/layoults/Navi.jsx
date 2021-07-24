import React, { useEffect, useState } from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import Search from './Search'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router-dom'

export default function Navi() {

    const [isAuthenticaten, setIsAuthenticaten] = useState(true)

    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticaten(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticaten(true)
    }

    return (
        <div>
            <Menu inverted size='mini' fixed="top">
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
                        {isAuthenticaten ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
