REACT INTERVIEW ARRAY METHODS CHEAT SHEET
=========================================

1. map() → Transform / Render List
----------------------------------
arr.map(item => ...)

Example:
[1,2,3].map(num => num * 2)

Output:
[2,4,6]

React:
users.map(user => <div>{user.name}</div>)

Use:
✔ Render lists
✔ Transform data




2. filter() → Remove / Keep Elements
-------------------------------------
arr.filter(condition)

Example:
[1,2,3,4].filter(num => num > 2)

Output:
[3,4]

React:
selected.filter(item => item !== fruit)

Use:
✔ Delete item
✔ Search
✔ Toggle selection





3. includes() → Check Existence
-------------------------------
arr.includes(value)

Example:
["Mango","Apple"].includes("Mango")

Output:
true

React:
selected.includes(fruit)

Use:
✔ Checkbox
✔ Selected items
✔ Toggle UI




4. find() → Return First Match
------------------------------
arr.find(condition)

Example:
users.find(user => user.id === 2)

Output:
{id:2,name:"B"}

Use:
✔ Find one object
✔ Lookup by id




5. some() → Any Match?
----------------------
arr.some(condition)

Example:
users.some(user => user.id === 2)

Output:
true

Use:
✔ Check if at least one item matches




6. every() → All Match?
-----------------------
arr.every(condition)

Example:
marks.every(mark => mark >= 35)

Output:
true

Use:
✔ Validation
✔ All tasks completed




7. slice() → Get Part of Array
------------------------------
arr.slice(start,end)

Example:
[1,2,3,4,5].slice(1,4)

Output:
[2,3,4]

Remember:
start = included
end = excluded

React:
attendance.slice(startIndex,startIndex+7)

Use:
✔ Pagination
✔ First N items
✔ Last N items




8. Spread Operator (...) → Add Items
------------------------------------
[...arr,newItem]

Example:
const arr=[1,2];
const newArr=[...arr,3];

Output:
[1,2,3]

React:
setSelected([...selected,fruit])

Use:
✔ Add item
✔ Update state




9. reduce() → Sum / Count / Group
---------------------------------
arr.reduce(callback,initialValue)

Example:
[1,2,3].reduce((sum,num)=>sum+num,0)

Output:
6

Use:
✔ Total
✔ Count
✔ Advanced transformations



10. Avoid push() and pop() in React
-----------------------------------
❌ arr.push(item)
❌ arr.pop()

They mutate the original array.

Prefer:

✔ [...arr,newItem]
✔ arr.filter(...)


=========================================
MOST COMMON REACT INTERVIEW PATTERNS
=========================================

Render List:
arr.map(...)

Remove Item:
arr.filter(...)

Check Exists:
arr.includes(...)

Find One Object:
arr.find(...)

Pagination:
arr.slice(...)

Add Item:
[...arr,newItem]

Toggle Item:
if(arr.includes(item)){
    arr.filter(val => val !== item)
}else{
    [...arr,item]
}

=========================================
80% OF JUNIOR REACT INTERVIEW QUESTIONS
=========================================

Learn these 6 properly:

1. map()
2. filter()
3. includes()
4. find()
5. slice()
6. spread (...)

Master these and most list/state problems become easy.