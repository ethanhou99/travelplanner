package TravelPlanner.TravelPlanner.Entity;

import lombok.Data;
<<<<<<< HEAD

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
@Table(name = "user")
=======
import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.sql.Timestamp;

@Entity
@Data
>>>>>>> 91e3c19df853313cbea9b572cc7269eb1a4cb83b
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @NotNull
    private String userName;

    @NotNull
<<<<<<< HEAD
    private String memberSince;
=======
    private Timestamp memberSince;
>>>>>>> 91e3c19df853313cbea9b572cc7269eb1a4cb83b

    @NotNull
    private String userEmail;

    @NotNull
    private String userPassword;

<<<<<<< HEAD
    public User(String userName, String userPassword) {
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public List<Place> getVisitingPlaces() {
        return visitingPlaces;
=======
    public User() {
>>>>>>> 91e3c19df853313cbea9b572cc7269eb1a4cb83b
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

<<<<<<< HEAD
    public String getMemberSince() {
        return memberSince;
    }

    public void setMemberSince(String memberSince) {
=======
    public Timestamp getMemberSince() {
        return memberSince;
    }

    public void setMemberSince(Timestamp memberSince) {
>>>>>>> 91e3c19df853313cbea9b572cc7269eb1a4cb83b
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
