import React from "react";
function List() {
const students = [
{id: 1, name: 'ABC'},
{id: 2, name: 'XYZ'},
{id: 3, name: 'PQR'}
];
return(
<ul>
{
students.map((student) =>
{
return <li key={student.id.toString()}>{student.name}</li>
})
}
</ul>
)
}
export default List