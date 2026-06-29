<!-- Quick Cheat Sheet -->

// Plain string
className="box"

// JavaScript variable
className={className}

// JavaScript expression
className={isActive ? "active" : ""}

// String interpolation
className={`${theme}-box`}

// Style object
style={{height: "100px"}}

<!--Dynamic style -->
style={{height: `${value}px`}}

The simplest mental model:

{} in JSX → "I want to run JavaScript."
`${}` in JavaScript → "I want to create a string using variables."


<!-- WRONG APPROACHE -->
<button 
    {startIndex>=attendence.length?disabled:''} 
    onClick={handleNext} >next
</button>