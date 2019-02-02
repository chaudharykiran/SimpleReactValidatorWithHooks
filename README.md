## Use of SimpleReactValidator in functional component using Hooks

### Usage
1. Initialize the validator
```
  const [validator, showValidationMessage] = useValidator(customMessages, customValidator)
```

2. Add validation rules under inputs
```
  validator.message('password', password, 'required')
```

3. Check if validation passes and turn on message
```
  if (validator.allValid()) {
    console.log('Submit Data')
  } else {
    // turn on validation message and re-render
    showValidationMessage(true)
  }
```