import React from 'react'
import { ValidatorComponent } from 'react-form-validator-core'
/* eslint-disable no-unused-vars */
class TextValidator extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      ...rest
    } = this.props

    return (
      <div>
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" />
        <input
          {...rest}
          ref={r => {
            this.input = r
          }}
        />
        {this.errorText()}
      </div>
    )
  }

  errorText() {
    const { isValid } = this.state

    if (isValid) {
      return null
    }

    return <div style={{ color: 'red' }}>{this.getErrorMessage()}</div>
  }
}

export default TextValidator
