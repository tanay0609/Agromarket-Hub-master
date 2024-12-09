import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'

const Settings = () => {
  return (
    <>
            <h1 className="mb-14 text-3xl font-bold text-white">
                Edit Profile
            </h1>

            {/* Change Profile Picture */}
            <ChangeProfilePicture />

            {/* Edit Profile */}
            <EditProfile />

            {/* Update Password */}
            <UpdatePassword />

            {/* Delete Account */}
            <DeleteAccount />
        </>
  )
}

export default Settings
