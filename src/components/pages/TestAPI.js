import Menu from '../Menu.js';

function TestAPI() {
    return (
        <div>
            <F1>
            <Form.Item wrapperCol={{offset: 8}} name="JWTRefreshButton">
                        <Button type="primary" style={{width: 150, height: 45}} onClick={null}>
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
