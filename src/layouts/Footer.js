import { Card } from "react-bootstrap";

const Footer = () => {
    return <Card className="mx-3 my-2" style={{"border": "none"}}>
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    Website Quản lý điểm môn học
                    {' '}
                </p>
                <footer className="blockquote-footer">
                    <cite title="Source Title">&copy; Bùi Quang Lợi</cite> &emsp; 2023 - 2024 
                </footer>
            </blockquote>
        </Card.Body>
    </Card>
}

export default Footer;