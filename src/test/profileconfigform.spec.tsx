import React from 'react'
import { shallow } from 'enzyme'

import { ProfileConfigForm, ProfileConigFormProps } from '../reactjs/components/ProfileEditor/ProfileConfigForm'

describe('Profile config form', () => {
  const profileProps: ProfileConigFormProps = {
    handleChange: jest.fn(),
    handleClick: jest.fn(),
    handleOnBlur: jest.fn(),
    handleShowPassword: false,
    handleSubmit: jest.fn(),
    isActivationSelected: false,
    notificationCallback: jest.fn(),
    propValiables: {},
    stateVariables: { profileFormDetails: {} },
    toggleCiraPopup: false,
    toggleNetworkPopup: false,
    handleShowMEBXPassword: false
  }

  it('should render the form component without crashing', () => {
    const wrapper = shallow(<ProfileConfigForm {...profileProps} />)
    console.info('wrapper', wrapper.debug())
    expect(typeof wrapper).toBe('object')
    expect(wrapper.find('form')).toHaveLength(1)
  })
})
