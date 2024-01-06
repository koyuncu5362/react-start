

import React from 'react'
import {Button, Menu} from 'semantic-ui-react';

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn} primary>Giriş </Button>
        <Button >Kayıt </Button>
      </Menu.Item>
    </div>
  )
}