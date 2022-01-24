import {NavLink} from "react-router-dom"

export function List(props) {
    const data = props.data;
	return (
        <>
            {data?.map((item, index) => {
                return <NavLink to={"/" + item.id} key={index}>{item?.title}</NavLink>
            })}
        </>
	);
}

