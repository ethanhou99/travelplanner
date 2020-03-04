package TravelPlanner.TravelPlanner.Entity;

import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.sql.Timestamp;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @NotNull
    private String userName;

    @NotNull
    private Timestamp memberSince;

    @NotNull
    private String userEmail;

    @NotNull
    private String userPassword;

    public User() {
    }

    public User(String userEmail, String userPassword) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Timestamp getMemberSince() {
        return memberSince;
    }

    public void setMemberSince(Timestamp memberSince) {
        this.memberSince = memberSince;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

}
