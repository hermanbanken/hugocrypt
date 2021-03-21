import UsersControl from './UsersControl'
import UsersPreview from './UsersPreview'
import PublicKeyControl from './PublicKeyControl'
import PublicKeyPreview from './PublicKeyPreview'

if (typeof window !== 'undefined') {
  window.HugoCryptUsersControl = UsersControl
  window.HugoCryptUsersPreview = UsersPreview
  window.HugoCryptPublicKeyControl = PublicKeyControl
  window.HugoCryptPublicKeyPreview = PublicKeyPreview
}

export {
  UsersControl as HugoCryptUsersControl,
  UsersPreview as HugoCryptUsersPreview,
  PublicKeyControl as HugoCryptPublicKeyControl,
  PublicKeyPreview as HugoCryptPublicKeyPreview,
}
