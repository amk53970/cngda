import Menu from '../Menu.js';

function TestAPI() {
    return (
        <div>
            <Menu />
            <F1>
            <Form.Item wrapperCol={{offset: 8}} name="JWTRefreshButton">
                        <Button type="primary" style={{width: 150, height: 45}} onClick={"refreshJWT()"}>
                            JWTRefresh
                        </Button>
                    </Form.Item>
            </F1>
        </div>
    )
}

export default TestAPI;

const F1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
function refreshJWT(){
    fetch("https://gsuhsjh6g667xscsgbsrtrheba0rrdla.lambda-url.us-east-1.on.aws/")
    .then(response => response.json())
    .then((data) => {
        window.open(data.news[0].url);
    })
    .catch((error) => console.error("oops:",error));
}