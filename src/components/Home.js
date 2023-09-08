import { Button, Table } from "react-bootstrap";

const Home = () => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody >
                <tr>
                    <td>1</td>
                    <td>
                        <img width={100} alt="doing" src="https://smowl.net/wp-content/uploads/2022/09/learning-by-doing-aprender-haciendo.jpg" />
                    </td>
                    <td>Doing</td>
                    <td>No price</td>
                    <td className="text-center">
                        <Button variant="info" className="mx-2 w-25">Chi tiết</Button>
                        <Button variant="danger" className="mx-2 w-25">Xóa</Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <img width={100} alt="doing" src="https://smowl.net/wp-content/uploads/2022/09/learning-by-doing-aprender-haciendo.jpg" />
                    </td>
                    <td>Doing</td>
                    <td>No price</td>
                    <td className="text-center">
                        <Button variant="info" className="mx-2 w-25">Chi tiết</Button>
                        <Button variant="danger" className="mx-2 w-25">Xóa</Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Home;