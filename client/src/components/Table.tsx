import React from "react";
import User from "../interfaces/user";
interface props {
    data: Promise<User[]>
    title: string
}
const Table: React.FC<props> = ({ data, title }) => {
    const [tableData, setTableData] = React.useState<User[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {

            const resolvedData = await data;
            setTableData(resolvedData);

        };
        fetchData();
    }, [data]);

    return (
        <div className="flex items-center h-screen">
            <div className=" px-1 min-w-max">
                <table id="table" className=" border-collapse border-2 border-solid">
                    <caption className=" text-2xl">
                        {title}
                    </caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>phone</th>
                            <th>website</th>
                            <th>address(city)</th>
                            <th>address(zipcode)</th>
                            <th>address(street)</th>
                            <th>address(suite)</th>
                            <th>address geo(lat)</th>
                            <th>address geo(lng)</th>
                            <th>company(name)</th>
                            <th>company(catchPhrase)</th>
                            <th>company(bs)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.zipcode}</td>
                                <td>{user.address.street}</td>
                                <td>{user.address.suite}</td>
                                <td>{user.address.geo.lat}</td>
                                <td>{user.address.geo.lng}</td>
                                <td>{user.company.name}</td>
                                <td>{user.company.catchPhrase}</td>
                                <td>{user.company.bs}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Table;