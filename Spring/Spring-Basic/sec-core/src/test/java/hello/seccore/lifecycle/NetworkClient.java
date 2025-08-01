package hello.seccore.lifecycle;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.Setter;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

@Setter
public class NetworkClient{

    private String url;

    public NetworkClient() {
        System.out.println("생성자 호출. url = " + url);
    }

    //서비스 시작시 호출
    public void connect() {
        System.out.println("connect = " + url);
    }

    public void call(String message) {
        System.out.println("call = " + url + " message = " + message);
    }

    public void disconnect() {
        System.out.println("disconnect = " + url);
    }

    @PostConstruct
    public void init(){
        connect();
        call("초기화 연결 메시지");
    }

    @PreDestroy
    public void destroy(){
        disconnect();
    }
}
