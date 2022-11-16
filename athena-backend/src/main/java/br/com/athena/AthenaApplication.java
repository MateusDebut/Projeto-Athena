package br.com.athena;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@SpringBootApplication
public class AthenaApplication {
    public static void main(String[] args) {
        SpringApplication.run(AthenaApplication.class);
        System.out.println(new BCryptPasswordEncoder().encode("senha123"));
    }
}
