import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div className="category" >
            <Menu pointing vertical>
                <Menu.Item name='CV' />
                <Menu.Item name='Employer' />
                <Menu.Item name='Job Seeker'/>
                <Menu.Item name='Job Advertisement'/>
            </Menu>
        </div>
    )
}
