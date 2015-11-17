import {dispatcher} from 'js/dispatcher'
import {app as config} from 'js/config'
import {strings} from 'js/strings'

// Lib Vendor
import React from 'react'

export const actions = dispatcher.createActions(class {
  init () {
    document.title = strings.title
    document.body.className = config.dojoTheme
    this.dispatch()
  }

  setLoggedInStatus (context) {
    this.dispatch(context)
  }

})
