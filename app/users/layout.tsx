import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar"
import UserList from "./components/UserList";

export default async function UsersLayput({
    children
}:{
    children:React.ReactNode
}){
    const users = await getUsers();
    return(
        //@ts-expect-error
        <Sidebar>

        <div className="h-full">
            <UserList items={users}/>
            {children}
        </div>
        </Sidebar>
    )
}