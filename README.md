# izi form

> This component library built with Vue and VeeValidate creates ADA-friendly forms with live error handling and no style depencies. This allows you to create easily stylable and customizable forms with tons of functionality in just a few lines of code.

Github link(https://github.com/insideout-andrew/izi-form)

## [💯 Demo and Examples 💯](https://codesandbox.io/s/peaceful-meadow-jkgoy)

## Table of Contents
  * [Features](#features)
  * [Installation](#installation)
  * [Getting Starting](#getting-started)
  * [Available Rules](#available-rules)
  * [Development](#development)
  * [To Do](#to-do)

### Features
- ADA-friendly accesible forms to be a great a11y
- Live error handling
- Supports text, textarea, radio, select, checkboxes, file uploads and more
- No style dependencies so everything is easily customizable

### Installation

``` bash
npm i izi-form
```

### Getting Started
In your Vue template add the izi-form and the izi-inputs you want to validate
```vue
<izi-form @submit="submit">
  <template slot="body">
    <izi-input
      rules="required" 
      label="First Name*"
      placeholder="Jane"        
      name="first name"
      v-model="firstName" 
    />
    <izi-input
      rules="required" 
      label="Last Name*"
      placeholder="Doe"        
      name="last name"
      v-model="lastName" 
    />
  </template>
</izi-form>
```
Then in the script import the izi-form components and register them. We will also add any data or methods we need.
```vue
import { IziForm, IziInput } from 'izi-form'

export default { 
  components: { 
      IziForm, 
      IziInput
  },
  data(){
      return {
          firstName: null,
          lastName: null
      }
  },
  methods: {
      submit(){
          alert(`${this.firstName} ${this.lastName}`)
      }
  }
}
```
Thats it. You now have an awesome form. 

### Available Rules
To see a list of all available rules look at [VeeValidate's](https://logaretm.github.io/vee-validate/guide/rules.html#rules) rule documentation.

### Development
#### Install
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

## To Do
- Add more features
- Add better set up/launch instructions