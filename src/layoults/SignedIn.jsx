import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://lh3.googleusercontent.com/ogw/ADea4I5riJlEtkrPdJjWhzfL8GvkooljSJRfq8mXgR27RGg=s83-c-mo"/>
                <Dropdown pointing="top left" text="Bekir Geriş">
                    <Dropdown.Menu>
                        <Dropdown.Item text="bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
