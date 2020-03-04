package TravelPlanner.TravelPlanner.Entity;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
//@Table(name = "Plan")
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name="plan_id", unique = true)
    private Integer planId;

    //attach plan to the user ---> each user could have multiple plans
//    @ManyToOne
//    @JoinColumn(name = "user_id")//(name="user_id", insertable=false, updatable=false)
//    private User user;

    private Integer userId;
    @Column
    private String date;

    @OneToMany//(mappedBy = "plan", fetch = FetchType.LAZY)
    private List<DailyPlan> dailyPlanList;
//
//    @OneToMany
//    private List<Place> placeList;

    public Plan() {
    }

    //setter and setters
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }

//    public Integer getUserId() {
//        return userId;
//    }
//
//    public void setUserId(Integer userId) {
//        this.userId = userId;
//    }


}
