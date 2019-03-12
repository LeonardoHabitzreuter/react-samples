import React from 'react'
import { shallow } from 'enzyme'
import Permissions from './permissions'

describe('permissions component', () => {
  it('should render the text when has permissions', () => {
    const component = shallow(
      <Permissions>{
        (hasPermissions) => <h1>{hasPermissions ? 'has permissions!' : ''}</h1>
      }</Permissions>
    )

    expect(component.text()).toBe('has permissions!')
  })
})
