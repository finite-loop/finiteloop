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
        <label className="block uppercase tracking-wide text-xs font-bold mb-2" />
        {!this.props.multiLine && (
          <input
            {...rest}
            ref={r => {
              this.input = r
            }}
          />
        )}
        {this.props.multiLine && (
          <textarea
            {...rest}
            ref={r => {
              this.input = r
            }}
          />
        )}
        {this.errorText()}
      </div>
    )
  }

  errorText() {
    const { isValid } = this.state

    if (isValid) {
      return null
    }

    return <div className="text-white">{this.getErrorMessage()}</div>
  }
}

export default TextValidator
