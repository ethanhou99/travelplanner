package TravelPlanner.TravelPlanner.Entity;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Plan {
    @Id
    @GeneratedValue
    private Integer planId;

    private Integer userId;
    private String date;
    @OneToMany
    private List<DailyPlan> dailyPlanList;

<<<<<<< HEAD
    List<Place> placeList;

    public Plan(){}

    //setter and setters
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
=======
    public Plan(){}
>>>>>>> 91e3c19df853313cbea9b572cc7269eb1a4cb83b

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }


}
