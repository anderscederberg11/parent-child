export default function ChildTwo({childParent}) {
    const data = ("This is the data from the parent page which will be passed to the child page");
    return(
        <>
            <button onClick={() => childParent(data)}>Click child to parent</button>
        </>
    )
}