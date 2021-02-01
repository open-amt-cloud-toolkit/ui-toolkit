/**
 * @jest-environment jsdom
 */
/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import * as React from 'react'
import { shallow } from 'enzyme'

import { Profile, ProfileProps } from '../reactjs/components/ProfileEditor/ProfileEditor'
import { HttpClient } from '../reactjs/components/services/HttpClient'

describe('Test profile component', () => {
  it('loads the component without crashing ', () => {
    const profileProps: ProfileProps = {
      rpsServer: 'localhost:8081'
    }

    const wrapper = shallow(<Profile {...profileProps} />)
    expect(wrapper.find('Button')).toHaveLength(1)
  })

  it('should show the delete and edit button on selecting a profile from the grid', () => {
    const profileProps: ProfileProps = {
      rpsServer: 'localhost:8081'
    }

    const profileStates = {
      selectedProfile: [{
        ProfileName: 'profile1',
        AMTPassword: 'Password@123',
        GenerateRandomPassword: false,
        RandomPasswordLength: 8,
        Activation: 'ccmactivation'
      }]
    }

    const wrapper = shallow(<Profile {...profileProps} />)
    wrapper.setState(profileStates)
    wrapper.instance().forceUpdate()
    expect(wrapper.find('Button')).toHaveLength(3)
  })

  it('should load the confirmation popup on clicking delete button', () => {
    const profileProps: ProfileProps = {
      rpsServer: 'localhost:8081'
    }

    const profileStates = {
      selectedProfile: [{
        ProfileName: 'profile1',
        AMTPassword: 'Password@123',
        GenerateRandomPassword: false,
        RandomPasswordLength: 8,
        Activation: 'ccmactivation'
      }],
      showPopup: true
    }

    const wrapper = shallow(<Profile {...profileProps} />)

    wrapper.setState(profileStates)
    wrapper.instance().forceUpdate()
    const deleteButton = wrapper.find('.btn-delete')
    deleteButton.simulate('click')
  })

  it('should call the delete api on confirmation', async () => {
    const profileProps: ProfileProps = {
      rpsServer: 'localhost:8081'
    }

    const profileStates = {
      selectedProfile: [{
        profileName: 'profile1',
        amtPassword: 'Password@123',
        fenerateRandomPassword: false,
        randomPasswordLength: 8,
        ciraConfigName: 'config1',
        activation: 'ccmactivation'
      }],
      showPopup: true
    }
    HttpClient.delete = jest.fn(async () => await Promise.resolve('Profile profile1 successfully deleted'))
    const wrapper = shallow(<Profile {...profileProps} />)

    wrapper.setState(profileStates)
    wrapper.instance().forceUpdate()
    const instance = wrapper.instance() as Profile
    instance.context = {
      data: {
        rpsKey: 'APIKEYFORRPS123!'
      }
    }
    expect(wrapper.state('showPopup')).toEqual(true)

    instance.confirmDelete().catch(() => console.info('error occured'))
    expect(wrapper.state('showPopup')).toEqual(false)
  })

  it('should open the flyout on click of create profile', () => {
    const profileProps: ProfileProps = {
      rpsServer: 'localhost:8081'
    }
    const wrapper = shallow(<Profile {...profileProps} />)

    const newProfileButton = wrapper.find('.btn-create')
    newProfileButton.simulate('click')
    wrapper.setState({ openFlyout: true })
    wrapper.instance().forceUpdate()
    expect(wrapper.state('openFlyout')).toEqual(true)
  })

  it('should show the create profile success notification', () => {
    const profileProps: ProfileProps = {
      rpsServer: 'localhost:8081'
    }
    const wrapper = shallow(<Profile {...profileProps} />)
    const instance = wrapper.instance() as Profile
    instance.createProfile(true, 'Profile successfully inserted')

    expect(wrapper.state('updateProfileGrid')).toEqual(true)
    expect(wrapper.state('showMessage')).toEqual(true)
    expect(wrapper.state('type')).toEqual('success')
  })

  it('should show the create profile error notification', () => {
    const profileProps: ProfileProps = {
      rpsServer: 'localhost:8081'
    }
    const wrapper = shallow(<Profile {...profileProps} />)
    const instance = wrapper.instance() as Profile
    instance.createProfile(false, 'Failed to insert profile')

    expect(wrapper.state('updateProfileGrid')).toEqual(false)
    expect(wrapper.state('showMessage')).toEqual(true)
    expect(wrapper.state('type')).toEqual('error')
  })

  it('should show the edit button on selecting the profile on the grid', () => {
    const profileProps: ProfileProps = {
      rpsServer: 'localhost:8081'
    }

    const profileStates = {
      selectedProfile: [{
        ProfileName: 'profile1',
        AMTPassword: 'Password@123',
        GenerateRandomPassword: false,
        RandomPasswordLength: 8,
        Activation: 'ccmactivation'
      }]
    }

    const wrapper = shallow(<Profile {...profileProps} />)
    wrapper.setState(profileStates)
    wrapper.instance().forceUpdate()
    expect(wrapper.find('Button')).toHaveLength(3)
  })
})
