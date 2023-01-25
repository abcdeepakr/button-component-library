# Button Component Library

A simple button component library with the following customizabilities

## Available props

### label

Use this prop for the button text
<button style="height:25px; width:55px;">Button</button>
`<Button label="Button"/>`


### variant

Backgound and border color related to the button
<button style="height:25px; width:50px; background-color:#F39C12;border:none;">Fire</button>
<button style="height:25px; width:50px; background-color:#5DADE2;border:none;">Water</button>
<button style="height:25px; width:50px; background-color:#D6EAF8;border:none;">Air</button>
<button style="height:25px; width:50px; background-color:#27AE60;border:none;">Forest</button>

```jsx
<Button label="Fire" variant="fire"/>
<Button label="Water" variant="water"/>
<Button label="Air" variant="air"/>
<Button label="Forest" variant="forest"/>
```

<button style="height:25px; width:55px; border:2px solid #27AE60;">Forest</button>

```jsx
// buttons without backgound-color
<Button label="Fire" variant="fire-outline"/>
<Button label="Water" variant="water-outline"/>
<Button label="Air" variant="air-outline"/>
<Button label="Forest" variant="forest-outline"/>
```

### Size
Different sizes of the button

<button style="font-size: 2rem; padding: 0.5rem 4rem;  background-color:#5DADE2;border:none;">Large</button>

<button style="font-size: 1rem; padding: 0.5rem 2rem;  background-color:#5DADE2;border:none;">Medium</button>

<button style="font-size: 0.8rem; padding: 0.5rem 1rem;  background-color:#5DADE2;border:none;">Small</button>

```jsx
<Button size="lg" label="Large" variant="water"/>
<Button size="sm" label="Large" variant="water"/>
<Button size="med" label="Large" variant="water"/>
```

### Border Radius
By default the border radius is false

<button style="font-size: 1rem; padding: 0.5rem 2rem;  background-color:#5DADE2;border-radius: 10px; border:none;">Medium</button>

```jsx
<Button size="sm" label="Medium" variant="water" borderRadius="true"/>
```
