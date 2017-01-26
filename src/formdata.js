export const source = `<div>
  <div>
    <label htmlFor="firstName">First Name</label>
    <Field name="firstName" component="input" type="text"/>
  </div>
  <div>
    <label htmlFor="lastName">Last Name</label>
    <Field name="lastName" component="input" type="text"/>
  </div>
  <div>
    <label htmlFor="email">Email</label>
    <Field name="email" component="input" type="email"/>
  </div> 
  <button type="submit">Submit</button>
</div>`

const contextObj = {};

export const contextStr = JSON.stringify(contextObj, null, 2);
