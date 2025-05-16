import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTService{
    
    String secretkey = "cH8798";
    
    public JWTService(){
        KeyGenerator keyGenerator = KeyGenerator.getInstance("HmacSHA256");
        SecretKey secretKey = keyGenerator.generateKey();
    }

    public String getToken(String username){
        
        Map<String, Object> claims = new HashMap<>();
        
        return Jwts.builder()
            .claims()
            .add(claims)
            .subject(username)
            .issuedAt(new Date(System.currentTimeMillis()))
            .expiration(new Date(System.currentTimeMillis() * 60 * 60 * 10))
            .and()
            .signWith(getKey())
            .compact();
    }
    
    public Key getKey(){
        byte[] key = Decoders.BASE64.decode(secretkey);
        
        return Keys.hmacShaKeyFor(key);
    }
}