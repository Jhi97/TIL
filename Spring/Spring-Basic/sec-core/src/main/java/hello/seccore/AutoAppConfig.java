package hello.seccore;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

@Configuration
@ComponentScan (
        excludeFilters = @ComponentScan.Filter(type = FilterType.ANNOTATION, classes = Configuration.class)
        ,basePackages = "hello.seccore" //컴포넌트 탐색할 지점 설정
        //,basePackageClasses = AutoAppConfig.class // 해당 클래스가 위치한 패키지부터 컴포넌트 탐색
        //default 는 @ComponentScan을 붙인 클래스의 패키지로 설정
)
public class AutoAppConfig {

}
