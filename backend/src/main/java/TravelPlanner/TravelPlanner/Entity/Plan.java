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

    public Plan(){}

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }


}
