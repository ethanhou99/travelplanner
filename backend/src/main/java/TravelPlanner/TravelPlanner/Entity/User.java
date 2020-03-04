package TravelPlanner.TravelPlanner.Entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Data
//@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    //get all places that a user want to visit
//    @OneToMany(mappedBy = "user")
//    private List<Place> visitingPlaces;

    @NotNull
    @Column
    private String userName;


    @Column
    @CreationTimestamp
    private Timestamp memberSince;

    @NotNull
    @Column
    private String userEmail;

    @NotNull
    @Column
    private String userPassword;

//    @OneToMany(mappedBy = "user")
//    @JoinColumn(name = "plan_id")
//    private List<Plan> planList;

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
