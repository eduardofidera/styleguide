Default

```js
<RadioGroup
  name="radioGroupExample"
  options={[
    {value:'value1', label: 'Red'},
    {value:'value2', label: 'Green'},
    {value:'value3', label: 'Blue'},
  ]}
  value="value1"
  onChange={() => {}}
/>
```

One option disabled

```js
<RadioGroup
  name="radioGroupExample2"
  options={[
    {value:'value1', label: (
      <div>
        <div className="b">L</div>
        <div className="c-muted-1">Lightness</div>
      </div>
    )},
    {value:'value2', label: (
      <div>
        <div className="b">a*</div>
        <div className="c-muted-1">Green–Red</div>
      </div>
    ), disabled: true},
    {value:'value3', label: (
      <div>
        <div className="b">b*</div>
        <div className="c-muted-1">Blue–Yellow</div>
      </div>
    )},
  ]}
  value="value1"
  onChange={() => {}}
/>
```

Entire group disabled

```js
<RadioGroup
  name="radioGroupExample3"
  disabled
  options={[
    {value:'value1', label: 'Hue'},
    {value:'value2', label: 'Saturation'},
    {value:'value3', label: 'Value'},
  ]}
  value="value1"
  onChange={() => {}}
/>
```

Example: Working React Component

```js
initialState = { value: 'cyan' };

<RadioGroup
  name="colors"
  options={[
    {value: 'cyan', label: 'Cyan'},
    {value: 'magenta', label: 'Magenta'},
    {value: 'yellow', label: 'Yellow'},
    {value: 'key', label: 'Black'},
  ]}
  value={state.value}
  onChange={e => setState({ value: e.currentTarget.value })}
/>
```
