A simple and generic header for Admin modules and Apps.
Our admin sidebar provides a global solution for 1st-level navigation (between modules) and 2nd-level navigation (sections inside a module), but 3rd-level navigation is left for each module team to handle, which is a problem this component tries to solve.

Default

```js
<PageHeader title="Orders" />
```

With link

```js
<PageHeader
  title="Order details"
  linkLabel="Orders"
  onLinkClick={e => {
    console.log(e)
  }}
/>
```

With Side button

```js
<PageHeader
  title="Order details"
  linkLabel="Orders"
  onLinkClick={e => {
    console.log(e)
  }}
  buttonLabel="Main action"
  onButtonClick={e => {
    console.log(e)
  }}
/>
```
