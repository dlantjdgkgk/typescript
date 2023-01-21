{
    class TimeoutError extends Error {}
    class OfflineError extends Error {}

    class NetworkClient {
        tryConnect(): void {
            throw new OfflineError('no network!');
        }
    }

    //우아하게 에러를 캐치하는 게 아니면 catch 문을 남용할 필요가 없다.

    //참고: TypeScript에서 구현된 catch()에는 어떠한
    // 타입정보도 전달되지 않아서 instanceOf를 사용할 수 없어요
    // catch로 error을 받는 순간 any 타입이 된다.
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
                if (error instanceof OfflineError) {
                }
            }
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}
