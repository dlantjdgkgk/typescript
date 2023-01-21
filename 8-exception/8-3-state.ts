{
    // 프로그래밍을 할 때 내가 예상할 수 있는 상태가 있으면
    // type으로 정의하면 깔끔하고 안정적이고 예상 가능하게 프로그래밍 가능.
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    };

    type SuccessState = {
        result: 'success';
    };

    type ResultState = SuccessState | NetworkErrorState;
    class NetworkClient {
        tryConnect(): ResultState {
            return {
                result: 'success',
            };
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {}

        login() {
            this.client.tryConnect();
        }
    }

    class App {
        constructor(private userService: UserService) {}
        run() {
            try {
                this.userService.login();
            } catch (error) {
                // show dialog to use
            }
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}
