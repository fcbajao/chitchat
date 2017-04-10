// @flow

export function validateRequired (fieldNames: Array<string>) {
  return (values: Object) => {
    const errors = {}

    fieldNames.forEach(name => {
      if (!values[name]) {
        errors[name] = 'Required'
      }
    })

    return errors
  }
}
